import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-brand-5/40 bg-white/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-serif text-xl font-semibold">
            Harsh Jain<span className="text-primary">.</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1.5">
            Designed & Developed by Harsh Jain <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"
             className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email"
             className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <div className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} — All rights reserved
        </div>
      </div>
    </footer>
  );
}
