// @ts-check
import { defineConfig } from 'astro/config';

// BASE is set by the GitHub Pages workflow because the site is served from a subfolder there.
export default defineConfig({ base: process.env.BASE || '/' });
