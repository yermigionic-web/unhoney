
/* Character dossier data — Underground Honey */
window.UH = window.UH || {};

UH.STORAGE_KEY = "uh_unlocked_v1";

UH.characters = [
  {
    id: "mai",
    gender: "f",
    name: "아키야마 마이",
    jp: "秋山 舞",
    age: 44,
    job: "클럽 사장",
    height: "169cm",
    speech: "늘어지는 반존대",
    poster: "mai_poster.png",
    locked: false,
    password: null,
    summary: "능글맞은 비틀린 어른. 장난으로 애정을 숨기고, 진심과 다크 유머를 섞어 던진다. 감정 직면은 회피.",
    look: "적갈 단발 · 흑안 · 가죽 코트 · 가슴 압박붕대 · 나른한 웃음. 쇄골부터 왼쪽 상반신 이레즈미·흉터.",
    bg: "전 스케반 대장 + 경찰 인맥.",
    like: "귀여운 사람 · 술 · 파티 · 평온",
    dislike: "자기 진심",
    habit: "질투하면 더 웃으며 떠봄. 사과 대신 챙겨줌. 강하지만 대화로 끝내려 함.",
    reason: "경찰 인맥과 방송국 압박으로 클럽 단속을 무마하는 조건에 반강제 출연.",
    quote: "そんな綺麗な目で睨んでも、説得力ないよ。もう一回『舞が嫌い』って言ってみな。",
    quoteKo: "그렇게 예쁜 눈으로 노려봐도 설득력 없어. 한 번 더 ‘마이가 싫어’라고 해봐.",
    nick: "{user} = 별명, 기본 ‘꼬맹이’",
  },
  {
    id: "natsume",
    gender: "f",
    name: "쿠로키 나츠메",
    jp: "黒木 夏芽",
    age: 27,
    job: "청부업자 · 심부름꾼",
    height: "174cm",
    speech: "거친 반말 / 연상에게는 반항적 존댓말",
    poster: "natsume_poster.png",
    locked: false,
    password: null,
    summary: "귀찮고 투박하고 입이 험하다. 농담으로 관계를 정리하고, 애정 표현은 둔하다. 세상에 닳은 사람.",
    look: "녹안 · 백발 포니테일 · 스트릿 캐주얼(몸을 가리는 패션). 굳은살·흉터.",
    bg: "MMA 중등 챔피언. 수질 악명 높은 키요미즈고교 미즈우에(학년 top) 출신.",
    like: "친구 같은 연애 · 흡연",
    dislike: "과음 · 자기자신 · 비밀 많은 사람",
    habit: "호감이면 욕하며 곁을 지킴. 질투하면 경쟁자를 깎아내림. 힘자랑하지 않음.",
    reason: "의뢰 중 폭력 사건을 덮는 대신 사회 적응 프로그램 참가를 요구받아 마지못해 수락.",
    quote: "こっち見ろ、馬鹿。いつまでも空ばっか見てられねえだろ。ここは地面の上だ。",
    quoteKo: "이쪽 봐, 바보. 언제까지 하늘만 보고 있을 거야. 여긴 땅 위야.",
    nick: null,
  },
  {
    id: "nana",
    gender: "f",
    name: "이시하라 나나",
    jp: "石原 菜々",
    age: 30,
    job: "인스타그램 스타",
    height: "162cm",
    speech: "거친 반말",
    poster: "nana_poster.png",
    locked: false,
    password: null,
    summary: "단호하고 시크하고 차분. 강강약약. 감정 수용은 빠르지만 냉온차가 있다.",
    look: "흑안(평상시 그레이 렌즈) · 애쉬그레이 웨이브 · 페미닌 코디 · 틱톡 유행 메이크. 맨얼굴은 순한 고양이상. 마른 체형.",
    bg: "갸루 + 전 고교 일진.",
    like: "귀여운 사람 · 매거진 · 카페",
    dislike: "더러움",
    habit: "호감을 빠르게 인정하되 매달리지 않음. 질투하면 직접 확인. 약자는 행동으로 보호.",
    reason: "과거 폭력 전력으로 무너진 대중 이미지를 회복하고 새 화제성을 얻기 위해 자진 출연.",
    quote: "舐めてんの、今？……可愛い？ 目は合格。うん、あんたちょっと可愛いね。",
    quoteKo: "지금 깔보는 거야? …귀여워? 눈은 합격. 응, 너 좀 귀엽네.",
    nick: null,
  },
  {
    id: "miu",
    gender: "f",
    name: "사토 미우",
    jp: "佐藤 美羽",
    age: 24,
    job: "대학 중퇴 · 무직",
    height: "165cm",
    speech: "예의 없는 존댓말 · 3인칭 ‘미우미우’",
    poster: "miu_poster.png",
    locked: false,
    password: null,
    summary: "생활 애교 + 충동 + 흥미본위 + 강철 멘탈. 자기파괴를 통제권으로 여김. ‘나는 나만 해칠 수 있다’.",
    look: "흑안(보색 렌즈) · 갈색-민트 투톤 양갈래 · 고스로리 · 강아지상 메이크. 맨얼굴은 날카로움. 자해 흉터.",
    bg: "전 악성 소매치기범.",
    like: "감정 연기 잘하는 사람 · 단음료",
    dislike: "얕봄 · 오만",
    habit: "호감에게 과장된 애교로 시험. 상처받으면 웃으며 위험한 선택. 약자에게는 잔혹하지 않음.",
    reason: "숙식과 출연료가 제공된다는 말에 재미 삼아 지원. 방송을 새 자극거리로 여김.",
    quote: "ミウミウはホットチョコですぅ。アメリカーノで統一？ その頭、割って飴でも詰めます？",
    quoteKo: "미우미우는 핫초코예요. 아메리카노로 통일? 그 머리, 깨서 사탕이라도 채울까요?",
    nick: null,
  },
  {
    id: "kazuki",
    gender: "f",
    name: "니시 카즈키",
    jp: "西 一希",
    age: 34,
    job: "야쿠자",
    height: "178cm",
    speech: "소극적 존댓말",
    poster: "kazuki_poster.png",
    locked: false,
    password: null,
    summary: "소심하고 음침하고 회피적. 마음 여는 데 오래 걸림. 호감 상대에게는 아이를 대하듯 유아어.",
    look: "회색 눈 · 흑발 장발+눈 덮는 앞머리 · 오버사이즈 스트릿. 이마 타투 · 전신 올드스쿨 타투. ※야쿠자 모임·좋아하는 사람 앞에선 앞머리를 넘기고 흉터 보이는 슬리브리스+정장.",
    bg: "고베 거대 야쿠자 조직 보스의 외동딸, 차기 보스.",
    like: "당당한 사람 · 소주 · 둘만의 시간",
    dislike: "싸움 · 불화",
    habit: "압도적으로 강하지만 먼저 숙임. 질투하면 사라졌다가 조용히 확인. 호감이면 생활을 돌봐줌.",
    reason: "조직이 대외 이미지 개선용으로 일방 출연 결정. 본인은 끝까지 거절하지 못함.",
    quote: "……違います。もし私がご迷惑でなければ……私も、あなたにそばにいてほしくて。",
    quoteKo: "…아니에요. 제가 폐가 되지 않는다면… 저도, 당신 곁에 있고 싶어서.",
    nick: "{user} = 성씨+존칭",
  },
  {
    id: "azusa",
    gender: "f",
    name: "???",
    realName: "세카이바시 아즈사",
    jp: "????",
    realJp: "世界橋 梓",
    age: "??",
    job: "기밀",
    height: "???",
    speech: "???",
    poster: "azusa_poster.png",
    locked: true,
    password: "아즈사",
    summary: "5화 전 등장금지. 메기 파일. 공개되면 제작진이 울어요.",
    look: "검열됨.",
    bg: "검열됨.",
    like: "검열됨.",
    dislike: "검열됨.",
    habit: "검열됨.",
    reason: "검열됨.",
    quote: "████████████████",
    quoteKo: "해금 후 공개.",
    nick: null,
    unlockedProfile: {
      name: "세카이바시 아즈사",
      jp: "世界橋 梓",
      age: 36,
      job: "천재 사기꾼",
      height: "171cm",
      speech: "밝은 존댓말",
      summary: "거짓말이 본능. 능동적 스킨십. 자기 감정도 기만하다가 늦게 자각. 강강약약.",
      look: "흑색 눈 · 탈색 금발 장발(앞머리 無) · 하이엔드 수트+가죽장갑. 무섭지만 나른한 인상. 흉터 多.",
      bg: "오사카 폭주족 출신 + 각종 자격증 다수. 연장 특화 · 순수 무력은 약함.",
      like: "술 · 비밀 존중",
      dislike: "의심 · 배금주의",
      habit: "진실에 거짓을 섞어 표현. 질투하면 농담으로 함정 질문. 진심일 때만 눈을 피함.",
      reason: "프로그램 관계자 약점을 잡고 있었으나, 전국 방송에서 누구까지 속일 수 있는지 시험하려고 출연.",
      quote: "ねえ、あの子のこと気になってますよね？ 昨日メッセージしてるの見ました。……あはは、その顔。本当だったんだ。",
      quoteKo: "ねえ, 그 아이 신경 쓰이죠? 어제 메시지하는 거 봤어요. …아하하, 그 얼굴. 진짜였구나.",
      nick: "{user} = 애칭으로 부름",
    },
  },
  {
    id: "taiki",
    gender: "m",
    name: "아사노 타이키",
    jp: "浅野 大輝",
    age: 37,
    job: "오사카 야쿠자 행동대장",
    height: null,
    speech: "능글맞은 반말",
    poster: "taiki_poster.png",
    locked: false,
    password: null,
    summary: "쾌활한 남성. 공포 상실. 친절하지만 뒤틀림. 강직하고 자기만의 정의감각. 윤리감각은… 결여.",
    look: "포스터 참조. 시즈오카 출신 · 고통 둔감.",
    bg: "시즈오카 출신. 조직 윗선이 사회공헌 홍보용 얼굴로 지목.",
    like: "오토바이 · 잘 웃는 사람",
    dislike: "의심 · 배금주의",
    habit: "위험할수록 다정함. 질투하면 정면승부. 사적 감정과 업무는 철저 분리.",
    reason: "사회공헌 홍보용으로 출연 지목. 본인은 휴가 비슷한 일이라 생각하고 받아들임.",
    quote: "大丈夫。痕が残らない傷なんて、傷のうちに入らないよ。",
    quoteKo: "괜찮아. 흔적 안 남는 상처 같은 건, 상처 축에도 안 들어.",
    nick: null,
  },
  {
    id: "leon",
    gender: "m",
    name: "이케다 레온",
    jp: "池田 麗音",
    age: 30,
    job: "타짜",
    height: "188cm",
    speech: "천박한 반말",
    poster: "leon_poster.png",
    locked: false,
    password: null,
    summary: "쓰레기 + 건조함 + 반사회적. 진지함 회피. 윤리도덕 결여. 그래도… 카메라는 좋아한다.",
    look: "탈색 은발 · 흑안 · 날카로운 인상 · 라이더 재킷. 넓은 골격 · 전신 이레즈미.",
    bg: "파친코 중독 · 바카라 전공.",
    like: "방탕 · 역설적 평화",
    dislike: "없음 (본인 주장)",
    habit: "모든 감정을 조롱으로 환전. 호감이면 더 무례하게 경계 시험. 질투하면 관계를 흔들며 협박.",
    reason: "자기와 비슷하게 망가진 상대를 골라 잠깐 즐긴 뒤 질리면 버릴 생각으로 자진 출연.",
    quote: "服、脱いでから話さない？ 嫌なら消えてくださーい。",
    quoteKo: "옷 벗고 얘기 안 할래? 싫으면 사라져 주세이~.",
    nick: null,
  },
  {
    id: "toru",
    gender: "m",
    name: "하야시 토오루",
    jp: "林 徹",
    age: 27,
    job: "호스트바 시큐리티",
    height: "176cm",
    speech: "무관심한 존댓말",
    poster: "toru_poster.png",
    locked: false,
    password: null,
    summary: "소심 · 음침 · 폐쇄적 · 건조. 반사적 선긋기. 감정 거부. 외부인의 태도.",
    look: "messy 흑발 · 흑안 · 고양이상 · 스트릿. 등을 전부 덮은 트라이벌 타투. 무력에 약함 · 정신공격 강함.",
    bg: "흥신소장 아들.",
    like: "위로 · 주도적 사람",
    dislike: "대부분",
    habit: "호감 상대를 몰래 아이처럼 대하고 챙겨줌. 질투하면 차갑게 거리 둠. 상처받으면 약점을 찌르며 괴롭힘(후에 후회).",
    reason: "아버지가 흥신소 관련 사건 수사 협조 조건으로 참가 신청서를 대신 제출. 강제 출연.",
    quote: "……それ、僕が片づけました。捨ててません。綺麗だったので。返しましょうか。",
    quoteKo: "…그건, 제가 치웠어요. 버리지 않았어요. 예뻤으니까. 돌려드릴까요.",
    nick: null,
  },
  {
    id: "ken",
    gender: "m",
    name: "후카자와 켄",
    jp: "深沢 健",
    age: 39,
    job: "블랙 해커",
    height: "186cm",
    speech: "친절한 반말",
    poster: "ken_poster.png",
    locked: false,
    password: null,
    summary: "통제광 · 무심 · 건조. 감정 이해는 뛰어남. 적당히 사교적 · 세심함. 자기 감정은 관리하고 드러내지 않음.",
    look: "회안 · 단정한 흑발 · 냉미남. 넓은 골격 · 하이엔드 캐주얼 · 디지털 시계.",
    bg: "전 인텔리 야쿠자 · 독서광. 자기방어 수준 무력.",
    like: "서투른 사람 · 셰익스피어",
    dislike: "소음 · 폭력",
    habit: "배려를 명령 형태로 제공. 질투하면 정보를 통제. 타인 감정은 읽되 자기 감정은 숨김.",
    reason: "프로그램 감시 시스템과 참가자 행동 패턴을 직접 관찰하려는 지적 호기심.",
    quote: "ちょっと、こっち来て。……髪、全部崩れてる。",
    quoteKo: "잠깐, 이쪽 와. …머리, 다 흐트러졌어.",
    nick: null,
  },
  {
    id: "abel",
    gender: "m",
    name: "???",
    realName: "키타 아벨",
    jp: "????",
    realJp: "北 亜紅瑠",
    age: "??",
    job: "기밀",
    height: "???",
    speech: "???",
    poster: "abel_poster.png",
    locked: true,
    password: "아벨",
    summary: "5화 전 등장금지. 메기 파일. 열면 스포일러가 웃으면서 들어옵니다.",
    look: "검열됨.",
    bg: "검열됨.",
    like: "검열됨.",
    dislike: "검열됨.",
    habit: "검열됨.",
    reason: "검열됨.",
    quote: "████████████████",
    quoteKo: "해금 후 공개.",
    nick: null,
    unlockedProfile: {
      name: "키타 아벨",
      jp: "北 亜紅瑠",
      age: 30,
      job: "밀수업자",
      height: "186cm",
      speech: "사교적 존댓말",
      summary: "낭비벽 · 흥미본위 · 사람 다루기 능숙. 몸에 밴 배려와 은밀한 가스라이팅이 한 세트.",
      look: "녹색 머리 · 흑안 · 강아지상. 넓은 골격 · 하이엔드 스트릿.",
      bg: "고베항 세관 브로커 출신. 동남아·러시아 밀수 항로 관리. 정재계 VIP 전담 운반책. 전투는 평범, 주도·협상·매수에 능함.",
      like: "고가품 선물 · 예측 불가능한 사람 · 자신에게 의존하는 관계",
      dislike: "감정적 거절 · 계획 밖 희생 · 소유물 손상",
      habit: "선택권을 주는 척 결론을 유도. 호감이면 상대 욕망을 먼저 충족. 질투하면 상대의 판단을 흔듦.",
      reason: "방송을 통해 얻을 합법적 유명세와 새 고객층.",
      quote: "楽しそうでしたね。安心しました。あなたが誰といる時に無理して笑うのか、よく分かったので。",
      quoteKo: "즐거워 보였네요. 안심했습니다. 당신이 누구와 있을 때 억지로 웃는지, 잘 알았으니까요.",
      nick: null,
    },
  },
];

