import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { KindBadge } from "@/components/KindBadge";
import { PageHead } from "@/components/PageHead";
import { people } from "@/data/people";
import type { PersonSide } from "@/data/types";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "인물",
  description: "아르미니우스, 투스넬다, 플라부스, 바루스, 게르마니쿠스, 알라리크, 가이세리크, 오도아케르, 테오도릭, 클로비스, 카롤루스 대제. 아틸라는 훈족으로 따로 적습니다.",
  path: "/people",
});

const GROUPS: { side: PersonSide; title: string; note: string }[] = [
  { side: "germanic", title: "게르만 쪽", note: "부족의 왕과 귀족, 그리고 로마 군대 출신의 지도자." },
  { side: "roman", title: "로마 쪽", note: "게르마니아 전선의 총독과 황제 가문. 전기 전체는 로마이야기에 있습니다." },
  { side: "hun", title: "훈족", note: "게르만족이 아닙니다. 게르만 무리를 거느린 연맹의 왕으로만 적습니다." },
];

export default function PeoplePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "인물", path: "/people" },
          ]),
          itemListLd(
            "게르만이야기의 인물",
            "/people",
            people.map((person) => ({ name: person.nameKo, path: `/people/${person.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "인물" }]} />
      <PageHead
        kicker="PEOPLE"
        title="인물"
        lead={`시간 순으로 ${people.length}명입니다. 전체 황제 명단이 아닙니다. 게르마니아와 그 뒤의 왕국을 읽는 데 필요한 사람만 골랐습니다.`}
      />
      {GROUPS.map((group) => {
        const list = people.filter((person) => person.side === group.side);
        return (
          <section key={group.side} className="mt-10" aria-labelledby={`side-${group.side}`}>
            <h2 id={`side-${group.side}`} className="font-serif text-2xl text-ink">
              {group.title}
            </h2>
            <p className="mt-1 text-sm text-muted">{group.note}</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {list.map((person) => (
                <li key={person.slug} className="rounded-lg border border-line bg-card p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[11px] tracking-[0.16em] text-terra">{person.nameEn}</p>
                    <KindBadge kind={person.kind} />
                  </div>
                  <h3 className="mt-1 font-serif text-2xl text-ink">
                    <Link href={`/people/${person.slug}`} className="hover:text-terra">
                      {person.nameKo}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-muted">
                    {person.role} · {person.years}
                  </p>
                  <p className="mt-2 text-sm leading-6">{person.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
