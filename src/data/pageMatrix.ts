export const pageMatrix = [
  {
    page: "Home",
    route: "/",
    keyword: "big walk game",
    userQuestion: "What kind of game is Big Walk?",
    pageType: "Homepage",
    sourcePriority: ["Steam official page", "Official website", "Official social channels"]
  },
  {
    page: "Guide",
    route: "/guide/",
    keyword: "big walk guide",
    userQuestion: "How do you play Big Walk?",
    pageType: "Game Guide",
    sourcePriority: ["Steam official page", "YouTube gameplay or guide videos"]
  },
  {
    page: "Map",
    route: "/map/",
    keyword: "big walk map",
    userQuestion: "Where can I find Big Walk locations?",
    pageType: "Tool Page",
    sourcePriority: ["Player community", "YouTube exploration videos"]
  },
  {
    page: "Puzzle Solutions",
    route: "/puzzle-solutions/",
    keyword: "big walk puzzle solution",
    userQuestion: "How do you solve Big Walk puzzles?",
    pageType: "Problem Solving Guide",
    sourcePriority: ["YouTube puzzle guides", "Verified community discussion"]
  },
  {
    page: "Price",
    route: "/price/",
    keyword: "big walk price",
    userQuestion: "How much does Big Walk cost?",
    pageType: "Purchase Information Page",
    sourcePriority: ["Steam official page", "Official announcements"]
  },
  {
    page: "Multiplayer",
    route: "/multiplayer/",
    keyword: "big walk multiplayer",
    userQuestion: "Can you play Big Walk with friends?",
    pageType: "Feature Page",
    sourcePriority: ["Official FAQ", "Steam official page"]
  }
] as const;
