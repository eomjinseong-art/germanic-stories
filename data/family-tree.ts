/**
 * 관계도.
 *
 * 선은 네 가지입니다.
 * - parent: 혈연의 부모 → 자식 (금색 실선)
 * - adoption: 입양 (금색 점선과 «입양» 표시)
 * - spouse: 배우자 (장미색)
 * - variant-parent: 전승이 갈리거나 근거가 약한 부모 (보라색 점선)
 *
 * 인물을 더할 때는 같은 가로줄의 col 간격을 1.2 이상으로 두고, 세대 간격은 210 전후로 둡니다.
 */

import type { LinkItem, Source } from "@/data/types";
import { personBySlug } from "@/data/people";
import { ALLOWED_SISTER_ORIGINS, ROME_URL, TIMELINE_URL } from "@/lib/site";

export type LinkKind = "parent" | "adoption" | "spouse" | "variant-parent";

export type TreeSeed = {
  id: string;
  ko: string;
  en: string;
  latin?: string;
  band: string;
  /** Horizontal slot. Same-row gap should stay ≥ 1.2. */
  col: number;
  y: number;
  years?: string;
  tag?: string;
  guestTag?: string;
  href?: string;
  hrefLabel?: string;
  also?: readonly LinkItem[];
  summary: string;
  note?: string;
  parentNote?: string;
  badge?: boolean;
  aliases?: string[];
};

export type TreeLink = { from: string; to: string; kind: LinkKind };

export type BandMeta = {
  id: string;
  ko: string;
  en: string;
  hint: string;
  color: string;
  soft: string;
};

export type NoteItem = { title: string; body: string };
export type DisputeItem = { id: string; title: string; main: string; other: string };

type TreeDef = {
  id: string;
  ko: string;
  en: string;
  lead: string;
  bands: BandMeta[];
  seeds: TreeSeed[];
  links: TreeLink[];
  disputes: DisputeItem[];
  notes: NoteItem[];
  sources: Source[];
  must: [LinkKind, string, string][];
};

const COL = 176;
const NODE_W = 156;
const NODE_H = 118;
const PAD = 28;

function rel(): {
  links: TreeLink[];
  parent: (from: string, to: string) => void;
  parents: (child: string, ...from: string[]) => void;
  adopt: (from: string, to: string) => void;
  spouse: (a: string, b: string) => void;
  variant: (from: string, to: string) => void;
} {
  const links: TreeLink[] = [];
  return {
    links,
    parent: (from, to) => links.push({ from, to, kind: "parent" }),
    parents: (child, ...from) => from.forEach((id) => links.push({ from: id, to: child, kind: "parent" })),
    adopt: (from, to) => links.push({ from, to, kind: "adoption" }),
    spouse: (a, b) => links.push({ from: a, to: b, kind: "spouse" }),
    variant: (from, to) => links.push({ from, to, kind: "variant-parent" }),
  };
}

const teutoburgLinks = rel();
{
  const { parent, parents, spouse } = teutoburgLinks;
  parent("segimer", "arminius");
  parent("segimer", "flavus");
  parent("segestes", "thusnelda");
  parent("segestes", "segimundus");
  spouse("arminius", "thusnelda");
  parents("thumelicus", "arminius", "thusnelda");
  parent("flavus", "italicus");
}

const romeLinks = rel();
{
  const { parent, adopt, spouse } = romeLinks;
  spouse("augustus", "livia");
  parent("livia", "tiberius");
  parent("livia", "drusus");
  adopt("augustus", "tiberius");
  parent("drusus", "germanicus");
  adopt("tiberius", "germanicus");
}

const frankLinks = rel();
{
  const { parent, parents } = frankLinks;
  parent("childeric", "clovis");
  parent("clovis", "chlothar");
  parent("pippin-h", "martel");
  parent("martel", "pippin-s");
  parents("charlemagne", "pippin-s");
  parents("carloman", "pippin-s");
  parent("charlemagne", "louis");
}

