import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { identitySections } from "@/data/identity";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { ROME_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "게르만족은 누구인가",
  description: "게르만족의 이름, 언어, 생활, 민회, 신앙, 그리고 로마가 바바리안이라 부른 이유. 북유럽 신화와 1세기의 신앙을 구분합니다.",
  path: "/who",
});

export default function WhoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "게르만족", path: "/who" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "게르만족" }]} />
      <PageHead
        kicker="WHO"
        title="게르만족은 누구인가"
        lead="하나의 왕국이 아니었습니다. 라인 강과 다뉴브 강 북쪽에서 로마와 맞선 여러 집단을, 로마가 게르마니라고 묶었습니다. 아래 여섯 칸은 그 묶음의 말, 살림, 회의, 신, 그리고 낙인을 나눕니다."
      />
      <div className="mt-8 space-y-6">
        {identitySections.map((section) => (
          <GuideBlock
            key={section.id}
            id={section.id}
            en={section.en}
            title={section.title}
            summary={section.summary}
            points={section.points}
            more={section.more}
            kind={section.kind}
          />
        ))}
      </div>
      <RelatedLinks
        links={[
          { href: "/tribes", label: "부족 도감" },
          { href: "/chronicle", label: "연대기" },
          { href: "/barbarians", label: "드라마의 제목, 바바리안" },
          { href: `${ROME_URL}/wars/gallic-war`, label: "로마이야기에서 갈리아 전쟁" },
        ]}
      />
    </div>
  );
}