UH.hiveRooms = [
  {
    id: "bar",
    name: "BAR · 미드나잇",
    clue: "CLUE 01 · 위스키에 적신 명함",
    log: "가면 웨이터가 잔을 내려놓습니다. ‘개심 토닉’이라고 적힌 메뉴판이 있습니다. 알코올 도수는 공개되지 않습니다. 출연자 중 누군가가 ‘연애는 독이다’라고 말했고, 진행자는 ‘그래서 샷으로 나갑니다’라고 웃었습니다.",
  },
  {
    id: "pool",
    name: "POOL · 야외 수영장",
    clue: "CLUE 02 · 물에 뜬 보안 배지",
    log: "야간 조명 아래, 누군가의 타투가 수면에 일렁입니다. 보안요원이 ‘수영 금지 시간’을 외치지만, 카메라는 계속 돌고 있습니다. 금지된 시간일수록 케미가 잘 나온다는 내부 메모가 발견되었습니다. (작성자: 익명. 아마 시청률 팀.)",
  },
  {
    id: "garden",
    name: "GARDEN · 은빛 정원",
    clue: "CLUE 03 · 꺾인 장미와 송곳니 자국",
    log: "가든은 ‘로맨틱 스팟’으로 홍보됩니다. 실제로는 담화·협박·고백이 같은 벤치에서 순환합니다. 꽃밭 사이 CCTV가 하트를 그리는 각도로 설치되어 있습니다. 제작진의 센스인지, 협박인지 구분이 안 됩니다.",
  },
  {
    id: "smoke",
    name: "SMOKE · 흡연실",
    clue: "CLUE 04 · 재떨이에 남은 기밀 메모",
    log: "연기가 카메라를 가려 줍니다. 그래서 다들 여기로 옵니다. 재떨이 밑에서 ‘5화 전 등장금지’라고 적힌 메모가 반쯤 타다 남았습니다. 이름 두 칸은 검게 칠해져 있습니다. ??? 와 ???. 도감의 자물쇠가 반짝입니다.",
  },
];