const DEFS: TreeDef[] = [
  {
    id: "teutoburg",
    ko: "아르미니우스 가문",
    en: "Arminius",
    lead: "케루스키의 아르미니우스, 동생 플라부스, 아내 투스넬다, 장인 세게스테스, 아들 툴리쿠스. 드라마의 폴크윈은 이 그림에 없습니다. 결혼이 서기 9년 이전이었는지는 사료가 짧습니다.",
    bands: [
      { id: "fathers", ko: "아버지 세대", en: "Fathers", hint: "세게메르와 세게스테스는 사돈이 아닙니다. 두 집입니다.", color: "#2f4a3c", soft: "rgba(47,74,60,0.08)" },
      { id: "children", ko: "아르미니우스 세대", en: "Arminius", hint: "플라부스는 로마에 남았습니다. 세기문두스는 투스넬다의 오빠로 확인되는 사람입니다.", color: "#a34732", soft: "rgba(163,71,50,0.08)" },
      { id: "next", ko: "다음 세대", en: "Children", hint: "툴리쿠스의 어른 시절은 기록이 끊깁니다. 이탈리쿠스는 클라우디우스 시대에 케루스키로 파견됩니다.", color: "#6a4560", soft: "rgba(106,69,96,0.08)" },
    ],
    seeds: [
      {
        id: "segimer",
        ko: "세게메르",
        en: "Segimer",
        latin: "Segimerus",
        band: "fathers",
        col: 0.8,
        y: 48,
        years: "서기 1세기 초",
        tag: "케루스키",
        summary: "아르미니우스와 플라부스의 아버지로 전하는 케루스키 지도자입니다. 아들들을 로마에 보낸 집의 가장으로 정리되지만, 가정의 일기를 남기지는 않았습니다.",
        aliases: ["세기메르", "Sigimer"],
      },
      {
        id: "segestes",
        ko: "세게스테스",
        en: "Segestes",
        band: "fathers",
        col: 4,
        y: 48,
        years: "9–15년",
        tag: "친로마",
        href: "/people/segestes",
        hrefLabel: "인물",
        summary: "투스넬다의 아버지입니다. 아르미니우스의 음모를 바루스에게 알렸고, 15년 게르마니쿠스에게 넘어갔습니다.",
        aliases: ["장인"],
      },
      {
        id: "flavus",
        ko: "플라부스",
        en: "Flavus",
        band: "children",
        col: 0,
        y: 280,
        years: "1세기",
        tag: "동생",
        href: "/people/flavus",
        hrefLabel: "인물",
        summary: "아르미니우스의 동생입니다. 로마 장교로 남았고 눈 하나를 잃었습니다. 16년에 죽었다는 드라마와 달리, 아들 이탈리쿠스가 뒤에 로마에서 자랍니다.",
      },
      {
        id: "arminius",
        ko: "아르미니우스",
        en: "Arminius",
        band: "children",
        col: 1.6,
        y: 280,
        years: "기원전 18년 무렵–19/21년",
        tag: "케루스키",
        href: "/people/arminius",
        hrefLabel: "인물",
        summary: "서기 9년 바루스의 세 군단을 무너뜨린 사람입니다. 로마 기사였고, 게르마니아 전체의 왕으로 죽지는 않았습니다. 헤르만은 후대 이름입니다.",
        aliases: ["헤르만", "Hermann", "아르민"],
      },
      {
        id: "thusnelda",
        ko: "투스넬다",
        en: "Thusnelda",
        band: "children",
        col: 3.2,
        y: 280,
        years: "15년 포로",
        tag: "아내",
        href: "/people/thusnelda",
        hrefLabel: "인물",
        summary: "세게스테스의 딸이고 아르미니우스의 아내입니다. 15년 임신한 채로 로마에 넘겼고, 17년 개선식에 나타났습니다.",
        aliases: ["투넬다"],
      },
      {
        id: "segimundus",
        ko: "세기문두스",
        en: "Segimundus",
        band: "children",
        col: 4.8,
        y: 280,
        years: "15년 무렵",
        tag: "사제",
        summary: "세게스테스의 아들이고 투스넬다의 오빠입니다. 우비이 제단의 사제였다가 반란 쪽에 붙었다가 용서받았다고 타키투스가 적습니다. 드라마의 안스가가 아닙니다.",
        parentNote: "어머니는 이름이 남지 않았습니다.",
        aliases: ["Segimundus"],
      },
      {
        id: "italicus",
        ko: "이탈리쿠스",
        en: "Italicus",
        band: "next",
        col: 0,
        y: 510,
        years: "클라우디우스 시대",
        tag: "조카",
        summary: "플라부스의 아들입니다. 로마에서 자라 클라우디우스 때 케루스키의 왕으로 파견됩니다. 타키투스 『연대기』 11.16.",
        parentNote: "어머니는 이 그림에 없습니다.",
      },
      {
        id: "thumelicus",
        ko: "툴리쿠스",
        en: "Thumelicus",
        band: "next",
        col: 2.4,
        y: 510,
        years: "15년 무렵 출생",
        tag: "아들",
        href: "/people/thumelicus",
        hrefLabel: "인물",
        summary: "아르미니우스와 투스넬다의 아들입니다. 포로 상태에서 태어났고, 어른의 삶은 타키투스가 예고한 채 기록이 끊깁니다.",
        aliases: ["투멜리쿠스"],
      },
    ],
    links: teutoburgLinks.links,
    disputes: [
      {
        id: "marriage-year",
        title: "투스넬다와의 결혼 시점",
        main: "이 그림은 타키투스가 부부로 부르는 관계를 실선으로 잇습니다. 아들 툴리쿠스의 부모가 두 사람이라는 점도 그 기록에 따릅니다.",
        other: "약탈혼에 가까운 서술의 시점은 서기 9년 이전이 아니라 그 뒤, 15년 포로 직전의 내전에 가깝습니다. 드라마의 전투 전 정략결혼, 그리고 폴크윈의 아이는 사료에 없습니다.",
      },
    ],
    notes: [
      { title: "폴크윈은 없습니다", body: "넷플릭스 『바바리안』의 폴크윈 볼프스페어는 창작 인물입니다. 관계도에 칸을 만들지 않았습니다." },
      { title: "어머니의 이름", body: "세게메르의 아내, 세게스테스의 아내 이름은 전하지 않습니다. 빈칸으로 두지 않고, 모르는 사람은 그리지 않았습니다." },
    ],
    sources: [
      { work: "타키투스 『연대기』 1–2권, 11.16", ref: "가족, 포로, 이탈리쿠스" },
      { work: "스트라본 7.1.4", ref: "개선식의 투스넬다와 툴리쿠스" },
    ],
    must: [
      ["parent", "segimer", "arminius"],
      ["parent", "segimer", "flavus"],
      ["parent", "segestes", "thusnelda"],
      ["spouse", "arminius", "thusnelda"],
      ["parent", "arminius", "thumelicus"],
      ["parent", "thusnelda", "thumelicus"],
      ["parent", "flavus", "italicus"],
    ],
  },
  {
    id: "rome-side",
    ko: "로마 쪽",
    en: "Rome",
    lead: "토이토부르크와 그 뒤 보복에 닿는 로마 사람만 그립니다. 바루스는 이 가문의 혈연이 아닙니다. 율리우스-클라우디우스 전체는 로마이야기에 있습니다.",
    bands: [
      { id: "augustan", ko: "아우구스투스 세대", en: "Augustus", hint: "바루스는 지휘관입니다. 혈연 선이 없습니다.", color: "#a6843d", soft: "rgba(166,132,61,0.12)" },
      { id: "sons", ko: "리비아의 아들", en: "Sons", hint: "티베리우스는 아우구스투스의 양자입니다. 드루수스는 의붓아들로 남고, 입양 후계의 선은 그리지 않습니다.", color: "#a34732", soft: "rgba(163,71,50,0.08)" },
      { id: "campaign", ko: "게르마니아 원정", en: "Germanicus", hint: "게르마니쿠스는 드루수스의 아들이고 티베리우스의 양자입니다.", color: "#6a4560", soft: "rgba(106,69,96,0.08)" },
    ],
    seeds: [
      {
        id: "augustus",
        ko: "아우구스투스",
        en: "Augustus",
        band: "augustan",
        col: 0,
        y: 48,
        years: "기원전 27–서기 14년 재위",
        href: `${ROME_URL}/rulers/augustus`,
        hrefLabel: "로마이야기",
        summary: "엘베까지의 게르마니아를 밀어 붙인 황제입니다. 서기 9년 이후 그 계획을 접었습니다.",
        also: [{ href: `${TIMELINE_URL}/events/augustus-principate`, label: "나두연표에서 아우구스투스" }],
        aliases: ["옥타비아누스", "Octavian"],
      },
      {
        id: "livia",
        ko: "리비아",
        en: "Livia",
        latin: "Livia Drusilla",
        band: "augustan",
        col: 1.6,
        y: 48,
        years: "기원전 58–서기 29년",
        tag: "아내",
        href: `${ROME_URL}/family-tree?tree=julio&focus=livia`,
        hrefLabel: "로마이야기",
        summary: "아우구스투스의 아내이고, 티베리우스와 드루수스의 어머니입니다. 게르마니아 원정의 두 지휘관이 그의 아들입니다.",
        aliases: ["Livia Drusilla"],
      },
      {
        id: "varus",
        ko: "바루스",
        en: "Varus",
        band: "augustan",
        col: 3.8,
        y: 48,
        years: "서기 9년 전사",
        tag: "총독",
        guestTag: "혈연 아님",
        href: "/people/varus",
        hrefLabel: "인물",
        summary: "게르마니아 총독입니다. 아우구스투스 가문에 입양되거나 혼인으로 이 칸에 들어온 사람이 아닙니다. 같은 그림에 둔 것은 서기 9년의 지휘 관계를 보여 주기 위해서입니다.",
        parentNote: "이 가문과 혈연이 없습니다.",
        aliases: ["퀸크틸리우스"],
      },
      {
        id: "tiberius",
        ko: "티베리우스",
        en: "Tiberius",
        band: "sons",
        col: 0.8,
        y: 280,
        years: "서기 14–37년 재위",
        href: `${ROME_URL}/rulers/tiberius`,
        hrefLabel: "로마이야기",
        summary: "게르마니아 원정을 이어받았고, 서기 9년 뒤에는 게르마니쿠스를 보냈다가 불러들였습니다. 아우구스투스의 양자입니다.",
        parentNote: "친부는 티베리우스 클라우디우스 네로입니다. 이 그림에는 없고, 어머니 리비아와 입양한 아우구스투스만 잇습니다.",
        also: [{ href: `${ROME_URL}/family-tree?tree=julio&focus=tiberius`, label: "로마이야기 가계의 티베리우스" }],
      },
      {
        id: "drusus",
        ko: "드루수스",
        en: "Drusus",
        band: "sons",
        col: 2.6,
        y: 280,
        years: "기원전 38–9년",
        href: "/people/drusus",
        hrefLabel: "인물",
        summary: "티베리우스의 동생입니다. 기원전 12–9년 게르마니아를 치다 낙마로 죽었습니다. 게르마니쿠스의 아버지입니다.",
        parentNote: "친부는 티베리우스와 같습니다. 아우구스투스는 의붓아버지이고, 이 그림은 입양 후계로 잇지 않습니다.",
      },
      {
        id: "germanicus",
        ko: "게르마니쿠스",
        en: "Germanicus",
        band: "campaign",
        col: 2.6,
        y: 510,
        years: "기원전 15–서기 19년",
        href: "/people/germanicus",
        hrefLabel: "인물",
        summary: "14–16년 게르마니아를 쳐 독수리 둘과 투스넬다를 로마로 가져왔습니다. 티베리우스의 양자이고, 19년 시리아에서 죽었습니다.",
        parentNote: "어머니는 소 안토니아입니다. 이 그림에는 없습니다.",
        also: [{ href: `${ROME_URL}/family-tree?tree=julio&focus=germanicus`, label: "로마이야기 가계의 게르마니쿠스" }],
      },
    ],
    links: romeLinks.links,
    disputes: [
      {
        id: "varus-not-kin",
        title: "바루스는 양아버지가 아닙니다",
        main: "바루스는 점선 칸으로만 둡니다. 혈연이나 입양의 선을 긋지 않습니다.",
        other: "드라마 『바바리안』은 바루스를 아르미니우스의 양아버지로 그립니다. 벨레이우스와 타키투스는 신뢰받는 장교로 적지, 입양아로 적지 않습니다.",
      },
    ],
    notes: [
      { title: "전체 가계는 로마이야기", body: "리비아의 전 남편, 소 안토니아, 칼리굴라, 클라우디우스, 네로는 이 짧은 그림에서 뺐습니다." },
    ],
    sources: [
      { work: "타키투스 『연대기』 1–2권", ref: "티베리우스, 게르마니쿠스, 바루스의 패배 회상" },
      { work: "수에토니우스 『아우구스투스』, 『티베리우스』", ref: "입양과 가문" },
    ],
    must: [
      ["spouse", "augustus", "livia"],
      ["parent", "livia", "tiberius"],
      ["parent", "livia", "drusus"],
      ["adoption", "augustus", "tiberius"],
      ["parent", "drusus", "germanicus"],
      ["adoption", "tiberius", "germanicus"],
    ],
  },
  {
    id: "franks",
    ko: "메로빙에서 카롤링",
    en: "Franks",
    lead: "위는 메로빙 왕, 아래는 궁재에서 황제가 된 카롤링입니다. 두 가문을 혈연으로 잇지 않습니다. 751년에 왕위가 넘어갔습니다.",
    bands: [
      { id: "meroving", ko: "메로빙", en: "Merovingians", hint: "클로타르는 클로비스의 여러 아들 가운데 뒤에 왕국을 다시 합친 사람입니다.", color: "#2f4a3c", soft: "rgba(47,74,60,0.08)" },
      { id: "mayors", ko: "궁재", en: "Mayors", hint: "피핀 가문은 메로빙의 아들이 아닙니다.", color: "#6a4560", soft: "rgba(106,69,96,0.08)" },
      { id: "kings", ko: "카롤링의 왕", en: "Kings", hint: "카를로만과 카롤루스는 피핀 3세의 아들입니다.", color: "#a34732", soft: "rgba(163,71,50,0.08)" },
      { id: "empire", ko: "다음 황제", en: "Louis", hint: "경건왕 루도비쿠스만 그립니다. 카롤루스의 다른 아들은 일찍 죽었거나 이 그림 밖에 있습니다.", color: "#a6843d", soft: "rgba(166,132,61,0.12)" },
    ],
    seeds: [
      {
        id: "childeric",
        ko: "킬데리크 1세",
        en: "Childeric I",
        band: "meroving",
        col: 0,
        y: 48,
        years: "481년 무렵까지",
        tag: "메로빙",
        summary: "클로비스의 아버지입니다. 투르네의 무덤 유물이 실존을 뒷받침합니다. 왕조 이름의 메로베크는 그 위의 전승이라 이 그림에 넣지 않았습니다.",
        aliases: ["칠데리히", "Childeric"],
      },
      {
        id: "clovis",
        ko: "클로비스",
        en: "Clovis I",
        band: "meroving",
        col: 1.8,
        y: 48,
        years: "481년 무렵–511년",
        href: "/people/clovis",
        hrefLabel: "인물",
        summary: "프랑크를 모아 갈리아의 왕국을 만든 왕입니다. 세례 연도는 496년과 508년 사이에서 갈립니다.",
        aliases: ["클로비스 1세", "Chlodovech"],
      },
      {
        id: "chlothar",
        ko: "클로타르 1세",
        en: "Chlothar I",
        band: "meroving",
        col: 3.6,
        y: 48,
        years: "511–561년",
        tag: "아들 중 하나",
        summary: "클로비스의 아들 가운데 한 사람입니다. 558년 무렵 나누어졌던 프랑크를 다시 합칩니다. 테우데리크, 클로도메르, 킬데베르트는 이 칸에 넣지 않았습니다.",
        parentNote: "어머니는 클로틸드로 전합니다. 이 그림에는 없습니다.",
        aliases: ["클로타르", "Chlothar"],
      },
      {
        id: "pippin-h",
        ko: "피핀 2세",
        en: "Pippin of Herstal",
        band: "mayors",
        col: 0.2,
        y: 290,
        years: "687–714년 무렵",
        tag: "궁재",
        summary: "아우스트라시아의 궁재입니다. 메로빙 왕의 아들이 아니라, 왕을 대신해 실권을 쥔 가문의 사람입니다.",
        parentNote: "메로빙 왕과 혈연으로 잇지 않습니다.",
        aliases: ["헤르스탈의 피핀", "Pippin II"],
      },
      {
        id: "martel",
        ko: "카를 마르텔",
        en: "Charles Martel",
        band: "mayors",
        col: 2,
        y: 290,
        years: "714–741년",
        tag: "궁재",
        summary: "피핀 2세의 아들로 궁재가 된 사람입니다. 왕을 칭하지는 않았습니다. 732년 푸아티에 전투는 이 그림의 밖, 이슬람 세력과의 전쟁입니다.",
        parentNote: "어머니는 알파이다로 전합니다. 적처 플렉트루드의 아들이 아닙니다.",
        aliases: ["카를루스 마르텔루스", "Charles Martel"],
      },
      {
        id: "pippin-s",
        ko: "피핀 3세",
        en: "Pippin the Short",
        band: "mayors",
        col: 3.8,
        y: 290,
        years: "왕 751–768년",
        tag: "단신왕",
        summary: "751년 마지막 메로빙 왕 킬데리크 3세를 폐하고 스스로 왕이 되었습니다. 카롤링 왕조의 첫 왕입니다.",
        aliases: ["단신왕 피핀", "Pippin III"],
      },
      {
        id: "carloman",
        ko: "카를로만",
        en: "Carloman I",
        band: "kings",
        col: 2.6,
        y: 520,
        years: "768–771년",
        tag: "동생",
        summary: "피핀 3세의 아들이고 카롤루스의 동생입니다. 나라를 나누어 갖다가 771년 죽어, 프랑크는 카롤루스에게 합쳐집니다.",
        parentNote: "어머니는 베르트라다입니다. 이 그림에는 없습니다.",
        aliases: ["Carloman"],
      },
      {
        id: "charlemagne",
        ko: "카롤루스 대제",
        en: "Charlemagne",
        latin: "Karolus Magnus",
        band: "kings",
        col: 4.4,
        y: 520,
        years: "768–814 · 황제 800",
        href: "/people/charlemagne",
        hrefLabel: "인물",
        summary: "774년 랑고바르드, 772–804년 작센을 굴리고 800년 크리스마스에 황제가 되었습니다. 클로비스의 직계 왕손이 아닙니다.",
        also: [{ href: `${TIMELINE_URL}/events/lindisfarne`, label: "나두연표에서 린디스판" }],
        aliases: ["샤를마뉴", "카를 대제", "Charlemagne"],
      },
      {
        id: "louis",
        ko: "루도비쿠스",
        en: "Louis the Pious",
        band: "empire",
        col: 4.4,
        y: 750,
        years: "814–840년",
        tag: "경건왕",
        summary: "카롤루스의 뒤를 이은 황제입니다. 그의 아들 대에 프랑크는 다시 나뉩니다. 그 분할 이후의 동프랑크는 이 사이트 밖으로 둡니다.",
        parentNote: "카롤루스에게는 일찍 죽은 다른 아들들도 있었습니다. 황제 자리를 이은 사람만 그립니다.",
        aliases: ["경건왕 루이", "Louis the Pious"],
      },
    ],
    links: frankLinks.links,
    disputes: [
      {
        id: "not-one-blood",
        title: "메로빙과 카롤링은 한 혈통이 아닙니다",
        main: "클로타르와 피핀 2세 사이에는 선을 긋지 않습니다. 왕위가 넘어간 것은 751년의 정치입니다.",
        other: "궁재 가문이 메로빙 공주와 혼인했다는 후대 계보 전승이 있으나, 이 그림이 보여 주려는 승계를 혈연 실선으로 만들 만큼 확실하지 않습니다.",
      },
    ],
    notes: [
      { title: "메로베크", body: "왕조 이름의 조상으로 전하지만 실존 전기가 거의 없어 칸을 만들지 않았습니다." },
      { title: "베르덴", body: "카롤루스의 작센 전쟁에서 782년 4,500명이라는 숫자는 프랑크 연대기의 숫자입니다. 관계도의 요약에는 넣지 않고 인물 글에 다툼과 함께 적었습니다." },
    ],
    sources: [
      { work: "그레고리우스 투르 『프랑크 역사』", ref: "킬데리크, 클로비스, 아들들의 분할" },
      { work: "『프랑크 왕국 연대기』, 아인하르드", ref: "751년, 800년, 카롤링의 부자" },
    ],
    must: [
      ["parent", "childeric", "clovis"],
      ["parent", "clovis", "chlothar"],
      ["parent", "pippin-h", "martel"],
      ["parent", "martel", "pippin-s"],
      ["parent", "pippin-s", "charlemagne"],
      ["parent", "pippin-s", "carloman"],
      ["parent", "charlemagne", "louis"],
    ],
  },
];

