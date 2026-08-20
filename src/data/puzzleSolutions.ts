export const puzzleSolutionsPage = {
  hero: {
    eyebrow: "Big Walk Puzzle Guide",
    title: "Big Walk Puzzle Solutions",
    description:
      "A verified-first puzzle guide for Big Walk, focused on cooperative problem solving, communication, and a future structure for confirmed solutions."
  },
  source: {
    ariaLabel: "Puzzle source status",
    eyebrow: "Source Status",
    title: "Verified for This Page",
    verifiedPoints: [
      "Big Walk includes cooperative puzzle challenges.",
      "Puzzle solving is connected to exploration and teamwork.",
      "Communication between players is important when approaching challenges."
    ]
  },
  overview: {
    eyebrow: "Overview",
    title: "Big Walk Puzzle Guide",
    paragraphs: [
      "Big Walk uses cooperative puzzle challenges as part of its exploration experience. Current official and gameplay sources support the idea that puzzles are meant to be approached through teamwork and communication.",
      "This page does not publish specific puzzle answers yet. Exact puzzle locations, step-by-step solutions, and shortcuts should be added only after they are verified by reliable gameplay or community sources."
    ]
  },
  solving: {
    eyebrow: "How to Approach Puzzles",
    title: "Puzzle Solving Tips",
    steps: [
      {
        title: "Observe the Environment",
        text: "Look for interactive objects, hidden paths, possible mechanisms, and changes in the area before trying random actions."
      },
      {
        title: "Communicate With Teammates",
        text: "Share what each player can see, where objects are located, and which actions seem to affect the environment."
      },
      {
        title: "Try Team Roles",
        text: "One player can observe, another can test interactions, and another can track what changes after each attempt."
      }
    ]
  },
  approaches: {
    eyebrow: "General Patterns",
    title: "Common Puzzle Approaches",
    text:
      "The wiki can safely explain general problem-solving patterns while it waits for reliable sources on individual puzzles.",
    items: [
      {
        title: "Environmental Clues",
        text: "Use visible paths, objects, and changes in the area as the first source of puzzle information."
      },
      {
        title: "Shared Perspective",
        text: "A puzzle may be easier when players compare what they can see from different positions."
      },
      {
        title: "Coordinated Testing",
        text: "Try one change at a time so the team can understand which action caused which result."
      }
    ]
  },
  database: {
    eyebrow: "Future Wiki Structure",
    title: "Puzzle Solutions Database",
    text:
      "When confirmed puzzle data is available, each puzzle entry should follow a consistent structure so players can scan it quickly.",
    fields: [
      "Puzzle Name",
      "Location",
      "Required Players",
      "Solution Steps",
      "Tips"
    ]
  },
  community: {
    eyebrow: "Community Discoveries",
    title: "What Can Be Added Later?",
    items: [
      "Complete puzzle database",
      "Puzzle-by-puzzle solutions",
      "Exact puzzle locations",
      "Unverified community shortcuts"
    ]
  },
  note: {
    eyebrow: "Wiki Note",
    title: "No Unsupported Puzzle Answers",
    text:
      "Specific Big Walk puzzle solutions require additional verification from walkthrough videos, Reddit discussions, Discord community guides, or other reliable player sources. Until then, this page stays focused on safe, general puzzle-solving guidance."
  }
} as const;
