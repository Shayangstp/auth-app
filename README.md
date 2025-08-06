Collecting workspace information```md

# Auth App

This is a [Next.js](https://nextjs.org/) authentication app

## Features

- Next.js 14 App Router
- Authentication context with React Context API
- Phone number validation using [zod](https://zod.dev/)
- Form handling with [react-hook-form](https://react-hook-form.com/)
- Modular SCSS styling
- Component-based UI (Button, Input, Typography, etc.)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the app by modifying files in the `src/app` directory. The page auto-updates as you edit the file.

## Project Structure

```
src/
  app/           # App routes and layout
  components/    # Reusable UI components
  context/       # React context providers
  features/      # Feature modules (auth, dashboard, etc.)
  lib/           # Utilities and validation
  styles/        # SCSS styles and variables
  types/         # TypeScript types
```

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Zod Documentation](https://zod.dev/)
- [React Hook Form Docs](https://react-hook-form.com/)
