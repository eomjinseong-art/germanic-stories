export const SITE_NAME = "게르만이야기";
export const SITE_NAME_EN = "Germanic Stories";
export const SITE_MARK = "G";
export const SITE_TAGLINE = "로마와 맞선 게르만족을, 짧은 한국어로";
export const SITE_SUB =
  "라인 강 동쪽의 부족, 토이토부르크, 민족 대이동과 게르만 왕국을 전설과 역사를 구분해 적습니다. 어려운 말에는 쉬운 풀이를 붙입니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://germanic-stories.vercel.app";

export const SISTER_SITES_LABEL = "나두 역사·신화";

export const MYTH_URL = "https://nadoo-myth.vercel.app";
export const ILIAD_URL = "https://iliad-stories.vercel.app";
export const GREECE_URL = "https://greece-stories.vercel.app";
export const ROME_URL = "https://rome-stories.vercel.app";
export const EGYPT_URL = "https://egypt-stories.vercel.app";
export const PERSIA_URL = "https://persia-stories.vercel.app";
export const CHOSEN_URL = "https://the-chosen-korean.vercel.app";
export const PHILOSOPHY_URL = "https://philosophy-stories.vercel.app";
export const KOREA_URL = "https://korea-stories.vercel.app";
export const TIMELINE_URL = "https://nadoo-timeline.vercel.app";
export const HUB_URL = "https://tinalinkeom.vercel.app";
export const VIKING_URL = "https://viking-stories.vercel.app";
export const WORLD_URL = "https://nadoo-world.vercel.app";
export const CHECKLIST_URL = "https://movie-checklist-sigma.vercel.app/?list=history";

export const SISTER_SITES = [
  { href: MYTH_URL, label: "나두신화", en: "Myth" },
  { href: ILIAD_URL, label: "일리아스이야기", en: "Iliad" },
  { href: GREECE_URL, label: "그리스이야기", en: "Greece" },
  { href: ROME_URL, label: "로마이야기", en: "Rome" },
  { href: VIKING_URL, label: "바이킹이야기", en: "Vikings" },
  { href: EGYPT_URL, label: "이집트이야기", en: "Egypt" },
  { href: PERSIA_URL, label: "페르시아이야기", en: "Persia" },
  { href: CHOSEN_URL, label: "더 초즌 · 성경", en: "The Chosen · Bible" },
  { href: PHILOSOPHY_URL, label: "철학이야기", en: "Philosophy" },
  { href: KOREA_URL, label: "대한민국이야기", en: "Korea" },
  { href: WORLD_URL, label: "나두세계", en: "World" },
  { href: TIMELINE_URL, label: "나두연표", en: "Timeline" },
  { href: HUB_URL, label: "나두 허브", en: "Nadoo Hub" },
] as const;

/** Sister origins a build-time link check may name. Do not fetch them. 나두세계는 만드는 중이라 잠시 404여도 이 빌드가 실패하면 안 됩니다. */
export const ALLOWED_SISTER_ORIGINS = SISTER_SITES.map((site) => new URL(site.href).origin);

export const OTHER_FAMILY_TREES = [
  { href: `${MYTH_URL}/family-tree`, label: "나두신화 가족관계도", en: "Myth" },
  { href: `${ILIAD_URL}/family-tree`, label: "일리아스이야기 가족관계도", en: "Iliad" },
  { href: `${GREECE_URL}/family-tree`, label: "그리스이야기 가족관계도", en: "Greece" },
  { href: `${ROME_URL}/family-tree`, label: "로마이야기 가족관계도", en: "Rome" },
  { href: `${VIKING_URL}/family-tree`, label: "바이킹이야기 가족관계도", en: "Vikings" },
  { href: `${EGYPT_URL}/family-tree`, label: "이집트이야기 가족관계도", en: "Egypt" },
  { href: `${PERSIA_URL}/family-tree`, label: "페르시아이야기 가족관계도", en: "Persia" },
  { href: `${KOREA_URL}/family-tree`, label: "대한민국이야기 가족관계도", en: "Korea" },
  { href: `${CHOSEN_URL}/family-tree`, label: "더 초즌 · 성경 가족관계도", en: "The Chosen · Bible" },
] as const;

