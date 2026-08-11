# Big Walk Homepage Development Material


# 1. Official Sources


## Official Website

https://bigwalk.game/


Purpose:

Provides official game introduction, release information, screenshots, and promotional materials.


## Steam Store Page

https://store.steampowered.com/app/1478500/Big_Walk/


Purpose:

Provides official game description, gameplay information, platform information, and purchase information.


## Official FAQ

https://bigwalk.game/faq/


Purpose:

Provides multiplayer information, player count, and gameplay details.


## Official Trailer

Big Walk - Official Gameplay Trailer

https://www.youtube.com/watch?v=_n7e0hWmTvc


Purpose:

Provides official gameplay presentation and visual materials.



# 2. Website Homepage JSON Material


```json
{
  "home": {
    "meta": {
      "title": "Big Walk Wiki — Guide, Multiplayer, Puzzles",
      "description": "Explore Big Walk guides, multiplayer features, puzzle solutions, gameplay tips, and everything about this cooperative adventure game."
    },

    "hero": {
      "eyebrow": "Fan-Made Community Wiki",
      "title": "Big Walk",
      "description": "Big Walk is a cooperative multiplayer adventure game about teamwork, communication, and exploration. Walk through a huge open world with friends, solve puzzles together, and discover new ways to interact.",
      "stats": [
        "Launched 2026",
        "Developer: House House",
        "2-12 Player Cooperative",
        "Steam + PS5 + Switch 2",
        "Adventure Puzzle Game"
      ],
      "primaryCta": "Start Beginner Guide",
      "secondaryCta": "Explore Multiplayer",
      "tertiaryCta": "Solve Puzzles",
      "videoLabel": "Official media"
    },


    "start": {
      "eyebrow": "Start Here",
      "title": "Your Big Walk Journey",
      "cards": [
        {
          "number": "1",
          "title": "Beginner Guide",
          "description": "Learn the basic gameplay, controls, and first steps for exploring Big Walk."
        },
        {
          "number": "2",
          "title": "Multiplayer Guide",
          "description": "Learn how cooperative gameplay works and how to play with friends."
        },
        {
          "number": "3",
          "title": "Puzzle Solutions",
          "description": "Find solutions and tips for solving challenges during your adventure."
        },
        {
          "number": "4",
          "title": "World Exploration",
          "description": "Discover locations, hidden areas, and exploration tips."
        }
      ]
    },


    "aboutGame": {
      "title": "What is Big Walk?",

      "paragraphs": [
        "Big Walk is a cooperative multiplayer adventure game developed by House House, the creators of Untitled Goose Game. Players explore a large open world together while solving puzzles and completing challenges.",
        "The game focuses on communication and teamwork. Players use voice chat, tools, and creative solutions to navigate the world and create memorable moments with friends."
      ],

      "stats": [
        {
          "label": "Developer",
          "value": "House House"
        },
        {
          "label": "Publisher",
          "value": "Panic"
        },
        {
          "label": "Platform",
          "value": "Steam, PlayStation 5, Nintendo Switch 2"
        },
        {
          "label": "Genre",
          "value": "Cooperative Adventure Puzzle"
        },
        {
          "label": "Players",
          "value": "2-12 Players"
        },
        {
          "label": "Core Feature",
          "value": "Communication and Teamwork"
        }
      ],

      "cta": "Explore All Guides"
    },


    "finalCta": {
      "title": "Ready to Master Big Walk?",
      "description": "From your first adventure to solving difficult puzzles with friends, our Big Walk wiki provides guides, tips, and useful information.",
      "primary": "Read the Beginner Guide",
      "secondary": "Play Big Walk"
    }
  },


  "footer": {
    "aboutTitle": "Big Walk Wiki",

    "about": "Big Walk Wiki is an independent fan-made guide website covering gameplay guides, multiplayer tips, puzzle solutions, and useful information for players.",

    "description": "A cooperative adventure game about exploring, communicating, and solving puzzles with friends.",

    "playGame": "Play Big Walk",

    "officialDiscord": "Official Discord",

    "officialYoutube": "Official YouTube",

    "communityTool": "Puzzle Guide",

    "privacyPolicy": "Privacy Policy",

    "termsOfService": "Terms of Service"
  },


  "metadata": {
    "title": "Big Walk Wiki — Guides, Multiplayer, Puzzles",

    "description": "Big Walk Wiki provides gameplay guides, multiplayer tips, puzzle solutions, and exploration information for players.",

    "keywords": "Big Walk, Big Walk guide, Big Walk multiplayer, Big Walk puzzles"
  }
}
```


# 3. Website Theme Color Recommendation


## Overall Style

Big Walk is a relaxing cooperative exploration game.

Recommended style:

- Nature
- Adventure
- Friendly
- Relaxed


Default:

Light theme recommended.


```css
/* Navigation theme - Light Theme */

--nav-theme: 142 45% 42%;
--nav-theme-light: 142 45% 55%;


/* Navigation theme - Dark Theme */

--nav-theme: 142 45% 42%;
--nav-theme-light: 142 45% 55%;
```



# 4. Multi-language Recommendation


Based on expected international player demand:


## Priority 1

English

Reason:

Main gaming market language.

Keywords:

Big Walk guide

Big Walk multiplayer


---

## Priority 2

Japanese

Reason:

Strong console gaming market and high interest in cooperative games.


---

## Priority 3

German

Reason:

Large European PC gaming market.


---

## Priority 4

French

Reason:

Large European gaming audience.


Recommended languages:

1. English
2. Japanese
3. German
4. French
