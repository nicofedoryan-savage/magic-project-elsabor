import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://magic-project-elsabor.vercel.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const paths: Array<{ p: string; pri: string }> = [
          { p: "/", pri: "1.0" },
          { p: "/#gusti", pri: "0.9" },
          { p: "/#carta", pri: "0.9" },
          { p: "/#storia", pri: "0.8" },
          { p: "/#visit", pri: "0.8" },
          { p: "/privacy", pri: "0.3" },
          { p: "/cookie", pri: "0.3" },
        ];
        const urls = paths.map(
          (u) =>
            `  <url>\n    <loc>${BASE_URL}${u.p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${u.pri}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});