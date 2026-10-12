/**
 * Netflix Barbarians (Barbaren) episode guide. Full spoilers on purpose.
 * Titles checked 2026-10-12: German = de.wikipedia episode list, English = en.wikipedia,
 * Korean = netflix.com/kr/title/81024039. Plots cross-checked with en.wikipedia,
 * Netflix KR synopses and episode recaps (Ready Steady Cut, The Review Geek).
 */

export type Truth = "real" | "dramatized" | "fictional";

export type Character = {
  ko: string;
  en: string;
  truth: Truth;
  /** family-tree link (always /family-tree...) */
  tree: string;
  /** optional person page */
  page?: string;
  note: string;
};

const T = "/family-tree?tree=teutoburg";
const R = "/family-tree?tree=rome-side";

export const CHARACTERS = {
  arminius: { ko: "아르미니우스 (아리)", en: "Arminius", truth: "real", tree: `${T}&focus=arminius`, page: "/people/arminius", note: "실존. 극에서는 바루스의 양아들로 자랍니다. 이것은 창작입니다." },
  thusnelda: { ko: "투스넬다", en: "Thusnelda", truth: "dramatized", tree: `${T}&focus=thusnelda`, page: "/people/thusnelda", note: "실존. 하지만 예언자·전사 역할은 극의 설정입니다." },
  folkwin: { ko: "폴크빈 볼프스페어", en: "Folkwin Wolfspeer", truth: "fictional", tree: T, note: "창작. 가계도에 없는 사람입니다." },
  segimer: { ko: "세기메르", en: "Segimer", truth: "dramatized", tree: `${T}&focus=segimer`, note: "아버지로 전하는 이름. 죽는 방식은 창작입니다." },
  segestes: { ko: "세게스테스", en: "Segestes", truth: "real", tree: `${T}&focus=segestes`, page: "/people/segestes", note: "실존. 친로마. 극의 처형 결말은 창작입니다." },
  varus: { ko: "바루스", en: "Varus", truth: "dramatized", tree: `${R}&focus=varus`, page: "/people/varus", note: "실존 총독. 양아버지 설정은 창작입니다." },
  flavus: { ko: "플라부스", en: "Flavus", truth: "dramatized", tree: `${T}&focus=flavus`, page: "/people/flavus", note: "실존 동생. 마르보드와의 사랑, 전사는 창작입니다." },
  tiberius: { ko: "티베리우스", en: "Tiberius", truth: "dramatized", tree: `${R}&focus=tiberius`, note: "실존. 서기 10–11년 라인강 전선에 실제로 왔습니다." },
  germanicus: { ko: "게르마니쿠스", en: "Germanicus", truth: "dramatized", tree: `${R}&focus=germanicus`, page: "/people/germanicus", note: "실존. 큰 원정은 서기 14–16년입니다." },
  marbod: { ko: "마르보드 (마로보두스)", en: "Marbod", truth: "dramatized", tree: T, page: "/people/maroboduus", note: "실존 마르코만니 왕. 왕이 되는 과정과 사생활은 창작입니다." },
  thumelicus: { ko: "투멜리쿠스", en: "Thumelicus", truth: "dramatized", tree: `${T}&focus=thumelicus`, note: "실존 아들. 폴크빈이 친아버지라는 설정은 창작입니다." },
  irmina: { ko: "이르미나", en: "Irmina", truth: "fictional", tree: T, note: "투스넬다의 어머니로 나오는 창작 이름." },
  ansgar: { ko: "안스가", en: "Ansgar", truth: "fictional", tree: T, note: "투스넬다의 어린 동생. 창작." },
  berulf: { ko: "베룰프", en: "Berulf", truth: "fictional", tree: T, note: "폴크빈 편 전사. 창작." },
  hadgan: { ko: "하드간", en: "Hadgan", truth: "fictional", tree: T, note: "투스넬다의 약혼자. 창작." },
  runa: { ko: "예언자 루나", en: "Runa", truth: "fictional", tree: T, note: "창작." },
  talio: { ko: "탈리오", en: "Talio", truth: "fictional", tree: T, note: "마을의 상인. 창작." },
  gaius: { ko: "가이우스", en: "Gaius", truth: "fictional", tree: T, note: "아르미니우스의 로마 아들. 창작." },
  dido: { ko: "디도", en: "Dido", truth: "fictional", tree: T, note: "카르타고 출신 여성. 창작." },
  odarike: { ko: "오다리케", en: "Odarike", truth: "fictional", tree: T, note: "마르보드의 아내. 창작." },
  odvulf: { ko: "오드불프", en: "Odvulf", truth: "fictional", tree: T, note: "아르미니우스의 부하. 창작." },
} satisfies Record<string, Character>;

export type CharKey = keyof typeof CHARACTERS;

export type Place = { ko: string; href?: string; note: string };

