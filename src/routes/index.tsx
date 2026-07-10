import { createFileRoute } from "@tanstack/react-router";
import flavorMirtilli from "@/assets/flavor-mirtilli.jpg";
import flavorPistacchio from "@/assets/flavor-pistacchio.jpg";
import flavorMango from "@/assets/flavor-mango.jpg";
import shopInterior from "@/assets/coppette-frutti-cadorago.jpg.asset.json";
import coppaCioccolato from "@/assets/coppa-cioccolato.jpg.asset.json";
import chefPortrait from "@/assets/chef-portrait.jpg";
import logo from "@/assets/el-sabor-logo.jpg";
import torFrutti from "@/assets/torte/frutti-tropicali.jpg.asset.json";
import torPe from "@/assets/torte/tanti-auguri-pe.webp.asset.json";
import torMamma from "@/assets/torte/cuore-mamma.webp.asset.json";
import torFrutta from "@/assets/torte/tanti-auguri-frutta.jpg.asset.json";
import torFragole from "@/assets/torte/fragole-passion.webp.asset.json";
import torMinnie from "@/assets/torte/minnie-nicole.webp.asset.json";
import torPopArt from "@/assets/torte/pop-art.webp.asset.json";
import torQuaranta from "@/assets/torte/quaranta-anni.webp.asset.json";
import torCamilla from "@/assets/torte/camilla-kitty.webp.asset.json";

// Le asset .asset.json sono servite dal CDN Lovable a /__l5e/... del progetto corrente.
const cdn = (u: string) => u;

const capolavori = [
  {
    n: "01",
    name: "Tropical Sunrise",
    tag: "Signature",
    note: "Cheesecake al mango con coulis di frutti rossi, meringhe frantumate e bosco di more.",
    meta: ["Mango", "Lamponi", "Meringa"],
    img: cdn(torFrutti.url),
    accent: "from-amber-300 via-rose-400 to-fuchsia-500",
  },
  {
    n: "02",
    name: "Tanti Auguri Pe'",
    tag: "Compleanno",
    note: "Panna azzurro cielo, fragole fresche, cioccolato bianco e fondente, scritta a mano libera.",
    meta: ["Panna", "Fragole", "Cioccolato"],
    img: cdn(torPe.url),
    accent: "from-sky-300 via-cyan-400 to-blue-500",
  },
  {
    n: "03",
    name: "Cuore di Mamma",
    tag: "Festa Mamma",
    note: "Torta a cuore con petali di pansé edibili, gocce di coulis e cornice rosa antico.",
    meta: ["Cuore", "Pansé", "Rosa"],
    img: cdn(torMamma.url),
    accent: "from-rose-300 via-pink-400 to-red-500",
  },
  {
    n: "04",
    name: "Frutteto d'Estate",
    tag: "Stagionale",
    note: "Ghirlanda di frutta fresca su base allo yogurt: anguria, pesche, mirtilli e crumble.",
    meta: ["Anguria", "Pesca", "Crumble"],
    img: cdn(torFrutta.url),
    accent: "from-lime-300 via-emerald-400 to-teal-500",
  },
  {
    n: "05",
    name: "Fragole & Passione",
    tag: "Editor's Pick",
    note: "Nuvole di crema alla fragola, colata di frutti rossi al centro, perle di cioccolato bianco.",
    meta: ["Fragole", "Cioccolato bianco", "Menta"],
    img: cdn(torFragole.url),
    accent: "from-pink-300 via-rose-500 to-red-600",
  },
  {
    n: "06",
    name: "Nicole in Balloon Land",
    tag: "Kids",
    note: "Torta a tema Minnie con arcobaleno di zucchero, cuori pastello e palloncini in cioccolato.",
    meta: ["Fragole", "Arcobaleno", "Palloncini"],
    img: cdn(torMinnie.url),
    accent: "from-fuchsia-300 via-pink-400 to-rose-500",
  },
  {
    n: "07",
    name: "Pop Art Frosting",
    tag: "Bold",
    note: "Pennellate di panna colorata: giallo limone, azzurro cobalto, verde acqua e rosso ciliegia.",
    meta: ["Vaniglia", "Colori", "Pop"],
    img: cdn(torPopArt.url),
    accent: "from-yellow-300 via-cyan-400 to-red-500",
  },
  {
    n: "08",
    name: "Quaranta di Fiaba",
    tag: "Milestone",
    note: "Panna montata a mano, corona di frutti rossi, physalis dorati e viticci di pisello dolce.",
    meta: ["Physalis", "More", "Piselli dolci"],
    img: cdn(torQuaranta.url),
    accent: "from-neutral-200 via-rose-300 to-amber-400",
  },
  {
    n: "09",
    name: "Camilla Kitty Party",
    tag: "Kids",
    note: "Panna soffice a nuvola, Smarties, wafer croccanti e topper Happy Birthday kawaii.",
    meta: ["Smarties", "Wafer", "Kawaii"],
    img: cdn(torCamilla.url),
    accent: "from-violet-300 via-fuchsia-400 to-pink-500",
  },
];


