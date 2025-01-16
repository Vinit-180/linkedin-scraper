# LinkedIn Scraper
![Node.js](https://img.shields.io/badge/node.js-v19.x-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-v5.x-blue)
![MongoDB](https://img.shields.io/badge/mongodb-v6.x-green)

## Overview

LinkedIn Scraper is an automation tool that enables users to scrape data from LinkedIn posts by simply pasting the LinkedIn post URL. The tool extracts the data from the comments section of the post and stores it in a MongoDB database for further use. This application is built with TypeScript, Node.js, and MongoDB.

## Features

- **LinkedIn Post Scraping**: Extract data from LinkedIn post comments effortlessly.
- **Automation**: Process multiple posts with ease.
- **Storage**: Save scraped data in a structured MongoDB database.
- **TypeScript Support**: Built with TypeScript for type safety and maintainable code.

## Tech Stack

- **Frontend**: Next.js with TypeScript and Shadcn UI (with Tailwind CSS).
- **Backend**: Node.js with TypeScript.
- **Database**: MongoDB.
- **Libraries/Modules**:
  - `puppeteer`: For web scraping.
  - `mongoose`: For MongoDB interactions.


## Prerequisites

Ensure you have the following installed:

- Node.js (v18.x or higher)
- MongoDB (v6.x or higher)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Vinit-180/linkedin-scraper.git
   cd linkedin-scraper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     NEXT_PUBLIC_API_URL='http://localhost:9000/api/v1/'
     ```

4. Run the scraper:
   ```bash
   npm run dev
   ```

## Usage
1. You need to do the login and needs to activate your profile.
1. Paste the LinkedIn profileURN and your session key into the the modal.
2. The scraper will log in to LinkedIn via your session key, extract the posts in which the user post the comments and save them to the MongoDB database.
3. View the data in dashboard.

## Folder Structure

```
└── vinit-180-linkedin-scraper/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── public/
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── (home)/
        │   │   └── page.tsx
        │   ├── dashboard/
        │   │   └── page.tsx
        │   ├── login/
        │   │   └── page.tsx
        │   ├── posts/
        │   │   └── page.tsx
        │   ├── profile/
        │   │   └── page.tsx
        │   └── signup/
        │       └── page.tsx
        ├── components/
        │   ├── Form/
        │   │   └── page.tsx
        │   ├── Modal/
        │   │   └── page.tsx
        │   ├── Navbar/
        │   │   └── page.tsx
        │   └── ui/
        │       ├── animated-tooltip.tsx
        │       ├── avatar.tsx
        │       ├── button.tsx
        │       ├── card.tsx
        │       ├── dropdown-menu.tsx
        │       ├── input.tsx
        │       ├── label.tsx
        │       └── skeleton.tsx
        └── lib/
            └── utils.ts
```