export const PLACES = {
  village: { ko: "케루스키 마을", href: "/tribes#cherusci", note: "베저강 쪽 부족. 지도에서 볼 수 있습니다." },
  camp: { ko: "로마 군영", note: "극의 세트. 정확한 실제 장소는 없습니다." },
  bructeri: { ko: "브룩테리 땅", href: "/tribes#bructeri", note: "극에서 투스넬다·폴크빈이 찾아가는 이웃 부족." },
  forest: { ko: "토이토부르크 숲", href: "/chronicle/teutoburg", note: "칼크리제가 유력한 후보지입니다." },
  dark: { ko: "어둠의 땅(Dark Land)", note: "극의 신성한 장소. 창작." },
  marcomanni: { ko: "마르코만니 땅(동쪽)", href: "/tribes#marcomanni", note: "보헤미아 쪽. 지도에서 볼 수 있습니다." },
  thing: { ko: "부족 회의(Thing) 장소", note: "극의 장소. 창작." },
  rhine: { ko: "라인강 전선", href: "/chronicle/germanicus", note: "로마의 보급과 배가 들어오는 길." },
} satisfies Record<string, Place>;

export type PlaceKey = keyof typeof PLACES;

export type Episode = {
  season: 1 | 2;
  ep: number;
  overall: number;
  de: string;
  en: string;
  ko: string;
  plot: string[];
  ending: string;
  history: { drama: string; real: string }[];
  cast: CharKey[];
  places: PlaceKey[];
  gear: { rome: string; germanic: string };
  scene: string;
};

