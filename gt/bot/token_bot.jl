#!/usr/bin/env julia
# ==================================================
# token_bot.jl — Västtrafik 액세스 토큰 자동 갱신 (Phase 2)
#
#   julia bot/token_bot.jl           새 토큰 발급 → 암호화 → web/token.enc 저장
#   julia bot/token_bot.jl --push    위 작업 후 token.enc 만 GitHub(JaewooJoung/fun:gt/)에 푸시
#   julia bot/token_bot.jl --push-web  token.enc + index.html + graph.wasm 모두 푸시 (첫 배포·화면 수정 때)
#
# 보안 구조
#   * Klientidentifierare / Hemlighet 은 .env 에만 있다 (웹 파일에는 절대 들어가지 않음).
#   * 발급받은 토큰(24시간 유효)은 GT_PASSPHRASE 로 암호화해 token.enc 로 공개한다.
#     형식: openssl enc -aes-256-cbc -pbkdf2 -iter 200000 -md sha256 (Salted__ + salt 8바이트 + 암호문, base64)
#     → 브라우저는 사용자가 한 번 입력한 암호로 WebCrypto(PBKDF2 → AES-CBC)를 써서 푼다.
#   * 암호 없이는 token.enc 를 쓸 수 없지만, 암호를 아는 사용자는 브라우저에서 토큰을 볼 수 있다.
#     (서버 없이 브라우저가 API 를 직접 부르는 구조의 한계 — README 참고)
#
# 토큰은 요청할 때마다 새 24시간짜리가 나오므로 12시간마다 돌리면 항상 12시간 이상 여유가 있다.
# ==================================================
using HTTP, JSON, Dates, Base64

const ROOT = normpath(joinpath(@__DIR__, ".."))
const WEB = joinpath(ROOT, "web")
const TOKEN_URL = "https://ext-api.vasttrafik.se/token"
const ITER = 200_000

logmsg(s...) = println("[gt-token ", Dates.format(now(), "yyyy-mm-dd HH:MM:SS"), "] ", s...)

function load_env(path = joinpath(ROOT, ".env"))
    isfile(path) || error(".env 없음: $path")
    for line in eachline(path)
        s = strip(line)
        (isempty(s) || startswith(s, '#') || !occursin('=', s)) && continue
        k, v = strip.(split(s, '=', limit = 2))
        haskey(ENV, k) || (ENV[k] = strip(v, ['"', '\'']))
    end
    for k in ("VT_CLIENT_ID", "VT_CLIENT_SECRET", "GT_PASSPHRASE")
        isempty(get(ENV, k, "")) && error(".env 에 $k 가 비어 있음")
    end
end

"""client_credentials 로 새 토큰을 받는다. (토큰 문자열, 남은 초)"""
function new_token()
    auth = base64encode(ENV["VT_CLIENT_ID"] * ":" * ENV["VT_CLIENT_SECRET"])
    for t in 1:4
        try
            r = HTTP.post(TOKEN_URL, ["Authorization" => "Basic $auth", "Content-Type" => "application/x-www-form-urlencoded"],
                          "grant_type=client_credentials"; status_exception = false, request_timeout = 60)
            if r.status == 200
                d = JSON.parse(String(r.body))
                return String(d["access_token"]), Int(d["expires_in"])
            end
            r.status in (400, 401) && error("인증 실패 HTTP $(r.status) — .env 의 ID/비밀키를 확인하세요")
            logmsg("HTTP $(r.status), 재시도 $t")
        catch e
            e isa ErrorException && startswith(e.msg, "인증") && rethrow()
            logmsg("오류: ", sprint(showerror, e), " — 재시도 $t")
        end
        sleep(10 * t)
    end
    error("토큰 발급 4회 실패")
end

"""토큰을 암호화해 base64 문자열로 (암호는 환경변수로만 openssl 에 넘긴다 — 명령줄에 남지 않게)."""
function encrypt(token)
    cmd = addenv(`openssl enc -aes-256-cbc -pbkdf2 -iter $ITER -md sha256 -salt -pass env:GT_PASSPHRASE -base64 -A`,
                 "GT_PASSPHRASE" => ENV["GT_PASSPHRASE"])
    out = IOBuffer()
    run(pipeline(cmd; stdin = IOBuffer(token), stdout = out))
    String(take!(out))
end

"""되풀어 보기 — 쓰기 전에 형식이 맞는지 확인."""
function decrypt_check(enc, token)
    cmd = addenv(`openssl enc -d -aes-256-cbc -pbkdf2 -iter $ITER -md sha256 -pass env:GT_PASSPHRASE -base64 -A`,
                 "GT_PASSPHRASE" => ENV["GT_PASSPHRASE"])
    out = IOBuffer()
    run(pipeline(cmd; stdin = IOBuffer(enc), stdout = out))
    String(take!(out)) == token || error("암호화 검증 실패")
end

function write_atomic(path, s)
    tmp = path * ".tmp"
    write(tmp, s)
    mv(tmp, path; force = true)
end

function push_token(; with_web = false)
    repo = get(ENV, "GH_REPO", "JaewooJoung/fun"); dir = get(ENV, "GH_DIR", "gt"); branch = get(ENV, "GH_BRANCH", "main")
    work = mktempdir()
    try
        run(`gh repo clone $repo $work -- --depth=1 --branch $branch --quiet`)
        mkpath(joinpath(work, dir))
        files = with_web ? ["token.enc", "index.html", "graph.wasm"] : ["token.enc"]
        for f in files
            cp(joinpath(WEB, f), joinpath(work, dir, f); force = true)
        end
        g(args...) = `git -C $work $args`
        run(g("config", "user.name", get(ENV, "GIT_NAME", "JaewooJoung")))
        run(g("config", "user.email", get(ENV, "GIT_EMAIL", "JaewooJoung@users.noreply.github.com")))
        run(g("add", [joinpath(dir, f) for f in files]...))
        if success(g("diff", "--cached", "--quiet"))
            logmsg("변경 없음 — 푸시 생략")
        else
            run(g("commit", "-q", "-m", "gt: token refresh $(Dates.format(now(), "yyyy-mm-dd HH:MM"))"))
            run(`git -C $work -c credential.helper= -c "credential.helper=!gh auth git-credential" push -q origin $branch`)
            logmsg("푸시 완료 → $repo ($branch:$dir/token.enc)")
        end
    finally
        rm(work; recursive = true, force = true)
    end
end

function main(args)
    load_env()
    token, secs = new_token()
    enc = encrypt(token)
    decrypt_check(enc, token)
    exp = now(UTC) + Second(secs)
    # 만료 시각은 비밀이 아니므로 평문으로 함께 둔다 (브라우저가 미리 새 파일을 받으러 갈 수 있게)
    body = JSON.json(Dict("v" => 1, "alg" => "openssl-aes-256-cbc-pbkdf2-sha256", "iter" => ITER,
                          "expires" => Dates.format(exp, "yyyy-mm-ddTHH:MM:SS") * "Z",
                          "issued" => Dates.format(now(UTC), "yyyy-mm-ddTHH:MM:SS") * "Z",
                          "data" => enc))
    write_atomic(joinpath(WEB, "token.enc"), body)
    logmsg("새 토큰 저장 (만료 $(exp) UTC, $(secs ÷ 3600)시간)")
    web = "--push-web" in args
    ("--push" in args || web) && push_token(; with_web = web)
    0
end

abspath(PROGRAM_FILE) == (@__FILE__) && exit(main(ARGS))
