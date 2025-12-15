import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://corseposemenuiserie.fr', // Votre domaine public, utilisé pour générer les sitemaps et les URL canoniques.
  sitemap: true, // Génère le sitemap (mettre "false" pour le désactiver)
  integrations: [sitemap(), mdx(), lit(), icon()], // Ajoute les intégrations nécessaires au thème
});
