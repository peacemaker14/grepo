# GRepo - GitHub Repository Viewer

A Next.js application that allows users to search and view GitHub repositories and their README files in a clean, formatted way.

## Features

- Search GitHub users by username
- View list of repositories for a specific user
- Display repository README content in formatted view
- Built with Next.js for optimal performance and SEO

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18 or higher)
- [Bun](https://bun.sh/) (optional, for faster development)

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
# Using Bun
bun --bun run dev

# Using Node.js
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The application follows a simple user flow:
1. Search for a GitHub username
2. Display the user's repository list
3. View selected repository's README in a formatted view

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- GitHub API - For fetching repository data

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)
- [GitHub REST API](https://docs.github.com/en/rest)