export const OTHER_FILM_PAGES = [
  { href: `${ILIAD_URL}/movies`, label: "일리아스이야기 영화", en: "Iliad" },
  { href: `${GREECE_URL}/movies`, label: "그리스이야기 영화", en: "Greece" },
  { href: `${ROME_URL}/movies`, label: "로마이야기 영화", en: "Rome" },
  { href: `${VIKING_URL}/films`, label: "바이킹이야기 영화", en: "Vikings" },
  { href: `${EGYPT_URL}/movies`, label: "이집트이야기 영화", en: "Egypt" },
  { href: `${PERSIA_URL}/movies`, label: "페르시아이야기 영화", en: "Persia" },
  { href: `${KOREA_URL}/films`, label: "대한민국이야기 영화", en: "Korea" },
  { href: `${PHILOSOPHY_URL}/films`, label: "철학이야기 영화", en: "Philosophy" },
  { href: `${MYTH_URL}/in-media`, label: "나두신화에서 영화 보기", en: "Myth" },
  { href: `${CHOSEN_URL}/together`, label: "더 초즌에서 함께 보기", en: "The Chosen · Bible" },
] as const;

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";

export const NAV = [
  { href: "/who", label: "게르만족" },
  { href: "/tribes", label: "부족·지도" },
  { href: "/chronicle", label: "연대기" },
  { href: "/kingdoms", label: "왕국" },
  { href: "/people", label: "인물" },
  { href: "/family-tree", label: "관계도" },
  { href: "/barbarians", label: "바바리안" },
  { href: "/films", label: "영화" },
  { href: "/sources", label: "출처" },
] as const;

export const HOME_SECTIONS = [
  {
    href: "/who",
    en: "Who",
    title: "게르만족은 누구인가",
    desc: "언어, 생활, 민회, 신앙, 그리고 로마가 ‘바바리안’이라 부른 이유. 하나의 나라로 적지 않습니다.",
  },
  {
    href: "/tribes",
    en: "Tribes",
    title: "부족 도감·지도",
    desc: "케루스키부터 고트, 프랑크, 색슨까지. 도식 지도이고, 한 해의 국경선이 아닙니다.",
  },
  {
    href: "/chronicle",
    en: "Chronicle",
    title: "로마와의 대립",
    desc: "킴브리 전쟁부터 476년까지. 토이토부르크 숲 전투를 한 장으로 깊게 둡니다.",
  },
  {
    href: "/chronicle/teutoburg",
    en: "Teutoburg",
    title: "토이토부르크, 서기 9년",
    desc: "아르미니우스와 바루스, 군단 세 개, 그리고 그 뒤에 남은 라인 국경.",
  },
  {
    href: "/kingdoms",
    en: "Kingdoms",
    title: "로마 이후의 왕국",
    desc: "동고트, 서고트, 반달, 프랑크, 앵글로색슨, 랑고바르드. 끝은 바이킹 시대로 잇습니다.",
  },
  {
    href: "/people",
    en: "People",
    title: "인물",
    desc: "아르미니우스와 투스넬다, 알라리크, 테오도릭, 클로비스, 카롤루스 대제. 아틸라는 훈족이라고 적습니다.",
  },
  {
    href: "/family-tree",
    en: "Relations",
    title: "관계도",
    desc: "아르미니우스 가문과 로마 지휘부, 그리고 메로빙에서 카롤링으로 넘어가는 짧은 선.",
  },
  {
    href: "/barbarians",
    en: "Barbarians",
    title: "드라마 바바리안",
    desc: "시즌 두 개의 큰 줄기, 실존 인물과 창작 인물, 사료와 다른 점. 포르모사스는 확인되지 않습니다.",
  },
  {
    href: "/films",
    en: "Films",
    title: "영화·드라마",
    desc: "실제로 있는 작품만. 연도, 줄거리, 역사와 다른 점을 나누고 불법 영상은 안내하지 않습니다.",
  },
  {
    href: "/sources",
    en: "Sources",
    title: "출처",
    desc: "카이사르, 타키투스, 요르다네스, 그레고리우스와 현대 개설. 단정하지 않은 항목도 모아 둡니다.",
  },
] as const;
