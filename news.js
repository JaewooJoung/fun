// 마이뉴스 데이터 - 생성시간: 2025-06-04 13:26:53
// 네이버 뉴스에서 수집된 데이터

const allNews = [
  {
  title: "따가운 햇볕, 남부 중심 더위‥해안·산지 바람 강해[날씨]",
  url: "https://n.news.naver.com/mnews/article/214/0001428254",
  description: "오늘은 전국에 맑은 하늘이 드러나 있습니다. 조금 전 서울의 모습인데요. 파란 하늘이 펼쳐져 있고요. 따가운 햇볕이 그대로 내리쬐고 있습니다. 기온도 빠르게 오르고 있습니다. 한낮에는 남부 지방을 중심으로 덥겠습니다",
  press: "MBC",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/214/2025/06/04/1428254.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "서울아산병원, 칭화대 요청에 중국 날아가 생후 6개월 아기 간이식",
  url: "https://n.news.naver.com/mnews/article/055/0001263766",
  description: "▲ 이승규 석자교수가 환아의 상태를 살펴보고 있다. 서울아산병원은 오늘(4일) 중국 칭화대 부속 창궁병원에서 생후 6개월 남아의 생체 간이식 수술을 성공적으로 시행했다고 밝혔습니다. 간이식·간담도외과 이승규 석좌교수",
  press: "SBS",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/055/2025/06/04/1263766.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "전국 맑고 초여름 더위…낮 기온 25도↑, 일교차 커",
  url: "https://n.news.naver.com/mnews/article/009/0005503162",
  description: "수요일인 4일은 전국이 대체로 맑은 가운데 낮 기온이 25도 이상으로 높아지겠다. 4일 기상청에 따르면 이날 전국은 중국 상하이 부근에서 동쪽으로 이동하는 고기압의 영향을 받아 날씨가 맑겠다. 아침 최저기온은 11~",
  press: "매일경제",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/009/2025/06/04/5503162.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "\"매일 콩 한 컵 먹었더니…심장·대사 건강 개선 효과\"",
  url: "https://n.news.naver.com/mnews/article/055/0001263701",
  description: "▲ 병아리 당뇨병 전 단계에 매일 한 컵의 콩을 먹으면 심장 및 대사 건강을 개선하는 효과를 거둘 수 있다는 임상시험 결과가 나왔습니다. 미국 일리노이공대 브리트 버튼-프리먼 교수팀은 3일(현지시간) 플로리다주 올랜",
  press: "SBS",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/055/2025/06/04/1263701.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "독자가 꼽은 새 대통령에게 추천하는 책 1위는 ‘소년이 온다’",
  url: "https://n.news.naver.com/mnews/article/056/0011964511",
  description: "인터넷 서점 알라딘 독자들이 꼽은 새 대통령에게 추천하고 싶은 책 1위는 한강 소설 ‘소년이 온다’로 조사됐습니다. 알라딘은 5월 13일부터 6월 3일까지 독자 3,636명을 대상으로 새 대통령에게 권하고 싶은 책과",
  press: "KBS",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/056/2025/06/04/11964511.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "\"대장암이 겨드랑이로?\" 드문 케이스라는데… 어떻게 된 일?",
  url: "https://n.news.naver.com/mnews/article/346/0000092847",
  description: "대장암이 피부로 전이된 드문 사례가 해외 저널에 보고됐다. 튀니지에 있는 튀니스 엘 마나르대 의과대학 종양학과 의료진은 4년 전 대장암 수술을 받은 65세 아랍 여성 A씨가 암이 재발하면서 피부 등 몸의 연부조직으로",
  press: "헬스조선",
  date: "2025-06-04 13:04:44",
  image: "https://mimgnews.pstatic.net/image/origin/346/2025/06/04/92847.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "[날씨] 당분간 맑고 기온 점차 올라... 제주도 토요일 밤부터 비",
  url: "https://n.news.naver.com/mnews/article/052/0002201789",
  description: "오늘 수도권에서는 선선한 바람이 불면서 한낮에도 활동하기 무난했습니다. 맞습니다. 기온 자체도 예년보다 낮았는데요. 하지만 내일부터는 전국에서 예년 수준의 더위가 나타나죠? [캐스터] 네, 그렇습니다. 서울 낮 기온",
  press: "YTN",
  date: "2025-06-04 12:29:44",
  image: "https://mimgnews.pstatic.net/image/origin/052/2025/06/04/2201789.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "'농부 가수' 성노, 영월 FM 방송 '성노의 라디오스타가요쇼' 진행",
  url: "https://n.news.naver.com/mnews/article/629/0000395923",
  description: "매주 토일 2시 방송, 시골 이야기와 서민들의 애환 소개 트롯가요 중심 영월, 세종, 여수, 충북 옥천군 동시 방송 가수 성노는 애잔한 서정적 정취를 담은 노래로 대중적 공감을 부르는 가수다. 그가 부른 노래들은 우",
  press: "더팩트",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/629/2025/06/04/395923.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "[내일날씨] 낮 최고 30도 육박…완연한 초여름 날씨",
  url: "https://n.news.naver.com/mnews/article/031/0000937870",
  description: "벼나 보리 등 수염이 있는 '까끄라기 곡식'의 씨를 뿌리기 좋은 때라는 뜻의 절기 '망종(芒種)'인 5일 날씨는 맑고 낮 최고 기온이 30도에 육박해 더울 전망이다. 4일 기상청에 따르면 오는 5일 제주남쪽해상을 지",
  press: "아이뉴스24",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/031/2025/06/04/937870.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "“‘이 음식’ 끊었을 뿐인데”…38kg 빼고 확 바뀐 20대女, 어떻게?",
  url: "https://n.news.naver.com/mnews/article/296/0000090114",
  description: "빵을 끊고 꾸준한 운동으로 38kg 감량에 성공한 20대 여성 사연이 화제다. 최근 영국 매체 데일리메일 보도에 따르면 영국 컴브리아주에 사는 엘리 크랩트리(22)는 암 투병 중인 아버지를 간병하는 1년 동안 체중",
  press: "코메디닷컴",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/296/2025/06/04/90114.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "‘화장품 먹방’이라며 립스틱도 먹어...20대 대만女 갑자기 사망...중독 혹은 심장마비?",
  url: "https://n.news.naver.com/mnews/article/296/0000090113",
  description: "대만의 24세 인플루언서가 갑작스럽게 사망하며 중독 또는 심장마비에 의한 사망 가능성이 제기되고 있다. '구아바 뷰티(Guava Beauty)'라는 이름으로 활동했던 그는 '화장품 먹방'이라는 독특한 콘텐츠로 1만",
  press: "코메디닷컴",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/296/2025/06/04/90113.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "[근교산&그너머] <1418> 경북 칠곡 영암산",
  url: "https://n.news.naver.com/mnews/article/658/0000109304",
  description: "- 골프장 공사로 중리지 산행 막혀 - 보손 1리 경로당 회귀 8㎞ 코스 - 산 정상부 3개 봉우리 일렬 도열 - 암릉길 안전유의… 우회길도 있어 근교산&그 너머 취재팀은 경북 칠곡·김천·성주를 경계 짓는 영암산(鈴",
  press: "국제신문",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/658/2025/06/04/109304.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "영양제 대신에 애호박 자주 먹었더니…피부-체중에 변화가?",
  url: "https://n.news.naver.com/mnews/article/296/0000090112",
  description: "비타민 A로 알려진 레티놀(retinol)은 피부와 점막의 형성 및 기능 유지를 돕는 영양소다. 어두운 곳에서 시각 적응 등 눈 건강에도 꼭 필요하다. 레티놀이 결핍되면 피부가 건조해지고 거칠어진다. 또한 눈의 상피",
  press: "코메디닷컴",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/296/2025/06/04/90112.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "“‘이것’ 매일 먹으면 심장이 좋아지고, 4년 더 산다”… 사실일까? [수민이가 궁금해요]",
  url: "https://n.news.naver.com/mnews/article/022/0004040999",
  description: "당뇨병 전 단계에 매일 한 컵의 콩을 먹으면 심장과 대사 건강을 개선하는 효과를 거둘 수 있다는 임상시험 결과가 나왔다. 매일 일정량의 콩을 매일 먹으면 수명을 연장시킨다는 연구결과도 있다. 매일 한 컵의 콩을 먹으",
  press: "세계일보",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/022/2025/06/04/4040999.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "[날씨] 갈수록 기온 오름세…내일 전국 25도 웃돌아",
  url: "https://n.news.naver.com/mnews/article/422/0000746651",
  description: "오늘 저녁까지 강원 내륙과 산지에 5mm 미만의 소나기가 내리겠습니다. 전국 곳곳에는 강한 바람이 불고 있는데요. 특히, 현재 인천과 경기 남부 서해안, 강원 산지와 경북 북부에는 강풍주의보가 발효 중입니다. 오늘",
  press: "연합뉴스TV",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/422/2025/06/04/746651.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "\"8만명 우르르\"…부산여행 갔다가 맥주 애호가도 '화들짝' [현장+]",
  url: "https://n.news.naver.com/mnews/article/015/0005140780",
  description: "\"선선한 바람 불어오는 야외에서 맥주 마시기에는 지금이 딱이예요. 마음껏 맥주를 마시고 공연도 즐길 수 있어요.\" 초여름 날씨를 맞은 지난달 30일 저녁, 부산 해운대구 센텀시티 영화의전당 두레라움광장은 수많은 시민",
  press: "한국경제",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140780.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "의외로 쉬운 일... 된장에 고추장까지 만들어본 남자입니다",
  url: "https://n.news.naver.com/mnews/article/047/0002476213",
  description: "급격한 고령화와 충분치 않은 노후대비는 노후생활을 위협하고 있습니다. 1955년생, 은퇴 후 전업 살림을 하는 남편으로서의 제 삶이 다른 퇴직자와 은퇴자들에게 타산지석과 반면교사가 되었으면 합니다. <기자말> ▲ 반",
  press: "오마이뉴스",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/047/2025/06/04/2476213.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "검은콩, 탈모에 좋은 음식인 줄 알았는데…놀라운 결과 나왔다 [건강!톡]",
  url: "https://n.news.naver.com/mnews/article/015/0005140777",
  description: "당뇨병 전 단계 성인이 매일 한 컵의 콩을 먹으면 심장 및 대사 건강을 개선하는 효과가 있다는 연구 결과가 나왔다. 미국 일리노이공대 브리트 버튼-프리먼 교수 연구팀은 3일(현지시간) 플로리다주 올랜도에서 열린 미국",
  press: "한국경제",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140777.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "내 아이들에게 이런 미래만큼은 물려주고 싶지 않습니다",
  url: "https://n.news.naver.com/mnews/article/047/0002476212",
  description: "\"설마... 아니겠지?\" \"당연한 거야. 이길 수밖에 없다고.\" 대선 기간 김문수 대선 후보의 상승세에 불안해하는 내게 남편은 시종일관 딱 잘라 말했다. 이재명이 이길 수밖에 없다고. 그건 자명한 일이라고. '비상계",
  press: "오마이뉴스",
  date: "2025-06-04 12:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/047/2025/06/04/2476212.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "폐섬유증·암 신약 효과… 국내제약사, 국제학회서 임상 발표",
  url: "https://n.news.naver.com/mnews/article/014/0005359193",
  description: "국내 주요 제약바이오 기업들이 주요 국제 학회에서 개발을 완료했거나 개발을 추진중인 신약에 대한 임상 발표에 나서 주목받고 있다. 대웅제약이 경구용 항섬유화 신약 후보물질에 대한 임상 2상에 대한 중간 발표에 나서는",
  press: "파이낸셜뉴스",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/014/2025/06/04/5359193.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "한강 ‘소년이 온다’, 이재명 대통령에 권하는 책 1위",
  url: "https://n.news.naver.com/mnews/article/310/0000126490",
  description: "2024년 노벨문학상을 수상한 작가 한강의 소설『소년이 온다』가 독자들이 뽑은 '새 대통령에게 추천하고 싶은 책' 1위에 올랐다. 온라인 서점 알라딘은 지난 5월 13일부터 6월 3일까지 진행한 '다시, 책 읽는 대",
  press: "여성신문",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/310/2025/06/04/126490.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "큐슈와 대마도 그 사이…절경을 품은 ‘신들의 섬’",
  url: "https://n.news.naver.com/mnews/article/658/0000109286",
  description: "- 대마도·하카타서 배로 1시간 - 해안가 등 곳곳 150여개 신사 - 썰물에 바닷길 열리는 코지마 - 도깨비 발자국·고릴라바위 등 - 신비로운 기암괴석 보는 재미 - 500년 역사 보리소주 발상지 - 천황의 아이",
  press: "국제신문",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/658/2025/06/04/109286.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "“콜레스테롤 닮은, 피토스테롤이 뭐길래”…혈당·심장에 좋다?",
  url: "https://n.news.naver.com/mnews/article/296/0000090111",
  description: "콜레스테롤과 피토스테롤은 화학 구조가 비슷하다. 콜레스테롤은 동물에서 주로 만들어지고, 피토스테롤은 식물에서만 만들어진다. 콜레스테롤은 육류·달걀·생선 등에, 피토스테롤은 견과류·씨앗류와 참기름 등 식물성 기름에 풍",
  press: "코메디닷컴",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/296/2025/06/04/90111.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "오늘 밀양 한낮 30.4도, 내일 더 더워져…현충일 연휴도 많고 더운 날씨",
  url: "https://n.news.naver.com/mnews/article/079/0004031925",
  description: "수요일인 오늘 밀양의 한낮 기온이 30.4도까지 오르는 등 남부지방을 중심으로 좀 더 더운 날씨가 이어졌는데요, 주 후반으로 갈수록 이 더위는 점점 더 심해지겠습니다. 특히, 당분간 내륙을 중심으로 일교차가 15도",
  press: "노컷뉴스",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/079/2025/06/04/4031925.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "이재명 선거 유세 다니며 12kg 빠졌단 ‘이 배우’",
  url: "https://n.news.naver.com/mnews/article/009/0005503744",
  description: "중년 배우 이기영이 이번 대통령 선거 유세로 몸무게가 12kg이나 빠졌다고 밝혔다. 이기영은 3일 정치 토크쇼 ‘매불쇼’ 생방송에 게스트로 출연해 “지난번 나왔을 때보다 살이 훨씬 빠지지 않았냐”라며 “서울 경기 수",
  press: "매일경제",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/009/2025/06/04/5503744.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "대학생도, 임산부도... 군인이 쓴 총에 맞아 쓰러진 시민들",
  url: "https://n.news.naver.com/mnews/article/047/0002476210",
  description: "▲ 전남대학교 메타세쿼이아 가로수 길. 정문에서 본관으로 들어가는 길 양쪽으로 멋스럽게 뻗어 있다. ⓒ 이돈삼 1980년 봄, 전국 대학에선 연일 시국 성토대회가 이어졌다. 학원자유화, 비상계엄 해제, 민주주의 요구",
  press: "오마이뉴스",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/047/2025/06/04/2476210.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "군주 아닌 아들로... 어머니 향한 효심의 결정체, 화성행궁",
  url: "https://n.news.naver.com/mnews/article/047/0002476209",
  description: "▲ 화성행궁 봉수당,정조대왕이 부친 사도세자 능(융릉)을 참배하기 위해 머물던 임시 궁궐 ⓒ 문운주 수원 화성행궁은 정조대왕이 부친 사도세자 능(융릉)을 참배하기 위해 머물던 임시 궁궐이다. 1794년에 시작되어 1",
  press: "오마이뉴스",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/047/2025/06/04/2476209.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "[날씨] 밤바람 강해요…내일 자외선 '매우 높음'",
  url: "https://n.news.naver.com/mnews/article/055/0001263862",
  description: "밤까지 바람이 강하게 불겠습니다. 인천과 경기 남부 서해안, 강원 산지와 경북 북부 지역에는 최대 순간 풍속 초속 25m 이상의 돌풍이 불겠고, 저녁까지 강원 내륙과 산지는 소나기가 지나겠습니다. 내일(5일)은 기온",
  press: "SBS",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/055/2025/06/04/1263862.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "선방위, 이준석 성폭력 발언 중계한 방송사 '문제 없음' 의결",
  url: "https://n.news.naver.com/mnews/article/469/0000868571",
  description: "선거방송심의위원회(선방위)가 21대 대선 후보자 TV토론회에서 이준석 당시 개혁신당 후보의 성폭력 발언을 중계한 방송사에 대해 ‘문제 없음’을 의결했다. 다만 토론회를 주관한 중앙선거방송토론위원회에 재발 방지 대책",
  press: "한국일보",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/469/2025/06/04/868571.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "더 잔인해진 '오징어 게임3'… 황동혁 \"인간성 있는지 묻고 싶었다\"",
  url: "https://n.news.naver.com/mnews/article/469/0000868568",
  description: "넷플릭스 드라마 ‘오징어 게임’ 시즌3 공개를 앞두고 황동혁 감독이 \"우리에게 인간성이 있는지 묻고 싶었다\"고 말했다. 시즌3는 27일 넷플릭스에서 공개된다. 황 감독은 4일 넷플릭스를 통해 시즌3에 대해 “‘우리에",
  press: "한국일보",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/469/2025/06/04/868568.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "간병비·인플란트 등 보장 강화…\"과잉진료 줄이고 출연금 확대를\"",
  url: "https://n.news.naver.com/mnews/article/011/0004493495",
  description: "이재명 대통령이 공약으로 내세웠던 의료 관련 보장성 정책 확대로 인한 국민건강보험 재정 건전성 악화를 우려하는 목소리가 커지고 있다. 4일 의료계와 정부에 따르면 이 대통령은 대선 과정에서 간병비 건보 적용, 희귀·",
  press: "서울경제",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/011/2025/06/04/4493495.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "대화 물꼬 틀 인사가 첫 단추…'제2뇌관' 공공의대 신설 신중해야",
  url: "https://n.news.naver.com/mnews/article/011/0004493491",
  description: "이재명 대통령이 4일 공식 취임하면서 1년 5개월째 계속되는 의정갈등에도 해결의 전기가 마련될지 주목된다. 정부와 의료계 안팎에서는 정권 교체를 계기로 자연스레 이뤄지는 보건복지부 장·차관 인사가 첫단추라는 의견이",
  press: "서울경제",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/011/2025/06/04/4493491.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "한우 반값, 수박 9900원 … 파격 할인나선 롯데",
  url: "https://n.news.naver.com/mnews/article/009/0005503696",
  description: "황금연휴·새정부 출범 기대 롯데 계열사 20곳 세일 돌입 조기 대선으로 새 정부가 들어서자 국내 유통업계가 일제히 소비 진작을 위한 대규모 '세일 페스타'에 돌입한다. 때마침 오는 6일 현충일까지 황금연휴 기간과 연",
  press: "매일경제",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/009/2025/06/04/5503696.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "[날씨] 내일도 맑고 일교차 커…전국 낮 24~30℃",
  url: "https://n.news.naver.com/mnews/article/422/0000746629",
  description: "이번 주는 후반으로 갈수록 날이 점점 더워지겠습니다. 내일 서울의 낮 기온은 27도로 오늘보다 2도가량 높겠고요. 일요일에는 29도까지 오르며 덥겠습니다. 특히, 남부 지방은 30도를 넘는 곳도 있겠습니다. 다만,",
  press: "연합뉴스TV",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/422/2025/06/04/746629.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "치명적 혈액암 '다발성 골수종', CAR-T 치료로 생존율 향상",
  url: "https://n.news.naver.com/mnews/article/584/0000032695",
  description: "혈액암의 한 종류인 ‘다발성 골수종’은 치료하기 어려운 암으로 꼽힌다. 면역요법 임상시험에서 다발성 골수종 환자의 3분의 1이 5년 이상 암 진행 없이 생존하는 결과를 보였다. 더 이상 쓸 수 있는 약이 없는 환자들",
  press: "동아사이언스",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/584/2025/06/04/32695.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "다시 '청와대 시대' 온다…관람은 언제까지?",
  url: "https://n.news.naver.com/mnews/article/422/0000746625",
  description: "대통령 집무실이 다시 청와대로 옮겨질 전망입니다. 청와대는 2022년 5월 상시 개방돼 시민 누구나 관람할 수 있는데요. 대통령 집무실 이전 준비에 들어가면 조만간 관람은 어려워질 것으로 보입니다. 이화영 기자입니다",
  press: "연합뉴스TV",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/422/2025/06/04/746625.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "'엑스트라 버진 올리브유', 하루 '이 정도'면⋯혈관병 싹 잡고, 혈압·콜레스테롤·염증↓",
  url: "https://n.news.naver.com/mnews/article/031/0000937821",
  description: "'엑스트라 버진 올리브유'가 혈압과 나쁜 콜레스테롤을 줄이며, 몸속 염증까지 완화한다는 연구 결과가 나왔다. 지난달 28일 유럽 다국적 연구팀은 국제학술지 'The Journal of Nutrition'에 \"엑스트라",
  press: "아이뉴스24",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/031/2025/06/04/937821.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "中 날아간 국내 간이식팀, 생후 6개월 아기 간이식 '성공'",
  url: "https://n.news.naver.com/mnews/article/015/0005140673",
  description: "서울아산병원은 병원 간이식팀이 중국 칭화대의 초청을 받아 현지에서 생후 6개월 남자아이의 생체 간이식 수술을 성공적으로 시행했다고 4일 밝혔다. 서울아산병원에 따르면 간이식·간담도외과 이승규 석좌교수와 문덕복·정동환",
  press: "한국경제",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140673.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "[퇴근길 날씨] 내일 기온 더 올라…오늘까지 곳곳 강풍",
  url: "https://n.news.naver.com/mnews/article/056/0011964611",
  description: "오늘 맑은 하늘 아래 남부지방은 30도 안팎까지 올라 날이 더웠습니다. 당분간 기온이 올라 날이 더 더워지겠습니다. 절기 망종인 내일은 서울 등 중부지방에서도 기온이 오릅니다. 내일 하늘도 맑게 드러나겠고 자외선도",
  press: "KBS",
  date: "2025-06-04 11:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/056/2025/06/04/11964611.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "필리핀 HIV 신규 감염 44% 급증…\"비상사태 선포해야\"",
  url: "https://n.news.naver.com/mnews/article/296/0000090107",
  description: "필리핀에서 인간면역결핍바이러스(HIV) 신규 감염자가 폭발적으로 증가하면서 필리핀 정부가 국가 공중보건 비상사태 선포를 고려하고 있다고 현지 매체들이 보도했다. 필리핀 보건부는 3일(현지시각) 올해 1월부터 4월까지",
  press: "코메디닷컴",
  date: "2025-06-04 10:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/296/2025/06/04/90107.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "거리낌 없이 보여주는 장애 여성의 욕망…\"끝난 뒤 불편함 느끼길\"",
  url: "https://n.news.naver.com/mnews/article/015/0005140648",
  description: "“당신의 키 1㎝당 100만엔을 주겠다.” 한 여성이 거액의 몸값을 제시하며 남자에게 성매매를 권유한다. 등뼈가 휘는 중증 근육질환을 가진 그의 소원은 비장애인처럼 평범하게 사랑하고 임신하는 것. 그리고 한 가지 더",
  press: "한국경제",
  date: "2025-06-04 10:26:44",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140648.jpg?type=nf220_150",
  category: "헤드라인"
},
  {
  title: "국힘 선대위 해단식…\"지도부 총사퇴 입장 조만간 낼 것\"(종합)",
  url: "https://n.news.naver.com/mnews/article/421/0008295798",
  description: "조현기 6·3 대선에서 패배한 국민의힘이 4일 오후 중앙선대위를 해단했다. 이 자리에서 국민의힘은 \"다시 시작하자\"고 결의를 다졌다. 또 동시에 경선과 선거 과정에서 있었던 파열음을 언급하며",
  press: "뉴스1",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/421/2025/06/04/8295798.jpg?type=nf220_150",
  category: "정치"
},
  {
  title: "尹정부 장차관 일괄 사표…李대통령, 선별 수리할 듯",
  url: "https://n.news.naver.com/mnews/article/023/0003909195",
  description: "윤석열 정부의 장‧차관들이 지난 2일 일괄 사표를 제출했다. 4일 정치권에 따르면 정부 부처 장‧차관 등 정무직 공무원들은 21대 대통령 선거 전날인 2일 인사혁신처에 일괄적으로 사직서를 냈다.",
  press: "조선일보",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/023/2025/06/04/3909195.jpg?type=nf220_150",
  category: "정치"
},
  {
  title: "이재명 대통령, 취임 1호 행정명령은 '비상경제대응TF'",
  url: "https://n.news.naver.com/mnews/article/277/0005603127",
  description: "이재명 대통령은 취임 후 첫 행정명령으로 비상경제대응 태스크포스(TF) 구성 지시를 내렸다. 이주호 국무총리 직무대행 부총리 겸 교육부 장관에게는 7시30분까지 TF 관련 부서 책임자와 실무자를 소집하라고 지시했다.",
  press: "아시아경제",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/277/2025/06/04/5603127.jpg?type=nf220_150",
  category: "정치"
},
  {
  title: "이재명 첫날부터 정청래 “국회는 국회대로”…대법관 증원 예고",
  url: "https://n.news.naver.com/mnews/article/005/0001780936",
  description: "더불어민주당이 이재명 대통령 임기 첫날부터 대법관 증원을 다루는 법원조직법 개정안 논의에 착수할 방침이다. 선거운동 기간 이 대통령은 대법관 증원 등에 대해 “지금은 그런 얘기 할 때가 아니라는 게 명확한 입장”이라",
  press: "국민일보",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/005/2025/06/04/1780936.jpg?type=nf220_150",
  category: "정치"
},
  {
  title: "“역사에 큰 죄 지었다” 큰절 김문수 “당 내 민주주의 무너져” 쓴소리",
  url: "https://n.news.naver.com/mnews/article/021/0002714064",
  description: "김문수 국민의힘 전 대선 후보가 4일 서울 여의도 중앙당사에서 열린 제21대 대통령선거 국민의힘 중앙선거대책위원회 해단식에서 발언 도중 절을 하고 있다. 사진공동취재단 김문수 국민의힘 전 대선 후보가 4일 당 선거대",
  press: "문화일보",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/021/2025/06/04/2714064.jpg?type=nf220_150",
  category: "정치"
},
  {
  title: "“계엄은 우리 죄, 총리는 김민석.. 경제도 뺏겼다” 김문수의 절, 보수의 통곡",
  url: "https://n.news.naver.com/mnews/article/661/0000056270",
  description: "“제가 큰 죄를 지었습니다.” 이재명 대통령의 취임식을 지켜봤다는 김문수 전 국민의힘 대선 후보는 큰절을 올렸습니다. 계엄 사태에 대한 참회, 무너진 당내 민주주의에 대한 성찰. 그리고 김민석 총리 지명자와 ‘경제는",
  press: "JIBS",
  date: "2025-06-04 13:11:45",
  image: "https://mimgnews.pstatic.net/image/origin/661/2025/06/04/56270.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "[직격 인터뷰] 이한주 민주연구원장 \"코스피 5000 임기 내 가능\"",
  url: "https://n.news.naver.com/mnews/article/057/0001889886",
  description: "앞으로 이재명 정부의 정책 방향성에 대해서는 직접 자세히 들어보겠습니다. 이재명 정부의 공약 수립을 총괄했고, 40년 지기 멘토로 알려져 있습니다. 또 이재명 정부에서 정책실장으로도 거론되는 이한주 민주연구원장이 연",
  press: "MBN",
  date: "2025-06-04 13:10:45",
  image: "https://mimgnews.pstatic.net/image/origin/057/2025/06/04/1889886.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "민주당, 대법관 증원법 소위 단독처리에 \"취임 첫날부터 보복 입법\"",
  url: "https://n.news.naver.com/mnews/article/006/0000130311",
  description: "국회 법제사법위원회 민주당 의원들이 이재명 대통령 취임 첫날 사법부 압박의 대표적 사례로 지목되는 대법관 증원법을 법안소위원회에서 국민의힘 의원들의 퇴장 속 단독 처리했다. 이 대통령이 취임한 지 10시간여 만에,",
  press: "미디어오늘",
  date: "2025-06-04 13:01:45",
  image: "https://mimgnews.pstatic.net/image/origin/006/2025/06/04/130311.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "[이재명 정부의 미래] 입법·행정권 쥔 '절대 권력'…\"개혁·독재 양날의 칼 위에\"",
  url: "https://n.news.naver.com/mnews/article/088/0000951676",
  description: "이재명 대통령이 4일 취임하면서 과반 의석인 집권 여당에 더해 행정부까지 장악하게 됐다. 정권 출범부터 거칠 것이 없는 이른바 '절대 권력'을 쥐게 되자 견제가 불가능하다는 우려 속 독주 가능성도 조심스럽게 제기된다",
  press: "매일신문",
  date: "2025-06-04 13:01:45",
  image: "https://mimgnews.pstatic.net/image/origin/088/2025/06/04/951676.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "김문수 폭탄 발언 \"국민 대부분 원치 않은 이재명 취임\"",
  url: "https://n.news.naver.com/mnews/article/047/0002476219",
  description: "▲ 대선 소감 밝히는 김문수 전 후보 국민의힘 김문수 전 대선 후보가 4일 서울 여의도 중앙당사에서 열린 제21대 대통령선거 국민의힘 중앙선거대책위원회 해단식에서 발언하고 있다. ⓒ 연합뉴스 제21대 대통령 선거에서",
  press: "오마이뉴스",
  date: "2025-06-04 13:00:45",
  image: "https://mimgnews.pstatic.net/image/origin/047/2025/06/04/2476219.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "박성재 외 국무의원 사의 반려…장관 후보자 지명 아직, 왜",
  url: "https://n.news.naver.com/mnews/article/055/0001263885",
  description: "지금까지 내용은 박하정 기자와 정리를 해보겠습니다. Q. 전체 국무위원 사의 표명…일부만 수용? [박하정 기자 : 네, 대선 전날이죠. 그제(2일), 윤석열 정부에서 임명됐던 전체 국무위원들이 일괄적으로 사표를 제출",
  press: "SBS",
  date: "2025-06-04 12:59:45",
  image: "https://mimgnews.pstatic.net/image/origin/055/2025/06/04/1263885.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "친한 “계엄옹호 지도부 사퇴를”…친윤 “당내 엑스맨 내보내야”",
  url: "https://n.news.naver.com/mnews/article/028/0002749424",
  description: "국민의힘이 대선에서 패배한 다음날 ‘선거 패배 책임론’ 공방을 벌이며 본격적인 당내 주도권 다툼에 돌입했다. “‘불법계엄’과 ‘불법계엄 세력을 옹호한 구태정치’” 탓에 선거에서 패배했다는 한동훈 전 국민의힘 대표의",
  press: "한겨레",
  date: "2025-06-04 12:58:45",
  image: "https://mimgnews.pstatic.net/image/origin/028/2025/06/04/2749424.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "김민석, 조기대선 불 댕긴 ‘尹 계엄 예측자’… 新明 실세로 정치인생 역전",
  url: "https://n.news.naver.com/mnews/article/081/0003546512",
  description: "정책 이해 높고 국내외 정세 밝아 86세대 운동권·15대 최연소 의원 18년 굴곡 겪은 뒤 부활 ‘4선 고지’ 잇따라 李 선대위 이끈 ‘일등공신’ 이재명 정부 초대 국무총리 후보자로 지명된 김민석(61) 더불어민주당",
  press: "서울신문",
  date: "2025-06-04 12:57:45",
  image: "https://mimgnews.pstatic.net/image/origin/081/2025/06/04/3546512.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "인주 없어 결재도 못해…텅 빈 용산 집무실 첫 출근한 대통령의 한 마디는",
  url: "https://n.news.naver.com/mnews/article/009/0005503783",
  description: "당분간 자택서 출퇴근할 듯 용산 대통령실 주인이 바뀌면서 4일 대통령실 청사는 하루 종일 분주하게 돌아갔다. 대통령실 경호처는 더불어민주당에서 사전에 넘겨받은 핵심 인사 100여 명에 대한 신원 조회를 실시하고 대통",
  press: "매일경제",
  date: "2025-06-04 12:55:45",
  image: "https://mimgnews.pstatic.net/image/origin/009/2025/06/04/5503783.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "임기 첫날 빨강·파랑 섞인 넥타이…李 대통령, 국회 미화원부터 챙겼다",
  url: "https://n.news.naver.com/mnews/article/009/0005503782",
  description: "오전 6시 21분 임기 시작한 뒤 인천→동작→여의도→용산行 시민들 배웅 속 인천 자택 출발 첫 공식일정 서울현충원 참배 단식때 도움 준 미화원 만나고 계엄 날 국회 지킨 방호직 격려 이재명 대통령의 취임 첫날은 쉴",
  press: "매일경제",
  date: "2025-06-04 12:54:45",
  image: "https://mimgnews.pstatic.net/image/origin/009/2025/06/04/5503782.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "대선패배, 지하로 간 국힘…권성동 \"李 리스크 잡음없는 민주당 배워야\"",
  url: "https://n.news.naver.com/mnews/article/029/0002959417",
  description: "당사 지하서 대선 선대위 해단식…김문수 후보도 참석 權, 계엄·탄핵·선거참패 등 친한계發 문책·사퇴론 거부 \"적과 싸워야하는데 내부 향해…절대적으로 '사라져야'\" 정작 金 \"민주주의 없어\" 작심발언…계엄·후보교체 비",
  press: "디지털타임스",
  date: "2025-06-04 12:42:45",
  image: "https://mimgnews.pstatic.net/image/origin/029/2025/06/04/2959417.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "[정치톡톡] \"국민주권정부\" / 이재명 국회의원 사퇴 / \"틀딱\" \"골프나 집중하라\" / 자필 사과문?",
  url: "https://n.news.naver.com/mnews/article/057/0001889871",
  description: "정치부 김도형 기자와 정치권 소식 들어보겠습니다. 이번 정부의 명칭을 국민주권정부로 정한 이유가 있을까요? 【 기자 】 네, 통상 정부마다 부르는 명칭이 있죠. 87년 민주화 이후 들어선 정부 중 일부는 당시의 시대",
  press: "MBN",
  date: "2025-06-04 12:39:45",
  image: "https://mimgnews.pstatic.net/image/origin/057/2025/06/04/1889871.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "1시간도 안 걸린 취임행사…제헌절에 '대통령 임명식'",
  url: "https://n.news.naver.com/mnews/article/055/0001263880",
  description: "인수위원회 없이 새 정부가 출범하면서, 오늘(4일) 이재명 대통령의 취임선서 행사도 약식으로 진행됐습니다. 비슷한 상황이었던 8년 전 문재인 전 대통령 때와는 어떻게 달랐는지, 또 한 달 뒤 '대통령 임명식'은 어떻",
  press: "SBS",
  date: "2025-06-04 12:39:45",
  image: "https://mimgnews.pstatic.net/image/origin/055/2025/06/04/1263880.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "“죄지었다” 큰절한 김문수…패배는 국힘 탓, 이재명 정부엔 색깔론",
  url: "https://n.news.naver.com/mnews/article/028/0002749416",
  description: "대선에서 패한 김문수 국민의힘 전 대통령 후보가 당 선거대책위원회 해단식에서 당에 대한 비판과 불만을 쏟아냈다. 임기 첫날을 시작한 이재명 정부에는 곧바로 색깔론을 제기했다. 당권 도전을 염두에 두고 선거 패배 책임",
  press: "한겨레",
  date: "2025-06-04 12:38:45",
  image: "https://mimgnews.pstatic.net/image/origin/028/2025/06/04/2749416.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "국힘, 자충수로 패배 자초…당권 놓고 계파갈등 재연 조짐",
  url: "https://n.news.naver.com/mnews/article/658/0000109336",
  description: "- 尹절연 실패 등 내부 분열 촉발 - 패배책임 지도부 거취 의견 분분 - 與 견제 역부족…최악 시련 전망 - 김문수 “깊은 성찰과 개혁 필요” 3년 만에 정권을 내준 국민의힘은 사상 최악의 위기에 몰리게 됐다. ‘",
  press: "국제신문",
  date: "2025-06-04 12:36:45",
  image: "https://mimgnews.pstatic.net/image/origin/658/2025/06/04/109336.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "‘성남 라인’ 요직으로… 김현지·김남준·김용채 합류",
  url: "https://n.news.naver.com/mnews/article/366/0001082899",
  description: "이재명 대통령의 핵심 측근 그룹인 ‘성남 보좌진’이 대통령실 참모진으로 대거 합류한것으로 4일 알려졌다. 이 대통령의 성남시장 재직 시절부터 30여년간 손발을 맞춰온 최측근으로, 여권에선 이미 수석(차관급)에 버금가",
  press: "조선비즈",
  date: "2025-06-04 12:34:45",
  image: "https://mimgnews.pstatic.net/image/origin/366/2025/06/04/1082899.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "숨 가빴던 李대통령 첫날 24시…전임 국무위원 사표 반려하고 즉각 회의 소집했다",
  url: "https://n.news.naver.com/mnews/article/011/0004493532",
  description: "이재명 대통령은 선거 다음날인 4일 오전 6시 21분 국군 통수권을 이양받으며 공식 임기를 시작해 하루 종일 숨 가쁜 일정을 소화했다. 중앙선거관리위원회는 이날 오전 전체 위원회의를 열고 대선 개표 결과에 따라 더불",
  press: "서울경제",
  date: "2025-06-04 12:28:45",
  image: "https://mimgnews.pstatic.net/image/origin/011/2025/06/04/4493532.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "\"보수 폐족… 새살 돋게 구세대 싹 사라져야 희망 보인다\"",
  url: "https://n.news.naver.com/mnews/article/029/0002959413",
  description: "대선 결과 전문가 4인 분석 국힘, 尹과 '불완전한 결별' 패착 책임·물갈이 없으면 희망 안보여 내란극복·국민통합 인사가 관건 권력 휘두르면 민주주의도 몰락 강하기보다 포용력 발휘가 관건 실용성으로 기업·노조 균형유",
  press: "디지털타임스",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/029/2025/06/04/2959413.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "국민의힘, 당 쇄신 기로에… “지도부 총사퇴” “지금은 단결”",
  url: "https://n.news.naver.com/mnews/article/366/0001082896",
  description: "대선 패배 이후 책임론 분출… 5일 의원총회 분수령 될 듯 대선 패배 후폭풍이 국민의힘을 삼키고 있다. 3년 만에 정권을 내주고 소수 야당으로 전락한 국민의힘은 지도부 총사퇴를 요구하는 강경파와 “지금은 거여(巨與)",
  press: "조선비즈",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/366/2025/06/04/1082896.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "초대 총리에 김민석 왜?…李 위기때마다 앞장서 엄호",
  url: "https://n.news.naver.com/mnews/article/020/0003639328",
  description: "이재명 대통령은 4일 초대 국무총리 후보자로 핵심 측근으로 꼽히는 더불어민주당 김민석 수석 최고위원을 지명했다. 국정과제 이행을 주도할 국무총리에 이 대통령의 정무, 정책 분야에서 가장 손발이 잘 맞는 것으로 평가되",
  press: "동아일보",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/020/2025/06/04/3639328.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "국힘, 선대위 해단식 '패인' 두고 친윤-친한 내부 갈등상 표출",
  url: "https://n.news.naver.com/mnews/article/088/0000951673",
  description: "국민의힘 중앙선거대책위원회가 해단식에서 6·3 대선 패인을 놓고 친한(친한동훈)계와 친윤(친윤석열)계가 충돌 양상을 보였다. 이날 서울 여의도 중앙당사에서 열린 선대위 해단식에는 김문수 전 대선 후보를 비롯해 당 지",
  press: "매일신문",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/088/2025/06/04/951673.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "[뉴스추적] '개혁·통합'에 방점 둔 인선…새 원내대표도 관심",
  url: "https://n.news.naver.com/mnews/article/057/0001889858",
  description: "이재명 대통령이 새 정부의 첫 인선을 발표하며 본격적인 국정 운영에 나섰습니다. 정치부 강영호 기자와 좀 더 자세한 얘기 나눠보겠습니다. 【 질문1 】 강 기자, 이 대통령이 취임 첫날 곧바로 인선을 발표했습니다.",
  press: "MBN",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/057/2025/06/04/1889858.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "보수의 빙하기… ‘새판짜기’ 돌입 [이재명 정부 출범]",
  url: "https://n.news.naver.com/mnews/article/022/0004041001",
  description: "대선 참패 국힘, 전면 쇄신론 분출 한동훈 “국민, 구태정치 퇴장명령” 주류 김기현도 “처절한 환골탈태” 친한계, 지도부·친윤계 퇴진 요구 당권 놓고 계파 주도권 다툼 예고 ‘보수의 빙하기’가 왔다. 뼈아픈 대선 패",
  press: "세계일보",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/022/2025/06/04/4041001.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "[주장] 대통령 부인 '여사' 호칭에 이의 있습니다",
  url: "https://n.news.naver.com/mnews/article/047/0002476215",
  description: "이 글은 오태규 전 한겨레 논설실장이 보내온 것으로, 오마이뉴스 공식 견해와 일치하지 않을 수도 있습니다. 오마이뉴스는 이와 관련한 다른 의견도 환영합니다. <편집자말> 최근 뉴스를 보면서 유독 거슬리는 단어가 있습",
  press: "오마이뉴스",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/047/2025/06/04/2476215.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "국민의힘 패배 후폭풍…김문수 큰절 사죄 “당내 민주주의 무너져”",
  url: "https://n.news.naver.com/mnews/article/082/0001329159",
  description: "국민의힘이 대선 이튿날인 4일 패배의 후폭풍에 휩싸였다. 이날 국민의힘의 중앙선거대책위원회 해단식에서는 “당내 민주주의가 무너졌다”, “더불어민주당이 하는 것을 (보고) 배워야 한다” 등 반성의 목소리가 쏟아져 나왔",
  press: "부산일보",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/082/2025/06/04/1329159.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "[아는기자]‘친명’ 투톱 구축…첫 인선에 이유 있다?",
  url: "https://n.news.naver.com/mnews/article/449/0000310908",
  description: "Q. 아는기자, 대통령실 출입하는 이동은 차장 나왔습니다. 이 차장, 김민석 총리에, 강훈식 비서실장. 친정 체제 구축했어요? 네, 총리는 국회 재적의원 과반 출석에 출석 의원 과반이 찬성해야 인준됩니다. 민주당 의",
  press: "채널A",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/449/2025/06/04/310908.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "[단독] 지휘통제실서 軍 보고 받던 李 대통령 \"방첩사는?\"",
  url: "https://n.news.naver.com/mnews/article/025/0003445842",
  description: "이재명 대통령이 ‘12·3 비상계엄’ 지휘가 이뤄졌던 합동참모본부 지휘통제실에서 주요 지휘관들의 보고를 받다가 국군방첩사령부를 콕 집어 언급한 것으로 파악됐다. 화상회의(VTC)로 각군 본부와 사령부 등이 연결된 가",
  press: "중앙일보",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/025/2025/06/04/3445842.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "경제사령탑 이호승·구윤철 물망… 외교 김현종·조현 거론 [이재명 정부 출범]",
  url: "https://n.news.naver.com/mnews/article/022/0004040991",
  description: "국무위원 하마평 누가 오르나 李 대통령 인선 기준 ‘실력·통합’ 강조 국방 장관 안규백·김병주 의원 꼽혀 통일, 천해성·홍익표·이재강 가능성 법무, 비법조인 출신 윤호중 유력해 행안 장관엔 이해식·서영교 등 올라 이",
  press: "세계일보",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/022/2025/06/04/4040991.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "“대통령 말에 “아니요” 할 수 있어야… 내란종식 신속하게”",
  url: "https://n.news.naver.com/mnews/article/005/0001781076",
  description: "“국민이 주인이고, 대통령은 맡은 일에 최종 책임을 지는 공복입니다. 정치든 정책이든 국민 통합을 먼저 생각하고 움직이면 국민적 평가를 받게 될 겁니다.” 문희상 전 국회의장은 4일 여의도 국회 앞에서 국민일보와 1",
  press: "국민일보",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/005/2025/06/04/1781076.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "`사죄 큰절` 김문수 \"너무 큰 역사적 죄 지었다…당내 민주주의 무너져\"",
  url: "https://n.news.naver.com/mnews/article/029/0002959406",
  description: "\"대통령 뜻이 당에 일방 관철된 데 깊은 자성 필요\" \"李대통령 취임식 보며 역사적 큰 죄 지었다고 생각\" 김문수 국민의힘 전 대선 후보가 4일 국민 앞에 사죄의 큰 절을 했다. 당 선거대책위원회 해단식에서 국민의힘",
  press: "디지털타임스",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/029/2025/06/04/2959406.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "역대 최다 득표, 과반은 못 미쳐… “협치하라는 뜻”",
  url: "https://n.news.naver.com/mnews/article/005/0001781073",
  description: "이재명 대통령은 6·3 대선에서 대통령 직선제 시행 이후 역대 최다 득표를 경신했다. 하지만 득표율은 과반에 미치지 못했다. 윤석열 전 대통령의 12·3 비상계엄 선포와 탄핵으로 ‘기울어진 운동장’에서 치러진 대선에",
  press: "국민일보",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/005/2025/06/04/1781073.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "‘성남 라인’ 김현지·김남준 합류…김남국도 첫날 비서실행 눈길 [이재명 정부 출범]",
  url: "https://n.news.naver.com/mnews/article/022/0004040987",
  description: "눈에 띄는 대통령실 인사들 이규연·김상호 등 언론인 출신도 의전비서관 권혁기 전 춘추관장 ‘정윤회 문건’ 박관천 경호처 합류 이재명 대통령 당선 첫날인 4일 대통령실에 출근한 초기 비서실 인사들이 주목을 받고 있다.",
  press: "세계일보",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/022/2025/06/04/4040987.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "‘전략통’ 김민석·‘소통형’ 강훈식 낙점… 초반 국정운영 그립감 [이재명 정부 출범]",
  url: "https://n.news.naver.com/mnews/article/022/0004040985",
  description: "총리·비서실장 측근 전진배치 4선 김민석, ‘비상계엄’ 경고 공신 李, 국정철학 이해도 높아 신뢰 강훈식, 70년대생 비서실장 눈길 대통령실 ‘기민한 운영’ 의중 반영 내정 4명이 현역의원… 2명은 비례 인수위 없어",
  press: "세계일보",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/022/2025/06/04/4040985.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "'생맥주 무료' 사장님부터, 이재명 찍어 미안했던 수많은 '권영국 후원자들'",
  url: "https://n.news.naver.com/mnews/article/047/0002476214",
  description: "▲ 서울 마포구의 한 술집에 \"생맥주 무료, 맛있었다면 권영국 민주노동당 후보에 후원해달라\"는 이벤트 안내문이 붙어 있다. 이 술집을 운영하는 임아무개(52, 여)씨는 21대 대선 당일인 3일 이 안내문을 부착했다.",
  press: "오마이뉴스",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/047/2025/06/04/2476214.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "초대 총리 후보 김민석은···“곧바로 일하는 정부 만들 ‘내란 종식’의 상징”",
  url: "https://n.news.naver.com/mnews/article/032/0003374124",
  description: "새 정부 조각에서 가장 스포트라이트를 받는 자리는 국무총리 지명자다. 새로 취임한 대통령이 지명하는 최고위직이라는 이유 때문만은 아니다. 새 정부의 국정운영 방향과 국정 철학을 ‘한 사람’의 특정 인물로 구체화해 나",
  press: "경향신문",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/032/2025/06/04/3374124.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "[이슈플러스] 이재명 \"모두의 대통령 될 것\"...새 정부 첫 인선은?",
  url: "https://n.news.naver.com/mnews/article/052/0002201770",
  description: "■ 진행 : 이여진 앵커, 장원석 앵커 ■ 출연 : 이승훈 더불어민주당 전략기획 부위원장, 강전애 국민의힘 대변인 * 아래 텍스트는 실제 방송 내용과 차이가 있을 수 있으니 보다 정확한 내용은 방송으로 확인하시기 바",
  press: "YTN",
  date: "2025-06-04 12:26:45",
  image: "https://mimgnews.pstatic.net/image/origin/052/2025/06/04/2201770.jpg?type=ofullfill220_150",
  category: "정치"
},
  {
  title: "체코 법원, 李 정부 출범한 날 한수원 원전계약 금지 취소 명령",
  url: "https://n.news.naver.com/mnews/article/016/0002480711",
  description: "체코 두코바니 원자력 발전소의 냉각탑들. [로이터] 체코 법원이 이재명 정부 출범한 날인 4일(현지시간) 한국수력원자력(한수원)과 체코 두코바니 신규 원전 발주사간 ‘계약 중지’ 명령을 취소했다. 로이터통산 등 외신",
  press: "헤럴드경제",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/016/2025/06/04/2480711.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "KAI 강구영 사장, 임기 남았는데 사의 표명…왜?",
  url: "https://n.news.naver.com/mnews/article/003/0013286197",
  description: "강구영 한국항공우주산업(KAI) 사장이 임기를 3개월 남기고 사직 의사를 밝혔다. 정권이 교체되면 KAI 사장은 임기를 채우지 않고 물러나는 경우가 많다. 4일 업계에 따르면 강 사장은 이날 KAI 최대주주인 한국수",
  press: "뉴시스",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/003/2025/06/04/13286197.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "한화오션, 친환경 선박기술 MOU 3건 체결…‘암모니아 운반선 대형화’ 추진",
  url: "https://n.news.naver.com/mnews/article/003/0013284994",
  description: "한화오션이 글로벌 선급들과의 협력을 통해 독보적인 친환경 선박 기술 확보에 박차를 가하고 있다. 한화오션(대표이사 김희철 사장)은 노르웨이 오슬로에서 진행 중인 국제선박전시회 ‘노르쉬핑 2025(Nor-Shippin",
  press: "뉴시스",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/003/2025/06/04/13284994.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "사과는 싸졌는데 커피는 왜?…광주·전남 5월 물가 엇갈려",
  url: "https://n.news.naver.com/mnews/article/277/0005602816",
  description: "배추·토마토·수박은 값이 내렸지만, 커피와 보험료는 또 올랐다. 5월 광주·전남 소비자물가는 전월보다 0.3% 하락했지만, 전년 같은 달 대비 광주는 1.5%, 전남은 1.8% 상승했다. 생활물가와 신선식품은 내렸지",
  press: "아시아경제",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/277/2025/06/04/5602816.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "금감원, '보험 끼워팔기' 흥국화재에 기관주의·과태료 1억",
  url: "https://n.news.naver.com/mnews/article/277/0005603109",
  description: "금융감독원이 중소기업, 저신용자와 대출 계약을 체결하면서 보험을 끼워 판 흥국화재에 가관주의 등 제재를 내렸다. 4일 금융권에 따르면 금감원은 지난 2일 흥국화재에 기관주의와 과태료 1억원, 임원 주의 1명, 주의에",
  press: "아시아경제",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/277/2025/06/04/5603109.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "“외국인 1조 넘게 쓸어담았다”…새 정부 효과 언제까지",
  url: "https://n.news.naver.com/mnews/article/022/0004041015",
  description: "코스피가 2% 이상 오르며 2770선을 넘긴 4일 서울 중구 하나은행 딜링룸 현황판에 코스피 지수 등이 표시되고 있다. 연합뉴스 대통령 선거 후 첫 거래일인 4일 코스피가 종가 기준 2770을 돌파하며 연고점을 경신",
  press: "세계일보",
  date: "2025-06-04 13:15:47",
  image: "https://mimgnews.pstatic.net/image/origin/022/2025/06/04/4041015.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "\"기업 잘 돼야 나라가 잘 된다\"…李의 재계 인맥은",
  url: "https://n.news.naver.com/mnews/article/018/0006031258",
  description: "‘실용주의’를 앞세운 이재명 대통령이 취임 일성으로 기업 성장을 앞세우면서, 이 대통령의 재계 인맥에도 관심이 모아진다. ‘기업 성장’ 강조한 경제 행보 이 대통령은 4일 서울 여의도 국회 본청에서 ‘국민께 드리는",
  press: "이데일리",
  date: "2025-06-04 13:07:47",
  image: "https://mimgnews.pstatic.net/image/origin/018/2025/06/04/6031258.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "체코 법원, '한수원 원전계약 불허' 결정 취소…걸림돌 사실상 제거(종합)",
  url: "https://n.news.naver.com/mnews/article/658/0000109350",
  description: "체코 최고법원이 한국수력원자력(한수원)과 체코 당국 간 신규원전 건설 사업의 최종 계약을 금지한 가처분 결정을 취소했다. 이에 따라 한수원은 해당 사업 수주에 사실상 걸림돌이 없어졌다. 한수원 측은 ‘신속한 계약 체",
  press: "국제신문",
  date: "2025-06-04 13:05:47",
  image: "https://mimgnews.pstatic.net/image/origin/658/2025/06/04/109350.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "체코, 원전계약 금지 가처분 취소…한수원, 수주 청신호 \"환영\"(종합)",
  url: "https://n.news.naver.com/mnews/article/003/0013286845",
  description: "체코 대법원이 한국수력원자력과의 신규 원전 계약 체결을 금지했던 가처분 명령을 취소하면서, 한수원의 신규 원전 수주 계약에 청신호가 들어왔다. 이에 한수원도 체코 법원의 결정에 대해 환영한다는 뜻을 밝혔다. 체코 최",
  press: "뉴시스",
  date: "2025-06-04 13:04:47",
  image: "https://mimgnews.pstatic.net/image/origin/003/2025/06/04/13286845.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "이재명 정부 ‘부동산 가시밭길’…  “당분간 현상 유지” 전망",
  url: "https://n.news.naver.com/mnews/article/005/0001781091",
  description: "이재명 대통령이 맞닥뜨린 부동산 시장은 녹록잖은 상황이다. 서울·지방간 초양극화가 심화하는 가운데 서울과 수도권은 집값 과열 요인이 잠복해 있다. ‘진보정권에선 집값이 폭등한다’는 시장 심리도 무시할 수 없다. 지방",
  press: "국민일보",
  date: "2025-06-04 13:01:47",
  image: "https://mimgnews.pstatic.net/image/origin/005/2025/06/04/1781091.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "한수원 \"체코 최고행정법원 가처분 파기 환영…신속 체결 기대\"",
  url: "https://n.news.naver.com/mnews/article/374/0000444225",
  description: "체코 법원이 한국수력원자력과 체코 두코바니 신규 원전 발주사의 최종계약을 금지한 가처분 결정을 취소한 것으로 파악됐습니다. 로이터통신은 현지시간 4일, 체코 CTK통신을 인용해 체코 최고행정법원이 지난달 브르노 지방",
  press: "SBS Biz",
  date: "2025-06-04 12:52:47",
  image: "https://mimgnews.pstatic.net/image/origin/374/2025/06/04/444225.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "체코 최고법원 “한수원 원전계약 막은 가처분 결정 취소”",
  url: "https://n.news.naver.com/mnews/article/020/0003639332",
  description: "체코 최고법원이 한국수력원자력(한수원)의 체코 신규 원전 건설 최종계약을 금지하는 가처분 결정을 4일(현지 시간) 취소했다. 한수원 측은 “체코 최고행정법원의 가처분 파기 결정을 환영하며, 체코 측에서 신속하게 계약",
  press: "동아일보",
  date: "2025-06-04 12:51:47",
  image: "https://mimgnews.pstatic.net/image/origin/020/2025/06/04/3639332.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "한수원 “체코 법원 ‘두코바니 원전계약 금지’ 가처분 취소 환영”",
  url: "https://n.news.naver.com/mnews/article/119/0002964823",
  description: "체코 법원이 한국수력원자력(한수원)과 체코 신규 원전 발주사 간 최종계약을 막았던 가처분 결정을 취소하면서, 한수원이 다시 계약 체결에 속도를 낼 수 있게 됐다. 한수원은 법적 불확실성이 해소된 데 대해 환영 입장을",
  press: "데일리안",
  date: "2025-06-04 12:50:47",
  image: "https://mimgnews.pstatic.net/image/origin/119/2025/06/04/2964823.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "자칭 개미 대통령 탄생에 ‘허니문 랠리’…코스피 2.66% 올라",
  url: "https://n.news.naver.com/mnews/article/020/0003639330",
  description: "대통령 선거 후 첫 거래일인 4일 국내 증시가 급등세를 나타냈다. ‘개미(개인투자자)’였음을 내세우며 ‘코스피 5,000 시대’를 공언한 이재명 대통령의 당선으로 기업 지배구조 개편과 주주 환원 확대, 불공정 거래",
  press: "동아일보",
  date: "2025-06-04 12:42:47",
  image: "https://mimgnews.pstatic.net/image/origin/020/2025/06/04/3639330.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "체코 최고법원, 한수원 원전 계약 금지 가처분 결정 취소(종합)",
  url: "https://n.news.naver.com/mnews/article/079/0004031944",
  description: "체코 최고법원이 한국수력원자력(한수원)과 체코 두코바니 신규 원전 발주사의 최종계약을 금지한 가처분 결정을 취소했다. 로이터통신은 4일 체코 최고행정법원이 지난달 브르노 지방법원의 계약금지 가처분 결정을 취소했다고",
  press: "노컷뉴스",
  date: "2025-06-04 12:40:47",
  image: "https://mimgnews.pstatic.net/image/origin/079/2025/06/04/4031944.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "\"중국, 미국 보잉 대신 유럽 에어버스 항공기 최대 500대 주문 검토\"",
  url: "https://n.news.naver.com/mnews/article/008/0005203567",
  description: "중국이 미국 항공기 제조업체 보잉 대신 유럽의 에어버스와 대규모 주문 계약 체결을 검토하는 것으로 알려졌다. 미국과의 무역(관세) 갈등 속 미국 견제를 위해 유럽과의 관계를 강화하기 위한 움직임으로 풀이된다. 4일(",
  press: "머니투데이",
  date: "2025-06-04 12:34:47",
  image: "https://mimgnews.pstatic.net/image/origin/008/2025/06/04/5203567.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "한수원, 체코 원전계약 걸림돌 사라졌다…사업추진 속도 낼 듯",
  url: "https://n.news.naver.com/mnews/article/008/0005203566",
  description: "팀코리아의 체코 원자력 사업 추진에 걸림돌이 사라졌다. 체코 법원이 한국수력원자력(한수원)의 신규 원자력 발전 건설 최종 계약을 금지하는 가처분 명령을 취소하면서 사업이 속도를 낼 전망이다. 4일 체코 현지언론 등에",
  press: "머니투데이",
  date: "2025-06-04 12:31:47",
  image: "https://mimgnews.pstatic.net/image/origin/008/2025/06/04/5203566.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "멈추나 했던 팀 코리아 체코 원전 계약 청신호 켜졌다",
  url: "https://n.news.naver.com/mnews/article/469/0000868592",
  description: "체코 행정법원이 한국수력원자력의 두코바니 원전 계약을 중단시켰던 가처분을 취소하면서 팀 코리아의 두 번째 해외 원전 수주에도 다시 청신호가 켜졌다. 체코 정부가 사전 승인 절차를 밟아둔 만큼 최종 서명에 속도가 날",
  press: "한국일보",
  date: "2025-06-04 12:31:47",
  image: "https://mimgnews.pstatic.net/image/origin/469/2025/06/04/868592.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "[단독] \"조경석 꼭 필요\"⋯점입가경 '래미안 라그란데'",
  url: "https://n.news.naver.com/mnews/article/031/0000937874",
  description: "입주민과 상의 없이 조경석을 설치했다며 논란이 된 서울 동대문구 '래미안 라그란데' 아파트에 대해 해당 조합장이 해명하는 글을 조합원에 보낸 것으로 나타났다. 조합장은 전체 조경특화 비용이 조경석 비용으로 둔갑됐다고",
  press: "아이뉴스24",
  date: "2025-06-04 12:31:47",
  image: "https://mimgnews.pstatic.net/image/origin/031/2025/06/04/937874.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "한수원 '체코 원전 계약 금지' 가처분 취소…최종 계약 청신호",
  url: "https://n.news.naver.com/mnews/article/050/0000091809",
  description: "체코 대법원이 한국수력원자력과의 신규 원전 계약 체결을 금지했던 가처분 명령을 취소했다. 한수원의 신규 원전 수주 계약에 청신호가 들어왔다는 해석이 나온다. 로이터통신이 체코 CTK통신을 인용한 보도에 따르면 체코",
  press: "한경비즈니스",
  date: "2025-06-04 12:29:47",
  image: "https://mimgnews.pstatic.net/image/origin/050/2025/06/04/91809.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "한수원 체코 원전 ‘계약 중지’ 가처분, 현지서 다시 뒤집혔다",
  url: "https://n.news.naver.com/mnews/article/032/0003374127",
  description: "체코 법원이 한국수력원자력(한수원)과 체코 두코바니 신규 원전 발주사간 ‘계약 중지’ 명령을 취소했다. 체코 최고행정법원은 4일(이하 현지시간) 보도자료를 내고 “한수원과 두코바니Ⅱ 원자력발전사(EDUⅡ)의 항고를",
  press: "경향신문",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/032/2025/06/04/3374127.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "'26억 전세사기' 서현진 이사한 아파트…4월에만 '신고가 3번' [집코노미-핫!부동산]",
  url: "https://n.news.naver.com/mnews/article/015/0005140781",
  description: "배우 서현진이 전세사기를 피해를 보고 이주한 아파트가 최근 신고가를 경신하고 있는 서울 성동구 옥수동 '이편한세상 옥수파크힐스'로 확인됐다. 4일 부동산 업계에 따르면 서현진은 지난해 9월 옥수파크힐스 전용 84.9",
  press: "한국경제",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140781.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "촉각 세우는 재계…이재명 정부 ‘실용주의’ 기대, 상법 개정은 긴장",
  url: "https://n.news.naver.com/mnews/article/028/0002749413",
  description: "3년 만의 정권 교체로 출범한 이재명 정부의 정책 방향에 재계도 촉각을 바짝 기울이고 있다. 새 정부가 ‘실용적 시장주의’라는 표어를 내걸고 기업 친화적 색깔을 강조하고 있지만, 재계가 반대하는 상법 개정 등을 두고",
  press: "한겨레",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/028/2025/06/04/2749413.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "임기 만료에 정권 교체… 금융수장·기관장 어떻게?",
  url: "https://n.news.naver.com/mnews/article/029/0002959409",
  description: "이복현 금감원장 5일부로 퇴임 산은·수출입은행장 줄줄이 만료 금융위에 도규상·김용범 하마평 금감원장은 김병욱·홍성국 물망 이재명 대통령 당선과 새롭게 출발할 첫 금융수장 인선에 관심이 쏠리고 있다. 새 정부 출범과",
  press: "디지털타임스",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/029/2025/06/04/2959409.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "새 정부 훈풍 타고 금융주 랠리…정책 기대감에 증시 활기",
  url: "https://n.news.naver.com/mnews/article/243/0000079077",
  description: "이재명 대통령의 새 정부 출범과 함께 금융주가 급등세를 보이며 증시 전반에 활기를 불어넣고 있다. 지주사와 증권주를 중심으로 한 금융업종이 정책 수혜 기대감에 힘입어 일제히 상승세를 나타내고 있다. 4일 코스피 지수",
  press: "이코노미스트",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/243/2025/06/04/79077.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "체코 법원, 한수원 ‘원전계약 금지’ 가처분 결정 취소...최종 계약 청신호",
  url: "https://n.news.naver.com/mnews/article/366/0001082895",
  description: "체코 최고행정법원이 한국수력원자력(한수원)과 체코전력공사(CEZ) 산하 두코바니 II 원자력발전사(EDU II)가 제기한 소송에서 이들의 손을 들어주며 가처분 결정을 취소했다. 이번 판결로 한수원과 CEZ가 이른 시",
  press: "조선비즈",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/366/2025/06/04/1082895.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "‘예산-정책 분리’ 예고된 기재부… 이 대통령 “일단 추경부터”",
  url: "https://n.news.naver.com/mnews/article/005/0001781083",
  description: "이재명정부가 닻을 올리면서 한국 경제 컨트롤타워이자 한 해 600조원 넘는 정부 예산을 편성하는 기획재정부 조직개편에 눈길이 쏠리고 있다. 이 대통령이 공약한 기재부의 ‘예산 기능 분리’가 연내 이뤄지면 2008년",
  press: "국민일보",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/005/2025/06/04/1781083.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "“2~3주 안에 더 세게” 공언… 상법 개정 속도 붙나",
  url: "https://n.news.naver.com/mnews/article/005/0001781082",
  description: "이재명 대통령 임기가 4일 시작되면서 상법 개정안 추진 속도에 시장의 관심이 집중되고 있다. 이 대통령은 대선 과정에서 상법 개정안을 빠르게 재추진하겠다고 여러 차례 밝힌 바 있다. 발언대로라면 이달 통과도 가능하다",
  press: "국민일보",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/005/2025/06/04/1781082.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "코스피 ‘허니문 랠리’ 기대감? 외국인 1조 순매수",
  url: "https://n.news.naver.com/mnews/article/658/0000109298",
  description: "- 대선 1년 후 평균 16.9% 상승 - 전문가 “정책 확인 중기대응해야” 이재명 대통령이 4일 취임하면서 첫 거래일인 이날 코스피가 3% 가까이 급등하며 새 정부에 대한 기대감을 나타냈다. 증권가에서는 당분간 이",
  press: "국제신문",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/658/2025/06/04/109298.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "북극항로 전초기지화…해수부·해운사 이전 로드맵 속도를",
  url: "https://n.news.naver.com/mnews/article/658/0000109296",
  description: "- 과반 1당 공약 현실화 가능성 커 - 연내 ‘해양수도 부산’ 윤곽 관건 - HMM 한정 않고 기업 유치 필요 - 산은 이전 ‘백지’ 금융전문성 우려 - 다른 금융공기업 이전 중단 없길 부산항에서 수에즈운하를 통과",
  press: "국제신문",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/658/2025/06/04/109296.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "[이재명 정부] ‘기대 반, 걱정 반’ 재계… 노란봉투법·상법 개정안 우려",
  url: "https://n.news.naver.com/mnews/article/029/0002959408",
  description: "'6대 성장엔진' 육성 함께 반도체 특별법 조기 제정 4.5일제 등 노동시간 축소·더 강화된 상법개정 앞둬 이재명 대통령이 4일부터 임기를 시작한 가운데, 재계에서는 앞으로의 경제 정책 방향에 대해 '기대 반, 걱정",
  press: "디지털타임스",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/029/2025/06/04/2959408.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "[테헤란로] 총수의 봉투, 대통령의 봉투",
  url: "https://n.news.naver.com/mnews/article/014/0005359261",
  description: "2008년 4월 28일 이명박(MB) 정부 출범 첫해 청와대에서 열린 대기업 총수 초청 행사장. 정몽구 당시 현대자동차그룹 회장은 서류봉투를 꼭 쥔 채 입장했다. 정 회장은 MB와의 차담회, 단체사진 촬영 현장에서도",
  press: "파이낸셜뉴스",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/014/2025/06/04/5359261.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "체코 두코바니 원전 ‘계약 금지 가처분’ 취소",
  url: "https://n.news.naver.com/mnews/article/011/0004493529",
  description: "프랑스의 견제에 멈춰 섰던 체코 두코바니 원자력발전소 5·6호기 사업의 수주 계약이 조만간 재개될 것으로 보인다. 체코 최고 행정법원이 프랑스전력공사(EDF)가 제기했던 원전 계약 금지 가처분 신청을 취소했기 때문이",
  press: "서울경제",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/011/2025/06/04/4493529.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "체코 대법원, 원전계약 금지 가처분 취소…한수원 수주 계약 '청신호'",
  url: "https://n.news.naver.com/mnews/article/003/0013286767",
  description: "체코 대법원이 한국수력원자력과의 신규 원전 계약 체결을 금지했던 가처분 명령을 취소하면서, 한수원의 신규 원전 수주 계약에 청신호가 들어왔다. 체코 최고행정법원은 4일(현지 시간) 한수원과의 신규 원전 계약 체결을",
  press: "뉴시스",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/003/2025/06/04/13286767.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "'코스피 5000시대 기대' 2770선 뚫었다...연고점 경신",
  url: "https://n.news.naver.com/mnews/article/052/0002201769",
  description: "'코스피 5000 시대'를 열겠다는 이재명 대통령의 취임 첫날 우리 증시엔 훈풍이 불었습니다. 새 정부의 증시 부양과 주주 환원 정책 기대감에 코스피는 10개월 만에 2770선을 뚫었고 코스닥지수는 750선 위로 올",
  press: "YTN",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/052/2025/06/04/2201769.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "관세 협상·민생 안정·저성장 탈출… 출발부터 과제 산적",
  url: "https://n.news.naver.com/mnews/article/082/0001329157",
  description: "이재명 정부가 0%대 저성장, 미국과의 관세 협상, 부동산 시장 불안 등의 시급한 경제 과제를 안고 4일 출발했다. 새 정부는 과감한 재정 정책으로 경기 부양에 나설 것으로 예상된다. 또 각종 산업 진행 정책으로 신",
  press: "부산일보",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/082/2025/06/04/1329157.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "\"진보정권, 우클릭해야 성공…DJ 때처럼 과감한 노동개혁 나서야\"",
  url: "https://n.news.naver.com/mnews/article/015/0005140778",
  description: "박승 전 한국은행 총재는 현재 한국 경제가 1990년대 말 외환위기나 2008년 글로벌 금융위기 때보다 더 심각한 위기에 처해 있다고 진단했다. 당시와 달리 한국 경제의 성장 엔진이 꺼지고 있다는 점에서다. 박 전",
  press: "한국경제",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140778.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "분양때 몰랐던 '단지 내 군사시설' 설치 논란",
  url: "https://n.news.naver.com/mnews/article/014/0005359234",
  description: "서울 강북구의 한 아파트 단지에 대공진지로 추정되는 군사시설이 입주민들 모르게 뒤늦게 설치되고 있어 논란이다. 분양자의 재산권 보호와 군사시설의 보안 유지가 충돌하는 상황이지만 이를 조율할 명확한 안내 지침은 부재한",
  press: "파이낸셜뉴스",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/014/2025/06/04/5359234.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "태안화력 김충현씨 사망사고, 충남경찰청 전담수사팀이 맡는다(종합)",
  url: "https://n.news.naver.com/mnews/article/001/0015432852",
  description: "안전사고조사팀 전원 투입…\"공작기계 회전축 덮개 열린 채 작동\" 유족·대책위 \"사고 현장 왜 치웠나\" 항의…각계각층 진상규명 촉구 성명 태안화력발전소 비정규직 근로자 김충현 씨 사망 사고를 수사 중인 경찰이 전담팀을",
  press: "연합뉴스",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/001/2025/06/04/15432852.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "체코 법원, 한수원 원전계약 금지 가처분 취소⋯계약 '청신호'",
  url: "https://n.news.naver.com/mnews/article/031/0000937846",
  description: "체코 법원이 한국수력원자력(한수원)과 체코 두코바니 신규 원전 발주사의 최종계약을 금지한 가처분 결정을 취소했다. 체코 최고행정법원은 4일(현지시간) 지난달 브르노 지방법원의 계약금지 가처분 결정을 취소한다고 확인했",
  press: "아이뉴스24",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/031/2025/06/04/937846.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "악재 속에서도 계속되는 랠리, 이번주 중대한 시험대[오미주]",
  url: "https://n.news.naver.com/mnews/article/008/0005203562",
  description: "미국 증시가 관세 정책을 둘러싼 혼란과 재정적자 급증에 대한 우려, 이에 따른 국채수익률 고공행진에도 랠리를 이어가고 있다. 미국 증시는 3일(현지시간) 상승하며 S&P500지수와 나스닥지수는 2일째, 다우존스지수는",
  press: "머니투데이",
  date: "2025-06-04 12:26:47",
  image: "https://mimgnews.pstatic.net/image/origin/008/2025/06/04/5203562.jpg?type=nf220_150",
  category: "경제"
},
  {
  title: "부산서 70대 운전 택시 인도 돌진 4명 부상",
  url: "https://n.news.naver.com/mnews/article/057/0001889855",
  description: "오늘 오후 3시 11분쯤 부산 사하구 장림동 도시철도 신장림역 4번 출구 부근에서 택시가 갑자기 인도로 돌진해 보행자와 주차된 차량 2대를 잇달아 들이받았습니다. 이 사고로 70대 택시 기사와 보행자 등 4명이 다쳐",
  press: "MBN",
  date: null,
  image: null,
  category: "문화"
},
  {
  title: "EBS “6월 모평 국어, 작년 수능보다 다소 쉽게 출제”",
  url: "https://n.news.naver.com/mnews/article/366/0001082678",
  description: "EBS 교재 연계율 51.1%… “체감 연계율 더 높았을 것” “표준점수 최고점, 작년 9월(129점)~수능(139점) 예상” 학원가 “작년 수능과 비슷… 문학, 상대적으로 어려워” 2026학년도 대학수학능력시험(수",
  press: "조선비즈",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/366/2025/06/04/1082678.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "의사협회 \"의대생·전공의 복귀, 새 정부 '최우선 과제'로 삼아달라\"",
  url: "https://n.news.naver.com/mnews/article/008/0005203438",
  description: "대한의사협회(의협)가 이재명 대통령을 향해 \"의료 위기는 비단 의료계에만 국한되지 않은, 국민 건강과 국가 안보에 직결된 중대한 사안\"이라며 \"(의정갈등 해결을) 국정 최우선 과제로 삼아달라\"고 요청했다. 김택우 의",
  press: "머니투데이",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/008/2025/06/04/5203438.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "'욱일기'·'조센징' 한성대에 혐오 표현물 전시‥적발되자 자진 철거",
  url: "https://n.news.naver.com/mnews/article/214/0001428293",
  description: "지난밤 한성대학교에 일본 제국주의를 상징하는 '욱일기'와 혐오 표현 전시물이 설치되는 소동이 벌어졌습니다. 한성대학교는 어젯밤 11시 10분쯤 욱일기와 함께 '역겨운 조센징들은 부끄러움을 모른다'며 조선인을 비하하는",
  press: "MBC",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/214/2025/06/04/1428293.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "“당선 경축” 곳곳 현수막…‘첫 동문 대통령’에 들썩인 ‘이곳’ [포착]",
  url: "https://n.news.naver.com/mnews/article/081/0003546438",
  description: "이재명 대통령의 모교인 중앙대학교가 현수막과 스크린을 통해 당선 축하 메시지를 전했다. 이 대통령 임기 첫날인 4일 오전 서울 동작구 중앙대 서울캠퍼스에 ‘중앙의 아들 이재명 학우 제21대 대통령 당선 경축’이 적힌",
  press: "서울신문",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/081/2025/06/04/3546438.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "\"1억6천 빚 때문에\"…처자식 바다 빠뜨려 살해한 40대 '구속'",
  url: "https://n.news.naver.com/mnews/article/014/0005359274",
  description: "처자식 3명을 차에 태우고 바다로 돌진해 이들을 숨지게 한 40대 가장이 경찰에 구속됐다. 4일 연합뉴스에 따르면 광주 북부경찰서는 이날 살인 및 자살방조 혐의로 지모 씨(49)를 구속했다. 김호석 광주지법 영장 전",
  press: "파이낸셜뉴스",
  date: "2025-06-04 13:16:48",
  image: "https://mimgnews.pstatic.net/image/origin/014/2025/06/04/5359274.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "청소년 절반이 이재명 택했다…2등은 ‘이준석’ 20% 육박",
  url: "https://n.news.naver.com/mnews/article/016/0002480742",
  description: "제21대 대통령 당선이 확실시되는 이재명 더불어민주당 대선 후보가 4일 서울 여의도 국회 인근에서 당 주최로 열린 국민개표방송 행사에 참석해 시민들을 향해 인사하고 있다. 2025.6.4 [공동취재] [연합] 청소년",
  press: "헤럴드경제",
  date: "2025-06-04 13:12:48",
  image: "https://mimgnews.pstatic.net/image/origin/016/2025/06/04/2480742.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "[단독]대선 결과 두고 다투다…지인 상대 흉기 위협",
  url: "https://n.news.naver.com/mnews/article/449/0000310935",
  description: "선거 결과를 두고 말다툼을 벌이다 흉기 난동이 벌어지기도 했습니다. 술자리에서 자신이 지지한 후보의 패배를 조롱했다며 흉기를 들고 수백 미터를 쫒아가 지인을 위협한 50대 남성이 체포됐습니다. 홍지혜 기",
  press: "채널A",
  date: "2025-06-04 13:05:48",
  image: "https://mimgnews.pstatic.net/image/origin/449/2025/06/04/310935.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "\"YTN, 유진에 넘어간 뒤 '내란 세력 받아쓰기 1등'…언론 정상화해야\"",
  url: "https://n.news.naver.com/mnews/article/006/0000130313",
  description: "전국언론노동조합 YTN지부가 6·3 대선으로 이재명 정부가 출범한 첫날 \"YTN은 내란 정권의 불법 매각으로 민간자본 유진그룹에 넘어간 뒤 내란 세력 받아쓰기 1등 매체로 전락했다\"며 \"민주주의 복원의 시작은 언론정",
  press: "미디어오늘",
  date: "2025-06-04 13:04:48",
  image: "https://mimgnews.pstatic.net/image/origin/006/2025/06/04/130313.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "\"내란 종식, 다음은 언론개혁이다\"... 언론계 '정상화' 요구",
  url: "https://n.news.naver.com/mnews/article/127/0000037768",
  description: "4일 취임한 이재명 대통령을 향해 언론·시민사회가 ‘언론개혁’, ‘언론 정상화’ 요구를 쏟아냈다. 공영방송 이사회의 정치적 후견주의를 최소화할 ‘방송3법’ 개정 요구가 드높은 가운데, 언론자유를 ‘입틀막’ 한 윤석열",
  press: "기자협회보",
  date: "2025-06-04 13:02:48",
  image: "https://mimgnews.pstatic.net/image/origin/127/2025/06/04/37768.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "번번이 막혔던 진상 규명‥특검법으로 뚫는다",
  url: "https://n.news.naver.com/mnews/article/214/0001428352",
  description: "◀ 앵커 ▶ 윤석열 전 대통령 부부를 둘러싼 각종 의혹들은 여전히 진상 규명이 더딥니다. 윤 전 대통령의 거부권 행사로 번번이 가로막았던 특검법도 이제 막을 사람이 없어 국회를 통과하면 곧바로 현실화돼 특검 수사로",
  press: "MBC",
  date: "2025-06-04 13:00:48",
  image: "https://mimgnews.pstatic.net/image/origin/214/2025/06/04/1428352.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "취임 첫날 '대법관 증원법' 추진…대통령 만난 야당 대표 반발",
  url: "https://n.news.naver.com/mnews/article/437/0000443435",
  description: "이재명 대통령은 오늘(4일) 여러 차례 통합을 강조했지만, 여야는 취임 첫날부터 대법관 증원 문제를 놓고 신경전을 벌였습니다. 민주당이 대법관을 30명으로 늘리는 법안을 다시 추진하고 나서자 국민의힘이 반발한 겁니다",
  press: "JTBC",
  date: "2025-06-04 13:00:48",
  image: "https://mimgnews.pstatic.net/image/origin/437/2025/06/04/443435.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "초등학생에 극우 역사관 주입? 리박스쿨 '늘봄강사' 실태조사",
  url: "https://n.news.naver.com/mnews/article/437/0000443434",
  description: "선거 막바지 논란이 불거진 극우 성향 단체 '리박스쿨'에 대해 교육부가 실태조사에 나섰습니다. 이 단체가 일선 초등학교에 늘봄 강사를 파견해 극우 역사관을 가르치려 했다는 의혹 때문입니다. 이한길 기자입니다. 이승만",
  press: "JTBC",
  date: "2025-06-04 12:57:48",
  image: "https://mimgnews.pstatic.net/image/origin/437/2025/06/04/443434.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "구체화되는 'VIP 격노설'…800-7070 발신지, 尹 사용공간",
  url: "https://n.news.naver.com/mnews/article/079/0004031948",
  description: "순직 해병 수사외압 사건을 수사 중인 고위공직자범죄수사처(공수처)가 당시 이종섭 전 국방부 장관에게 전화가 걸려온 장소를 윤석열 전 대통령이 사용하던 공간들로 특정했다. 윤 전 대통령이 임성근 전 해병대1사단장 등",
  press: "노컷뉴스",
  date: "2025-06-04 12:56:48",
  image: "https://mimgnews.pstatic.net/image/origin/079/2025/06/04/4031948.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "'거부권' 장벽 사라졌다…윤 부부 관련 '특검법 3종' 처리 예고",
  url: "https://n.news.naver.com/mnews/article/437/0000443432",
  description: "이재명 정부 출범과 동시에 윤 전 대통령 부부에 대한 특검이 다시 추진되고 있습니다. '대통령 거부권'이라는 장벽이 사라진 만큼 민주당은 내란 특검법, 김건희 여사 특검법, 채 상병 사건 특검법까지 모두 처리하겠다는",
  press: "JTBC",
  date: "2025-06-04 12:54:48",
  image: "https://mimgnews.pstatic.net/image/origin/437/2025/06/04/443432.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "빚 때문에 가족 3명 태워 바다 돌진한 40대 가장 구속",
  url: "https://n.news.naver.com/mnews/article/057/0001889880",
  description: "전라남도 진도의 한 포구에서 가족과 함께 차를 타고 물속에 빠졌다가 홀로 살아남은 40대 가장이 조금 전 구속됐습니다. 경제적으로 힘들어서 가족이 모두 죽으려고 했다고 경찰에 진술했지만, 경찰은 혼자 살아남은 경위",
  press: "MBN",
  date: "2025-06-04 12:53:48",
  image: "https://mimgnews.pstatic.net/image/origin/057/2025/06/04/1889880.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "도면 그려가며 작업했는데…한전KPS 작업지시 없었다?",
  url: "https://n.news.naver.com/mnews/article/028/0002749423",
  description: "한국서부발전 태안화력발전소에서 지난 2일 하청노동자 김충현(50)씨가 기계에 끼여 숨진 가운데, 당시 사고 현장에 그가 작업하던 금속물과 낡은 발전설비 부품, 도면 등이 있었던 것으로 파악됐다. 원청인 한전케이피에스",
  press: "한겨레",
  date: "2025-06-04 12:52:48",
  image: "https://mimgnews.pstatic.net/image/origin/028/2025/06/04/2749423.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "대통령 근접 경호 두고 경찰·경호처 신경전…\"주도권 다툼 격화\"",
  url: "https://n.news.naver.com/mnews/article/057/0001889879",
  description: "이재명 대통령의 취임 첫날, 국회 로텐더홀에서는 보기 드문 장면이 나왔습니다. 대통령 경호를 두고 경찰과 경호처 간 갈등이 수면 위로 드러난 겁니다. 박혜빈 기자가 보도합니다. 【 기자 】 21대 대통령 취임식이 열",
  press: "MBN",
  date: "2025-06-04 12:51:48",
  image: "https://mimgnews.pstatic.net/image/origin/057/2025/06/04/1889879.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "부산서 인도로 택시 돌진, 행인 등 다쳐···70대 운전자 “급발진” 주장",
  url: "https://n.news.naver.com/mnews/article/032/0003374132",
  description: "부산에서 70대 운전자가 몰던 택시가 인도로 돌진해 행인 3명이 다쳤다. 4일 오후 3시13분쯤 부산 사하구 장림동의 한 도로를 달리던 택시가 인도로 돌진해 보행자와 주차된 차량 2대를 잇달아 충격한 뒤 무더위 쉼터",
  press: "경향신문",
  date: "2025-06-04 12:51:48",
  image: "https://mimgnews.pstatic.net/image/origin/032/2025/06/04/3374132.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "[뉴스추적] 검사만 120명 투입되는 '3대 특검'…수사 방향은?",
  url: "https://n.news.naver.com/mnews/article/057/0001889878",
  description: "앞선 리포트에 이어서 사회부 법조팀 최희지 기자와 함께 이야기 더 나눠보겠습니다. 최 기자, 초대형 특검이라는 말이 나오고 있는데요. 3개의 특검 법안이 동시에 통과가 되면 필요한 인력 규모는 어느 정도 수준인가요?",
  press: "MBN",
  date: "2025-06-04 12:49:48",
  image: "https://mimgnews.pstatic.net/image/origin/057/2025/06/04/1889878.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "여친에 소주병 던지며 행패 부린 20대…출동 경찰 조치하는 새 추락사",
  url: "https://n.news.naver.com/mnews/article/008/0005203574",
  description: "여자친구에게 행패를 부리다 경찰 조사를 받게 된 20대 남성이 건물에서 뛰어내려 숨졌다. 4일 뉴스1에 따르면 이날 오전 9시38분쯤 경기 하남시 망월동의 한 오피스텔에서 20대 남성 A씨가 난동을 부린다는 112",
  press: "머니투데이",
  date: "2025-06-04 12:49:48",
  image: "https://mimgnews.pstatic.net/image/origin/008/2025/06/04/5203574.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "민주당, '내란·김건희·채 해병' 내일 처리 방침…동시다발 수사 예고",
  url: "https://n.news.naver.com/mnews/article/057/0001889877",
  description: "민주당은 지난 정부 당시 대통령 거부권 행사로 무산됐던 세 개 특검법안을 내일(5일) 본회의에서 처리하겠다고 예고했습니다. 지난 정부 당시 윤석열 전 대통령 부부를 둘러싼 각종 의혹을 특검 수사로 신속히 끝내겠다는",
  press: "MBN",
  date: "2025-06-04 12:47:48",
  image: "https://mimgnews.pstatic.net/image/origin/057/2025/06/04/1889877.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "전국에 서울대 10개 만든다…영유아 교육비 확대 [세상&]",
  url: "https://n.news.naver.com/mnews/article/016/0002480736",
  description: "이재명표 교육개혁 본격화 0~5세 영유아 교육·보육비 점진 확대 국가교육위원회 개편·학교 안전 강화 ‘서울대 10개 만들기’ 계획 돌입 AIDT 교육자료 격하·교권 보호 강화 이재명 더불어민주당 대선대통령가 압도적",
  press: "헤럴드경제",
  date: "2025-06-04 12:46:48",
  image: "https://mimgnews.pstatic.net/image/origin/016/2025/06/04/2480736.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "“여보, 동남아 여행 취소할까”…2년 만에 바이러스 감염 환자 발생 ‘비상’",
  url: "https://n.news.naver.com/mnews/article/016/0002480735",
  description: "최근 국내에서 2년 만에 지카바이러스에 감염된 환자가 발생한 가운데, 질병관리청이 동남아를 포함한 감염 위험국을 방문할 때 모기 등을 주의하라고 당부했다. 4일 질병청과 제주도에 따르면 40대 남성 A씨가 인도네시아",
  press: "헤럴드경제",
  date: "2025-06-04 12:43:48",
  image: "https://mimgnews.pstatic.net/image/origin/016/2025/06/04/2480735.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "생활고 때문에…처자식 태우고 바다로 돌진한 40대 가장 구속",
  url: "https://n.news.naver.com/mnews/article/025/0003445854",
  description: "생활고를 겪다 처자식 3명을 숨지게 한 40대 가장이 경찰에 구속됐다. 광주 북부경찰서는 4일 살인 및 자살방조 혐의로 지모(49)씨를 구속했다. 김호석 광주지법 영장 전담 부장판사는 이날 지씨의 구속 전 피의자 심",
  press: "중앙일보",
  date: "2025-06-04 12:42:48",
  image: "https://mimgnews.pstatic.net/image/origin/025/2025/06/04/3445854.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "[영상]파란옷 입은 김문수, 낙선 첫날 여기 갔다…\"아이고 좋아\"",
  url: "https://n.news.naver.com/mnews/article/008/0005203569",
  description: "제21대 대통령선거에서 낙선한 김문수 전 국민의힘 대선후보가 서울 관악산에 올라 턱걸이를 했다. 김문수 선거캠프 비서실장을 맡았던 김재원 전 국민의힘 최고위원은 4일 페이스북에 김 전 후보가 턱걸이하고 훌라후프를 돌",
  press: "머니투데이",
  date: "2025-06-04 12:36:48",
  image: "https://mimgnews.pstatic.net/image/origin/008/2025/06/04/5203569.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "버스기사 때리고 도망간 오토바이 운전자…\"술 냄새\" 피해자 진술",
  url: "https://n.news.naver.com/mnews/article/008/0005203568",
  description: "오토바이 운전자가 시내버스 기사를 폭행한 뒤 달아나는 일이 벌어졌다. 4일 뉴스1에 따르면 이날 오전 6시40분쯤 충북 청주시 상당구의 한 교차로에서 50대 오토바이 운전자 A씨가 60대 시내버스 기사 B씨를 폭행한",
  press: "머니투데이",
  date: "2025-06-04 12:34:48",
  image: "https://mimgnews.pstatic.net/image/origin/008/2025/06/04/5203568.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "아내와 두 아들 차에 태워 바다에 빠트린 후 홀로 탈출한 40대 가장 구속",
  url: "https://n.news.naver.com/mnews/article/081/0003546508",
  description: "생활고를 이유로 전남 진도에서 아내와 두 아들을 차에 태운 뒤 바다에 빠트려 숨지게 한 40대 가장이 구속됐다. 김호석 광주지법 영장 전담 부장판사는 4일 살인·자살방조 혐의를 받는 지모(49)씨에 대한 구속영장을",
  press: "서울신문",
  date: "2025-06-04 12:33:48",
  image: "https://mimgnews.pstatic.net/image/origin/081/2025/06/04/3546508.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "\"아들에 미안하지 않나\" 물었더니⋯처자식 태우고 바다 돌진 40대父, 구속",
  url: "https://n.news.naver.com/mnews/article/031/0000937872",
  description: "차를 몰고 진도항 바다로 돌진해 처자식 3명을 숨지게 한 40대 가장이 경찰에 구속됐다. 광주 북부경찰서는 4일 살인 및 자살방조 혐의로 지모(49) 씨를 구속했다. 김호석 광주지법 영장 전담 부장판사는 이날 지씨의",
  press: "아이뉴스24",
  date: "2025-06-04 12:29:48",
  image: "https://mimgnews.pstatic.net/image/origin/031/2025/06/04/937872.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "'처자식 태우고 차량 바다 돌진' 40대 가장 구속",
  url: "https://n.news.naver.com/mnews/article/047/0002476216",
  description: "▲ 일가족 살해 40대 가장 구속 생활고 등의 이유로 처자식 3명을 태운 차량을 진도항 앞바다에 돌진해 사망에 이르게 한 혐의(살인 및 자살방조)를 받는 A(49)씨가 4일 오전 광주지방법원에서 열린 구속 전 피의자",
  press: "오마이뉴스",
  date: "2025-06-04 12:28:48",
  image: "https://mimgnews.pstatic.net/image/origin/047/2025/06/04/2476216.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "'수면제 먹이고 바다로'…아내·두 아들 숨지게 한 40대 가장 구속",
  url: "https://n.news.naver.com/mnews/article/079/0004031943",
  description: "차량을 전남 진도의 바다로 돌진시켜 가족을 숨지게 한 40대 가장이 구속됐다. 광주지방법원 김호석 영장전담 부장판사는 4일 살인 등 혐의로 지모(49)씨에 대한 구속영장을 발부했다. 김 부장판사는 \"도주의 우려가 있",
  press: "노컷뉴스",
  date: "2025-06-04 12:27:48",
  image: "https://mimgnews.pstatic.net/image/origin/079/2025/06/04/4031943.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "처자식 수면제 탄 음료 먹이고 바다로 돌진한 40대 가장 구속",
  url: "https://n.news.naver.com/mnews/article/009/0005503777",
  description: "생활고를 이유로 처자식 3명을 숨지게 한 40대 가장이 경찰에 구속됐다. 광주 북부경찰서는 4일 살인 및 자살방조 혐의로 지모(49) 씨를 구속했다. 김호석 광주지법 영장 전담 부장판사는 이날 지씨의 구속 전 피의자",
  press: "매일경제",
  date: "2025-06-04 12:27:48",
  image: "https://mimgnews.pstatic.net/image/origin/009/2025/06/04/5503777.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "추돌 사망사고 낸 뒤 신고만 하고 출근 40대, 직장서 체포",
  url: "https://n.news.naver.com/mnews/article/422/0000746653",
  description: "뺑소니 사고를 내고 직장에 출근한 40대가 경찰에 구속됐습니다. 울산 북부경찰서는 오늘(4일) 특정범죄 가중처벌 등에 관한 법률상 도주치사 혐의로 40대 A씨를 구속했습니다. A씨는 지난 2일 오전 7시 7분쯤 울산",
  press: "연합뉴스TV",
  date: "2025-06-04 12:26:48",
  image: "https://mimgnews.pstatic.net/image/origin/422/2025/06/04/746653.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "처자식 3명 태우고 바다로 돌진한 40대 '구속'…\"도망 우려\"",
  url: "https://n.news.naver.com/mnews/article/015/0005140782",
  description: "1억6000만원의 빚 등의 이유로 생활고를 겪다 처자식 3명을 숨지게 한 40대 가장이 구속됐다. 광주 북부경찰서는 4일 살인 및 자살방조 혐의로 지모씨(49)를 구속했다고 밝혔다. 광주지법 김호석 영장 전담 부장판",
  press: "한국경제",
  date: "2025-06-04 12:26:48",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140782.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "광주·부천 아파트에서 한밤중 화재...\"배터리 발화 추정\"",
  url: "https://n.news.naver.com/mnews/article/052/0002201788",
  description: "광주 장덕동에 있는 아파트에서 충전 중이던 배터리에서 불이 나 주민 1명이 숨졌습니다. 경기 부천의 아파트에서도 복도에 세워둔 전기 자전거에서 불이나 주민 수십 명이 한밤중 대피해야 했습니다. 김태원 기자가 보도합니",
  press: "YTN",
  date: "2025-06-04 12:26:48",
  image: "https://mimgnews.pstatic.net/image/origin/052/2025/06/04/2201788.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "2주 뒤 李 공직선거법 재판…올스톱?",
  url: "https://n.news.naver.com/mnews/article/449/0000310918",
  description: "당장 2주 뒤 이재명 대통령의 공직선거법 위반 혐의 항소심 재판이 잡혀 있죠. 현역 대통령 재판이 실제로 열릴까요? 그 사이 대통령의 형사재판을 정지시키는 법이 국회 통과할지 변수입니다. 민주당 이번주는 일단 처리하",
  press: "채널A",
  date: "2025-06-04 12:26:48",
  image: "https://mimgnews.pstatic.net/image/origin/449/2025/06/04/310918.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "\"1억6천 빚 때문에\"…처자식 바다 빠뜨려 살해한 40대 구속",
  url: "https://n.news.naver.com/mnews/article/119/0002964820",
  description: "처자식 3명을 차에 태우고 바다로 돌진해 이들을 숨지게 한 40대 가장이 경찰에 구속됐다. 4일 연합뉴스에 따르면 광주 북부경찰서는 이날 살인 및 자살방조 혐의로 지모(49) 씨를 구속했다. 김호석 광주지법 영장 전",
  press: "데일리안",
  date: "2025-06-04 12:26:48",
  image: "https://mimgnews.pstatic.net/image/origin/119/2025/06/04/2964820.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "강훈식 국회의원 대통령실 비서실장 지명으로 의원직 사직",
  url: "https://n.news.naver.com/mnews/article/002/0002391749",
  description: "내년 6월 전국동시지방선거와 함께 재보궐 선거 예상…새 정부 출범 이후 첫 선거 정치적 의미 커 4일 이재명 대통령이 강훈식 더불어민주당 의원을 초대 대통령 비서실장으로 지명하면서, 강 의원의 국회의원직 사직이 불가",
  press: "프레시안",
  date: "2025-06-04 12:26:48",
  image: "https://mimgnews.pstatic.net/image/origin/002/2025/06/04/2391749.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "이재명 대통령 '경호처 불신' 반영됐나…경찰이 근접 경호 유지",
  url: "https://n.news.naver.com/mnews/article/079/0004031942",
  description: "이재명 대통령에 대한 경찰의 경호 업무가 대통령경호처(경호처)로 완전히 넘어가지 않고 유지되고 있다. 통상 대통령이 당선되면 경호 업무는 경호처 소관이 되지만 이례적으로 경찰 전담경호대가 여전히 주도적인 역할을 하고",
  press: "노컷뉴스",
  date: "2025-06-04 12:26:48",
  image: "https://mimgnews.pstatic.net/image/origin/079/2025/06/04/4031942.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "역대 최대 응시생 몰린 6월 모의평가…“지난해 수능과 비슷”",
  url: "https://n.news.naver.com/mnews/article/056/0011964653",
  description: "2026학년도 수능 시험의 경향 등을 가늠할 수 있는 첫 모의평가가 오늘(4일) 치러졌습니다. 50만 명이라는 역대 최대 규모의 응시생이 몰린 가운데, 이른바 '킬러 문항'을 배제하는 기조는 그대로 유지된 것으로 분",
  press: "KBS",
  date: "2025-06-04 12:26:48",
  image: "https://mimgnews.pstatic.net/image/origin/056/2025/06/04/11964653.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "‘처자식 3명 바다 추락 살해 혐의’ 40대 가장 구속",
  url: "https://n.news.naver.com/mnews/article/020/0003639327",
  description: "진도항 인근 바다로 승용차를 몰고 돌진해 일가족을 살해한 혐의를 받는 40대 가장이 구속됐다. 광주지법 김호석 영장전담 부장판사는 4일 살인·자살방조 혐의로 긴급체포된 지 모씨(49)에 대한 구속 영장을 발부했다.",
  press: "동아일보",
  date: "2025-06-04 12:26:48",
  image: "https://mimgnews.pstatic.net/image/origin/020/2025/06/04/3639327.jpg?type=nf220_150",
  category: "문화"
},
  {
  title: "푸틴 측근 쇼이구, 김정은과 회동 예정…“북러 조약 조항이행 논의”",
  url: "https://n.news.naver.com/mnews/article/028/0002749335",
  description: "블라디미르 푸틴 러시아 대통령의 측근인 세르게이 쇼이구 러시아 국가안보회의 서기가 북한을 방문했다. 4일 타스 통신은 쇼이구 서기가 이날 푸틴 대통령의 지시를 받고 평양에 도착했으며, 김정은 북한 국무위원장을 만날",
  press: "한겨레",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/028/2025/06/04/2749335.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "결국 트럼프 철강 관세 50% 인상...사면초가된 철강업계",
  url: "https://n.news.naver.com/mnews/article/437/0000443381",
  description: "도널드 트럼프 미국 대통령이 3일(현지시간) 미국으로 수입되는 외국산 철강·알루미늄 제품에 대한 관세율을 25%에서 50%로 인상하는 포고문에 서명했습니다. 인상된 관세율은 한국 시각으로 오후 1시 1분부터 발효됩니",
  press: "JTBC",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/437/2025/06/04/443381.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "시진핑 \"李대통령 당선 축하, 한국과의 관계 고도로 중시\"",
  url: "https://n.news.naver.com/mnews/article/088/0000951608",
  description: "시진핑 중국 국가주석이 4일 이재명 대통령에게 당선 축하 전문을 보냈다. 관영 신화통신에 따르면 시 주석은 축전에서 \"중국과 한국은 중요한 이웃이자 협력 동반자\"라며 \"수교 33년 이래 양국은 이데올로기와 사회 제도",
  press: "매일신문",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/088/2025/06/04/951608.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "[속보] EU \"이 대통령 당선 축하...전략적 파트너십 심화\"",
  url: "https://n.news.naver.com/mnews/article/052/0002201524",
  description: "EU \"이 대통령 당선 축하…전략적 파트너십 심화\" ◇ 자세한 뉴스는 곧 이어집니다.",
  press: "YTN",
  date: null,
  image: null,
  category: "세계"
},
  {
  title: "중국, 한중관계 개선 기대감…“윤 전 대통령 심판한 선거”",
  url: "https://n.news.naver.com/mnews/article/056/0011964533",
  description: "미국과의 경쟁 속에 주변국 관계 개선도 필요한 중국은 이재명 대통령의 외교 정책에 주목하고 있습니다. 한중 관계 개선에 대한 기대감도 나오고 있는데요. 이어서 베이징 김민정 특파원입니다. [리포트] 이재명 대통령 당",
  press: "KBS",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/056/2025/06/04/11964533.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "태국, 신형 스웨덴 그리펜 전투기 12대 도입한다",
  url: "https://n.news.naver.com/mnews/article/001/0015432952",
  description: "박진형 특파원 = 태국 정부가 스웨덴 사브사의 JAS 39 그리펜 E/F 전투기 12대를 향후 10년에 걸쳐 도입하기로 했다. 4일(현지시간) 로이터·AFP·블룸버그 통신에 따르면 뿐빡디 빠따나꾼 태국 공군참모총장은",
  press: "연합뉴스",
  date: "2025-06-04 13:14:49",
  image: "https://mimgnews.pstatic.net/image/origin/001/2025/06/04/15432952.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "미국도 영국도... “군사력, 드론에 달려”",
  url: "https://n.news.naver.com/mnews/article/023/0003909242",
  description: "미국·영국 등 주요 국가들은 드론(무인기) 전력을 강화하는 국방 전략을 속속 도입하고 있다. 드론이 헬기·전투기 같은 공중 전력은 물론 화포·전차 등 지상 전력까지 포함한 기존 재래식 무기를 대체할 수 있다는 사실이",
  press: "조선일보",
  date: "2025-06-04 13:02:49",
  image: "https://mimgnews.pstatic.net/image/origin/023/2025/06/04/3909242.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "취임 축하하면서도 발끈한 중국 \"미국, 한중 관계 이간질 말라\"",
  url: "https://n.news.naver.com/mnews/article/057/0001889875",
  description: "중국은 이재명 대통령 취임으로 양국 관계가 개선될 것으로 기대했습니다. 시진핑 주석이 \"중요한 이웃\"이라고 쓴 축전을 보내기도 했죠. 그러면서도 중국의 영향력을 언급한 미국에 대해선 불쾌감을 드러냈습니다. 한국 대선",
  press: "MBN",
  date: "2025-06-04 12:43:49",
  image: "https://mimgnews.pstatic.net/image/origin/057/2025/06/04/1889875.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "일본 시골 마을에서 본 우리나라 '하동' 쌀",
  url: "https://n.news.naver.com/mnews/article/047/0002476217",
  description: "일본 시가현 '헤이와도 프랜드 마켓'에서 우리나라 쌀이 전시되어 팔리기 시작했습니다. 그동안 우리나라 먹거리인 김, 김치, 라면, 양념치킨 등이 케이푸드로 팔리기 시작한 지는 오래 되었습니다. 이제 쌀까지 팔리기 시",
  press: "오마이뉴스",
  date: "2025-06-04 12:34:49",
  image: "https://mimgnews.pstatic.net/image/origin/047/2025/06/04/2476217.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "미국판 '홍범도함' 사건? '성소수자 인권달'에 성소수자 운동가 기린 군함명 변경 추진[트럼프 2기]",
  url: "https://n.news.naver.com/mnews/article/002/0002391753",
  description: "바이든 정부 응급임신중지 보장 지침도 폐지…위중한 임신·유산 관련 증상 여성 치료 못 받을 가능성 커져 미국 국방부가 다양성 공격의 일환으로 성소수자 인권운동가를 기린 해군 함정 명칭을 바꾸려 한다는 보도가 나왔다.",
  press: "프레시안",
  date: "2025-06-04 12:29:49",
  image: "https://mimgnews.pstatic.net/image/origin/002/2025/06/04/2391753.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "러 조기경보기 7대뿐인데…“우크라 기습에 A-50 2대 파손”",
  url: "https://n.news.naver.com/mnews/article/056/0011964655",
  description: "우크라이나 대규모 드론 기습으로 러시아군의 A-50 조기경보기 2대가 파손된 것으로 파악된다고 영국 일간 텔레그래프가 현지시간 4일 보도했습니다. 소련 시절에 제조된 A-50은 러시아의 방공망을 조직하고 우크라이나를",
  press: "KBS",
  date: "2025-06-04 12:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/056/2025/06/04/11964655.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "전화통화 절박해졌나…트럼프 \"시진핑 좋아하지만 협상 어려운 상대\"",
  url: "https://n.news.naver.com/mnews/article/469/0000868586",
  description: "도널드 트럼프 미 대통령이 4일(현지시간) 시진핑 중국 국가주석에 대해 \"매우 힘들고 협상하기에 극도로 어려운 상대\"라고 평했다. 미중 무역 협상이 난항을 겪고 있는 가운데 주석에게 전화통화를 제안하는 절박한 사인으",
  press: "한국일보",
  date: "2025-06-04 12:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/469/2025/06/04/868586.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "체코 법원, 한수원 원전계약 금지 가처분 취소(종합)",
  url: "https://n.news.naver.com/mnews/article/001/0015432885",
  description: "지난달 무산된 최종계약 사법적 장애물은 제거 김계연 특파원 = 체코 법원이 한국수력원자력(한수원)과 체코 두코바니 신규 원전 발주사의 최종계약을 금지한 가처분 결정을 취소했다. 로이터통신은 4일(현지시간) 체코 CT",
  press: "연합뉴스",
  date: "2025-06-04 12:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/001/2025/06/04/15432885.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "대만 \"中, 6·4 톈안먼 진실 직시해야 역사적 오명 벗어\"(종합)",
  url: "https://n.news.naver.com/mnews/article/003/0013286784",
  description: "구자룡 기자, 박정규 특파원 = 대만의 양안 관계 전담 부서인 대륙위원회는 6·4 톈안먼 사건 36주년을 하루 앞둔 3일 \"중국 공산당이 사건의 진실을 직시하지 못하면 결코 역사적 오명을 벗을 수 없을 것\"이라는 성",
  press: "뉴시스",
  date: "2025-06-04 12:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/003/2025/06/04/13286784.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "“먹어보고 싶다” 장원영 한마디에 품절 사태…대만 흔든 ‘이 음료’ 정체",
  url: "https://n.news.naver.com/mnews/article/016/0002480720",
  description: "아이브 장원영. [인스타그램 캡처] 그룹 아이브 멤버 장원영이 대만 콘서트에서 언급한 음료가 때아닌 품절 사태를 빚고 있다. 이에 해당 음료를 판매하는 대만의 프랜차이즈 음료 전문점이 아이브에게 직접 감사 인사를 전",
  press: "헤럴드경제",
  date: "2025-06-04 12:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/016/2025/06/04/2480720.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "멜로니-마크롱, 외교 갈등 봉합…불씨는 남아",
  url: "https://n.news.naver.com/mnews/article/001/0015432855",
  description: "멜로니 대미 독자노선에 마크롱 '왕따 전략' 응수하며 갈등 신창용 특파원 = 최근 극심한 외교적 갈등을 빚었던 조르자 멜로니 이탈리아 총리와 에마뉘엘 마크롱 프랑스 대통령이 마침내 화해의 물꼬를 텄다. 멜로니 총리는",
  press: "연합뉴스",
  date: "2025-06-04 12:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/001/2025/06/04/15432855.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "백악관 \"한미동맹 철통…中의 간섭과 영향력은 우려\"",
  url: "https://n.news.naver.com/mnews/article/015/0005140775",
  description: "미국 백악관이 이재명 대통령 당선에 대해 한국 선거가 공정하게 치러졌다면서도 중국이 전 세계 민주주의에 개입하는 것을 우려한다는 메시지를 내놨다. 통상 당선 축하와 한·미 협력을 강조하고 한국 방어 공약을 약속하는",
  press: "한국경제",
  date: "2025-06-04 12:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140775.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "체코 법원, 李 정부 출범한 날 한수원 원전계약 금지 취소 명령",
  url: "https://n.news.naver.com/mnews/article/016/0002480711",
  description: "체코 두코바니 원자력 발전소의 냉각탑들. [로이터] 체코 법원이 이재명 정부 출범한 날인 4일(현지시간) 한국수력원자력(한수원)과 체코 두코바니 신규 원전 발주사간 ‘계약 중지’ 명령을 취소했다. 로이터통산 등 외신",
  press: "헤럴드경제",
  date: "2025-06-04 12:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/016/2025/06/04/2480711.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "\"소년 노동자서 대통령\" 외신 긴급타전... \"경제살리기로 평가받을 것\" 집중 보도[이재명 대통령 시대]",
  url: "https://n.news.naver.com/mnews/article/014/0005359215",
  description: "외신들은 더불어민주당 후보 이재명의 대통령 당선을 일제히 보도하면서 이력을 파헤치는 것과 함께 앞으로의 과제들을 집중 보도했다. 3일(현지시간) AP와 BBC, 뉴욕타임스(NYT) 등 주요 외신은 가난한 가정에서 태",
  press: "파이낸셜뉴스",
  date: "2025-06-04 12:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/014/2025/06/04/5359215.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "\"역겨운 악법\"… 머스크, 트럼프 감세안 저격",
  url: "https://n.news.naver.com/mnews/article/014/0005359204",
  description: "일론 머스크 테슬라 최고경영자(CEO·사진)가 도널드 트럼프 대통령이 지지하는 감세법안을 역겨운 악법이라고 비난했다. 지난 주까지 트럼프 행정부에서 정부효율부(DOGE) 수장으로서 활동할 때와 매우 상반된 태도다.",
  press: "파이낸셜뉴스",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/014/2025/06/04/5359204.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "톈안먼 36주년에 중국 본토와 홍콩 등에서 경계 강화",
  url: "https://n.news.naver.com/mnews/article/056/0011964624",
  description: "1989년 6월 4일에 일어난 톈안먼(천안문) 민주화 시위 36주년을 맞은 4일 중국과 홍콩에서는 검열과 감시가 강화됐습니다. 로이터통신 등에 따르면 톈안먼 시위 기념일 하루 전인 3일부터 톈안먼 광장 주변에 배치된",
  press: "KBS",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/056/2025/06/04/11964624.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "시진핑, 이재명에 \"한중관계 매우 중시\"...백악관 향해선 \"갈등 조장 말라\"",
  url: "https://n.news.naver.com/mnews/article/469/0000868572",
  description: "중국은 이재명 정부의 출범을 축하하며 한중 관계 발전에 대한 기대감을 드러냈다. 도널드 트럼프 미국 행정부가 이재명 대통령 당선 관련 논평에서 '중국의 영향력 확대'를 언급한 것에 대해서는 \"갈등을 조장하지 말라\"며",
  press: "한국일보",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/469/2025/06/04/868572.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "美 \"철통 동맹\" 외치면서 이례적 中 경계…균형외교 견제하나",
  url: "https://n.news.naver.com/mnews/article/011/0004493493",
  description: "미국 백악관이 한국 대선 결과에 대한 첫 메시지로 ‘철통같은 동맹’을 외치면서도 이례적으로 중국의 영향력을 경계하고 나섰다. 도널드 트럼프 미 행정부가 이재명 대통령의 임기 시작부터 미중 ‘균형 외교’를 견제하고 있",
  press: "서울경제",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/011/2025/06/04/4493493.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "러, 발트해상 나토 훈련에 \"극도로 도발적…러와 충돌 준비 간주\"",
  url: "https://n.news.naver.com/mnews/article/003/0013286732",
  description: "러시아 정부가 북대서양조약기구(NATO·나토)의 발트해 해상 기동 훈련 실시에 강하게 반발했다. 알렉산드르 그루슈코 러시아 외무부 차관은 4일(현지 시간) 타스통신에 \"우리는 나토의 군사활동을 러시아와의 군사적 충돌",
  press: "뉴시스",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/003/2025/06/04/13286732.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "시진핑 \"韓, 중요한 이웃이자 동반자\"…美에 \"중한관계 이간질 말라\" 경고도",
  url: "https://n.news.naver.com/mnews/article/011/0004493490",
  description: "시진핑 중국 국가주석이 4일 이재명 대통령에게 당선 축하 메시지를 보내며 “양국 관계의 발전을 중시한다”고 밝혔다. 대(對)중국 강경책을 펴는 도널드 트럼프 2기 행정부 출범 이후 중국 당국은 주변국이자 미국 동맹인",
  press: "서울경제",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/011/2025/06/04/4493490.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "\"어쩌자고 3대 핵전력을 건드려\"…美, 우크라의 러 전폭기 공격 우려",
  url: "https://n.news.naver.com/mnews/article/421/0008295862",
  description: "이지예 객원기자 = 우크라이나가 러시아의 '3대 핵전력'(Nuclear Triad) 중 하나인 전략 폭격기를 공격하면서 전쟁 격화 위험이 커졌다고 키스 켈로그 미 우크라이나 특사가 3일(현지시간) 경고했다. 로이터통",
  press: "뉴스1",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/421/2025/06/04/8295862.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "톈안먼 36주년에 中 경계 강화…대만 총통은 \"영원히 기억\"",
  url: "https://n.news.naver.com/mnews/article/001/0015432819",
  description: "희생자 유가족·인권운동가 감시…홍콩도 추모집회 차단 1989년 6·4 톈안먼(天安門) 민주화 시위 36주년을 맞은 4일 중국과 홍콩에서는 삼엄한 검열과 감시 속에 긴장이 감돌았다. 반면 대만에서는 총통이 나서 '영원",
  press: "연합뉴스",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/001/2025/06/04/15432819.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "[포착] 우주에서도 ‘시뻘건 용암’ 선명…화산 폭발 위력 이 정도? (영상)",
  url: "https://n.news.naver.com/mnews/article/081/0003546498",
  description: "이탈리아 시칠리아섬 에트나 화산의 대규모 분화 모습이 우주에서도 포착됐다. 지난 2일(현지시간) 유럽에서 가장 활발한 화산인 에트나 화산이 대규모 분화하면서 관광객들이 급히 대피하는 소동이 벌어졌다. 이날 에트나 화",
  press: "서울신문",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/081/2025/06/04/3546498.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "잠수함 방패막 뚫는다…中 'AI 어뢰' 개발 돌입",
  url: "https://n.news.naver.com/mnews/article/011/0004493486",
  description: "가까운 미래에 전개될 수중전에서는 잠수함으로 착각해 오인 발사를 유도하는 ‘교란용 미끼’를 구분할 필요성이 커지는 가운데 중국이 이를 무력화하는 인공지능(AI) 기반의 초고속 어뢰를 개발 중인 것으로 알려졌다. 4일",
  press: "서울경제",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/011/2025/06/04/4493486.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "[이재명 시대, 세계가 주목] \"한국, 엄중한 도전에 직면하게 될 것\"",
  url: "https://n.news.naver.com/mnews/article/088/0000951661",
  description: "이재명 대통령이 1997년 IMF 구제금융 신청 직후 정권을 잡은 김대중 전 대통령 이후 가장 힘든 과제에 직면해 있다는 미국 싱크탱크의 분석이 나왔다. 전략국제문제연구소(CSIS) 빅터 차 한국석좌 등은 3일(현지",
  press: "매일신문",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/088/2025/06/04/951661.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "무역戰 볼모로 잡힌 희토류…글로벌 공장 셧다운 우려",
  url: "https://n.news.naver.com/mnews/article/011/0004493478",
  description: "글로벌 제조 공급망이 희토류 수출에 빗장을 건 중국의 조치에 흔들리고 있다. 유럽 등에서는 희토류를 확보하지 못해 자동차 등 제품 생산이 중단될 위기에 처했다는 아우성이 쏟아지고 있다. 미중 갈등이 관세를 넘어 희토",
  press: "서울경제",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/011/2025/06/04/4493478.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "'트럼프 예산' 상원서 막히나…공화도 \"재정적자 줄여야\"",
  url: "https://n.news.naver.com/mnews/article/015/0005140699",
  description: "도널드 트럼프 미국 대통령이 ‘하나의 크고 아름다운 법안’(One Big Beautiful Bill Act·OBBBA)이라고 이름 붙인 예산안이 최종 관문인 상원에서 난관에 봉착했다. 공화당 상원의원 일부가 재정적자",
  press: "한국경제",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140699.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "2년째 역성장 늪 빠진 獨…기업 감세로 활로 찾는다",
  url: "https://n.news.naver.com/mnews/article/015/0005140697",
  description: "독일 정부가 460억유로(약 71조원) 규모 법인세를 감면한다. 유럽연합(EU) 최대 경제 대국인 독일이 미국의 대EU 고율 관세 위협과 중국과의 경쟁 심화에 직면하자 본격적으로 ‘탈(脫)긴축’ 기조에 시동을 건 것",
  press: "한국경제",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140697.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "워런 버핏 한마디에… 日 개인투자자들, 종합상사 주식 매수 러시",
  url: "https://n.news.naver.com/mnews/article/366/0001082875",
  description: "고배당·기업 개혁에 힘 실리며 미쓰비시·미쓰이 등 상사 주목 버핏 효과에 소매 투자 관심 급증 ‘투자의 귀재’ 워런 버핏이 일본 종합상사 주식에 대한 신뢰를 공개적으로 드러내자 일본 개인 투자자들이 관련 종목으로 몰",
  press: "조선비즈",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/366/2025/06/04/1082875.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "우크라, 드론 공세 이어 크림반도 다리 폭파…러, 국경 공격 계속",
  url: "https://n.news.naver.com/mnews/article/028/0002749394",
  description: "이스탄불 평화협상 직전 러시아 군사시설에 대규모 드론 공세를 퍼부었던 우크라이나가 이번엔 러시아 본토와 크림반도를 연결하는 주요 다를 수중 폭발물로 폭파시켰다고 밝혔다. 러시아는 국경 지대인 우크라이나 수미주를 겨냥",
  press: "한겨레",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/028/2025/06/04/2749394.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "\"李대통령, 국방비·조선업 적극 활용시 한미동맹 새 기회\"(종합)",
  url: "https://n.news.naver.com/mnews/article/421/0008295834",
  description: "이지예 객원기자 = 한국이 방위비 분담과 무역 카드를 잘 활용한다면 이재명 대통령의 '실용주의'와 도널드 트럼프 미국 대통령의 '거래주의'가 만나 한미 동맹의 새로운 협력 기회가 나올 수 있다고 미국 전문가들이 3일",
  press: "뉴스1",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/421/2025/06/04/8295834.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "'관세 협상' 조바심 내는 트럼프, 전 세계에 \"4일까지 최상의 제안 제출\" 엄포",
  url: "https://n.news.naver.com/mnews/article/469/0000868562",
  description: "도널드 트럼프 미국 행정부가 상호관세율을 협상 중인 무역상대국에 \"최상의 안을 4일까지 제출하라\"고 최후통첩을 날렸다. 중국과 관세 휴전에 이어 사법부 제동으로 연달아 체면을 구긴 트럼프 대통령의 조바심이 드러났다는",
  press: "한국일보",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/469/2025/06/04/868562.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "美 보잉 돌려보낸 中, 에어버스 사들이나",
  url: "https://n.news.naver.com/mnews/article/011/0004493461",
  description: "미국의 고율 관세 부과를 이유로 미 보잉 항공기 인수를 거부했던 중국이 유럽에서 에어버스 항공기 수백 대를 주문할 것으로 전해졌다. 4일(현지 시간) 블룸버그통신은 에어버스가 중국 항공사와 주문 규모에 대한 협상을",
  press: "서울경제",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/011/2025/06/04/4493461.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "“1000조원 미국 골든돔, 100만원도 안 되는 드론에 무너질 것”",
  url: "https://n.news.naver.com/mnews/article/028/0002749393",
  description: "트럼프의 새 미사일 방어 체계 ‘골든 돔’이 값싼 드론 공격에는 쓸모가 없을 것이란 전문가 분석이 나왔다. 최근 우크라이나의 러시아 내륙 드론 공격이 이런 현실을 노골적으로 보여줬다는 분석이다. 2일(현지시각) 뉴스",
  press: "한겨레",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/028/2025/06/04/2749393.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "백악관 논평 받아친 中 “중한관계 이간질 중단하라”",
  url: "https://n.news.naver.com/mnews/article/020/0003639320",
  description: "중국 외교부는 미국이 이재명 대통령 당선을 축하하면서 중국을 언급한 것을 두고 “이간질하지 말라”고 경고했다. 린젠 중국 외교부 대변인은 4일 정례 브리핑에서 미국이 이 대통령 당선을 축하하며 중국이 전 세계 민주주",
  press: "동아일보",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/020/2025/06/04/3639320.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "中 \"중·한, 제3자 영향 받아선 안돼\"…美엔 \"이간질 말라\"",
  url: "https://n.news.naver.com/mnews/article/003/0013286703",
  description: "박정규 특파원 = 이재명 대통령 취임과 함께 새 정부가 출범한 것과 관련해 한·중 양국 관계가 제3자의 영향을 받아서는 안 된다고 중국 정부가 강조했다. 또 중국의 영향력을 거론하면서 우려를 표한 미국을 향해서는 \"",
  press: "뉴시스",
  date: "2025-06-04 11:26:49",
  image: "https://mimgnews.pstatic.net/image/origin/003/2025/06/04/13286703.jpg?type=nf220_150",
  category: "세계"
},
  {
  title: "메가존클라우드, 스노우플레이크 'APJ 올해의 성장 파트너' 수상",
  url: "https://n.news.naver.com/mnews/article/421/0008295240",
  description: "메가존클라우드가 미국 샌프란시스코에서 2일(현지시간) 열린 '스노우플레이크 서밋 2025'에서 아시아태평양·일본(APJ) 부문 'Growth Partner of the Year'를 받았다고 4일 밝혔다. 메가존클라우",
  press: "뉴스1",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/421/2025/06/04/8295240.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "‘민원 사주’ 의혹 류희림 방심위원장, 대선 당일 사표 수리",
  url: "https://n.news.naver.com/mnews/article/020/0003639296",
  description: "4월에 사의를 표명했던 류희림 방송통신심의위원장(사진)의 사직서가 대선 당일인 3일 재가된 것으로 확인됐다. ‘민원 사주’ 의혹 등으로 사퇴 압박을 받아왔던 류 위원장이 건강 문제를 이유로 사직서를 제출한지 40일",
  press: "동아일보",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/020/2025/06/04/3639296.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "오픈AI \"이재명 대통령 AI 비전에 깊은 인상…여정 함께하겠다\"",
  url: "https://n.news.naver.com/mnews/article/422/0000746556",
  description: "챗GPT 개발사인 오픈AI가 오늘(4일) 임기를 시작한 이재명 대통령을 향해 인공지능(AI) 분야에서의 협력 의지를 드러냈습니다. 제이슨 권 오픈AI 최고전략책임자(CSO)는 이날 엑스(X·옛 트위터)에 축하 글을",
  press: "연합뉴스TV",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/422/2025/06/04/746556.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "삼성, '갤Z폴드7' 실루엣 공개...7월 언팩 기대감 최고조",
  url: "https://n.news.naver.com/mnews/article/008/0005203287",
  description: "삼성전자가 내달 공개하는 폴더블폰 신제품 '갤럭시Z폴드7' 실루엣을 공개하며 기대감을 끌어올리고 있다. 4일 삼성전자는 뉴스룸에 '울트라 경험을 펼치다'라는 제목의 글을 게시했다. 삼성은 \"더 큰 화면, 더 뛰어난",
  press: "머니투데이",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/008/2025/06/04/5203287.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "인도 64개 광고상 휩쓴 크래프톤, 게임 개발 넘어 브랜드 입지 다져",
  url: "https://n.news.naver.com/mnews/article/015/0005140666",
  description: "인도 남부 케랄라주의 한 조용한 찻집. 평범한 일상이 이어지던 순간 하늘에서 거대한 보급 상자가 떨어지고 일상이 전장으로 돌변한다. 인도 전통 연극배우가 연막탄을 던지자 거리의 이발소에선 게임 속 헤어스타일이 구현된",
  press: "한국경제",
  date: null,
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140666.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "\"AI 때문에 망했다\" vs \"AI로 대박났다\"... 성패를 가르는 이것",
  url: "https://n.news.naver.com/mnews/article/092/0002376995",
  description: "65% 기업이 채택한 생성형 AI, 성공의 열쇠는 '책임감' 생성형 인공지능(Generative AI, genAI)의 도입이 폭발적으로 증가하고 있다. 2024년 맥킨지 조사에 따르면 65%의 조직이 정기적으로 생성",
  press: "지디넷코리아",
  date: "2025-06-04 13:05:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376995.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "“매일 ‘이것’ 한 컵 먹었을 뿐인데”…심장·대사 건강 개선됐다",
  url: "https://n.news.naver.com/mnews/article/016/0002480739",
  description: "당뇨병 전 단계에 매일 한 컵의 콩을 먹으면 심장 및 대사 건강을 개선하는 효과를 거둘 수 있다는 임상시험 결과가 나와 주목된다. 4일 연합뉴스 보도에 따르면 미국 일리노이공대 브리트 버튼-프리먼 교수팀은 3일(현지",
  press: "헤럴드경제",
  date: "2025-06-04 13:01:51",
  image: "https://mimgnews.pstatic.net/image/origin/016/2025/06/04/2480739.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "국가 AI컴퓨팅센터 첫 삽 뜰 수 있나…이재명 정부 ‘AI’ 시험대",
  url: "https://n.news.naver.com/mnews/article/028/0002749415",
  description: "‘인공지능 100조원 투자’를 공약한 이재명 정부의 첫 인공지능 분야 과제는 ‘국가 인공지능(AI) 컴퓨팅센터’ 구축 사업이 될 것으로 보인다. 인공지능 개발과 활용 능력이 나라의 중요한 경쟁력으로 떠오른 상황에서",
  press: "한겨레",
  date: "2025-06-04 12:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/028/2025/06/04/2749415.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "\"상법개정안 더 세게 간다\"...이재명 당선에 재계 '촉각'",
  url: "https://n.news.naver.com/mnews/article/092/0002376994",
  description: "이재명 대통령이 취임 직후 강행 의지를 밝힌 상법 개정안이 현실화될 조짐을 보이자, 기업들은 이사 배임 리스크와 경영권 압박 가능성에 촉각을 곤두세우고 있다. 주식시장은 주주권 강화 기대감에 환호하는 분위기다. 한화",
  press: "지디넷코리아",
  date: "2025-06-04 12:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376994.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "“튀긴 치킨만 주로 먹었는데” 뜻밖의 충격…살만 찌는 게 아니였다 [지구, 뭐래?-Pick]",
  url: "https://n.news.naver.com/mnews/article/016/0002480713",
  description: "지속 가능한 미래를 위한 지구의 선택 <픽(Pick)> 기후변화에 맞선다는 것. 때로는 막연하게 느껴집니다. 하지만 환경을 위한 작은 노력. 티끌같은 실천들이 모여 태산같은 변화를 이끌어냅니다. 정말 소소한 일상 속",
  press: "헤럴드경제",
  date: "2025-06-04 12:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/016/2025/06/04/2480713.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "첫 출근길에 등장한 무선 이어폰...이재명 대통령은 '에어팟' 마니아?",
  url: "https://n.news.naver.com/mnews/article/469/0000868579",
  description: "이재명 대통령이 취임 후 서울 용산구 대통령실에 첫 출근한 4일 오후, 이 대통령은 차량에서 내려 레드카펫을 밟으며 귀에 끼었던 무선 이어폰을 충전 케이스에 넣었다. 대통령이 외국 정상과 회담 같은 자리에서 통역용",
  press: "한국일보",
  date: "2025-06-04 12:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/469/2025/06/04/868579.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "[ISS 2025] “역동적인 韓 우주 생태계, 급성장 기대…국제화는 과제”",
  url: "https://n.news.naver.com/mnews/article/366/0001082888",
  description: "우주기업 컨텍, 대전서 ISS 2025 개최 美로켓랩·佛엑소트래일·日아이스페이스 “한국 발전 가능성 크지만, 과제도 많아” 국내 우주기업 컨텍과 대전시가 대전컨벤션센터에서 개최한 ‘인터내셔널 스페이스 서밋 2025(",
  press: "조선비즈",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/366/2025/06/04/1082888.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "해외빅테크 OTT·AI 안방 점령…\"새 정부,국내투자 이끌어야\"",
  url: "https://n.news.naver.com/mnews/article/014/0005359187",
  description: "국내 온라인동영상서비스(OTT)와 인공지능(AI) 앱 생태계가 해외 빅테크에 잠식되는 상황이 고착화되고 있는 것으로 나타났다. 넷플릭스, 챗GPT가 각 분야에서 사실상 독과점 체제를 형성하면서 새 정부 차원에서 국내",
  press: "파이낸셜뉴스",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/014/2025/06/04/5359187.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "李 대통령, 비상경제대응TF 구성 지시...취임 첫 행정명령",
  url: "https://n.news.naver.com/mnews/article/092/0002376992",
  description: "이재명 대통령이 취임 후 첫 행정명령으로 비상경제대응TF 구성을 지시했다. 강유정 대통령실 대변인은 4일 오후 서울 용산 대통령실 브리핑에서 “이 대통령이 이주호 교육부 장관 겸 사회부총리와 전화 통화로 금일 저녁",
  press: "지디넷코리아",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376992.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "[이재명 정부] 반도체·AI산업 대전환… 산업계 기대감·신중론 교차",
  url: "https://n.news.naver.com/mnews/article/029/0002959393",
  description: "인공지능 100조 투자 등 G3 도약 과제 산적… 종합적 전략안 필요 시스템 반도체 생태계 역량 강화 특별법은 국회 계류 '향방 관심' 인공지능(AI) 기술을 두고 치열한 글로벌 경쟁이 펼쳐지는 가운데 이재명 대통령",
  press: "디지털타임스",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/029/2025/06/04/2959393.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "가장 얇은 삼성 신작 '갤폴드7' 내달 출격",
  url: "https://n.news.naver.com/mnews/article/009/0005503680",
  description: "7월 초 美 뉴욕 언팩서 공개 초슬림·초경량…화면은 커져 삼성전자가 다음달 초 미국 뉴욕에서 열리는 신제품 공개 행사 '갤럭시 언팩'을 앞두고 4일 '갤럭시 Z 폴드 7'의 티저 영상을 선보였다. 신작과 관련된 구체",
  press: "매일경제",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/009/2025/06/04/5503680.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "말만 하면 AI가 사내 자금흐름 한눈에 '쫙'",
  url: "https://n.news.naver.com/mnews/article/009/0005503679",
  description: "'경리나라' 만든 웹케시그룹 설립 26년만에 제2창업 선언 모든 B2B 핀테크 제품군에 'AI CFO' 에이전트 탑재키로 내년부터 시장 공략 본격화 국내 최초로 기업 인터넷 뱅킹을 도입한 핀테크 1세대 기업 웹케시그",
  press: "매일경제",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/009/2025/06/04/5503679.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "'대선 당일' SKT 14만명 유심 바꿨다⋯누적 교체자 600만명 넘어",
  url: "https://n.news.naver.com/mnews/article/031/0000937822",
  description: "대통령 선거일인 3일 SK텔레콤 가입자 14만 명이 유심(USIM)을 교체했다. 누적 유심 교체자 수는 600만 명을 넘어서게 됐다. SK텔레콤 뉴스룸에 따르면 4일 0시 기준 유심 누적 교체자 수는 대선 당일 14",
  press: "아이뉴스24",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/031/2025/06/04/937822.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "수십년 '뮤온 실험' 결론 \"표준모형과 일치…새 입자나 힘 못찾아\"",
  url: "https://n.news.naver.com/mnews/article/584/0000032691",
  description: "새로운 입자나 힘의 존재를 확인하기 위해 수십 년간 진행된 입자물리학 실험의 결론이 나왔다. 실험 결과는 기존 입자 표준모델과 정확히 들어맞아 과학자들이 기대했던 새로운 입자나 힘의 근거는 발견되지 않았다. 3일(현",
  press: "동아사이언스",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/584/2025/06/04/32691.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "\"암 정복까지 10년 남았다\"…'유도탄 항암제' 놀라운 효과",
  url: "https://n.news.naver.com/mnews/article/015/0005140674",
  description: "‘암세포만 선택적으로 공격하는 유도탄’으로 불리는 항체약물접합체(ADC)가 암 환자의 생명을 획기적으로 늘리고 있다. 지난달 30일부터 3일(현지시간)까지 열린 ‘2025 미국임상종양학회(ASCO)’에서는 ADC가",
  press: "한국경제",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140674.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "'샘 올트먼 축출 사태' 영화로 나온다",
  url: "https://n.news.naver.com/mnews/article/009/0005503664",
  description: "2023년말 해임사건 다뤄 코미디 장르로 제작될 듯 2023년 11월 샘 올트먼 오픈AI 최고경영자(CEO)가 해임됐다가 5일 만에 복귀한 이른바 '올트먼 축출 사태'가 영화로 제작된다. 3일(현지시간) 할리우드 리",
  press: "매일경제",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/009/2025/06/04/5503664.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "\"hwp에 AI 입힌다\"…AX 강자 떠오른 한컴",
  url: "https://n.news.naver.com/mnews/article/015/0005140668",
  description: "올해 입법부(국회)와 행정부(행정안전부)가 추진한 인공지능(AI) 프로젝트는 공공 부문 AX(인공지능 전환) 분야에서 최대어로 꼽혔다. 최종 승자는 삼성SDS·한글과컴퓨터 ‘콤비’로 낙점됐다. 한컴이 30년 이상 쌓",
  press: "한국경제",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140668.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "\"AI 100조 시대 이끌 부총리급 AI부처 신설해야\" [이재명 정부]",
  url: "https://n.news.naver.com/mnews/article/003/0013286683",
  description: "\"지금까지 겪어보지 못한 초과학기술 신문명시대, 눈 깜빡할 새 페이지가 넘어가는 인공지능(AI) 무한경쟁 시대가 열렸다.\" 이재명 대통령이 4일 취임식에서 이같이 언급하고 인공지능(AI), 반도체 등 첨단 기술 산업",
  press: "뉴시스",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/003/2025/06/04/13286683.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "GL 콘텐츠 어느 정도길래…불법 시청 기승에 '특단 대책'",
  url: "https://n.news.naver.com/mnews/article/015/0005140662",
  description: "불법 스트리밍 사이트를 통한 K콘텐츠 유통과 시청이 극성에 다다르자 콘텐츠 제작사가 자체적으로 시청 가능한 플랫폼을 마련해 눈길을 끈다. 구조적으로 불법 유통을 막기 어려워 제작사가 자구책을 마련한 것이다. 불법 유",
  press: "한국경제",
  date: "2025-06-04 11:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/015/2025/06/04/5140662.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "홈플 노조, 李 대통령에 SOS...\"36개점 폐점 시 10조원 손실\"",
  url: "https://n.news.naver.com/mnews/article/092/0002376987",
  description: "홈플러스가 기업회생절차를 밟고 있는 가운데 마트산업노동조합 홈플러스지부(홈플러스 노조)가 36개점 폐점 시 10조원의 손실이 예상된다며 정부의 긴급 개입을 요청했다. 홈플러스 노조는 4일 이재명 대통령에게 보낸 공개",
  press: "지디넷코리아",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376987.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "[1분건강] 러닝하다 자칫 고관절 나갑니다",
  url: "https://n.news.naver.com/mnews/article/092/0002376983",
  description: "준비 없는 달리기가 고관절 부상으로 이어질 수 있다. 문화체육관광부와 대한체육회에 따르면, 국내 러닝 인구는 지난 2022년 기준 약 883만 명에 달한다. 하지만 건강을 위해 시작한 러닝이 건강을 해칠 수도 있다.",
  press: "지디넷코리아",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376983.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "내년 정부 R&D 예산 30조 시대 오나?…이재명 대통령 당선 영향 `장밋빛` 기대감",
  url: "https://n.news.naver.com/mnews/article/029/0002959375",
  description: "대선 후보, R&D 예산 확대 '공약'으로 증액 탄력 3대 게임체인저, 기초원천연구 예산 늘 듯 관측 새 정부 위한 추가 한도 확보..출연연도 증가세 이재명 대통령이 4일 공식 임기를 시작함에 따라 내년도 정부 연구",
  press: "디지털타임스",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/029/2025/06/04/2959375.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "북한 스마트폰서 ‘오빠’ 입력하면…\"‘동지’로 자동 수정\"",
  url: "https://n.news.naver.com/mnews/article/092/0002376982",
  description: "작년 말 북한 전문 매체 ‘데일리 NK’가 북한에서 사용되는 스마트폰을 입수해 화제가 됐다. 영국 BBC는 최근 이 스마트폰을 조사해 특이한 기능 몇 가지가 탑재됐다고 보도했다. 보도에 따르면, 북한 스마트폰에는 대",
  press: "지디넷코리아",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376982.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "“가격도 경쟁력 있게”…퓨리오사AI, '레니게이드' 1000만원대 책정",
  url: "https://n.news.naver.com/mnews/article/030/0003318902",
  description: "인공지능(AI) 반도체 업체인 퓨리오사AI가 엔비디아 등 시장 선발주자들과의 경쟁을 위해 공세적인 가격 정책을 준비하고 있는 것으로 파악됐다. 글로벌 기업들이 주도하고 있는 AI 반도체 시장에 국내 반도체 스타트업이",
  press: "전자신문",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/030/2025/06/04/3318902.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "[데이터뉴스]빛으로 신호 주고 받는 첨단 패키징 'CPO' 기술 급성장",
  url: "https://n.news.naver.com/mnews/article/030/0003318901",
  description: "전기 신호 대신 빛으로 신호를 송수신하는 '통합 광 패키징(Co-packaged optical·CPO)' 기술이 반도체와 데이터센터 업계 성장 동력으로 주목받고 있다. 인공지능(AI) 확산에 따라 저전력·초고속 정보",
  press: "전자신문",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/030/2025/06/04/3318901.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "\"새 정부, 하루속히 풀뿌리 R&D 되살려야\"",
  url: "https://n.news.naver.com/mnews/article/092/0002376981",
  description: "“지난 몇 년간 지원이 끊긴 풀뿌리 R&D를 먼저 다 살려야 합니다.” 신현철 반도체공학회장(광운대 반도체시스템공학부 교수)은 지디넷코리아와의 인터뷰에서 “정부 지원이 끊긴 이후 (연구들이) 진짜로 흔들리고 있다”며",
  press: "지디넷코리아",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376981.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "[DD퇴근길] \"규제 유예·균형 발전\"…막 오른 이재명 정부, ICT 정책 보니",
  url: "https://n.news.naver.com/mnews/article/138/0002197919",
  description: "디지털데일리가 퇴근 즈음해서 읽을 수 있는 [DD퇴근길] 코너를 마련했습니다. 하루동안 발생한 주요 이슈들을 퇴근길에서 가벼운 마음으로 읽을 수 있도록 요약했습니다. 전체 기사는 ‘디지털데일리 기사 하단의 관련뉴스(",
  press: "디지털데일리",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/138/2025/06/04/2197919.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "\"K-방산, 국가대표 산업으로\"…이재명 직속 컨트롤타워에 기대감↑",
  url: "https://n.news.naver.com/mnews/article/092/0002376978",
  description: "이재명 대통령 당선인이 'K-방산'을 국가대표 산업으로 육성하겠다는 의지를 밝히며, 관련 업계와 시장의 기대감이 높아지고 있다. 특히 우리나라가 상대적으로 부족했던 최첨단 무기체계 연구개발(R&D) 지원이 활발히 이",
  press: "지디넷코리아",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376978.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "국내증시에 '비트코인 ETF' 상장될까…李 코인 공약은?",
  url: "https://n.news.naver.com/mnews/article/243/0000079067",
  description: "4일 21대 대통령에 당선되고 임기를 시작한 이재명 대통령은 대선 공약으로 가상자산(암호화폐) 산업 육성을 내세웠다. 이에 비트코인 현물 상장지수펀드(ETF) 상장, 스테이블코인 발행 등이 이뤄질지 관심이 모인다.",
  press: "이코노미스트",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/243/2025/06/04/79067.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "\"정답 몰라도 괜찮다\"... AI 강화학습 상식을 뒤엎은 워싱턴대 연구",
  url: "https://n.news.naver.com/mnews/article/092/0002376976",
  description: "무작위 보상만으로 21.4% 성능 향상, 틀린 답 보상해도 24.6% 상승 강화학습 분야에서 놀라운 연구 결과가 발표됐다. 워싱턴대학교와 앨런 인공지능 연구소(Allen Institute for AI) 공동 연구팀이",
  press: "지디넷코리아",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376976.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "카카오모빌리티 노조 6월 말 첫 파업…매주 '릴레이 집회' 예정",
  url: "https://n.news.naver.com/mnews/article/277/0005603096",
  description: "카카오 택시 운영사인 카카오모빌리티를 포함한 카카오 자회사 3곳 구성원들이 이달 말 임금인상과 고용안정을 요구하는 파업에 나선다. 이들은 카카오 노동조합 '크루유니언' 소속으로, 2018년 크루유니언 설립 이후 카카",
  press: "아시아경제",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/277/2025/06/04/5603096.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "류희림 방심위원장 사표 재가…제출 40일 만",
  url: "https://n.news.naver.com/mnews/article/008/0005203477",
  description: "류희림 방송통신심의위원장이 낸 사직원이 제출 40일 만에 받아들여졌다. 4일 방송업계에 따르면 이주호 전 대통령 권한대행 부총리 겸 교육부 장관은 지난 3일 류 위원장의 사의를 받아들여 해촉안을 재가했다. 류 위원장",
  press: "머니투데이",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/008/2025/06/04/5203477.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "[카카오모빌리티 10년]② 공정위 '반복된 과징금'에 발목",
  url: "https://n.news.naver.com/mnews/article/293/0000068192",
  description: "국내 택시호출중개 시장 1위 사업자 카카오모빌리티의 지난 10년간 사업 확장 과정을 짚어보고, 향후 방향을 점쳐봅니다. 카카오모빌리티는 2020년부터 공정거래위원회로부터 연이어 강도 높은 제재를 받았다. 2015년",
  press: "블로터",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/293/2025/06/04/68192.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "[이재명 정부] 통신·미디어 경쟁력 화보 ‘탄력’…전문가들 “6G 주도권 선점 기회”",
  url: "https://n.news.naver.com/mnews/article/029/0002959362",
  description: "6G·SW 통합구조 설계 필요 산업 옥죄는 규제개선 시급 이재명 제21대 대통령이 취임하면서 6G 상용화 등 통신 진흥과 문화 콘텐츠·미디어 산업 경쟁력 확보에 탄력이 붙을 것으로 업계는 기대하고 있다. 다만, 전문",
  press: "디지털타임스",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/029/2025/06/04/2959362.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "제약바이오 업계 새 정부에 \"R&D 지원해 생태계 발전 도와야\"",
  url: "https://n.news.naver.com/mnews/article/029/0002959363",
  description: "제약바이오 업계는 이재명 대통령에게 연구개발(R&D) 투자를 확대해 바이오벤처 생태계를 발전시켜야 한다고 4일 요청했다. 이 대통령이 공약한 '바이오 강국'을 실현하려면 연구부터 개발, 상업화에 이르는 생태계 전반이",
  press: "디지털타임스",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/029/2025/06/04/2959363.jpg?type=nf220_150",
  category: "과학"
},
  {
  title: "스타링크·원웹 상륙…'하늘길 인터넷' 뚫린다",
  url: "https://n.news.naver.com/mnews/article/092/0002376971",
  description: "정부가 스페이스X의 ‘스타링크’에 이어 영국 ‘원웹’의 국내 진출을 공식 승인하면서, 저궤도 위성통신 시장이 본격 개화하고 있다. 스타링크는 SK텔링크와, 원웹은 KT SAT·한화시스템과 각각 파트너십을 맺고 국내",
  press: "지디넷코리아",
  date: "2025-06-04 10:26:51",
  image: "https://mimgnews.pstatic.net/image/origin/092/2025/06/04/2376971.jpg?type=nf220_150",
  category: "과학"
}
];

// 카테고리별 뉴스 필터링 함수
function getNewsByCategory(category) {
  if (category === 'all') return allNews;
  return allNews.filter(news => news.category === category);
}

// 최신 뉴스 가져오기 (날짜순 정렬)
function getLatestNews(limit = 10) {
  return allNews
    .filter(news => news.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

// 전체 뉴스 개수
const totalNewsCount = allNews.length;

// 카테고리별 뉴스 개수
const newsByCategory = {
  "헤드라인": 41,
  "정치": 41,
  "경제": 41,
  "문화": 41,
  "세계": 41,
  "과학": 41
};

console.log(`뉴스 데이터 로드 완료: 총 ${totalNewsCount}개 뉴스`);
console.log('카테고리별 뉴스 개수:', newsByCategory);
