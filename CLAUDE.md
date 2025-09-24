# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build production version with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 15 application with the App Router using React 19, TypeScript, and Tailwind CSS.

### Project Structure
- **App Router**: Uses `src/app/` directory for pages and layouts
- **Components**: shadcn/ui components configured in `components.json` with aliases:
  - `@/components` for components
  - `@/lib` for utilities
  - `@/components/ui` for UI components
- **Styling**: Tailwind CSS v4 with shadcn/ui "new-york" style
- **Fonts**: Geist Sans and Geist Mono optimized with `next/font`

### Key Configurations
- **TypeScript**: Path mapping configured with `@/*` pointing to `./src/*`
- **shadcn/ui**: Configured with neutral base color, CSS variables, and Lucide icons
- **Turbopack**: Enabled for both dev and build commands for faster compilation

### Utility Functions
- `src/lib/utils.ts` exports a `cn()` function for combining Tailwind classes using clsx and tailwind-merge