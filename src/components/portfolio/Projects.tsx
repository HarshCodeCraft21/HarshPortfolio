import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Things I've built</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Selected work — full-stack products built with care, end to end.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-3xl overflow-hidden card-hover group"
          >
            {/* Thumbnail */}
            <div className="relative h-56 bg-gradient-to-br from-brand-3 via-brand-4 to-brand-5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-serif text-5xl text-foreground/40 group-hover:scale-110 transition-transform duration-700">
                  <img src="https://res.cloudinary.com/harsh21/image/upload/v1778742798/Screenshot_1_jicoaz.png" alt="banner" className="w-full h-full object-cover"/>
                </div>
              </div>
              <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[11px] font-mono">
                <Calendar className="w-3 h-3 inline mr-1" /> 2025
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-7">
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <span className="text-sm text-muted-foreground">— {p.subtitle}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.description}</p>

              <ul className="grid grid-cols-2 gap-1.5 text-sm text-foreground/80 mb-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span> {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-brand-3 text-primary border border-brand-5/40"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary !py-2 !px-4 !text-sm">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost !py-2 !px-4 !text-sm">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
