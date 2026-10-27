#!/usr/bin/env julia
# Blunux 버전 체커 — 로컬 패키지 스캔 (inspect_packages.jl)
#
# 표준 라이브러리만 쓴다. 추가 패키지 설치 없이 바로 실행:
#
#     julia inspect_packages.jl            # → ./sys_packages.toml
#     julia inspect_packages.jl out.toml   # 저장 경로 지정
#
# 아래 TARGETS 를 순서대로 `pacman -Q` 로 조회해서
# 키 = 패키지명, 값 = 설치된 버전 인 TOML 을 만든다.
# 설치되지 않은 패키지는 빈 문자열("")로 남긴다.
# 이 파일은 패키지 이름과 버전만 담고, 어디로도 전송하지 않는다.

const TARGETS = [
    # 기반
    "base", "linux", "linux-firmware", "systemd", "glibc", "gcc",
    "pacman", "bash", "sudo", "grub",
    # 그래픽 · 소리 · 네트워크
    "mesa", "pipewire", "wireplumber", "networkmanager",
    # KDE 플라즈마 데스크톱
    "plasma-desktop", "plasma-workspace", "kwin", "sddm",
    "konsole", "dolphin", "kate",
    # 응용 · 한글
    "firefox", "fcitx5-hangul", "noto-fonts-cjk",
    # 개발 도구
    "python", "git", "openssh",
    # AUR 도우미
    "yay",
]

"`pacman -Q a b c` 한 번으로 설치 버전을 읽는다. 없는 패키지는 pacman 이 stderr 로 알리고 건너뛴다."
function installed_versions(names)
    out = IOBuffer()
    run(pipeline(ignorestatus(`pacman -Q $names`); stdout=out, stderr=devnull))
    found = Dict{String,String}()
    for line in eachline(IOBuffer(take!(out)))
        parts = split(strip(line))
        length(parts) == 2 && (found[parts[1]] = parts[2])
    end
    found
end

"TOML 기본 문자열로 감싼다 (패키지명에 + . @ 가 들어가도 안전하도록 키도 항상 따옴표)."
toml_str(s) = "\"" * replace(s, "\\" => "\\\\", "\"" => "\\\"") * "\""

function write_toml(path, names, found)
    open(path, "w") do io
        println(io, "# Blunux 버전 체커 — sys_packages.toml")
        println(io, "# 생성: ", gethostname(), " · ", Libc.strftime("%Y-%m-%d %H:%M:%S", time()))
        println(io, "# 키 = 패키지명, 값 = 설치된 버전 (\"\" = 설치되지 않음)")
        println(io)
        w = maximum(length, names) + 2
        for n in names
            println(io, rpad(toml_str(n), w), " = ", toml_str(get(found, n, "")))
        end
    end
end

function main(args)
    path = isempty(args) ? "sys_packages.toml" : args[1]
    if Sys.which("pacman") === nothing
        println(stderr, "pacman 을 찾을 수 없습니다 — Arch 계열(Blunux) 시스템에서 실행하세요.")
        exit(1)
    end
    found = installed_versions(TARGETS)
    write_toml(path, TARGETS, found)
    println("저장: ", abspath(path))
    for n in TARGETS
        println("  ", rpad(n, 18), get(found, n, "(설치되지 않음)"))
    end
    println("\n이 파일을 Blunux 버전 체커 페이지에 끌어다 놓으세요.")
end

# tools/baseline.jl 이 TARGETS 만 가져다 쓸 수 있도록, 직접 실행할 때만 main 을 돈다.
abspath(PROGRAM_FILE) == @__FILE__() && main(ARGS)
