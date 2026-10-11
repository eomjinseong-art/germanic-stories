import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { VikingBridge } from "@/components/VikingBridge";
import { kingdoms } from "@/data/kingdoms";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "로마 이후의 왕국",
  description: "동고트, 서고트, 반달, 프랑크, 앵글로색슨, 랑고바르드. 카롤루스 대제 다음 칸은 793년 린디스판과 바이킹 시대입니다.",
  path: "/kingdoms",
});

export default function KingdomsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "왕국", path: "/kingdoms" },
          ]),
          itemListLd(
            "로마 이후 게르만 왕국",
            "/kingdoms",
            kingdoms.map((kingdom) => ({ name: kingdom.title, path: `/kingdoms/${kingdom.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "왕국" }]} />
      <PageHead
        kicker="KINGDOMS"
        title="로마 이후의 왕국"
        lead="476년 이후 서로마 황제는 이탈리아에서 사라졌지만, 라틴어와 도시와 교회는 남았습니다. 그 위에 선 왕국 여섯 곳을 짧게 적습니다. 메로베크 같은 이름 전승은 전설로 표시합니다."
      />
      <ul className="mt-8 grid gap-4 lg:grid-cols-2">
        {kingdoms.map((kingdom) => (
          <li key={kingdom.slug} className="rounded-lg border border-line bg-card p-5">
            <p className="text-[11px] tracking-[0.16em] text-terra">{kingdom.en}</p>
            <h2 className="mt-1 font-serif text-2xl text-ink">
              <Link href={`/kingdoms/${kingdom.slug}`} className="hover:text-terra">
                {kingdom.title}
              </Link>
            </h2>
            <p className="mt-1 text-xs text-muted">{kingdom.years}</p>
            <p className="mt-2 text-sm leading-6">{kingdom.summary}</p>
            <Link href={`/kingdoms/${kingdom.slug}`} className="mt-3 inline-block text-sm text-terra">
              세 가지 포인트와 조금만 더 →
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <VikingBridge />
      </div>
    </div>
  );
}
