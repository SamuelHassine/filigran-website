# Filigran Website

Modern rebuild of filigran.io powered by Vite, React 18,
TypeScript, Tailwind CSS, shadcn/ui, Radix primitives and TanStack Query. The
goal of this project is to faithfully mirror Filigran's public website while
providing a clean developer experience and a component-driven architecture.

## Tech Stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/) primitives
- [TanStack Query](https://tanstack.com/query) for async data
- [React Router](https://reactrouter.com/) for multi-page navigation

## Getting Started

```bash
git clone <repo-url>
cd filigran-website
npm install
npm run dev
```

The site is available at `http://localhost:5173`. The development server
supports hot-module reloading, TypeScript type-checking and Tailwind JIT styles.

### Available Scripts

| Command          | Description                                      |
| ---------------- | ------------------------------------------------ |
| `npm run dev`    | Start the Vite development server                |
| `npm run build`  | Create a production build in `dist/`             |
| `npm run preview`| Preview the production build locally             |
| `npm run lint`   | Run ESLint across the codebase                   |

## Environment Variables

| Variable              | Purpose                                                                 | Default |
| --------------------- | ----------------------------------------------------------------------- | ------- |
| `VITE_FORM_ENDPOINT`  | Optional endpoint used to POST lead-gen / demo forms (Formspree, etc.). | none    |

If the endpoint is omitted the forms will gracefully simulate a submission so
the UX still works in development.

## Project Structure

```
src/
├── assets/          # Brand assets (logos, badges…)
├── components/      # Shared UI elements and sections
├── data/            # Structured content (use cases, offerings…)
├── hooks/           # Reusable hooks
├── lib/             # Utilities (forms, WordPress helpers…)
├── pages/           # Route-level components
└── index.css        # Tailwind layer + custom styles
```

## Styling Notes

- Design tokens and animations are defined in `index.css` and Tailwind config.
- `.wp-content` utility classes style WordPress-sourced HTML such as blog posts.
- Buttons, forms and dropdowns re-use shadcn/ui primitives for consistency.

## Deployment

1. `npm run build`
2. Deploy the resulting `dist/` directory (Vercel, Netlify, Cloudflare Pages…).

Remember to surface `VITE_FORM_ENDPOINT` in your hosting provider if you want
forms to POST to a real backend/service.

## Contributing

1. Create a feature branch
2. Implement your changes with tests/QA as needed
3. Run `npm run lint && npm run build`
4. Submit a PR

## License

Copyright © Filigran. All rights reserved.
