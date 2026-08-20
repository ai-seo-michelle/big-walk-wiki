export const mapPage = {
  hero: {
    eyebrow: "Big Walk Map",
    title: "Big Walk Interactive Map",
    description:
      "A verified-first map hub for Big Walk exploration. The interactive map framework is prepared for future community data, but this page does not publish unverified locations, coordinates, or markers."
  },
  source: {
    ariaLabel: "Map source status",
    eyebrow: "Source Status",
    title: "Verified for This Page",
    verifiedPoints: [
      "Big Walk focuses on exploration.",
      "Navigation help is a reasonable player need during exploration.",
      "Complete interactive map data is not available yet."
    ]
  },
  overview: {
    eyebrow: "Overview",
    title: "Big Walk Map Introduction",
    paragraphs: [
      "Big Walk is built around exploration, discovery, and cooperative play. A map resource can help players organize useful information once reliable location data becomes available.",
      "Current sources do not provide a complete official interactive map or a verified location database. For that reason, this wiki keeps the map structure ready without inventing coordinates or place names."
    ]
  },
  interactive: {
    eyebrow: "Interactive Tool",
    title: "Interactive Map Status",
    placeholderLabel: "Interactive map placeholder",
    markersEyebrow: "Verified Markers",
    markerSummary: "No confirmed Big Walk map markers are published yet.",
    categoriesTitle: "Future Marker Categories",
    markerCategories: [
      "Important Areas",
      "Puzzle Locations",
      "Discovery Points",
      "Useful Tools"
    ]
  },
  features: {
    eyebrow: "Future Features",
    title: "Interactive Map Features",
    text:
      "These features describe the planned structure for verified map data, not a claim that complete location data is already available.",
    items: [
      {
        title: "Location Markers",
        text: "Future verified markers can group important areas, puzzle locations, discovery points, and useful tools."
      },
      {
        title: "Player Notes",
        text: "Community notes can document routes, tips, and discoveries after they are checked against reliable sources."
      },
      {
        title: "Search Function",
        text: "A future search tool can help players find verified locations, areas, and puzzle points."
      }
    ]
  },
  exploration: {
    eyebrow: "Exploration",
    title: "Exploration Tips",
    tips: [
      {
        title: "Explore Together",
        text: "Move with teammates when entering unfamiliar areas so discoveries can be shared and checked."
      },
      {
        title: "Record What You Find",
        text: "When the community database opens, useful submissions should describe what was found and how it was verified."
      },
      {
        title: "Share Locations Carefully",
        text: "Avoid treating a single clip or memory as confirmed map data until multiple reliable sources support it."
      }
    ]
  },
  community: {
    eyebrow: "Community Data",
    title: "What Still Needs Verification?",
    items: [
      "Official interactive map",
      "Complete location database",
      "Confirmed map markers",
      "Verified hidden area list"
    ]
  },
  note: {
    eyebrow: "Wiki Note",
    title: "No Fake Locations or Coordinates",
    text:
      "This page intentionally avoids fake locations, fake coordinates, and fake map markers. Future map entries should be based on official information, verified exploration videos, or carefully checked community discoveries."
  }
} as const;
