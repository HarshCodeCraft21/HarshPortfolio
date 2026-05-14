import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { PROFILE, TYPING_PHRASES } from "@/data/portfolio";
// import image from "@/assets/image.png";

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      const next = del
        ? word.slice(0, text.length - 1)
        : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((p) => p + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(TYPING_PHRASES);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-10 overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="blob bg-brand-5 w-[420px] h-[420px] -top-20 -left-20" />
      <div
        className="blob bg-brand-3 w-[500px] h-[500px] top-1/2 -right-32"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="blob bg-brand-4 w-[360px] h-[360px] bottom-0 left-1/3"
        style={{ animationDelay: "-12s" }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">// Available for work</span>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] text-foreground">
            Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
          </h1>
          <div className="mt-4 h-9 md:h-10 text-2xl md:text-3xl font-serif text-foreground/80">
            {typed}
            <span className="cursor-blink text-primary">|</span>
          </div>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {PROFILE.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={() => go("projects")} className="btn-primary" style={{ backgroundColor: '#A0715B', color: 'white' }}>
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
            <a href={PROFILE.resume} download className="btn-ghost">
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:-translate-y-1 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:-translate-y-1 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:-translate-y-1 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative justify-self-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-5 to-brand-3 blur-2xl opacity-60" />
            <div className="relative w-full h-full rounded-full glass overflow-hidden border-4 border-white/60 shadow-[var(--shadow-elevated)]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-3 via-brand-4 to-brand-5" />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/harsh21/image/upload/v1778748890/Screenshot_1_dh0qt3.png"
                  alt="Harsh Jain"
                  className="w-full h-90 object-cover rounded-full relative z-10"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-20" />

                {/* Optional Shine Effect */}
                <div className="absolute inset-0 rounded-full border border-white/20 z-30" />
              </div>
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id="avatarGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="hsl(23 28% 45%)" />
                    <stop offset="1" stopColor="hsl(23 28% 65%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-3 glass rounded-2xl px-4 py-2 text-xs font-mono">
              <span className="text-primary">●</span> Open to work
            </div>
            <div className="absolute -top-2 -left-4 glass rounded-2xl px-3 py-1.5 text-xs font-mono">
              {"</> MERN"}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-foreground/50 animate-float">
        scroll ↓
      </div>
    </section>
  );
}
