export type Source = { work: string; ref?: string };

export type Kind = "legend" | "history" | "mixed";

export type LinkItem = { href: string; label: string };

export type Guide = {
  en: string;
  title: string;
  summary: string;
  points: readonly [string, string, string];
  more?: readonly string[];
};

export type Film = {
  /** Anchor id. Matches nadoo-timeline films.json when the work is listed there. */
  slug: string;
  titleKo: string;
  titleOriginal: string;
  year: string;
  kind: "영화" | "시리즈";
  plot: string;
  history: string;
  links: readonly LinkItem[];
};

export type Tribe = Guide & {
  id: string;
  latin: string;
  kind: Kind;
  when: string;
  links: readonly LinkItem[];
};

export type Chapter = Guide & {
  slug: string;
  years: string;
  kind: Kind;
  cause: string;
  who: string;
  result: string;
  sources: readonly Source[];
  related: readonly LinkItem[];
  filmSlugs: readonly string[];
};

export type Kingdom = Guide & {
  slug: string;
  years: string;
  kind: Kind;
  sources: readonly Source[];
  related: readonly LinkItem[];
  filmSlugs: readonly string[];
};

export type PersonSide = "germanic" | "roman" | "hun";

export type Person = {
  slug: string;
  en: string;
  nameKo: string;
  nameEn: string;
  latin?: string;
  years: string;
  role: string;
  side: PersonSide;
  kind: Kind;
  summary: string;
  points: readonly [string, string, string];
  more?: readonly string[];
  sources: readonly Source[];
  related: readonly LinkItem[];
  filmSlugs: readonly string[];
  /** Id on the relationship chart, when this person is drawn. */
  treeId?: string;
};
