# Changelog

This file documents changes to Lum using the
[Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) format.

## [Unreleased]

### Added

- Initial project setup with SvelteKit, Svelte, TypeScript, Vite, and pnpm, including a favicon, `robots.txt`, and development and build instructions.
- MIT license.
- Tailwind CSS integration through the Vite plugin and a global stylesheet.
- shadcn-svelte configuration with base styles, dark mode support, animations via `tw-animate-css`, Lucide icons, and utilities for component classes and variants.
- Rosé Pine Dawn and Rosé Pine palettes for the light and dark themes.
- Oxfmt and Oxlint, with `fmt` and `lint` scripts.
- Add the `NoWeather.svelte` to indicate that there are no saved cities.
- Use `NoWeather` component on the default page.

### Changed

- Replaced the welcome page with a “Ciudades” heading in Manrope, a placeholder content area, and a “Barra de búsqueda” label in the footer.
- Updated the root layout to use a full-height main container with responsive spacing and padding.
- Made Sora the default site font.
- Moved the favicon and shared utilities to `src/lib/share/` and updated the shadcn-svelte aliases for components, utilities, UI components, and hooks.
- Applied Oxfmt formatting to configuration files, source code, and global styles.

### Removed

- Removed the unused `src/lib/index.ts` file.

### Fixed

- Corrected a missing font import by loading Manrope and Sora from Fontsource.
- Updated global text and background colors to use the active Rosé Pine palette’s `--rp-text` and `--rp-base` tokens.
- Updated the favicon import in the root layout after moving it to the shared assets directory.