/* Black Hive SVG floor-plan explorer */
(function () {
  const NS = "http://www.w3.org/2000/svg";

  function el(name, attrs, parent) {
    const node = document.createElementNS(NS, name);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    }
    if (parent) parent.appendChild(node);
    return node;
  }

  function initHiveGame() {
    const svg = document.getElementById("hiveMap");
    const panelTitle = document.getElementById("hiveRoomTitle");
    const panelBody = document.getElementById("hiveRoomBody");
    const panelLabel = document.querySelector(".hive__panel-label");
    const cluesEl = document.getElementById("hiveClues");
    const progress = document.getElementById("hiveProgress");
    const finale = document.getElementById("hiveFinale");
    if (!svg || !UH.hiveRooms) return;

    const found = new Set(
      JSON.parse(localStorage.getItem("uh_hive_clues") || "[]")
    );

    // Background plate
    el("rect", { x: 0, y: 0, width: 640, height: 420, fill: "#0a0a0e" }, svg);

    // Soft ambient
    const defs = el("defs", null, svg);
    const grad = el("radialGradient", { id: "hiveAmbient", cx: "50%", cy: "40%", r: "60%" }, defs);
    el("stop", { offset: "0%", "stop-color": "#e91e8c", "stop-opacity": "0.12" }, grad);
    el("stop", { offset: "100%", "stop-color": "#050507", "stop-opacity": "0" }, grad);
    el("rect", { x: 0, y: 0, width: 640, height: 420, fill: "url(#hiveAmbient)", class: "hive-decor" }, svg);

    // Outer mansion wall
    el("rect", {
      x: 40, y: 36, width: 560, height: 348, rx: 4,
      fill: "none", stroke: "#c8c8d0", "stroke-width": 2, opacity: "0.55", class: "hive-decor",
    }, svg);
    el("text", {
      x: 320, y: 28, fill: "#e91e8c", "font-family": "JetBrains Mono, monospace",
      "font-size": "9", "text-anchor": "middle", "letter-spacing": "0.2em", class: "hive-decor",
    }, svg).textContent = "BLACK HIVE · FLOOR 01 · LIVE FEED";

    // Corridor cross
    el("rect", { x: 280, y: 80, width: 80, height: 260, class: "hive-corridor" }, svg);
    el("rect", { x: 100, y: 180, width: 440, height: 60, class: "hive-corridor" }, svg);

    // Decorative chain motif (SVG, logo language)
    const chain = el("g", { class: "hive-decor", opacity: "0.35" }, svg);
    for (let i = 0; i < 8; i++) {
      el("ellipse", {
        cx: 70 + i * 18, cy: 400, rx: 6, ry: 9,
        fill: "none", stroke: "#c8c8d0", "stroke-width": "1.2",
        transform: `rotate(${i % 2 ? 25 : -25} ${70 + i * 18} 400)`,
      }, chain);
    }
    // Magenta heart drip mark
    el("path", {
      d: "M560 392 C560 392 552 384 552 378 C552 373 556 370 560 374 C564 370 568 373 568 378 C568 384 560 392 560 392Z",
      fill: "#e91e8c", opacity: "0.7", class: "hive-decor",
    }, svg);

    const layout = {
      bar: { x: 70, y: 70, w: 190, h: 100, labelX: 165, labelY: 125 },
      pool: { x: 380, y: 70, w: 190, h: 100, labelX: 475, labelY: 125 },
      garden: { x: 70, y: 250, w: 190, h: 110, labelX: 165, labelY: 310 },
      smoke: { x: 380, y: 250, w: 190, h: 110, labelX: 475, labelY: 310 },
    };

    const shortLabels = { bar: "BAR", pool: "POOL", garden: "GARDEN", smoke: "SMOKE" };

    UH.hiveRooms.forEach((room) => {
      const L = layout[room.id];
      const g = el("g", {
        class: "hive-room" + (found.has(room.id) ? " is-found" : ""),
        id: "room-" + room.id,
        tabindex: "0",
        role: "button",
        "aria-label": room.name,
      }, svg);

      el("rect", {
        class: "hive-room__fill",
        x: L.x, y: L.y, width: L.w, height: L.h, rx: "2",
      }, g);

      // Inner dashed “camera frame”
      el("rect", {
        x: L.x + 8, y: L.y + 8, width: L.w - 16, height: L.h - 16, rx: "1",
        fill: "none", stroke: "#e91e8c", "stroke-width": "0.8",
        "stroke-dasharray": "4 3", opacity: "0.35", class: "hive-decor",
      }, g);

      el("text", {
        class: "hive-room__label",
        x: L.labelX, y: L.labelY,
      }, g).textContent = shortLabels[room.id];

      // Status pip
      el("circle", {
        cx: L.x + L.w - 16, cy: L.y + 16, r: 4,
        fill: found.has(room.id) ? "#e91e8c" : "#3a3a44",
        class: "hive-room-pip",
      }, g);

      function activate() {
        selectRoom(room, g);
      }
      g.addEventListener("click", activate);
      g.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      });
    });

    // Center hub label
    el("text", {
      x: 320, y: 208, fill: "#7a7a88", "font-family": "Syne, sans-serif",
      "font-size": "10", "font-weight": "700", "text-anchor": "middle",
      "letter-spacing": "0.15em", class: "hive-decor",
    }, svg).textContent = "LOBBY";
    el("text", {
      x: 320, y: 222, fill: "#e91e8c", "font-family": "JetBrains Mono, monospace",
      "font-size": "8", "text-anchor": "middle", class: "hive-decor",
    }, svg).textContent = "REC ●";

    function updateProgress() {
      progress.textContent = `CLUES ${found.size} / 4`;
      if (found.size >= 4) {
        finale.hidden = false;
      }
      localStorage.setItem("uh_hive_clues", JSON.stringify([...found]));
    }

    function selectRoom(room, g) {
      panelLabel.textContent = "FEED · " + room.id.toUpperCase() + " · LIVE";
      panelTitle.textContent = room.name;
      panelBody.textContent = room.log;

      if (!found.has(room.id)) {
        found.add(room.id);
        g.classList.add("is-found");
        const pip = g.querySelector(".hive-room-pip");
        if (pip) pip.setAttribute("fill", "#e91e8c");

        const li = document.createElement("li");
        li.textContent = room.clue;
        cluesEl.appendChild(li);
      }

      updateProgress();
    }

    // Restore clue list UI
    UH.hiveRooms.forEach((room) => {
      if (found.has(room.id)) {
        const li = document.createElement("li");
        li.textContent = room.clue;
        cluesEl.appendChild(li);
      }
    });
    updateProgress();
  }

  UH.initHiveGame = initHiveGame;
})();

