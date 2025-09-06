# FreePads Project Requirements

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd freepads
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Dependencies

### Production Dependencies
- `@tailwindcss/postcss`: ^4.1.13 - PostCSS plugin for Tailwind CSS v4
- `react`: ^19.1.1 - React library
- `react-dom`: ^19.1.1 - React DOM for rendering

### Development Dependencies
- `@eslint/js`: ^9.33.0 - ESLint JavaScript configuration
- `@types/react`: ^19.1.10 - TypeScript types for React
- `@types/react-dom`: ^19.1.7 - TypeScript types for React DOM
- `@vitejs/plugin-react`: ^5.0.0 - Vite plugin for React
- `autoprefixer`: ^10.4.21 - PostCSS plugin for adding vendor prefixes
- `eslint`: ^9.33.0 - JavaScript linter
- `eslint-plugin-react-hooks`: ^5.2.0 - ESLint plugin for React Hooks
- `eslint-plugin-react-refresh`: ^0.4.20 - ESLint plugin for React Refresh
- `globals`: ^16.3.0 - Global variables for ESLint
- `postcss`: ^8.5.6 - CSS processing tool
- `tailwindcss`: ^4.1.13 - Utility-first CSS framework
- `vite`: ^7.1.2 - Build tool and dev server

## Available Scripts

- `npm run dev` - Start development server (default port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the root directory for environment-specific configuration. See `.env.example` for available options.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **CSS Framework**: Tailwind CSS v4
- **Linting**: ESLint 9
- **Language**: JavaScript (ESM modules)