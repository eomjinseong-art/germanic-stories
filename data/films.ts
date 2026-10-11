import type { Film } from "@/data/types";
import { PHILOSOPHY_URL, ROME_URL, TIMELINE_URL } from "@/lib/site";

export const films: readonly Film[] = [
  {
    slug: "barbarians-2020",
    titleKo: "바바리안",
    titleOriginal: "Barbarians",
    year: "2020–2022",
    kind: "시리즈",
    plot: "넷플릭스 독일 드라마. 시즌 1(2020, 6편)은 서기 9년 토이토부르크 숲으로 가고, 시즌 2(2022, 6편)는 그 뒤 로마의 보복과 부족 사이의 갈등을 그립니다. 로마 인물은 라틴어를 씁니다.",
    history: "아르미니우스, 투스넬다, 세게스테스, 바루스, 플라부스, 게르마니쿠스, 마로보두스는 실존합니다. 폴크윈은 창작입니다. 바루스를 양아버지로 둔 설정, 전투 전의 결혼과 폴크윈의 아이, 시즌 2에서 플라부스가 죽는 결말은 사료와 다릅니다. 출연 명단에 포르모사스(Formosus)는 없습니다. 나두연표 영화 목록에는 아직 없는 작품이라 앵커는 이 사이트의 id를 씁니다.",
    links: [
      { href: "/barbarians", label: "바바리안 특집" },
      { href: "/chronicle/teutoburg", label: "토이토부르크" },
      { href: "/people/arminius", label: "아르미니우스" },
    ],
  },
  {
    slug: "gladiator-2000",
    titleKo: "글래디에이터",
    titleOriginal: "Gladiator",
    year: "2000",
    kind: "영화",
    plot: "마르쿠스 아우렐리우스 말년, 게르마니아로 불리는 전선에서 황제가 병사들을 격려하는 전투로 시작합니다. 그 뒤 이야기는 로마의 검투 경기와 황제 자리로 넘어갑니다.",
    history: "오프닝의 전장은 마르코만니 전쟁(166–180년)의 분위기를 빌린 것입니다. 그 전쟁 자체는 실재합니다. 주인공 막시무스는 실존 인물이 아니고, 마르쿠스 아우렐리우스는 아들에게 살해당한 것이 아니라 180년 전선 근처에서 병으로 죽었습니다. 영화의 한 전투를 사료의 특정 전투와 같게 외우지 않는 편이 좋습니다.",
    links: [
      { href: "/chronicle/marcomannic-war", label: "마르코만니 전쟁" },
      { href: `${ROME_URL}/rulers/marcus-aurelius`, label: "로마이야기에서 마르쿠스 아우렐리우스" },
      { href: `${PHILOSOPHY_URL}/people/marcus-aurelius`, label: "철학이야기에서 마르쿠스 아우렐리우스" },
      { href: `${TIMELINE_URL}/events/death-of-marcus-aurelius`, label: "나두연표에서 마르쿠스의 죽음" },
    ],
  },
  {
    slug: "fall-of-the-roman-empire-1964",
    titleKo: "로마제국의 멸망",
    titleOriginal: "The Fall of the Roman Empire",
    year: "1964",
    kind: "영화",
    plot: "게르만족 전선의 겨울 진영에서 마르쿠스 아우렐리우스가 후계를 고민하다 죽고, 코모두스의 로마가 변방으로 흔들리는 이야기입니다.",
    history: "배경이 된 도나우 전선과 마르코만니·콰디와의 전쟁은 2세기 후반의 사실입니다. 다만 이 영화는 서로마가 끝나는 476년보다 300년 가까이 앞섭니다. 제목의 ‘멸망’을 오도아케르의 해와 겹쳐 읽으면 시대가 어긋납니다. 인물의 음모는 극입니다.",
    links: [
      { href: "/chronicle/marcomannic-war", label: "마르코만니 전쟁" },
      { href: "/chronicle/odoacer-476", label: "476년은 다른 장" },
      { href: `${ROME_URL}/rulers/marcus-aurelius`, label: "로마이야기의 마르쿠스 아우렐리우스" },
    ],
  },
  {
    slug: "i-claudius-1976",
    titleKo: "나, 클라우디우스",
    titleOriginal: "I, Claudius",
    year: "1976",
    kind: "시리즈",
    plot: "BBC 시리즈. 아우구스투스 말년부터 클라우디우스까지 황제 가문의 승계를 그립니다. 게르마니쿠스는 인기 있는 황제 후계로 나오고, 시리아에서 죽습니다.",
    history: "로버트 그레이브스의 소설에 기댑니다. 게르마니쿠스가 게르마니아에서 작전한 뒤 17년 개선하고 19년 안티오키아에서 죽은 뼈대는 타키투스와 맞습니다. 독살의 범인을 단정하는 줄거리는 소문이지 판결이 아닙니다. 토이토부르크 전투 자체를 재연한 작품은 아닙니다.",
    links: [
      { href: "/people/germanicus", label: "게르마니쿠스" },
      { href: "/chronicle/germanicus", label: "보복 원정" },
      { href: `${ROME_URL}/family-tree?tree=julio&focus=germanicus`, label: "로마이야기 가계의 게르마니쿠스" },
    ],
  },
  {
    slug: "attila-2001",
    titleKo: "아틸라",
    titleOriginal: "Attila",
    year: "2001",
    kind: "시리즈",
    plot: "제라드 버틀러가 아틸라를 맡은 미국 텔레비전 미니시리즈입니다. 훈족의 성장, 서로마의 장군 아이티우스, 갈리아와 이탈리아 원정을 한 편의 영웅담으로 잇습니다.",
    history: "아틸라는 훈족의 왕이지 게르만 왕이 아닙니다. 451년 카탈라우눔, 452년 이탈리아, 453년 죽음은 큰 연대가 맞습니다. 일디코가 죽은 밤에 함께 있었다는 이야기는 프리스쿠스를 전하는 요르다네스에 나오지만, 사인은 그 기록 안의 한 설명입니다. 연애와 대사는 극입니다. 나두연표 영화 목록에는 없어 앵커는 이 사이트의 id입니다.",
    links: [
      { href: "/people/attila", label: "아틸라" },
      { href: "/chronicle/catalaunian-plains", label: "카탈라우눔" },
      { href: "/people/aetius", label: "아이티우스" },
    ],
  },
  {
    slug: "the-last-legion-2007",
    titleKo: "라스트 리전",
    titleOriginal: "The Last Legion",
    year: "2007",
    kind: "영화",
    plot: "어린 서로마 황제 로물루스 아우구스툴루스가 오도아케르에게 쫓겨 브리타니아로 가고, 카이사르의 검이 뒤에 엑스칼리버가 된다는 모험입니다. 국내에는 라스트 레전으로도 소개됩니다.",
    history: "476년 오도아케르가 로물루스 아우구스툴루스를 폐위하고, 소년을 죽이지 않고 캄파니아로 보냈다는 후대 약사는 있습니다. 소년이 군단을 이끌고 브리타니아로 가 아서 왕의 아버지가 되었다는 줄기는 고대 기록에 없습니다. 검과 멀린에 해당하는 인물은 창작입니다.",
    links: [
      { href: "/chronicle/odoacer-476", label: "오도아케르와 476년" },
      { href: "/people/odoacer", label: "오도아케르" },
      { href: `${TIMELINE_URL}/events/fall-of-western-rome`, label: "나두연표에서 서로마의 멸망" },
    ],
  },
  {
    slug: "king-arthur-2004",
    titleKo: "킹 아더",
    titleOriginal: "King Arthur",
    year: "2004",
    kind: "영화",
    plot: "하드리아누스 성벽 남쪽의 사르마티아 기병 지휘관 아더가, 임기가 끝나기 전 마지막 임무로 색슨족과 맞섭니다. 국내에는 킹 아서로도 불립니다. 2017년 『킹 아서: 제왕의 검』과는 다른 영화입니다.",
    history: "마르쿠스 아우렐리우스 시대에 사르마티아 기병을 브리타니아로 보낸 일은 로마 쪽 기록과 맞닿아 있습니다. 그 부대를 아서 왕과 원탁의 기사로 잇는 것은 현대의 가설이지 합의된 사실이 아닙니다. 색슨·앵글의 브리타니아 정착은 긴 과정이고, 영화의 한 전투가 그 과정을 대신하지 않습니다. 아서 왕 자체는 전승입니다.",
    links: [
      { href: "/kingdoms/anglo-saxons", label: "앵글로색슨 잉글랜드" },
      { href: "/chronicle/marcomannic-war", label: "사르마티아와 겹치는 마르쿠스 시대" },
      { href: `${TIMELINE_URL}/events/arthur-tradition`, label: "나두연표에서 아더 왕 전승" },
    ],
  },
  {
    slug: "the-last-kingdom-2015",
    titleKo: "라스트 킹덤",
    titleOriginal: "The Last Kingdom",
    year: "2015–2022",
    kind: "시리즈",
    plot: "버나드 콘월의 소설을 바탕으로 한 시리즈입니다. 9세기 말 잉글랜드에서 노섬브리아 귀족의 아들 우트레드가 데인족과 앨프리드 왕 사이를 오갑니다.",
    history: "앨프리드 왕, 웨식스, 이교도 대군단이라 불리는 바이킹의 침공은 9세기의 역사입니다. 우트레드는 소설의 인물입니다. 이 사이트의 본편은 서로마와 초기 왕국까지이고, 793년 이후의 바이킹 전쟁은 다음 사이트 바이킹이야기의 시대입니다. 앵글로색슨 왕국이 어디로 이어지는지 볼 때 고릅니다.",
    links: [
      { href: "/kingdoms/anglo-saxons", label: "앵글로색슨" },
      { href: "/kingdoms#next-viking", label: "다음 이야기: 바이킹" },
      { href: `${TIMELINE_URL}/events/alfred-edington`, label: "나두연표에서 에딩턴과 앨프리드" },
    ],
  },
];

const bySlug = new Map(films.map((film) => [film.slug, film]));

export function filmBySlug(slug: string) {
  return bySlug.get(slug);
}

export function filmsBySlugs(slugs: readonly string[]) {
  return slugs.map((slug) => bySlug.get(slug)).filter((film): film is Film => Boolean(film));
}