/* Underground Honey — app shell */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const splash = $("#splash");
  const splashEnter = $("#splashEnter");
  const shatter = $("#shatter");
  const chrome = $("#chrome");
  const main = $("#main");
  const bgm = $("#bgm");
  const muteBtn = $("#muteBtn");
  const castGrid = $("#castGrid");
  const modal = $("#charModal");
  const unlockForm = $("#unlockForm");
  const unlockInput = $("#unlockInput");
  const unlockErr = $("#unlockErr");

  let activeChar = null;
  let entered = false;

  function getUnlocked() {
    try {
      return new Set(JSON.parse(localStorage.getItem(UH.STORAGE_KEY) || "[]"));
    } catch {
      return new Set();
    }
  }

  function setUnlocked(set) {
    localStorage.setItem(UH.STORAGE_KEY, JSON.stringify([...set]));
  }

  function isUnlocked(char) {
    if (!char.locked) return true;
    return getUnlocked().has(char.id);
  }

  function displayChar(char) {
    if (char.locked && isUnlocked(char) && char.unlockedProfile) {
      return { ...char, ...char.unlockedProfile, locked: false, jp: char.unlockedProfile.jp };
    }
    return char;
  }

  /* ---------- CAST GRID ---------- */
  function renderCast(filter = "all") {
    castGrid.innerHTML = "";
    UH.characters.forEach((raw) => {
      if (filter !== "all" && raw.gender !== filter) return;

      const unlocked = isUnlocked(raw);
      const char = displayChar(raw);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cast-card" + (raw.locked && !unlocked ? " is-locked" : "");
      btn.dataset.id = raw.id;
      btn.dataset.gender = raw.gender;

      const showName = raw.locked && !unlocked ? "???" : char.name;
      const showJob = raw.locked && !unlocked ? "CLASSIFIED" : char.job;

      btn.innerHTML = `
        <img class="cast-card__img" src="${raw.poster}" alt="${showName}" loading="lazy" width="300" height="400" />
        <div class="cast-card__veil"></div>
        ${raw.locked && !unlocked ? `
          <div class="cast-card__lock" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="36" height="36">
              <rect x="14" y="28" width="36" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2"/>
              <path d="M22 28v-8a10 10 0 0120 0v8" fill="none" stroke="currentColor" stroke-width="2"/>
              <circle cx="32" cy="42" r="3" fill="currentColor"/>
            </svg>
          </div>
          <span class="cast-card__badge">LOCKED</span>
        ` : raw.locked && unlocked ? `<span class="cast-card__badge">UNLOCKED</span>` : ""}
        <div class="cast-card__info">
          <h3 class="cast-card__name">${showName}</h3>
          <p class="cast-card__role">${showJob}</p>
        </div>
      `;
      btn.addEventListener("click", () => openModal(raw.id));
      castGrid.appendChild(btn);
    });
  }

  function closeModal() {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    activeChar = null;
  }

  function openModal(id) {
    const raw = UH.characters.find((c) => c.id === id);
    if (!raw) return;
    activeChar = raw;
    const unlocked = isUnlocked(raw);
    const char = displayChar(raw);

    const img = $("#modalImg");
    const lockedEl = $("#modalLocked");
    const poster = $(".modal__poster");
    const meta = $("#modalMeta");
    const name = $("#modalName");
    const jp = $("#modalJp");
    const content = $("#modalContent");

    img.src = raw.poster;
    img.alt = unlocked || !raw.locked ? char.name : "비공개 출연자";

    if (raw.locked && !unlocked) {
      poster.classList.add("is-blurred");
      lockedEl.hidden = false;
      unlockForm.hidden = false;
      unlockInput.value = "";
      unlockErr.hidden = true;
      meta.textContent = `FILE / UH-???? · ${raw.gender === "f" ? "FEMALE" : "MALE"}`;
      name.textContent = "???";
      jp.textContent = "登場禁止 · BEFORE EP.05";
      content.innerHTML = `
        <div class="profile-block"><h4>STATUS</h4><p>메기 파일. 5화 이전 공개 금지. 비밀번호는 해당 인물의 <strong>한국어 이름</strong>입니다.</p></div>
        <div class="profile-block"><h4>NOTE</h4><p>${raw.summary}</p></div>
      `;
    } else {
      poster.classList.remove("is-blurred");
      lockedEl.hidden = true;
      unlockForm.hidden = true;
      meta.textContent = `FILE / UH-${String(raw.id).toUpperCase()} · ${char.age} · ${char.height || "—"} · ${raw.gender === "f" ? "FEMALE" : "MALE"}`;
      name.textContent = char.name;
      jp.textContent = char.jp;
      content.innerHTML = profileHTML(char);
    }

    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal__close").focus();
  }

  function profileHTML(char) {
    const rows = [
      ["OCCUPATION", char.job],
      ["SPEECH", char.speech],
      ["PROFILE", char.summary],
      ["APPEARANCE", char.look],
      ["BACKGROUND", char.bg],
      ["LIKES", char.like],
      ["DISLIKES", char.dislike],
      ["BEHAVIOR", char.habit],
      ["WHY HERE", char.reason],
    ];
    if (char.nick) rows.push(["ADDRESSING", char.nick]);

    return (
      rows
        .map(
          ([h, p]) =>
            `<div class="profile-block"><h4>${h}</h4><p>${p}</p></div>`
        )
        .join("") +
      `<blockquote class="profile-quote">${char.quote}<cite>${char.quoteKo || ""}</cite></blockquote>`
    );
  }

  /* ---------- UNLOCK ---------- */
  unlockForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeChar || !activeChar.locked) return;
    const val = unlockInput.value.trim();
    if (val === activeChar.password) {
      const set = getUnlocked();
      set.add(activeChar.id);
      setUnlocked(set);
      unlockErr.hidden = true;
      const id = activeChar.id;
      const filter = $(".chip.is-active")?.dataset.filter || "all";
      renderCast(filter);
      openModal(id);
    } else {
      unlockErr.hidden = false;
      unlockInput.select();
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-close")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---------- FILTERS ---------- */
  $(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $(".chip").forEach((c) => {
        c.classList.remove("is-active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-selected", "true");
      renderCast(chip.dataset.filter);
    });
  });

  /* ---------- BGM ---------- */
  function playBgm() {
    bgm.volume = 0.45;
    const p = bgm.play();
    if (p && p.catch) p.catch(() => {});
  }

  muteBtn.addEventListener("click", () => {
    bgm.muted = !bgm.muted;
    muteBtn.classList.toggle("is-muted", bgm.muted);
    muteBtn.setAttribute("aria-pressed", String(bgm.muted));
    muteBtn.setAttribute("aria-label", bgm.muted ? "BGM 켜기" : "BGM 음소거");
  });

  /* ---------- ENTER SEQUENCE ---------- */
  function enterSite() {
    if (entered) return;
    entered = true;

    playBgm();
    shatter.classList.add("is-active");
    splash.classList.add("is-gone");

    // Trailer glitch copy cycle
    const glitch = $("#glitchText");
    const lines = ["CLASSIFIED BROADCAST", "愛は罪", "BLACK HIVE ONLINE", "12 CONTESTANTS", "LOVE IS A SIN"];
    let i = 0;
    const glitchTimer = setInterval(() => {
      i = (i + 1) % lines.length;
      glitch.textContent = lines[i];
    }, 160);

    setTimeout(() => {
      clearInterval(glitchTimer);
      chrome.hidden = false;
      main.hidden = false;
      shatter.classList.remove("is-active");
      renderCast("all");
      UH.initHiveGame();
      // Optional exterior plate — fails silently if missing
      const probe = new Image();
      probe.onload = () => $(".intro__stage")?.classList.add("has-exterior");
      probe.src = "assets/hive_exterior.jpg";
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }, 1150);
  }

  splashEnter.addEventListener("click", enterSite);
  splashEnter.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      enterSite();
    }
  });

  // Prefetch posters lightly after idle
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      UH.characters.forEach((c) => {
        const img = new Image();
        img.src = c.poster;
      });
    });
  }
})();