export const EPISODES: Episode[] = [
  {
    season: 1, ep: 1, overall: 1,
    de: "Wolf und Adler", en: "Wolf and Eagle", ko: "늑대와 독수리",
    plot: [
      "케루스키의 족장 세기메르는 새 총독 바루스의 세금 요구에 화가 납니다. 하지만 아들 아르미니우스가 로마군에 있어서 전쟁은 피하려 합니다.",
      "투스넬다는 다른 부족과의 정략 결혼을 앞두고 있지만, 마음은 폴크빈에게 있습니다.",
      "로마군이 와서 더 많은 공물을 요구하고, 독수리 깃발에 입을 맞추라고 합니다. 투스넬다가 막아서자 로마군이 그녀를 끌고 가고, 동생 안스가가 크게 다칩니다.",
      "복수로 투스넬다와 폴크빈은 로마 군영에 몰래 들어가 장교를 죽이고 천막에 불을 지른 뒤 독수리를 훔칩니다.",
    ],
    ending: "마을은 독수리를 두고 잔치를 엽니다. 그날 밤 로마군이 마을에 도착하고, 로마 기병 장교가 된 아르미니우스가 아버지 앞에 섭니다.",
    history: [
      { drama: "독수리 도난이 사건의 시작입니다.", real: "서기 9년 전에 케루스키가 독수리를 훔쳤다는 기록은 없습니다. 기원전 16년 롤리우스 때 잃은 독수리와는 다른 일입니다." },
      { drama: "바루스가 세금을 강하게 거둡니다.", real: "바루스가 세금과 로마식 재판을 서둘렀다는 평은 고대 기록(카시우스 디오, 벨레이우스)에 있습니다." },
      { drama: "투스넬다·폴크빈은 연인입니다.", real: "폴크빈은 창작입니다. 투스넬다가 다른 사람과 약혼했다는 이야기는 있지만(타키투스), 상대는 알려지지 않았습니다." },
    ],
    cast: ["thusnelda", "folkwin", "segimer", "segestes", "arminius", "ansgar", "irmina", "hadgan", "varus"],
    places: ["village", "camp"],
    gear: { rome: "로마 병사는 쇠사슬 갑옷, 큰 직사각형 방패(스쿠툼), 짧은 칼(글라디우스)을 듭니다. 군단 독수리(아퀼라)가 중심 소품입니다.", germanic: "게르만 쪽은 갑옷이 거의 없고, 창과 나무 방패, 칼은 드뭅니다. 사료와 크게 다르지 않습니다." },
    scene: "투스넬다가 꿇어앉으려는 아버지를 막아서는 장면. 이 한 번의 거절이 전체 이야기를 움직입니다.",
  },
  {
    season: 1, ep: 2, overall: 2,
    de: "Die Vergeltung", en: "Vengeance", ko: "복수",
    plot: [
      "과거 장면: 어린 아르미니우스, 투스넬다, 폴크빈은 친구였습니다. 평화를 위해 아르미니우스와 동생은 로마에 인질로 보내졌습니다.",
      "지금의 아르미니우스는 마을을 설득하려다 베룰프와 싸우고, 폴크빈이 그를 구합니다. 그는 자신을 로마에 보낸 아버지를 아직 원망합니다.",
      "아르미니우스는 몰래 독수리를 되찾아 갑니다. 쫓아온 폴크빈은 그에게 맞아 쓰러집니다.",
      "바루스는 폴크빈이 어디 있는지 말하라고 압박하고, 세게스테스가 정보를 넘깁니다.",
    ],
    ending: "로마군은 폴크빈의 가족을 십자가에 매답니다. 폴크빈은 너무 늦게 도착합니다. 그는 베룰프와 함께 복수를 맹세하고, 아르미니우스는 폴크빈의 목을 가져오라는 명령을 받습니다.",
    history: [
      { drama: "아르미니우스는 어릴 때 인질로 로마에 갔습니다.", real: "로마군에서 복무하며 시민권과 기사 신분을 받은 것은 사실입니다(벨레이우스). 인질로 간 시기와 방식은 기록이 없습니다." },
      { drama: "바루스가 양아버지입니다.", real: "창작입니다. 바루스는 그를 믿었을 뿐, 입양 기록은 없습니다." },
      { drama: "세게스테스가 로마에 정보를 줍니다.", real: "세게스테스가 친로마였고, 전투 전에 바루스에게 경고했다는 기록은 있습니다(타키투스)." },
    ],
    cast: ["arminius", "folkwin", "thusnelda", "segimer", "segestes", "berulf", "varus"],
    places: ["village", "camp"],
    gear: { rome: "로마 장교 아르미니우스는 기병 장교의 갑옷과 투구를 입습니다. 실제로 그는 보조군(아욱실리아) 지휘관이었던 것으로 봅니다.", germanic: "늑대 이빨 목걸이는 셋의 우정을 보여주는 극의 소품입니다." },
    scene: "늑대 이빨을 나누던 어린 날의 회상과, 지금 서로를 때리는 두 사람이 겹치는 장면.",
  },
  {
    season: 1, ep: 3, overall: 3,
    de: "Am Abgrund", en: "On the Edge", ko: "벼랑 끝에서",
    plot: [
      "투스넬다와 세기메르는 십자가의 시신을 내립니다. 로마군을 이끌고 온 아르미니우스는 바루스의 명령과 달리 장례를 허락합니다.",
      "폴크빈은 이웃 부족(브룩테리)과 손을 잡으려 하지만 배신당하고, 많은 동료가 죽습니다.",
      "투스넬다의 어머니는 다친 안스가를 벼랑에서 떨어뜨리려 합니다. 투스넬다가 마지막 순간에 동생을 구하고 숲으로 떠납니다. 약혼자 하드간은 신부가 없는 마을에 화를 냅니다.",
      "로마군은 붙잡은 반란군에게서 폴크빈이 ‘어둠의 땅’에 있다는 말을 듣고 그를 죽입니다.",
    ],
    ending: "로마군이 폴크빈 무리를 모두 죽이고, 아르미니우스가 폴크빈을 죽일 차례가 됩니다. 그는 칼을 돌려 함께 온 로마 병사들을 죽입니다.",
    history: [
      { drama: "아르미니우스가 동료 로마 병사를 죽이며 편을 바꿉니다.", real: "실제 변심의 계기는 알 수 없습니다. 고대 기록은 그가 오래 계획했다고만 합니다." },
      { drama: "브룩테리가 폴크빈을 배신합니다.", real: "브룩테리는 실제로 서기 9년 매복에 함께했던 부족으로 봅니다. 극의 배신 장면은 창작입니다." },
    ],
    cast: ["arminius", "folkwin", "thusnelda", "segimer", "segestes", "irmina", "ansgar", "hadgan", "berulf"],
    places: ["village", "bructeri", "dark"],
    gear: { rome: "로마 수색대는 작은 부대로 숲을 다닙니다. 투구 볼가리개(뺨 보호대)가 얼굴을 가립니다.", germanic: "게르만 전사는 목을 노립니다. 로마의 쇠사슬 갑옷을 피하는 방법으로 그려집니다." },
    scene: "무릎 꿇은 폴크빈 앞에서 아르미니우스가 칼을 로마 병사에게 돌리는 마지막 장면.",
  },
  {
    season: 1, ep: 4, overall: 4,
    de: "Ein neuer Reik", en: "A New Reik", ko: "새 족장",
    plot: [
      "아르미니우스와 폴크빈은 불가에서 화해합니다. 아르미니우스는 다른 시신의 목을 폴크빈의 것이라고 속여 바루스에게 바칩니다.",
      "바루스는 그를 로마로 돌려보내지 않고 케루스키의 족장(라이크)으로 삼으려 합니다. 아르미니우스는 크게 실망합니다.",
      "세기메르는 자기 시대가 끝났다고 보고 칼을 꽂아 두고 호수로 걸어 들어가 스스로 목숨을 끊습니다.",
      "아르미니우스는 살아남은 로마 병사를 의무실에서 죽입니다. 마을 사람 탈리오가 이것을 봅니다. 투스넬다와 폴크빈은 브룩테리를 다시 찾아가, 투스넬다를 예언자로 믿게 만듭니다.",
    ],
    ending: "세게스테스가 스스로 족장이 되려 하지만, 게르만 옷을 입은 아르미니우스가 와서 족장 자리를 차지합니다. 그는 부족을 묶기 위해 투스넬다에게 청혼하고, 폴크빈은 그를 때립니다.",
    history: [
      { drama: "세기메르가 호수에서 죽습니다.", real: "세기메르의 죽음은 기록이 없습니다. 이 장면은 창작입니다." },
      { drama: "아르미니우스가 족장이 됩니다.", real: "그가 케루스키 안에서 큰 힘을 가진 것은 맞지만 ‘라이크’라는 직함은 극의 말입니다." },
    ],
    cast: ["arminius", "folkwin", "thusnelda", "segimer", "segestes", "varus", "talio", "hadgan", "irmina"],
    places: ["village", "camp", "bructeri"],
    gear: { rome: "로마 의무실과 천막 군영이 자세하게 나옵니다.", germanic: "아르미니우스가 로마 갑옷을 벗고 게르만 옷을 입는 것이 변화를 보여줍니다." },
    scene: "세기메르가 칼을 땅에 꽂고 호수 속으로 사라지는 장면.",
  },
  {
    season: 1, ep: 5, overall: 5,
    de: "Der Verrat", en: "Treason", ko: "반역",
    plot: [
      "모두가 폴크빈이 죽은 것으로 하기로 합니다. 투스넬다는 로마를 무너뜨리는 데 가장 좋은 길이라고 보고 아르미니우스와 결혼합니다.",
      "혼자 있던 폴크빈은 로마군에게 잡혀 노예가 됩니다. 아르미니우스는 다른 시신을 보고 그가 죽었다고 믿습니다.",
      "바루스는 공격이 계속되자 모든 족장에게 아이 하나씩을 내놓으라고 합니다. 아르미니우스는 족장들을 모아 매복 계획을 세웁니다.",
    ],
    ending: "아르미니우스는 로마군을 숲으로 끌어들일 길을 바루스에게 내밉니다. 그때 세게스테스가 나타나 아르미니우스가 배신하려 한다고 바루스에게 알립니다.",
    history: [
      { drama: "세게스테스가 바루스에게 경고합니다.", real: "가장 사료에 가까운 장면입니다. 타키투스는 세게스테스가 전투 전 잔치 때 바루스에게 경고했다고 씁니다." },
      { drama: "결혼이 전투 전에 이루어집니다.", real: "타키투스에 따르면 아르미니우스는 다른 사람과 약혼한 투스넬다를 데려갔고, 이 때문에 세게스테스와 원수가 됩니다. 결혼 시기는 정확하지 않습니다." },
    ],
    cast: ["arminius", "thusnelda", "folkwin", "segestes", "varus", "irmina"],
    places: ["village", "camp"],
    gear: { rome: "총독 바루스의 붉은 망토와 장교 갑옷. 지도와 행군로 계획이 나옵니다.", germanic: "결혼식 선물로 무기와 장신구가 오갑니다." },
    scene: "바루스 앞에서 세게스테스가 ‘그는 배신자다’라고 말하는 마지막 장면.",
  },
  {
    season: 1, ep: 6, overall: 6,
    de: "Die Schlacht", en: "The Battle", ko: "전투",
    plot: [
      "아르미니우스는 세게스테스의 말을 오히려 인정하는 척하며 농담처럼 넘기고, 바루스는 웃어넘깁니다. 폴크빈은 풀려납니다.",
      "부족 동맹이 흔들리자 투스넬다는 스스로 얼굴에 피를 내며 예언을 전하고, 부족을 붙잡아 둡니다.",
      "로마 세 군단이 길게 줄지어 숲길로 들어오자, 부족들은 나무를 쓰러뜨려 대열을 끊고 하나씩 공격합니다. 남은 로마군은 탁 트인 곳에서 비를 맞으며 무너집니다.",
    ],
    ending: "바루스는 갑옷을 벗고 아르미니우스가 떨어뜨린 칼로 스스로 목숨을 끊습니다. 게르만 쪽은 승리를 축하하고, 투스넬다는 자신이 폴크빈의 아이를 가졌다는 것을 압니다.",
    history: [
      { drama: "세 군단이 숲에서 무너집니다.", real: "사실입니다. 17·18·19 군단이 여러 날 행군하며 무너졌습니다(카시우스 디오). 비와 진흙도 디오가 적습니다." },
      { drama: "바루스가 스스로 목숨을 끊습니다.", real: "사실에 가깝습니다. 벨레이우스와 디오가 바루스의 자결을 적습니다. 머리는 마로보두스에게 보내졌다가 아우구스투스에게 갑니다." },
      { drama: "투스넬다가 폴크빈의 아이를 가집니다.", real: "창작입니다. 투멜리쿠스는 서기 15년 투스넬다가 잡힌 뒤 태어난 아르미니우스의 아들입니다." },
    ],
    cast: ["arminius", "thusnelda", "folkwin", "varus", "segestes", "hadgan"],
    places: ["forest", "camp"],
    gear: { rome: "행군 대열의 짐수레와 무거운 장비가 숲에서 약점이 됩니다. 칼크리제에서는 로마 기병 가면 투구 등 실제 유물이 나왔습니다.", germanic: "흙벽 뒤에서 기다리는 매복, 나무를 쓰러뜨려 길을 막는 방법이 나옵니다. 칼크리제의 흙벽 흔적과 통합니다." },
    scene: "갑옷을 벗은 바루스가 아르미니우스를 바라보며 스스로 칼 위에 쓰러지는 장면.",
  },
  {
    season: 2, ep: 1, overall: 7,
    de: "Neue Legionen", en: "New Legions", ko: "새로운 군단",
    plot: [
      "전투 1년 뒤. 로마가 다시 힘을 모으는 것을 본 아리(아르미니우스)는 동쪽의 족장 마르보드에게 도움을 청합니다.",
      "동생 플라부스는 형의 배신으로 잃은 명예를 되찾으려 게르마니아에 옵니다. 아리의 로마 아들 가이우스도 함께 옵니다. 티베리우스와 게르마니쿠스가 새 군영을 엽니다.",
      "부족 회의에서 아리는 자기가 왕이 되어 모든 부족을 묶어야 한다고 말합니다. 하지만 마르보드는 로마와 장사하며 사는 편이 낫다고 부족들을 설득합니다.",
    ],
    ending: "숲에서 아리가 마르보드에게 따지는 사이, 로마 옷을 입은 플라부스가 나타나 형과 싸웁니다. 아리가 동생을 죽이려는 순간 마르보드가 돌로 아리를 쓰러뜨립니다.",
    history: [
      { drama: "티베리우스가 라인강 전선에 옵니다.", real: "사실입니다. 서기 10–11년 티베리우스는 라인강을 지키고 짧게 강 너머로 나갔습니다. 게르마니쿠스도 11년에 함께했습니다." },
      { drama: "마르보드가 아리와 겨룹니다.", real: "마로보두스는 실제 라이벌입니다. 바루스의 머리를 받고도 아르미니우스와 손잡지 않았습니다." },
      { drama: "플라부스가 형을 노립니다.", real: "플라부스는 로마 편에 남았습니다. 서기 16년 베저강을 사이에 두고 형과 말다툼한 기록이 있습니다(타키투스)." },
    ],
    cast: ["arminius", "thusnelda", "marbod", "flavus", "gaius", "tiberius", "germanicus", "folkwin"],
    places: ["village", "camp", "thing"],
    gear: { rome: "새 군단과 투석기, 정비된 군영. 장교들의 붉은 망토와 장식된 투구.", germanic: "마르보드의 마르코만니는 더 크고 정돈된 군대로 그려집니다. 마로보두스가 로마식으로 군대를 훈련했다는 기록(벨레이우스)과 통합니다." },
    scene: "형제가 로마 갑옷과 게르만 옷차림으로 숲에서 맞붙는 장면.",
  },
  {
    season: 2, ep: 2, overall: 8,
    de: "Gefangen", en: "Captured", ko: "생포",
    plot: [
      "아리는 포로가 되어 로마 군영으로 끌려갑니다. 그곳에서 로마 아들 가이우스를 만납니다.",
      "투스넬다는 혼자 군영에 들어가려다 폴크빈을 만납니다. 폴크빈은 카르타고 출신 디도와 함께 지내고 있습니다.",
      "마르보드와 플라부스가 만나고, 두 사람이 예전에 연인이었다는 것이 드러납니다. 마르보드는 아리 몰래 티베리우스와 평화를 이야기합니다.",
    ],
    ending: "투스넬다, 폴크빈, 디도가 아리를 구해 냅니다. 디도는 크게 다칩니다. 아리는 가이우스를 억지로 데려가고, 투스넬다는 그에게 아들이 있었다는 것을 처음 압니다.",
    history: [
      { drama: "아르미니우스가 로마에 잡힙니다.", real: "창작입니다. 실제 아르미니우스는 잡힌 적이 없습니다." },
      { drama: "아르미니우스의 로마 아들 가이우스.", real: "창작입니다. 기록에 있는 아들은 투멜리쿠스뿐입니다." },
      { drama: "마르보드와 플라부스는 연인입니다.", real: "창작입니다. 두 사람 모두 로마에서 지낸 적은 있습니다." },
    ],
    cast: ["arminius", "thusnelda", "folkwin", "dido", "gaius", "marbod", "flavus", "tiberius"],
    places: ["camp"],
    gear: { rome: "구덩이 감옥과 경비가 있는 목책 군영이 나옵니다.", germanic: "몰래 들어가는 작전이라 가벼운 옷과 칼만 듭니다." },
    scene: "철창 너머로 아버지와 로마 아들이 처음 마주하는 장면.",
  },
  {
    season: 2, ep: 3, overall: 9,
    de: "Väter", en: "Fathers", ko: "아버지들",
    plot: [
      "아리는 쫓아온 로마 병사들을 혼자 물리치고 가이우스를 마을로 데려갑니다. 가이우스는 마을과 말과 사람을 모두 싫어합니다.",
      "게르마니쿠스는 탈출을 도운 것이 아니냐며 플라부스를 잡습니다. 플라부스는 자기가 죽으면 마르보드가 아리 편에 설 것이라며 목숨을 건집니다.",
      "투스넬다는 로마 아내와 아들을 숨긴 아리에게 화가 납니다. 그녀는 폴크빈에게, 자기에게 무슨 일이 생기면 투멜리쿠스를 지켜 달라고 맹세하게 합니다.",
    ],
    ending: "아리는 마르보드와 일대일로 싸워 이깁니다. 하지만 ‘게르만끼리 죽이면 로마만 좋다’는 가이우스의 말을 떠올리고, 마르보드를 죽이지 않고 오히려 그 앞에 무릎을 꿇어 그를 모든 부족의 왕으로 세웁니다.",
    history: [
      { drama: "아르미니우스가 마로보두스를 왕으로 세웁니다.", real: "반대에 가깝습니다. 서기 17년 두 사람은 전쟁을 했고, 마로보두스가 물러납니다. 19년 그는 로마로 망명해 라벤나에서 삽니다." },
      { drama: "게르마니쿠스와 티베리우스가 아버지·아들처럼 그려집니다.", real: "게르마니쿠스는 티베리우스의 조카이자 양자(서기 4년)입니다. 이 부분은 사실과 맞습니다." },
    ],
    cast: ["arminius", "gaius", "thusnelda", "folkwin", "dido", "flavus", "germanicus", "tiberius", "marbod", "odvulf", "odarike", "thumelicus"],
    places: ["village", "camp", "marcomanni"],
    gear: { rome: "게르마니쿠스가 탈출의 책임자들을 처형합니다. 로마 군율의 엄함을 보여 주는 장면입니다.", germanic: "오드불프가 가이우스에게 투석끈(슬링) 사냥을 가르칩니다." },
    scene: "싸움에서 이긴 아리가 쓰러진 마르보드 앞에 무릎을 꿇는 장면.",
  },
  {
    season: 2, ep: 4, overall: 10,
    de: "Der Schwur", en: "The Oath", ko: "서원",
    plot: [
      "티베리우스는 마르보드의 충성을 시험하려고 플라부스를 사신으로 보냅니다. 마르보드가 그를 죽여야 시험을 통과합니다.",
      "술에 취한 마르보드가 플라부스를 죽이려 할 때, 이미 낌새를 챈 가이우스가 플라부스를 풀어 주고 금속 덩이로 마르보드를 때리고 달아납니다.",
      "폴크빈은 다친 디도를 살리려 신에게 맹세합니다. 첫 아들을 바치거나 자기 목숨을 바쳐야 합니다. 그는 투멜리쿠스를 아들로 여기지 않겠다고 하고, 자기 목숨을 걸기로 합니다.",
    ],
    ending: "가이우스는 게르마니쿠스에게 가서 부족 회의(Thing)로 길을 안내하겠다고 합니다. 무기 없는 족장들이 마르보드를 왕으로 세우려고 모인 그곳으로 로마군이 다가옵니다. 이 사실을 안 폴크빈이 말을 달립니다.",
    history: [
      { drama: "부족 회의에서 마르보드가 왕이 됩니다.", real: "창작입니다. 마로보두스는 이미 마르코만니의 왕이었지만, 모든 게르만의 왕이 된 적은 없습니다." },
      { drama: "신에게 목숨을 거는 맹세.", real: "게르만이 맹세와 제물을 중시했다는 기록(타키투스 『게르마니아』)은 있습니다. 이 의식 자체는 창작입니다." },
    ],
    cast: ["marbod", "flavus", "gaius", "germanicus", "tiberius", "folkwin", "dido", "thusnelda", "arminius", "odarike", "thumelicus"],
    places: ["marcomanni", "camp", "thing"],
    gear: { rome: "로마의 선물과 사신 의례가 나옵니다.", germanic: "회의에는 무기를 내려놓고 들어가는 것으로 그려집니다. 그래서 공격이 더 큰 피해를 냅니다." },
    scene: "폴크빈이 투멜리쿠스를 놓아 주고 자기 목숨을 신에게 거는 장면. 투스넬다가 이별의 입맞춤을 합니다.",
  },
  {
    season: 2, ep: 5, overall: 11,
    de: "Verloren", en: "Doomed", ko: "파멸",
    plot: [
      "로마군은 언덕에서 회의장으로 화살을 퍼붓습니다. 오드불프와 마르보드의 아내 오다리케가 죽습니다. 폴크빈이 뛰어들어 로마군을 몰아냅니다.",
      "티베리우스는 평화를 망친 게르마니쿠스와 플라부스를 크게 꾸짖습니다. 마르보드는 두 사람의 목을 요구하며 아리 편에 섭니다.",
      "투스넬다와 폴크빈은 마르코만니 군대를 불러오러 동쪽으로 떠납니다. 길에서 투스넬다는 아리를 사랑한다고 말하지만, 자기를 가장 잘 아는 사람은 폴크빈이라고 합니다. 아리는 게르마니쿠스를 붙잡습니다.",
    ],
    ending: "숲에 숨어 있던 가이우스가 두 사람을 만나 놀라운 소식을 전합니다. 로마군이 배를 타고 강으로 군영에 오고 있습니다. 부족들은 길만 지켰고 물길은 보지 못했습니다.",
    history: [
      { drama: "로마가 배로 병력을 옮깁니다.", real: "게르마니쿠스는 서기 15–16년 실제로 큰 배 함대로 북해와 엠스강을 통해 군대를 옮겼습니다(타키투스). 극은 이것을 앞당겨 씁니다." },
      { drama: "독일어 제목과 영어 제목이 다릅니다.", real: "독일어 원제는 Verloren(잃다), 영어 제목은 Doomed입니다. 넷플릭스 한국어 제목은 ‘파멸’입니다." },
    ],
    cast: ["thusnelda", "folkwin", "arminius", "marbod", "gaius", "germanicus", "tiberius", "flavus", "odarike", "odvulf"],
    places: ["thing", "camp", "marcomanni", "rhine"],
    gear: { rome: "로마 궁수와 언덕 위의 원거리 공격. 강을 오르는 수송선.", germanic: "폴크빈이 거의 혼자 로마 대열에 뛰어드는 장면은 극적 과장입니다." },
    scene: "화살이 쏟아지는 회의장. 평화의 자리가 학살의 자리로 바뀝니다.",
  },
  {
    season: 2, ep: 6, overall: 12,
    de: "Der Preis", en: "The Price", ko: "치러야 할 대가",
    plot: [
      "배가 닿기 전에 로마 군영을 덮쳐야만 부족들이 이길 수 있습니다. 세게스테스는 자기 이익을 위해 티베리우스에게 몰래 제안을 합니다.",
      "안개 속 기습이 시작됩니다. 갇혀 있던 플라부스는 풀려나 마르보드를 구하고, 그의 품에서 죽습니다. 디도는 아버지의 원수 게르마니쿠스와 맞서지만 다칩니다.",
      "게르마니쿠스는 시체 사이에 숨어 있다가 폴크빈을 뒤에서 찌릅니다. 죽어 가는 폴크빈은 아리에게 투멜리쿠스가 자기 아들이라고 말하고, 그 아이를 자기 아들처럼 사랑해 달라고 합니다.",
      "부족들은 군영을 빼앗고, 티베리우스와 게르마니쿠스는 달아납니다.",
    ],
    ending: "투스넬다가 마을로 돌아오니 안스가가 묶여 있고 아기가 없습니다. 숲 속에서 그녀는 부모가 투멜리쿠스를 티베리우스에게 넘기는 것을 봅니다. 티베리우스는 ‘배신은 좋지만 배신자는 싫다’며 세게스테스와 이르미나를 죽이고, 투스넬다와 아기를 로마로 끌고 갑니다.",
    history: [
      { drama: "투스넬다가 아기와 함께 로마로 잡혀 갑니다.", real: "방향은 맞지만 때와 사람이 다릅니다. 서기 15년 게르마니쿠스가 세게스테스를 구할 때, 세게스테스가 임신한 딸을 로마에 넘겼습니다. 아기는 포로 생활 중에 태어났습니다." },
      { drama: "티베리우스가 세게스테스를 처형합니다.", real: "창작입니다. 세게스테스는 로마의 보호를 받아 갈리아에 살 곳을 얻었습니다(타키투스)." },
      { drama: "플라부스와 폴크빈이 죽습니다.", real: "플라부스는 오래 살았고 아들 이탈리쿠스가 서기 47년 케루스키의 왕이 됩니다. 폴크빈은 창작 인물입니다." },
    ],
    cast: ["arminius", "thusnelda", "folkwin", "flavus", "marbod", "dido", "germanicus", "tiberius", "segestes", "irmina", "ansgar", "thumelicus", "gaius"],
    places: ["camp", "village", "rhine"],
    gear: { rome: "목책 군영, 망루, 문. 기습을 받으면 대열을 갖추기 어렵다는 점이 드러납니다.", germanic: "전투 화장(얼굴 칠)과 안개를 이용한 기습. 시즌 1과 같은 ‘숲의 전술’을 군영에 씁니다." },
    scene: "투스넬다가 무기를 내려놓고 아기 때문에 무릎을 꿇는 마지막 장면. 시즌 1의 첫 거절과 반대가 됩니다.",
  },
];