export const Route = createFileRoute("/")({
  component: Index,
});

const flavors = [
  {
    name: "Mirtilli Selvatici",
    tag: "Il Classico",
    tagBg: "bg-primary text-primary-foreground",
    desc: "Bacche raccolte a mano unite a yogurt colato 24 ore. Ricco di antiossidanti naturali.",
    badges: ["SENZA GLUTINE", "BIO"],
    img: flavorMirtilli,
    delay: "0ms",
  },
  {
    name: "Pistacchio di Bronte",
    tag: "Premium",
    tagBg: "bg-pistachio text-foreground",
    desc: "La nostra firma. Cremosità vellutata con pura pasta di pistacchio siciliano.",
    badges: ["LOW SUGAR"],
    img: flavorPistacchio,
    delay: "120ms",
    offset: true,
  },
  {
    name: "Mango & Passion",
    tag: "Energia",
    tagBg: "bg-amber-500 text-foreground",
    desc: "Un'esplosione tropicale per rinfrescare il pomeriggio. Solo frutta fresca frullata al momento.",
    badges: ["VITAMINA C"],
    img: flavorMango,
    delay: "240ms",
  },
];

const marqueeWordsTop = [
  "Yogurt", "Gelato", "Crêpes", "Pistacchio", "Mantecato", "Artigianale",
];
const marqueeWordsBottom = [
  "Cremoso", "Frozen", "Fiordilatte", "Bronte", "Fatto a mano", "Vero",
];
const marqueeMeta = [
  "Dal 1999", "Cadorago — CO", "Latte locale", "Frutta fresca",
  "Mantecato ogni mattina", "Zero scorciatoie", "Senza lattosio", "Bronte DOP",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="El Sabor — Gelateria e Yogurteria dal 1999"
            width={44}
            height={44}
            className="size-11 rounded-lg object-cover ring-1 ring-primary/30"
          />
          <div className="font-display italic text-xl leading-none">
            <span className="text-primary">El Sabor</span>
            <span className="block font-mono not-italic text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
              dal 1999
            </span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#gusti" className="hover:text-primary transition-colors">Il Menù</a>
          <a href="#carta" className="hover:text-primary transition-colors">Gusti Gelato</a>
          <a href="#storia" className="hover:text-primary transition-colors">La Storia</a>
          <a href="#visit" className="hover:text-primary transition-colors">Contatti</a>
        </div>
        <div className="hidden md:block">
          <span className="font-mono text-[10px] text-muted-foreground">
            CADORAGO — CO
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section id="storia" className="relative px-6 py-24 lg:py-40 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 -left-32 size-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -right-32 size-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center animate-fade-up">
          {/* Fancy logo medallion */}
          <div className="relative mx-auto mb-12 w-fit">
            {/* Outer glow */}
            <div className="absolute inset-0 -m-8 rounded-full bg-primary/25 blur-3xl animate-glow pointer-events-none" />
            {/* Rotating dashed ring */}
            <svg
              className="absolute inset-0 -m-6 size-[calc(100%+3rem)] animate-spin-slow pointer-events-none text-primary/70"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                stroke="currentColor"
                strokeWidth="0.4"
                strokeDasharray="1 3"
              />
            </svg>
            {/* Inner counter-rotating ring with orbit dots */}
            <svg
              className="absolute inset-0 -m-2 size-[calc(100%+1rem)] animate-spin-reverse pointer-events-none text-primary"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle cx="50" cy="2" r="1.4" fill="currentColor" />
              <circle cx="50" cy="98" r="1.4" fill="currentColor" />
              <circle cx="2" cy="50" r="1" fill="currentColor" opacity="0.6" />
              <circle cx="98" cy="50" r="1" fill="currentColor" opacity="0.6" />
            </svg>
            {/* Logo itself */}
            <div className="relative size-32 md:size-40 rounded-full p-[3px] bg-gradient-to-br from-primary via-primary/40 to-primary/90 shadow-[0_20px_60px_-10px] shadow-primary/50 animate-float">
              <img
                src={logo}
                alt="El Sabor — Gelateria & Yogurteria dal 1999"
                width={200}
                height={200}
                className="w-full h-full rounded-full object-cover ring-1 ring-background/40"
              />
            </div>
            {/* Est. ribbon */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background border border-primary/60 text-primary font-mono text-[9px] tracking-[0.3em] uppercase px-3 py-1 rounded-full shadow-lg">
              Est · 1999
            </div>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary mb-6">
            ★ Yogurteria · Gelateria · Crêperie ★
          </p>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] text-balance mb-10">
            Yogurt <span className="italic font-normal text-primary">Fresco,</span>
            <br />
            Anima <span className="italic">Artigiana.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
            Dal 1999, trasformiamo il miglior latte locale in un'esperienza
            cremosa. A Cadorago, il gusto incontra il benessere in ogni
            cucchiaiata.
          </p>
          <div className="inline-flex items-center gap-3 mb-12 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/5">
            <span className="text-primary text-lg leading-none">🏆</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/90">
              Miglior yogurt frozen soft — <span className="italic font-display normal-case tracking-normal text-primary">La Provincia</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#visit"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-tighter text-sm rounded-full hover:bg-primary/90 transition-all duration-300 group shadow-lg shadow-primary/20"
            >
              Vieni a Trovarci
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#carta"
              className="inline-flex items-center px-8 py-4 border border-foreground/20 text-foreground font-bold uppercase tracking-tighter text-sm rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              Sfoglia i Gusti
            </a>
          </div>
        </div>
      </section>

      {/* I Nostri Capolavori — Galleria Fotografica */}
      <section id="gusti" className="relative py-20 md:py-28 border-y border-primary/10 overflow-hidden bg-foreground text-background">
        {/* Ambient noise */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, oklch(0.85 0.2 30 / 0.6), transparent 40%), radial-gradient(circle at 80% 90%, oklch(0.75 0.2 320 / 0.5), transparent 45%)" }} aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-background/40 to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute top-5 left-6 font-mono text-[9px] uppercase tracking-[0.3em] text-background/50" aria-hidden="true">Galleria · 9 scatti</div>
        <div className="pointer-events-none absolute top-5 right-6 font-mono text-[9px] uppercase tracking-[0.3em] text-background/50" aria-hidden="true">El Sabor · Cadorago</div>

        {/* Header */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center mb-10 md:mb-14">
            {/* Decorative aperture disk */}
            <div className="md:col-span-4 flex md:justify-start justify-center">
              <div className="relative size-32 md:size-40">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-background/20 animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border border-background/10" />
                <div className="absolute inset-8 rounded-full bg-primary/20" />
                <div className="absolute inset-[45%] rounded-full bg-primary" />
              </div>
            </div>
            <div className="md:col-span-8 text-center md:text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary mb-3 flex items-center gap-3 justify-center md:justify-start">
                <span className="inline-block w-6 h-px bg-primary" />
                La Galleria delle Torte
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight text-background">
                I Nostri <span className="italic text-primary">Capolavori.</span>
              </h2>
              <p className="mt-4 text-background/70 text-sm md:text-base leading-relaxed max-w-xl">
                Nove scatti di zucchero e panna. Scorri la galleria,
                <span className="italic font-display text-primary"> scegli la torta che ti ispira.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Marquee — photo names ticker */}
        <div className="relative overflow-hidden py-3 border-y border-background/10 bg-background/5 mb-10 md:mb-14">
          <div className="flex animate-marquee whitespace-nowrap">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-8 items-center px-4 shrink-0">
                {capolavori.map((c, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-8 shrink-0">
                    <span className="font-display italic text-2xl md:text-3xl text-background/90">
                      {c.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                      {c.tag}
                    </span>
                    <span className="inline-block size-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Photo gallery — horizontal snap scroller */}
        <div className="relative">
          <div
            className="flex gap-5 md:gap-7 overflow-x-auto overflow-y-hidden snap-x pb-8 px-6 md:px-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ touchAction: "pan-x", WebkitOverflowScrolling: "touch", overscrollBehaviorX: "contain" }}
          >
            {capolavori.map((c, idx) => (
              <article
                key={c.n}
                className="group relative shrink-0 snap-center w-[78vw] sm:w-[62vw] md:w-[420px] lg:w-[460px]"
                style={{ transform: `rotate(${idx % 2 === 0 ? "-1.2deg" : "1.2deg"})` }}
              >
                {/* Photo # + tag */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="font-mono font-bold text-4xl md:text-5xl leading-none text-background/25 select-none">
                    {c.n}
                  </span>
                  <span className="font-mono text-[9px] px-2 py-1 border border-primary/60 text-primary uppercase tracking-[0.25em] bg-background/5 backdrop-blur-sm">
                    {c.tag}
                  </span>
                </div>

                {/* Polaroid card */}
                <div className="relative rounded-2xl overflow-hidden bg-background/5 ring-1 ring-background/10 shadow-2xl shadow-black/50 transition-transform duration-700 ease-out-expo group-hover:-translate-y-2 group-hover:rotate-0">
                  {/* Gradient glow */}
                  <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${c.accent} opacity-0 blur-2xl group-hover:opacity-40 transition-opacity duration-700`} aria-hidden="true" />

                  {/* Photo */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-110"
                    />
                    {/* Shine sweep on hover */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <div className="absolute top-0 -left-1/2 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                    </div>
                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/30 to-transparent" aria-hidden="true" />

                    {/* Overlay caption */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <h3 className="font-display italic text-2xl md:text-3xl leading-tight text-background">
                        {c.name}
                      </h3>
                    </div>
                  </div>

                  {/* Photo meta */}
                  <div className="p-5 md:p-6 bg-background/[0.04]">
                    <p className="text-[13px] md:text-sm leading-relaxed text-background/80 mb-4">
                      {c.note}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.meta.map((m) => (
                        <span
                          key={m}
                          className="font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-background/15 text-background/70 hover:border-primary hover:text-primary transition-colors"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Trailing spacer */}
            <div className="shrink-0 w-6 md:w-16" aria-hidden="true" />
          </div>

          {/* Scroll hint */}
          <div className="mt-2 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-background/50">
            <span className="inline-block w-8 h-px bg-background/30" />
            Scorri la galleria
            <span className="inline-block w-8 h-px bg-background/30" />
          </div>
        </div>

        {/* Footer note */}
        <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-between gap-4 pt-5 border-t border-background/10">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-background/50">
            Torte su misura · Occasioni speciali
          </p>
          <a
            href="#visit"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary hover:text-background transition-colors"
          >
            Ordina la tua torta
            <span className="inline-block w-6 h-px bg-primary group-hover:w-10 transition-all" />
          </a>
        </div>
      </section>




      {/* Manifesto Marquee */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* Row 1 — big words, scroll left */}
        <div className="overflow-hidden whitespace-nowrap py-6 border-b border-primary-foreground/10">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-14 items-center px-7 shrink-0">
                {marqueeWordsTop.map((w, i) => (
                  <span key={`t-${k}-${i}`} className="flex items-center gap-14 shrink-0">
                    <span className="font-display italic text-5xl md:text-7xl leading-none text-background">
                      {w}
                    </span>
                    <span
                      className={`inline-block size-2.5 rounded-full shrink-0 ${
                        i % 2 === 0 ? "bg-pistachio" : "bg-accent"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — meta chips, scroll right (counter) */}
        <div className="overflow-hidden whitespace-nowrap bg-background text-primary py-3 border-y border-primary/10">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-6 items-center px-4 shrink-0">
                {marqueeMeta.map((m, i) => (
                  <span key={`m-${k}-${i}`} className="flex items-center gap-6 shrink-0">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                      {m}
                    </span>
                    <span className="inline-block size-1.5 rounded-full bg-pistachio shrink-0" aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 — big words, scroll left slow */}
        <div className="overflow-hidden whitespace-nowrap py-6 border-t border-primary-foreground/10">
          <div className="flex animate-marquee-slow hover:[animation-play-state:paused]">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-14 items-center px-7 shrink-0">
                {marqueeWordsBottom.map((w, i) => (
                  <span key={`b-${k}-${i}`} className="flex items-center gap-14 shrink-0">
                    <span className="font-display italic text-5xl md:text-7xl leading-none text-background">
                      {w}
                    </span>
                    <span
                      className={`inline-block size-2.5 rounded-full shrink-0 ${
                        i % 2 === 0 ? "bg-accent" : "bg-pistachio"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Carta dei Gusti — Gelato */}
      <section id="carta" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                La Carta — Gelato Artigianale
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
                Trenta gusti,
                <br />
                <span className="italic text-primary">una sola tentazione.</span>
              </h2>
            </div>
            <p className="md:col-span-4 text-muted-foreground max-w-sm text-pretty">
              Mantecati ogni mattina. Dal classico al peccato, passando per i
              senza lattosio. Scegli il tuo mood.
            </p>
            <div className="md:col-span-3 flex md:justify-end">
              <div className="relative w-36 h-48 md:w-44 md:h-60 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 ring-1 ring-foreground/10">
                <img
                  src={cdn(coppaCioccolato.url)}
                  alt="Coppa di yogurt con cioccolato in preparazione"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {[
            {
              cat: "Classici Cremosi",
              n: "01",
              items: [
                "Fiordilatte",
                "Stracciatella",
                "Vaniglia",
                "Zabaione e Nutella",
                "Variegato Amarena",
                "Variegato Nutella",
              ],
            },
            {
              cat: "Peccati di Gola",
              n: "02",
              items: [
                "Nutella",
                "Biscotto Sotus",
                "Kinder Bueno",
                "Cioccolato al Latte",
                "Cioccolato Fondente",
                "Caramello Salato",
                "Coffè",
                "Liquirizia",
                "Puffo",
              ],
            },
            {
              cat: "Nocciolati & Signature",
              n: "03",
              items: [
                "Pistacchio",
                "Nocciola",
                "Cocco",
                "Pastel de Nata",
                "Cointreau",
                "Macaron al Limone",
              ],
            },
            {
              cat: "Frutta & Freschezza",
              n: "04",
              items: [
                "Yogurt e Mango",
                "Limone",
                "Fragola",
                "Frutti di Bosco",
                "Mango",
                "Uva Fragola",
              ],
            },
            {
              cat: "Senza Lattosio",
              n: "05",
              items: ["Stracciatella s/lattosio", "Caramello Salato s/latte"],
            },
          ].map((group, gi) => (
            <div
              key={group.cat}
              className="grid md:grid-cols-[200px_1fr] gap-8 py-10 border-t border-foreground/10 last:border-b group"
            >
              <div>
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  — {group.n}
                </span>
                <h3 className="font-display italic text-2xl md:text-3xl mt-2 group-hover:text-primary transition-colors">
                  {group.cat}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-x-3 gap-y-4 items-center">
                {group.items.map((flavor, i) => (
                  <li
                    key={flavor}
                    className="animate-fade-up"
                    style={{ animationDelay: `${gi * 60 + i * 40}ms` }}
                  >
                    <span className="inline-block font-display text-xl md:text-2xl leading-none hover:text-primary hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                      {flavor}
                    </span>
                    {i < group.items.length - 1 && (
                      <span className="ml-3 text-primary/40 font-display text-xl select-none">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">
            La carta ruota con la stagione — chiedi la selezione del giorno
          </p>
        </div>
      </section>

      {/* Reviews cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            La voce dei nostri <span className="italic">clienti</span>
          </h2>
          <p className="text-muted-foreground max-w-md mb-16">
            Oltre vent'anni di sorrisi, cucchiaini e ritorni.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Finalmente un posto dove mangiare sia un gelato molto buono sia uno yogurt fantastico! Ho imparato ad apprezzarlo qui.",
                a: "Marta",
              },
              {
                q: "Ogni tanto per la pausa pranzo mi concedo uno yogurt preparato secondo i miei gusti. Molto buono, a presto!",
                a: "Luca",
              },
              {
                q: "Complimenti alla padrona di casa, sempre gentile. Il gelato è buonissimo e lo yogurt una bomba. Consigliato ai veri golosi!",
                a: "Giulia",
              },
            ].map((r) => (
              <figure
                key={r.a}
                className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-primary text-lg mb-4 tracking-widest">
                  ★★★★★
                </div>
                <blockquote className="font-display italic text-xl leading-snug mb-6 text-foreground">
                  “{r.q}”
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  — {r.a}, cliente
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Visit */}
      {/* Chef / Founder */}
      <section className="px-6 py-24 bg-card">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 relative">
            <img
              src={chefPortrait}
              alt="Chantal, la chef e anima di El Sabor"
              width={900}
              height={1100}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover object-[55%_25%] rounded-[40px] shadow-xl"
            />
            <div className="absolute -top-6 -left-6 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg rotate-[-4deg]">
              MANAGER
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Dietro il bancone
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              Chantal, <span className="italic">la mano</span>
              <br />
              dietro ogni cucchiaiata.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              Da oltre vent'anni sceglie il latte, seleziona la frutta e prepara
              ogni yogurt con la stessa cura del primo giorno. Un sorriso, una
              ricetta personalizzata, e la certezza che qui la qualità non è mai
              una promessa: è un'abitudine.
            </p>
            <blockquote className="font-display italic text-2xl text-foreground border-l-2 border-primary pl-6">
              “Il segreto è semplice: ingredienti veri, tempo giusto, zero
              scorciatoie.”
            </blockquote>
          </div>
        </div>
      </section>

      <section id="visit" className="px-6 py-24">
        <div className="max-w-7xl mx-auto bg-card rounded-[40px] border border-primary/15 p-8 lg:p-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">
              Vieni a trovarci
              <br />
              <span className="italic">nel cuore di Cadorago</span>
            </h2>
            <div className="space-y-6">
            {[
              {
                n: "01",
                l: "Indirizzo",
                v: "Via Goffredo Mameli 2/D, 22071 Cadorago (CO)",
              },
              { n: "02", l: "Orari", v: "Tutti i giorni: 12:00 – 23:30" },
            ].map((row) => (
                <div key={row.n} className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-background flex items-center justify-center border border-border font-mono text-xs shrink-0">
                    {row.n}
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground mb-1">
                      {row.l}
                    </p>
                    <p className="text-lg">{row.v}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl shrink-0 shadow-md animate-pulse">
                  🍨
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                    Novità · Torte & Vaschette da asporto
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3">
                    Vuoi una <span className="italic">torta</span> o una <span className="italic">vaschetta di gelato</span> da portare a casa?
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Prepariamo su ordinazione torte personalizzate e vaschette di gelato artigianale nei gusti che preferisci. Chiama e ordina la tua.
                  </p>
                  <a
                    href="tel:+39031904646"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    📞 Ordina al 031 904646
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="relative">
            <img
              src={cdn(shopInterior.url)}
              alt="Interno del negozio El Sabor a Cadorago"
              width={800}
              height={600}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-sm"
            />
            <div className="absolute -bottom-8 -right-8 p-8 bg-primary text-primary-foreground rounded-full size-48 flex flex-col items-center justify-center text-center rotate-12 shadow-xl">
              <span className="text-xs font-mono uppercase">Qualità dal</span>
              <span className="text-4xl font-display italic mt-1">1999</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <footer className="py-24 text-center px-6 border-t border-border">
        <p className="font-display text-4xl lg:text-6xl mb-12 max-w-2xl mx-auto leading-tight">
          Il vero piacere non aspetta.
          <br />
          <span className="italic">Ti aspettiamo in negozio.</span>
        </p>
        <a
          href="tel:+39031904646"
          className="inline-block px-12 py-6 bg-foreground text-background font-bold rounded-full text-lg md:text-xl hover:scale-105 hover:bg-primary transition-all duration-300"
        >
          Chiama per Informazioni
        </a>
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-xs font-mono uppercase tracking-widest">
          <a
            href="https://www.instagram.com/elsabor_layogurteria/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/elsaborlayogurteria/photos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            Facebook
          </a>
          <a
            href="tel:+39031904646"
            className="px-5 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            031 904646
          </a>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
          <div className="font-display italic text-xl text-primary">El Sabor</div>
          <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase text-center space-y-1">
            <div>El Sabor La Yogurteria — P.IVA 04117410135</div>
            <div>© {new Date().getFullYear()} El Sabor Cadorago — Yogurteria · Gelateria · Crêperie dal 1999</div>
          </div>
        </div>


      </footer>
    </div>
  );
}
