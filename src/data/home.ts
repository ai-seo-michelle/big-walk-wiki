import { siteConfig } from "./site";

export const homePage = {
  hero: {
    eyebrow: "Fan-Made Community Wiki",
    title: "Big Walk",
    description:
      "Big Walk is a cooperative multiplayer adventure game about teamwork, communication, and exploration. Explore the world with friends, solve puzzles together, and discover new ways to interact.",
    actionsLabel: "Featured Big Walk guides",
    primaryAction: {
      label: "Start Beginner Guide",
      href: "/guide/"
    },
    secondaryAction: {
      label: "Explore Multiplayer",
      href: "/multiplayer/"
    },
    tertiaryAction: {
      label: "Solve Puzzles",
      href: "/puzzle-solutions/"
    },
    statsLabel: "Big Walk quick facts",
    stats: [
      "Launched 2026",
      "Developer: House House",
      "2-12 Player Cooperative",
      "Steam + PS5 + Switch 2",
      "Adventure Puzzle Game"
    ]
  },
  media: {
    ariaLabel: "Official media",
    eyebrow: "Official media",
    title: "Gameplay trailer",
    src: "https://www.youtube.com/embed/_n7e0hWmTvc",
    iframeTitle: "Big Walk official gameplay trailer"
  },
  start: {
    eyebrow: "Start Here",
    title: "Your Big Walk Journey",
    cards: [
      {
        number: "1",
        title: "Beginner Guide",
        description: "Learn the basic gameplay, controls, and first steps for exploring Big Walk.",
        href: "/guide/"
      },
      {
        number: "2",
        title: "Multiplayer Guide",
        description: "Learn how cooperative gameplay works and how to play with friends.",
        href: "/multiplayer/"
      },
      {
        number: "3",
        title: "Puzzle Solutions",
        description: "Find solutions and tips for solving challenges during your adventure.",
        href: "/puzzle-solutions/"
      },
      {
        number: "4",
        title: "World Exploration",
        description: "Discover locations, hidden areas, and exploration tips.",
        href: "/map/"
      }
    ]
  },
  about: {
    eyebrow: "About Game",
    title: "What is Big Walk?",
    paragraphs: [
      "Big Walk is a cooperative multiplayer adventure game developed by House House, the creators of Untitled Goose Game. Players explore a large open world together while solving puzzles and completing challenges.",
      "The game focuses on communication and teamwork. Players use voice chat, tools, and creative solutions to navigate the world and create memorable moments with friends."
    ],
    stats: [
      { label: "Developer", value: "House House" },
      { label: "Publisher", value: "Panic" },
      { label: "Platform", value: "Steam, PlayStation 5, Nintendo Switch 2" },
      { label: "Genre", value: "Cooperative Adventure Puzzle" },
      { label: "Players", value: "2-12 Players" },
      { label: "Core Feature", value: "Communication and Teamwork" }
    ],
    action: {
      label: "Explore All Guides",
      href: "/guide/"
    }
  },
  cta: {
    eyebrow: "Community Guide Hub",
    title: "Ready to Master Big Walk?",
    text:
      "From your first adventure to solving difficult puzzles with friends, our Big Walk wiki provides guides, tips, and useful information.",
    primaryAction: {
      label: "Read the Beginner Guide",
      href: "/guide/"
    },
    secondaryAction: {
      label: "Play Big Walk",
      href: siteConfig.officialLinks.steam
    }
  }
} as const;
