import { siteConfig } from "./site";

export const pricePage = {
  hero: {
    eyebrow: "Big Walk Price Guide",
    title: "Big Walk Price",
    description:
      "A verified-first purchase guide for Big Walk. This page explains where to check official store information without publishing an unverified or outdated fixed price."
  },
  source: {
    ariaLabel: "Price source status",
    eyebrow: "Source Status",
    title: "Verified for This Page",
    verifiedPoints: [
      "Steam is an official store source for Big Walk purchase information.",
      "The official website can confirm official purchase links and announcements.",
      "Current price is dynamic and should be checked on official store pages."
    ]
  },
  overview: {
    eyebrow: "Price Overview",
    title: "Current Big Walk Price",
    paragraphs: [
      "Big Walk pricing is dynamic. It can change by platform, region, and sale event, so this wiki should not store a fixed long-term price as permanent information.",
      "For the latest purchase information, players should check official store pages such as Steam and any official links shared by the Big Walk website."
    ]
  },
  purchase: {
    eyebrow: "Official Channels",
    title: "Where to Buy Big Walk",
    options: [
      {
        title: "Steam",
        text: "Use the Steam store page for PC purchase availability, current store information, price updates, user reviews, and system requirements.",
        href: siteConfig.officialLinks.steam
      },
      {
        title: "Official Website",
        text: "Use the official Big Walk website for first-party announcements, platform information, and official purchase guidance.",
        href: siteConfig.officialLinks.website
      },
      {
        title: "Console Platforms",
        text: "Console availability and store links should be checked through official announcements or platform store pages before publishing details here.",
        href: siteConfig.officialLinks.website
      }
    ]
  },
  platform: {
    eyebrow: "Platforms",
    title: "Platform Availability",
    text:
      "Store and platform information should stay tied to official sources, since availability and storefront details can change over time.",
    rules: [
      "Do not store one fixed long-term price on the wiki.",
      "Check official store pages for the latest price.",
      "Avoid publishing regional pricing unless it is verified.",
      "Treat discounts and sale prices as temporary information."
    ]
  },
  buyer: {
    eyebrow: "Buyer Guide",
    title: "Is Big Walk Worth Buying?",
    text:
      "This is not a review score. It is a simple fit check based on the verified shape of Big Walk as a cooperative exploration and puzzle game.",
    items: [
      {
        title: "Co-op Players",
        text: "Big Walk is a better fit for players looking for cooperative play rather than a solo-first action game."
      },
      {
        title: "Friend Groups",
        text: "The available materials point to a social experience built around teamwork, exploration, and communication."
      },
      {
        title: "Puzzle and Exploration Fans",
        text: "Players who enjoy shared discovery and problem solving are the most natural audience for Big Walk."
      }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Price FAQ",
    items: [
      {
        question: "How much is Big Walk?",
        answer:
          "The current price can change by platform, region, and sale event. This page does not publish a fixed price; check the official store page for the latest price."
      },
      {
        question: "Where can I buy Big Walk?",
        answer:
          "Use official purchase channels such as the Steam store page and links provided by the official Big Walk website."
      },
      {
        question: "Does Big Walk support multiplayer?",
        answer:
          "Yes. Big Walk is described as a cooperative multiplayer adventure experience."
      },
      {
        question: "Is Big Walk available on console?",
        answer:
          "Platform availability should be confirmed through official announcements, official store pages, or the Big Walk website before adding detailed store links."
      }
    ]
  },
  note: {
    eyebrow: "Wiki Note",
    title: "No Unverified Fixed Price",
    text:
      "This page intentionally avoids publishing a specific price until it can be checked against official store information. Future updates should verify price, discounts, and regional availability before adding them to the wiki."
  }
} as const;
