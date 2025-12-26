# 🌍 World Explorer (React Router + Vite)

A modern, production-ready React application for exploring countries around the world. Built with a focus on **clean architecture, UX polish, and real-world data handling**.

This project demonstrates how to structure a React Router (v7) app using services, hooks, and components while handling loading states, caching, errors, and performance optimizations properly.

**Live Demo:** https://world-explorer-bice.vercel.app/

---

## ✨ Features

- Browse all countries
- Search countries by name (debounced)
- Filter by continent
- Detailed country pages
- Skeleton loading states
- Error and “not found” handling
- Accessible UI components
- Scroll-to-top helper for long pages

---

## 🧠 Technical Highlights

- **React Router (Data Router)**
  - Client loaders for data fetching
  - Route-level loading states

- **TanStack Query**
  - Client-side caching
  - Background refetching
  - Hover-based prefetching
  - Retry & error handling

- **TypeScript**
  - Strongly typed services and hooks
  - Shared domain models

- **Performance & UX**
  - Skeleton loaders (route-level)
  - Debounced search
  - Prefetch on hover
  - Smooth transitions

- **Testing**
  - Unit tests for services
  - Unit tests for custom hooks
  - Focus on logic (not brittle UI snapshots)

---

## 🏗 Project Structure (actual)

```
Dockerfile
package.json
react-router.config.ts
README.md
tsconfig.json
vite.config.ts
vitest.config.ts
vitest.setup.ts
app/
  app.css
  root.tsx
  routes.ts
  components/
    footer.tsx
    navbar.tsx
    countries/
      Card.tsx
      Filters.tsx
      Grid.tsx
      Header.tsx
      SkeletonGrid.tsx
      Status.tsx
    country/
      DetailItem.tsx
      Details.tsx
      Flag.tsx
      Header.tsx
      Languages.tsx
      Layout.tsx
      Navigation.tsx
      QuickStats.tsx
      SkeletonDetail.tsx
      States.tsx
    ui/
      GlobalLoadingBar.tsx
      ScrollToTopButton.tsx
      Shimmer.tsx
      Skeleton.tsx
  hooks/
    useCountryDetails.ts
    useDebounce.test.ts
    useDebounce.ts
  routes/
    about.tsx
    countries.tsx
    country.tsx
    home.tsx
  services/
    api.test.ts
    api.ts
    country.test.ts
    country.ts
  types/
    country.ts
    forCountry.ts
build/
  client/
    assets/
  server/
    index.js
public/

```

**Design principle:**
UI components are kept simple, while data fetching and side effects live in hooks and services.

---

## 🤔 Design Decisions

- **Why no infinite scroll?**
  The dataset is small (~250 countries). Loading all data upfront enables fast client-side filtering and search with simpler logic and better UX.

- **Why TanStack Query?**
  It cleanly handles caching, retries, background updates, and prefetching without polluting UI components.

- **Why skeleton loaders?**
  Skeletons provide better perceived performance than spinners during route-level loading.

---

## 🧪 Testing

Tests are colocated with source files and written using **Vitest**.

Covered areas:
- API service functions
- Custom hooks (e.g. debounce logic)

UI snapshot testing is intentionally avoided in favor of stable logic-level tests.

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

---
