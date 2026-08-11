export type PageKey =
  | "home"
  | "guide"
  | "multiplayer"
  | "puzzleSolutions"
  | "map"
  | "price";

export interface SeoPageConfig {
  title: string;
  description: string;
  canonicalPath: string;
  primaryKeyword: string;
  relatedKeywords: string[];
  pageType: string;
  structuredDataTypes: Array<"WebPage" | "FAQPage" | "BreadcrumbList" | "Article">;
}