export type LayoutNode = TreeSeed & {
  x: number;
  y: number;
  w: number;
  h: number;
  sub: string;
  href?: string;
  keys: string[];
};

export type LayoutEdge = {
  id: string;
  d: string;
  d2?: string;
  kind: LinkKind;
  from: string;
  to: string;
  local: boolean;
  quiet: boolean;
  mark?: { x: number; y: number };
};

export type LayoutBand = BandMeta & {
  top: number;
  height: number;
  nodeIds: string[];
};

export type LaidTree = {
  id: string;
  ko: string;
  en: string;
  lead: string;
  disputes: DisputeItem[];
  notes: NoteItem[];
  sources: Source[];
  links: TreeLink[];
  width: number;
  height: number;
  nodes: LayoutNode[];
  edges: LayoutEdge[];
  bands: LayoutBand[];
  byId: Map<string, LayoutNode>;
};

type Box = { id: string; x: number; y: number; w: number; h: number; cx: number; cy: number };

function subLine(seed: TreeSeed) {
  return [seed.tag, seed.guestTag, seed.en].filter(Boolean).join(" · ");
}

function placeNodes(def: TreeDef) {
  const cols = def.seeds.map((seed) => seed.col);
  const min = Math.min(...cols);
  const max = Math.max(...cols);
  const width = (max - min) * COL + NODE_W + PAD * 2;
  const nodes: LayoutNode[] = def.seeds.map((seed) => {
    const keys = [seed.ko, seed.en, seed.latin, seed.id, seed.tag, ...(seed.aliases ?? [])].filter((key): key is string => Boolean(key));
    return {
      ...seed,
      x: PAD + (seed.col - min) * COL,
      w: NODE_W,
      h: NODE_H,
      sub: subLine(seed),
      keys,
    };
  });
  const height = Math.max(...nodes.map((node) => node.y + node.h)) + 36;
  return { nodes, width, height };
}

