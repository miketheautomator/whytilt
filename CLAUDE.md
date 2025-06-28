# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 15 marketing website for Tilt built with the App Router and TypeScript. Key architectural decisions:

### Page Structure
- Single-page application with snap-scroll sections in `src/app/page.tsx`
- Each section is a full-height component with snap-start scrolling
- Uses a custom `useTypewriter` hook for animated text display

### Component Organization
- All UI components are in `src/app/components/` with barrel exports via `index.ts`
- Components follow the pattern: HeroSection, WhyDifferentSection, WhatItCanDoSection, ContactSection, PricingSection, Footer

### API Routes
- Contact form submission handled by `/api/contact/route.ts`
- Uses Postmark service for email delivery
- Requires `POSTMARK_SERVER_TOKEN` environment variable

### Styling
- Tailwind CSS with custom scroll behaviors
- Uses Geist fonts (sans and mono variants)
- Full-screen sections with snap scrolling and hidden scrollbars

### Key Dependencies
- `@headlessui/react` - For accessible UI components
- `react-select` - For form select components
- Tailwind CSS v4 - For styling