import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TribeMap } from "@/components/TribeMap";
import { tribes } from "@/data/tribes";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "부족 도감",
  description: "킴브리, 튜톤, 수에비, 케루스키, 고트, 반달, 프랑크, 알라만니, 색슨, 앵글, 랑고바르드. 도식 지도와 함께, 전설과 역사를 나눠 적습니다.",
  path: "/tribes",
});

export default function TribesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "부족 도감", path: "/tribes" },
          ]),
          itemListLd(
            "게르만 부족 도감",
            "/tribes",
            tribes.map((tribe) => ({ name: tribe.title, path: `/tribes#${tribe.id}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "부족 도감" }]} />
      <PageHead
        kicker="TRIBES"
        title="부족 도감"
        lead="이름은 세기마다 갈라지고 합쳐졌습니다. 지도는 한 해의 영토가 아니라, 글에서 그 이름이 주로 나오는 자리를 기억하기 위한 도식입니다. 킴브리와 튜톤의 언어, 고트의 스칸디나비아 기원은 불확실하다고 표시합니다."
      />
      <TribeMap />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {tribes.map((tribe) => (
          <GuideBlock key={tribe.id} id={tribe.id} en={tribe.en} title={tribe.title} summary={tribe.summary} points={tribe.points} more={tribe.more} kind={tribe.kind}>
            <p className="mt-3 text-xs text-muted">
              {tribe.latin} · {tribe.when}
            </p>
            <RelatedLinks links={tribe.links} />
          </GuideBlock>
        ))}
      </div>
    </div>
  );
}