function boxes(nodes: LayoutNode[]): Box[] {
  return nodes.map((node) => ({
    id: node.id,
    x: node.x,
    y: node.y,
    w: node.w,
    h: node.h,
    cx: node.x + node.w / 2,
    cy: node.y + node.h / 2,
  }));
}

function directedPath(from: Box, to: Box, kind: LinkKind): { d: string; mark: { x: number; y: number } } {
  const downward = from.cy <= to.cy;
  const x1 = from.cx;
  const y1 = downward ? from.y + from.h : from.y;
  const x2 = to.cx;
  const y2 = downward ? to.y : to.y + to.h;
  const sameRow = Math.abs(from.cy - to.cy) < 24;
  if (sameRow && kind === "variant-parent") {
    const left = Math.min(x1, x2);
    const right = Math.max(x1, x2);
    const y = Math.min(from.y, to.y);
    const mx = (left + right) / 2;
    const my = y - 26;
    return { d: `M ${left} ${y} Q ${mx} ${my}, ${right} ${y}`, mark: { x: mx, y: (y + my) / 2 } };
  }
  if (sameRow) {
    const yb = from.y + from.h;
    const drop = 14;
    const mx = (x1 + x2) / 2;
    return { d: `M ${x1} ${yb} Q ${mx} ${yb + drop}, ${x2} ${yb}`, mark: { x: mx, y: yb + drop } };
  }
  if (Math.abs(x1 - x2) < 6) return { d: `M ${x1} ${y1} V ${y2}`, mark: { x: x1, y: (y1 + y2) / 2 } };
  const mid = (y1 + y2) / 2;
  return {
    d: `M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}`,
    mark: { x: (x1 + x2) / 2, y: (y1 + y2) / 2 },
  };
}