export type Season = {
  season: 1 | 2;
  year: string;
  premiere: string;
  title: string;
  lead: string;
  arc: string[];
  after: { title: string; items: string[] };
  links: { href: string; label: string }[];
};

export const SEASONS: Season[] = [
  {
    season: 1, year: "2020", premiere: "2020년 10월 23일",
    title: "시즌 1 — 토이토부르크까지",
    lead: "독수리 하나를 훔친 일에서 시작해, 세 군단이 숲에서 사라지는 서기 9년의 매복으로 끝납니다.",
    arc: [
      "1–2화: 로마의 세금과 굴욕. 독수리 도난과 피의 보복.",
      "3–4화: 아르미니우스가 편을 바꾸고, 아버지가 죽고, 그가 족장이 됩니다.",
      "5–6화: 정략 결혼, 세게스테스의 경고, 그리고 토이토부르크.",
    ],
    after: {
      title: "실제로는",
      items: [
        "서기 9년 가을, 바루스의 17·18·19 군단이 여러 날에 걸쳐 무너집니다. 장소는 칼크리제가 가장 유력합니다.",
        "세게스테스의 경고는 사실로 전합니다. 바루스는 믿지 않았습니다.",
        "아우구스투스는 ‘바루스여, 군단을 돌려다오’라고 외쳤다고 수에토니우스가 전합니다.",
      ],
    },
    links: [
      { href: "/chronicle/teutoburg", label: "토이토부르크 사료" },
      { href: "https://nadoo-timeline.vercel.app/events/teutoburg-forest", label: "연표: 서기 9년 토이토부르크" },
      { href: "https://rome-stories.vercel.app/rulers/augustus", label: "로마 이야기: 아우구스투스" },
      { href: "/people/varus", label: "바루스" },
      { href: "/people/arminius", label: "아르미니우스" },
    ],
  },
  {
    season: 2, year: "2022", premiere: "2022년 10월 21일",
    title: "시즌 2 — 게르마니쿠스와 투스넬다의 운명",
    lead: "전투 1년 뒤. 티베리우스와 게르마니쿠스가 돌아오고, 마르보드와 플라부스가 나타납니다. 끝은 투스넬다가 아기와 함께 로마로 끌려가는 장면입니다.",
    arc: [
      "7–8화: 새 군단, 동생 플라부스, 아리의 생포와 탈출.",
      "9–10화: 아버지와 아들들. 마르보드가 왕이 되고, 가이우스의 배신.",
      "11–12화: 회의장 학살, 배로 오는 로마군, 군영 기습, 폴크빈의 죽음, 투스넬다의 포로.",
    ],
    after: {
      title: "그다음 실제 역사",
      items: [
        "서기 14–16년: 게르마니쿠스가 라인강 너머로 큰 보복 원정을 합니다. 15년에는 토이토부르크 전장을 찾아 죽은 병사들을 묻습니다.",
        "서기 15년: 세게스테스가 게르마니쿠스에게 구조되며, 임신한 딸 투스넬다를 넘깁니다. 아들 투멜리쿠스는 포로 생활 중에 태어납니다.",
        "서기 16년: 이디스타비소 전투. 베저강가에서 게르마니쿠스가 아르미니우스를 이깁니다. 그래도 로마는 땅을 지키지 못합니다.",
        "서기 17년 5월 26일: 게르마니쿠스의 개선식. 투스넬다와 어린 투멜리쿠스가 로마 거리를 걷습니다. 아버지 세게스테스는 그것을 지켜봅니다(스트라본, 타키투스).",
        "서기 17년: 아르미니우스와 마로보두스의 전쟁. 19년 마로보두스는 로마로 망명합니다.",
        "서기 21년 무렵: 아르미니우스가 자기 친척들에게 살해됩니다. 타키투스는 그가 37세였고 12년 동안 힘을 가졌다고 씁니다.",
      ],
    },
    links: [
      { href: "/chronicle/germanicus", label: "게르마니쿠스 원정" },
      { href: "/people/germanicus", label: "게르마니쿠스" },
      { href: "/people/thusnelda", label: "투스넬다" },
      { href: "/people/thumelicus", label: "투멜리쿠스" },
      { href: "/people/maroboduus", label: "마로보두스" },
      { href: "https://rome-stories.vercel.app/rulers/tiberius", label: "로마 이야기: 티베리우스" },
      { href: "https://rome-stories.vercel.app/rulers/augustus", label: "로마 이야기: 아우구스투스" },
      { href: "https://nadoo-timeline.vercel.app/events/teutoburg-forest", label: "연표: 서기 9년" },
    ],
  },
];

