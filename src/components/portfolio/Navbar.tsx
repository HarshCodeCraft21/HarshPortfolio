import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
      const y = window.scrollY + 120;
      let current = "home";
      for (const s of sections) {
        if (s.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`max-w-6xl mx-auto px-6 md:px-8 transition-all duration-500 ${
        scrolled ? "glass rounded-full" : ""
      }`}>
        <div className="flex items-center justify-between h-12">
          <button onClick={() => go("home")} className="font-serif text-4xl font-semibold text-foreground">
            Portfolio<span className="text-primary">.</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`nav-link ${active === l.id ? "active" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => go("contact")}
            className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-sm"
          >
            Let's talk
          </button>
          <button className="md:hidden p-2 text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-6 mt-2 glass rounded-2xl p-4"
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                    active === l.id ? "bg-brand-3 text-foreground" : "text-foreground/70"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