function spousePath(a: Box, b: Box): { d: string; d2?: string } {
  const left = a.cx <= b.cx ? a : b;
  const right = a.cx <= b.cx ? b : a;
  const x1 = left.x + left.w;
  const x2 = right.x;
  const gap = x2 - x1;
  if (Math.abs(a.cy - b.cy) < 24 && gap < COL * 0.75) {
    const y = (left.cy + right.cy) / 2;
    return { d: `M ${x1} ${y - 2.5} H ${x2}`, d2: `M ${x1} ${y + 2.5} H ${x2}` };
  }
  if (Math.abs(a.cy - b.cy) < 24) {
    const y = left.y;
    const mid = (left.cx + right.cx) / 2;
    const lift = Math.min(34, 16 + Math.abs(right.cx - left.cx) * 0.04);
    return { d: `M ${left.cx} ${y} Q ${mid} ${y - lift}, ${right.cx} ${y}` };
  }
  const upper = a.cy <= b.cy ? a : b;
  const lower = a.cy <= b.cy ? b : a;
  const mid = (upper.y + upper.h + lower.y) / 2;
  const bow = upper.cx <= lower.cx ? 28 : -28;
  return { d: `M ${upper.cx} ${upper.y + upper.h} C ${upper.cx + bow} ${mid}, ${lower.cx + bow} ${mid}, ${lower.cx} ${lower.y}` };
}

