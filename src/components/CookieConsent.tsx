import { useEffect, useState } from "react";

const STORAGE_KEY = "elsabor.cookie-consent.v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage unavailable, ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Informativa sui cookie"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-2xl border border-foreground/10 bg-background/95 p-4 shadow-2xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <div className="flex-1 text-sm leading-relaxed text-foreground/90">
          <p className="font-display text-base text-primary mb-1">Cookie & Privacy</p>
          <p className="text-[13px] text-muted-foreground">
            Usiamo solo cookie tecnici essenziali per far funzionare il sito. Nessun tracker
            pubblicitario, nessun profilo di terze parti. Continuando accetti la nostra
            gestione minima dei dati.
          </p>
        </div>
        <div className="flex shrink-0 gap-2 sm:flex-col md:flex-row">
          <button
            type="button"
            onClick={() => persist("rejected")}
            className="flex-1 rounded-full border border-foreground/20 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-foreground/80 transition-colors hover:border-foreground/40 sm:flex-none"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="flex-1 rounded-full bg-primary px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 sm:flex-none"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;