/** Relationship change across episodes 1-12. Each row = a pair; each cell = state after that episode. */
export type RelState = "friend" | "love" | "tense" | "enemy" | "allied" | "dead" | "apart";
export const REL_LABEL: Record<RelState, string> = {
  friend: "우정", love: "사랑", tense: "긴장", enemy: "적", allied: "동맹", dead: "죽음", apart: "떨어짐",
};

export const RELATIONS: { a: string; b: string; states: RelState[]; note: string }[] = [
  { a: "아르미니우스", b: "폴크빈", states: ["tense", "enemy", "friend", "tense", "friend", "allied", "apart", "allied", "allied", "allied", "allied", "dead"], note: "적에서 형제로. 12화에 폴크빈이 그의 품에서 죽습니다." },
  { a: "투스넬다", b: "폴크빈", states: ["love", "love", "love", "love", "apart", "love", "apart", "friend", "friend", "apart", "friend", "dead"], note: "연인 → 비밀(아이의 친아버지) → 가장 가까운 친구." },
  { a: "아르미니우스", b: "투스넬다", states: ["apart", "tense", "tense", "tense", "allied", "allied", "allied", "allied", "tense", "allied", "love", "apart"], note: "정략 결혼에서 사랑으로. 끝에 그녀는 로마로 끌려갑니다." },
  { a: "아르미니우스", b: "바루스", states: ["allied", "allied", "tense", "tense", "enemy", "dead", "dead", "dead", "dead", "dead", "dead", "dead"], note: "극의 양아버지. 6화에 자결합니다." },
  { a: "투스넬다", b: "세게스테스", states: ["tense", "tense", "tense", "tense", "tense", "enemy", "enemy", "enemy", "enemy", "enemy", "enemy", "dead"], note: "아버지가 끝내 손자를 로마에 넘기고 처형됩니다." },
  { a: "아르미니우스", b: "플라부스", states: ["apart", "apart", "apart", "apart", "apart", "apart", "enemy", "enemy", "enemy", "enemy", "enemy", "dead"], note: "형제의 적대. 실제로는 플라부스가 오래 살았습니다." },
  { a: "아르미니우스", b: "마르보드", states: ["apart", "apart", "apart", "apart", "apart", "apart", "tense", "enemy", "allied", "tense", "allied", "allied"], note: "라이벌 → 왕으로 세움 → 회의장 학살 뒤 동맹." },
  { a: "아르미니우스", b: "가이우스", states: ["apart", "apart", "apart", "apart", "apart", "apart", "apart", "tense", "tense", "enemy", "tense", "tense"], note: "로마 아들. 10화에 아버지를 로마에 팔지만, 11화에 소식을 전합니다." },
];

export function episodePath(e: Pick<Episode, "season" | "ep">) {
  return `/barbarians/s${e.season}/e${e.ep}`;
}
export function seasonPath(s: number) {
  return `/barbarians/s${s}`;
}
export const TRUTH_LABEL: Record<Truth, string> = { real: "실존", dramatized: "실존 · 극화", fictional: "창작" };