function edgePaths(nodes: LayoutNode[], links: TreeLink[]): LayoutEdge[] {
  const box = new Map(boxes(nodes).map((item) => [item.id, item]));
  return links.map((link) => {
    const from = box.get(link.from);
    const to = box.get(link.to);
    if (!from || !to) throw new Error(`가족관계도 선 오류: ${link.kind} ${link.from} → ${link.to}`);
    const path = link.kind === "spouse" ? spousePath(from, to) : directedPath(from, to, link.kind);
    const dx = Math.abs(from.cx - to.cx);
    const dy = Math.abs(from.cy - to.cy);
    const local = link.kind === "spouse" ? dx < COL * 1.6 && dy < NODE_H * 1.4 : dx < COL * 2.2 && dy < 280;
    const downward = from.cy <= to.cy;
    const child = downward ? to : from;
    const mark =
      link.kind === "adoption" && Math.abs(from.cy - to.cy) >= 24
        ? { x: child.cx, y: downward ? child.y - 14 : child.y + child.h + 14 }
        : "mark" in path
          ? path.mark
          : undefined;
    return {
      id: `${link.kind}-${link.from}-${link.to}`,
      d: path.d,
      d2: "d2" in path ? path.d2 : undefined,
      kind: link.kind,
      from: link.from,
      to: link.to,
      local,
      quiet: Math.hypot(dx, dy) > 640,
      mark,
    };
  });
}

