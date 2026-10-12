import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EPISODES, RELATIONS, REL_LABEL, episodePath, seasonPath } from "@/data/barbarians";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "드라마 바바리안",
  description: "넷플릭스 바바리안(Barbaren, 2020–2022) 시즌 두 개의 큰 줄기, 실존 인물과 창작 인물, 토이토부르크 사료와 다른 점. 포르모사스는 출연 명단에서 확인되지 않습니다.",
  path: "/barbarians",
});

const REAL = [
  ["아르미니우스", "케루스키 출신 로마 장교. 서기 9년의 매복.", "/people/arminius"],
  ["투스넬다", "세게스테스의 딸, 아르미니우스의 아내. 15년 포로.", "/people/thusnelda"],
  ["세게스테스", "친로마 케루스키. 음모를 바루스에게 알렸다는 기록이 있습니다.", "/people/segestes"],
  ["세게메르", "아르미니우스의 아버지로 전하는 이름. 가정의 세부는 짧습니다.", "/family-tree?tree=teutoburg&focus=segimer"],
  ["플라부스", "동생. 시즌 2에 나옵니다. 역사에서는 로마에 남습니다.", "/people/flavus"],
  ["바루스", "게르마니아 총독. 시즌 1. 양아버지는 아닙니다.", "/people/varus"],
  ["티베리우스", "시즌 2. 아우구스투스의 양자이자 뒤의 황제.", "https://rome-stories.vercel.app/rulers/tiberius"],
  ["게르마니쿠스", "시즌 2. 14–16년 보복 원정의 장군.", "/people/germanicus"],
  ["마로보두스", "시즌 2에서 마르코만니의 왕으로 나옵니다. 실존하는 라이벌입니다.", "/people/maroboduus"],
];

const INVENTED = [
  ["폴크윈 볼프스페어", "아르미니우스·투스넬다의 친구로 설정된 전사. 고대 기록에 없는 이름입니다."],
  ["베룰프", "폴크윈 쪽 전사. 창작입니다."],
  ["이르미나", "투스넬다의 어머니로 나오는 이름. 어머니의 실제 이름은 전하지 않습니다."],
  ["안스가", "투스넬다의 어린 동생. 사료의 오빠는 사제 세기문두스입니다."],
  ["하드간", "카티의 족장으로 나오는 약혼자. 카티 부족은 실재하지만 이 인물은 창작입니다."],
  ["루나", "예언자. 창작입니다."],
  ["펠라기오스, 메텔루스, 탈리오", "로마 진영과 마을의 조연. 이 이름으로 된 역사 인물로 확인되지 않습니다."],
  ["가이우스", "아르미니우스가 로마에 두었다는 아들. 사료에 있는 아들은 투스넬다의 툴리쿠스입니다."],
];

const REL_BG: Record<string, string> = {
  friend: "rgba(47,74,60,0.12)",
  love: "rgba(163,71,50,0.15)",
  tense: "rgba(166,132,61,0.18)",
  enemy: "rgba(120,30,30,0.22)",
  allied: "rgba(47,74,60,0.22)",
  dead: "rgba(0,0,0,0.12)",
  apart: "transparent",
};

