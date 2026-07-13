import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — El Sabor Cadorago" },
      { name: "description", content: "Informativa sui cookie di El Sabor La Yogurteria a Cadorago." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://magic-project-elsabor.vercel.app/cookie" }],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary hover:underline">← Torna alla home</a>
        <h1 className="font-display text-4xl md:text-5xl mt-6 mb-6">Cookie Policy</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">Contenuto in aggiornamento.</p>
      </div>
    </main>
  );
}