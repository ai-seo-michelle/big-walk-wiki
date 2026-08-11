import type { PageKey, SeoPageConfig } from "../types/seo";

export const seoPages = {
  home: {
    title: "Big Walk Wiki — Guide, Multiplayer, Puzzles",
    description:
      "Explore Big Walk guides, multiplayer features, puzzle solutions, gameplay tips, and everything about this cooperative adventure game.",
    canonicalPath: "/",
    primaryKeyword: "big walk game",
    relatedKeywords: ["big walk wiki", "big walk gameplay", "big walk guide"],
    pageType: "Homepage",
    structuredDataTypes: ["WebPage", "BreadcrumbList"]
  },
  guide: {
    title: "Big Walk Guide - Beginner Tips and How to Play",
    description:
      "Start with the Big Walk beginner guide, including gameplay basics, team tips, and first steps.",
    canonicalPath: "/guide/",
    primaryKeyword: "big walk guide",
    relatedKeywords: ["big walk beginner guide", "how to play big walk", "big walk walkthrough"],
    pageType: "Game Guide",
    structuredDataTypes: ["Article", "FAQPage", "BreadcrumbList"]
  },
  multiplayer: {
    title: "Big Walk Multiplayer Guide - Co-op and Friends",
    description:
      "Learn how Big Walk multiplayer works, including co-op structure, player expectations, and teamwork tips.",
    canonicalPath: "/multiplayer/",
    primaryKeyword: "big walk multiplayer",
    relatedKeywords: ["big walk co op", "big walk friends", "big walk player count"],
    pageType: "Feature Page",
    structuredDataTypes: ["Article", "FAQPage", "BreadcrumbList"]
  },
  puzzleSolutions: {
    title: "Big Walk Puzzle Solutions - Puzzle Guide and Tips",
    description:
      "Use Big Walk puzzle-solving tips and a future puzzle database structure for verified solutions.",
    canonicalPath: "/puzzle-solutions/",
    primaryKeyword: "big walk puzzle solution",
    relatedKeywords: ["big walk puzzles", "big walk puzzle guide", "how to solve big walk puzzles"],
    pageType: "Problem Solving Guide",
    structuredDataTypes: ["Article", "FAQPage", "BreadcrumbList"]
  },
  map: {
    title: "Big Walk Map - Interactive Map and Locations",
    description:
      "Plan Big Walk exploration with a future interactive map structure for verified locations and discoveries.",
    canonicalPath: "/map/",
    primaryKeyword: "big walk map",
    relatedKeywords: ["big walk interactive map", "big walk locations", "big walk exploration guide"],
    pageType: "Tool Page",
    structuredDataTypes: ["WebPage", "BreadcrumbList"]
  },
  price: {
    title: "Big Walk Price - Where to Buy Big Walk",
    description:
      "Check Big Walk purchase channels, platform availability, and price guidance based on official sources.",
    canonicalPath: "/price/",
    primaryKeyword: "big walk price",
    relatedKeywords: ["big walk steam price", "buy big walk", "big walk worth it"],
    pageType: "Purchase Information Page",
    structuredDataTypes: ["Article", "FAQPage", "BreadcrumbList"]
  }
} satisfies Record<PageKey, SeoPageConfig>;
