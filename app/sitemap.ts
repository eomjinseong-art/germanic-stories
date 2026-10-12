import type { MetadataRoute } from "next";
import { EPISODES, episodePath } from "@/data/barbarians";
import { chapters } from "@/data/chapters";
import { kingdoms } from "@/data/kingdoms";
import { people } from "@/data/people";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/who",
    "/tribes",
    "/chronicle",
    "/kingdoms",
    "/people",
    "/family-tree",
    "/barbarians",
    "/barbarians/s1",
    "/barbarians/s2",
    ...EPISODES.map(episodePath),
    "/films",
    "/sources",
    ...chapters.map((chapter) => `/chronicle/${chapter.slug}`),
    ...kingdoms.map((kingdom) => `/kingdoms/${kingdom.slug}`),
    ...people.map((person) => `/people/${person.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
