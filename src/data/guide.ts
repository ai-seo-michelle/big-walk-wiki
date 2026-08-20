export const guidePage = {
  hero: {
    eyebrow: "Big Walk Beginner Guide",
    title: "Big Walk Guide",
    description:
      "A beginner-friendly guide to understanding Big Walk, playing with teammates, and approaching puzzles without inventing unsupported walkthrough details."
  },
  source: {
    ariaLabel: "Guide source status",
    eyebrow: "Source Status",
    title: "Verified for This Guide",
    verifiedPoints: [
      "Big Walk is built around cooperative multiplayer.",
      "Exploration and puzzle solving are core parts of the experience.",
      "Team communication is important, based on available gameplay material."
    ]
  },
  overview: {
    eyebrow: "Game Overview",
    title: "What is Big Walk?",
    paragraphs: [
      "Big Walk is a cooperative exploration adventure game. Available official information and gameplay material describe a game where players explore together, communicate, and solve challenges as a team.",
      "This page is written for new players who want a clear starting point. It avoids unsupported claims about complete routes, exact puzzle solutions, item databases, or full map locations."
    ]
  },
  beginner: {
    eyebrow: "Start Here",
    title: "Big Walk Beginner Guide",
    steps: [
      {
        title: "Understand the Goal",
        text: "Approach Big Walk as a shared adventure about exploring, noticing the environment, and solving problems with other players."
      },
      {
        title: "Learn the Basics First",
        text: "Before rushing into challenges, spend time with movement, interaction, and any tools the game introduces through normal play."
      },
      {
        title: "Explore With Teammates",
        text: "The game is designed around playing with others, so treat discoveries as team information rather than private progress."
      },
      {
        title: "Communicate During Challenges",
        text: "Call out what you see, what changed, and what you think might be useful when a puzzle or obstacle appears."
      },
      {
        title: "Solve Puzzles Together",
        text: "Look for environmental clues, compare perspectives, and test ideas as a group before assuming there is only one obvious path."
      }
    ]
  },
  multiplayer: {
    eyebrow: "Team Play",
    title: "Multiplayer Tips",
    text:
      "Big Walk is best understood as a cooperative experience. These tips focus on teamwork patterns that are supported by the current source material.",
    tips: [
      {
        title: "Stay Coordinated",
        text: "Let the group know before moving away from a shared route or puzzle area."
      },
      {
        title: "Share Discoveries",
        text: "Point out tools, paths, objects, or changes in the environment as soon as you notice them."
      },
      {
        title: "Assign Temporary Roles",
        text: "For tricky moments, one player can observe, another can test interactions, and another can track what changed."
      }
    ]
  },
  puzzles: {
    eyebrow: "Problem Solving",
    title: "Puzzle Solving Guide",
    text:
      "Specific puzzle solutions need stronger verification before they become part of this wiki. For now, the safest guide is a general puzzle-solving framework.",
    tips: [
      "Observe the environment before acting.",
      "Describe what each player can see from their position.",
      "Try different team roles when a challenge seems unclear.",
      "Avoid relying on unverified puzzle answers until reliable sources are available."
    ]
  },
  mistakes: {
    eyebrow: "Before You Play",
    title: "Beginner Mistakes to Avoid",
    items: [
      "Treating Big Walk like a solo-first action game.",
      "Running ahead before the group understands the area.",
      "Ignoring environmental clues during puzzles.",
      "Expecting a complete walkthrough before verified community data exists."
    ]
  },
  note: {
    eyebrow: "Wiki Note",
    title: "Information Still Being Verified",
    text:
      "Complete walkthrough steps, specific puzzle solutions, full map locations, and detailed item databases are not included until reliable official, gameplay, or community sources can verify them."
  }
} as const;
