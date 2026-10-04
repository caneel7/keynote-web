# Keynote web


## Tech Stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) (client-side rendered SPA)
- [TanStack Router](https://tanstack.com/router) for routing

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the dev server with HMR     |
| `npm run build`   | Type-check and build for prod     |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run ESLint                        |

## Project Structure

```
src/
  features/        # One folder per feature (components, routes, logic)
    landing/
    auth/
  router.ts        # Central route definitions
  main.tsx         # App entry point
```

Each feature is self-contained. To add a new one, create a folder under `src/features/` and register its routes in `src/router.ts`.

## Routing

All routes are defined in `src/router.ts` using TanStack Router. The router instance is registered globally, so `Link`, `useNavigate`, and route params are fully type-safe.

## Environment Variables

Vite only exposes variables prefixed with `VITE_`:

```bash
VITE_API_URL=http://localhost:8080
```

Copy `.env.example` to `.env` and adjust as needed.