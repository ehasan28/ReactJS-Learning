# ReactJS Learning

A personal React learning repository built with Vite. This repo contains a set of small practice projects focused on component reuse, props, state management, form handling, API calls, local storage concepts, and responsive UI building.

## Projects

### 1. Card Project
Path: `01-Card-Project`

- Renders a collection of job cards from array data
- Focuses on reusable components, props, and list rendering with `map()`
- Uses `lucide-react` for icons

### 2. UI Project
Path: `02-UI-Project`

- A reusable multi-section interface driven by structured user data
- Focuses on component composition, layout building, and prop-based rendering
- Uses Tailwind CSS and `lucide-react`

### 3. Form Handling
Path: `03-Form-Handling`

- A simple controlled form example using `useState`
- Focuses on input handling, validation, form submission, and resetting state

### 4. Note App
Path: `04-Note-App`

- A small notes application for creating and deleting notes
- Focuses on managing arrays in state, rendering dynamic note lists, and event handling
- Styled with Tailwind CSS

### 5. Local Storage and API Practice
Path: `05-localstorage-api`

- Demonstrates fetching image metadata from the Picsum API using Axios
- Includes local storage practice code for saving, reading, and removing values
- Focuses on async API calls, updating state with fetched data, and browser storage basics

### 6. Gallery Project
Path: `06-Gallery-Project`

- A responsive image gallery powered by the Picsum API
- Supports paginated browsing with previous and next controls
- Focuses on `useEffect`, async data fetching with Axios, state-driven re-rendering, and responsive layouts with Tailwind CSS

## Tech Stack

- React 19
- Vite
- JavaScript (ES Modules)
- CSS
- Tailwind CSS v4
- Axios
- Lucide React

## Getting Started

Each folder is a separate Vite app. To run any project:

```bash
cd 01-Card-Project
npm install
npm run dev
```

To build and preview:

```bash
npm run build
npm run preview
```

## Folder Structure

```text
ReactJS-Learning/
├── 01-Card-Project/
├── 02-UI-Project/
├── 03-Form-Handling/
├── 04-Note-App/
├── 05-localstorage-api/
├── 06-Gallery-Project/
└── README.md
```

## Learning Goals

- Understand React fundamentals through small focused projects
- Practice building reusable components and passing props
- Learn how to manage state with `useState`
- Handle forms and user input in React
- Work with arrays and render dynamic UI
- Fetch external data with Axios
- Explore `useEffect` for side effects and API calls
- Practice responsive styling with Tailwind CSS
- Build confidence by creating separate mini projects

## Notes

- Each project manages its own dependencies
- Some project-level README files may still contain the default Vite template
- The repo is organized as a learning playground, so each app focuses on a different React concept

## Author

Created as part of an ongoing React learning journey.