function buildBands(def: TreeDef, nodes: LayoutNode[]): LayoutBand[] {
  return def.bands.map((meta) => {
    const group = nodes.filter((node) => node.band === meta.id).sort((a, b) => a.y - b.y || a.x - b.x);
    if (!group.length) throw new Error(`빈 세대: ${def.id} ${meta.id}`);
    const top = Math.min(...group.map((node) => node.y)) - 52;
    const bottom = Math.max(...group.map((node) => node.y + node.h)) + 18;
    return { ...meta, top, height: bottom - top, nodeIds: group.map((node) => node.id) };
  });
}

function assertLayout(def: TreeDef, nodes: LayoutNode[], bands: LayoutBand[]) {
  const ids = new Set<string>();
  for (const node of nodes) {
    if (ids.has(node.id)) throw new Error(`가족관계도 id 중복: ${def.id} ${node.id}`);
    ids.add(node.id);
    if (!def.bands.some((band) => band.id === node.band)) throw new Error(`없는 세대: ${def.id} ${node.id}`);
  }
  for (const link of def.links) {
    if (!ids.has(link.from) || !ids.has(link.to)) throw new Error(`가족관계도 선 오류: ${def.id} ${link.kind} ${link.from} → ${link.to}`);
  }
  const seen = new Set<string>();
  for (const link of def.links) {
    const key = `${link.kind}:${link.from}:${link.to}`;
    if (seen.has(key)) throw new Error(`중복 선: ${def.id} ${key}`);
    seen.add(key);
  }
  for (const [kind, from, to] of def.must) {
    const found = def.links.some((link) => {
      if (link.kind !== kind) return false;
      if (link.from === from && link.to === to) return true;
      return kind === "spouse" && link.from === to && link.to === from;
    });
    if (!found) throw new Error(`${def.id}에 없는 관계: ${kind} ${from} → ${to}`);
  }
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      const overlapX = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
      const overlapY = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
      if (overlapX > 2 && overlapY > 2) throw new Error(`가족관계도 칸이 겹칩니다: ${def.id} ${a.id} · ${b.id}`);
    }
  }
  for (let i = 1; i < bands.length; i += 1) {
    const gap = bands[i].top - (bands[i - 1].top + bands[i - 1].height);
    if (gap < 12) throw new Error(`세대 간격이 좁습니다: ${def.id} ${bands[i - 1].id} → ${bands[i].id} (${gap})`);
  }
}

function layoutTree(def: TreeDef): LaidTree {
  const placed = placeNodes(def);
  const bands = buildBands(def, placed.nodes);
  assertLayout(def, placed.nodes, bands);
  return {
    id: def.id,
    ko: def.ko,
    en: def.en,
    lead: def.lead,
    disputes: def.disputes,
    notes: def.notes,
    sources: def.sources,
    links: def.links,
    width: placed.width,
    height: placed.height,
    nodes: placed.nodes,
    edges: edgePaths(placed.nodes, def.links),
    bands,
    byId: new Map(placed.nodes.map((node) => [node.id, node])),
  };
}

export const TREES: LaidTree[] = DEFS.map(layoutTree);

const treeById = new Map(TREES.map((tree) => [tree.id, tree]));
const nodeOwner = new Map<string, LaidTree>();
for (const tree of TREES) {
  for (const node of tree.nodes) {
    if (nodeOwner.has(node.id)) throw new Error(`가문 사이 id 중복: ${node.id}`);
    nodeOwner.set(node.id, tree);
  }
}



const allowedSisterOrigins = new Set(ALLOWED_SISTER_ORIGINS);