export default function BarbariansPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "바바리안", path: "/barbarians" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "바바리안" }]} />
      <PageHead
        kicker="BARBARIANS"
        title="드라마 바바리안"
        lead="독일어 제목은 Barbaren, 한국어 유통명은 바바리안입니다. 안드레아스 헤크만, 아르네 놀팅, 얀 마르틴 샤르프가 만들고 넷플릭스가 공개한 독일 드라마입니다. 역사 다큐멘터리가 아니라, 서기 9년 전후를 빌린 극입니다."
      />

      <section className="mt-8" aria-labelledby="seasons-heading">
        <h2 id="seasons-heading" className="font-serif text-2xl text-ink">
          시즌
        </h2>
        <ul className="mt-3 space-y-3 text-sm leading-7">
          <li className="rounded-lg border border-line bg-card p-4">
            <Link href="/barbarians/s1" className="font-serif text-lg text-ink hover:text-terra">시즌 1 · 2020년 10월 23일 · 6편 →</Link>
            <p className="mt-1">
              케루스키 마을과 새 총독 바루스, 로마 장교로 돌아온 아르미니우스, 투스넬다와 폴크윈. 끝은 토이토부르크 숲의 매복입니다. 로마 인물은 라틴어를, 게르만 쪽은 독일어를 씁니다.
            </p>
          </li>
          <li className="rounded-lg border border-line bg-card p-4">
            <Link href="/barbarians/s2" className="font-serif text-lg text-ink hover:text-terra">시즌 2 · 2022년 10월 21일 · 6편 →</Link>
            <p className="mt-1">
              패배 다음 해의 로마 재건, 동생 플라부스, 마르코만니의 마로보두스, 티베리우스와 게르마니쿠스가 나옵니다. 공개된 시즌은 여기까지입니다.
            </p>
          </li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-muted">
          시즌 3은 공개되지 않았습니다. 2024년의 보도는 제작이 마무리되었고 가까운 추가 시즌 계획이 없다고 전합니다. 공식 취소 문구를 이 글에서 확인하지는 못했으므로, ‘폐지되었다’고 단정하지는 않습니다.
        </p>
      </section>


      <section className="mt-10" aria-labelledby="guide-heading">
        <h2 id="guide-heading" className="font-serif text-2xl text-ink">
          회차 가이드 (전체 스포일러)
        </h2>
        <p className="mt-2 text-xs text-muted">제목: 독일어 원제 · 영어 · 넷플릭스 한국어. 결말까지 적습니다.</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {[1, 2].map((s) => (
            <div key={s}>
              <Link href={seasonPath(s)} className="font-serif text-lg text-ink hover:text-terra">시즌 {s}</Link>
              <ol className="mt-2 space-y-1 text-sm">
                {EPISODES.filter((e) => e.season === s).map((e) => (
                  <li key={e.overall}>
                    <Link href={episodePath(e)} className="hover:text-terra">
                      {e.ep}화 {e.ko} <span className="text-xs text-muted">· {e.de} · {e.en}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="relations">
        <h2 id="relations" className="scroll-mt-40 font-serif text-2xl text-ink">
          1–12화 관계 변화
        </h2>
        <p className="mt-2 text-xs text-muted">각 칸은 그 화가 끝났을 때의 관계입니다. 1–6은 시즌 1, 7–12는 시즌 2.</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-xs">
            <thead>
              <tr>
                <th className="p-1 text-left">관계</th>
                {EPISODES.map((e) => (
                  <th key={e.overall} className="p-1">
                    <Link href={episodePath(e)} className="hover:text-terra">{e.overall}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RELATIONS.map((r) => (
                <tr key={r.a + r.b} className="border-t border-line">
                  <td className="p-1 text-left font-serif text-ink">{r.a} ↔ {r.b}</td>
                  {r.states.map((st, i) => (
                    <td key={i} className={`p-1 text-center rel-${st}`} style={{ background: REL_BG[st] }}>
                      {REL_LABEL[st]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-3 space-y-1 text-sm leading-7">
          {RELATIONS.map((r) => (
            <li key={r.a + r.b}>
              <span className="font-serif text-ink">{r.a} ↔ {r.b}</span>
              <span className="text-muted"> — {r.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="formosus-heading">
        <h2 id="formosus-heading" className="font-serif text-2xl text-ink">
          포르모사스는?
        </h2>
        <p className="mt-2 text-sm leading-7">
          두 시즌의 출연 명단에서 포르모사스(Formosus)라는 이름은 확인되지 않습니다. 로마 쪽 조연으로 이름이 있는 사람은 펠라기오스, 메텔루스, 퀸투스 쪽이고, 게르만 쪽 창작의 중심은 폴크윈입니다. 다른 작품의 로마 이름과 겹쳐 기억했을 가능성은 있으나, 이 드라마의 인물로는 적지 않습니다.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="real-heading">
        <h2 id="real-heading" className="font-serif text-2xl text-ink">
          실존하는 사람
        </h2>
        <ul className="mt-3 space-y-2 text-sm leading-7">
          {REAL.map(([name, note, href]) => (
            <li key={name}>
              {href.startsWith("/") ? (
                <Link href={href} className="font-serif text-ink hover:text-terra">
                  {name}
                </Link>
              ) : (
                <a href={href} className="font-serif text-ink hover:text-terra" target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              )}
              <span className="text-muted"> — {note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="invented-heading">
        <h2 id="invented-heading" className="font-serif text-2xl text-ink">
          창작이거나, 이름이 사료에 없는 사람
        </h2>
        <ul className="mt-3 space-y-2 text-sm leading-7">
          {INVENTED.map(([name, note]) => (
            <li key={name}>
              <span className="font-serif text-ink">{name}</span>
              <span className="text-muted"> — {note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="diff-heading">
        <h2 id="diff-heading" className="font-serif text-2xl text-ink">
          사료와 다른 점
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7">
          <li>아르미니우스는 바루스의 양아들이 아닙니다. 로마 시민·기사 신분의 장교로 신뢰받았습니다.</li>
          <li>전투의 정확한 날은 고대 기록에 없습니다. 여러 날에 걸친 행군의 붕괴로 카시우스 디오가 적습니다.</li>
          <li>투스넬다의 포로와 아들 툴리쿠스는 서기 15년 이후의 일입니다. 전투 직전에 폴크윈의 아이를 밴 설정은 창작입니다.</li>
          <li>플라부스는 형과 갈라진 뒤에도 로마에 남았고, 아들 이탈리쿠스가 그 증거입니다. 시즌 2의 죽음은 극의 결말입니다.</li>
          <li>세게스테스는 로마에 구조되었습니다. 티베리우스에게 처형되었다는 결말과 다릅니다.</li>
          <li>마로보두스는 아르미니우스의 라이벌이었고 뒤에 라벤나로 망명합니다. 드라마가 더한 사적 관계는 타키투스에 없습니다.</li>
          <li>기원전 16년 로올리우스 때 잃은 독수리와, 서기 9년의 세 군단은 다른 사건입니다. 극은 독수리 도난을 9년의 발단으로 당깁니다.</li>
        </ol>
        <p className="mt-3 text-sm leading-7 text-muted">
          의상과 라틴어 대사는 볼 만한 장치로 평가받기도 했습니다. 그것과, 인물의 가족 관계를 사실로 외우는 일은 구분하면 됩니다. 회차별 줄거리와 결말은 아래 시즌 페이지에 모두 적었습니다.
        </p>
      </section>

      <RelatedLinks
        links={[
          { href: "/barbarians/s1", label: "시즌 1 회차" },
          { href: "/barbarians/s2", label: "시즌 2 회차" },
          { href: "/films#barbarians-2020", label: "영화 목록의 바바리안" },
          { href: "https://rome-stories.vercel.app/rulers/augustus", label: "로마 이야기: 아우구스투스" },
          { href: "https://rome-stories.vercel.app/rulers/tiberius", label: "로마 이야기: 티베리우스" },
          { href: "/people/germanicus", label: "게르마니쿠스" },
          { href: "https://nadoo-timeline.vercel.app/events/teutoburg-forest", label: "연표: 서기 9년" },
          { href: "/chronicle/teutoburg", label: "토이토부르크 사료" },
          { href: "/family-tree?tree=teutoburg&focus=arminius", label: "사료 쪽 가문" },
        ]}
      />
    </div>
  );
}