for (const tree of TREES) {
  for (const node of tree.nodes) {
    for (const link of node.also ?? []) {
      let origin = "";
      try {
        origin = new URL(link.href).origin;
      } catch {
        throw new Error(`가족관계도 바깥 링크 주소가 잘못되었습니다: ${link.href}`);
      }
      if (!allowedSisterOrigins.has(origin)) throw new Error(`가족관계도 바깥 링크가 자매 사이트가 아닙니다: ${link.href}`);
    }
    if (!node.href || node.href.startsWith("http")) continue;
    const path = node.href.split(/[?#]/)[0];
    if (path.startsWith("/people/")) {
      const slug = path.slice("/people/".length);
      if (!personBySlug(slug)) throw new Error(`가족관계도 링크에 해당하는 인물 페이지가 없습니다: ${node.href}`);
      continue;
    }
    throw new Error(`확인하지 않은 가족관계도 링크: ${node.href}`);
  }
}

export const DEFAULT_TREE_ID = "teutoburg";

export function treeByFocus(id: string) {
  return nodeOwner.get(id);
}

export type RelationPerson = { id: string; ko: string; en: string; href?: string };

function personRef(tree: LaidTree, id: string): RelationPerson {
  const node = tree.byId.get(id);
  if (!node) throw new Error(id);
  return { id: node.id, ko: node.ko, en: node.en, href: node.href };
}

function byX(tree: LaidTree) {
  return (a: RelationPerson, b: RelationPerson) => (tree.byId.get(a.id)?.x ?? 0) - (tree.byId.get(b.id)?.x ?? 0);
}

export function relationsOf(tree: LaidTree, id: string) {
  const order = byX(tree);
  const pick = (kind: LinkKind, direction: "from" | "to") =>
    tree.links
      .filter((link) => link.kind === kind && (direction === "to" ? link.to === id : link.from === id))
      .map((link) => personRef(tree, direction === "to" ? link.from : link.to))
      .sort(order);
  const parents = pick("parent", "to");
  const adoptiveParents = pick("adoption", "to");
  const variantParents = pick("variant-parent", "to");
  const children = pick("parent", "from");
  const adopted = pick("adoption", "from");
  const variantChildren = pick("variant-parent", "from");
  const spouses = tree.links
    .filter((link) => link.kind === "spouse" && (link.from === id || link.to === id))
    .map((link) => personRef(tree, link.from === id ? link.to : link.from))
    .sort(order);
  const parentIds = new Set(parents.map((person) => person.id));
  const siblingIds = new Set<string>();
  for (const link of tree.links) {
    if (link.kind !== "parent" || !parentIds.has(link.from) || link.to === id) continue;
    siblingIds.add(link.to);
  }
  const siblings = [...siblingIds].map((siblingId) => personRef(tree, siblingId)).sort(order);
  const adoptiveParentIds = new Set(adoptiveParents.map((person) => person.id));
  const coAdoptedIds = new Set<string>();
  for (const link of tree.links) {
    if (link.kind !== "adoption" || !adoptiveParentIds.has(link.from) || link.to === id) continue;
    coAdoptedIds.add(link.to);
  }
  const coAdopted = [...coAdoptedIds].map((personId) => personRef(tree, personId)).sort(order);
  return { parents, adoptiveParents, variantParents, spouses, children, adopted, variantChildren, siblings, coAdopted };
}

function norm(value: string) {
  return value.toLowerCase().replace(/[\s·.'’\-()/_]/g, "");
}

export type SearchHit = LayoutNode & { treeId: string; treeKo: string };

export function searchNodes(query: string): SearchHit[] {
  const q = norm(query);
  if (!q) return [];
  const hits: { node: SearchHit; exact: boolean; prefix: boolean }[] = [];
  for (const tree of TREES) {
    for (const node of tree.nodes) {
      const keys = node.keys.map(norm);
      const exact = keys.some((key) => key === q);
      const prefix = keys.some((key) => key.startsWith(q));
      const hit = exact || prefix || keys.some((key) => key.includes(q));
      if (!hit) continue;
      hits.push({ node: { ...node, treeId: tree.id, treeKo: tree.ko }, exact, prefix });
    }
  }
  return hits
    .sort((a, b) => Number(b.exact) - Number(a.exact) || Number(b.prefix) - Number(a.prefix) || a.node.ko.localeCompare(b.node.ko, "ko"))
    .map((item) => item.node);
}

export function exactNodeId(query: string) {
  const q = norm(query);
  if (!q) return null;
  const ids = new Set<string>();
  for (const tree of TREES) {
    for (const node of tree.nodes) {
      if (node.keys.some((key) => norm(key) === q)) ids.add(node.id);
    }
  }
  if (ids.size !== 1) return null;
  return [...ids][0];
}

export function focusHref(id: string) {
  const tree = nodeOwner.get(id);
  if (!tree) return "/family-tree";
  return `/family-tree?tree=${tree.id}&focus=${id}`;
}

export function personTreeHref(slug: string) {
  const person = personBySlug(slug);
  if (!person?.treeId) return null;
  return focusHref(person.treeId);
}

export function getTree(id: string) {
  return treeById.get(id);
}
