import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { GithubRepos } from "./GithubRepos";

export function Projects() {
  return (
    <section id="projects" className="section overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Things I've built</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Selected work — full-stack products built with care, end to end.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 mb-32">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-[40px] overflow-hidden group"
          >
            {/* Thumbnail */}
            <div className="relative h-72 sm:h-96 bg-gradient-to-br from-brand-3 via-brand-4 to-brand-5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-1000">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="p-10 xl:p-14">
              <h3 className="text-3xl font-semibold mb-4">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{p.description}</p>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 text-[12px] font-mono rounded-full bg-brand-3/60 text-primary border border-brand-5/30"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary !py-3.5 !px-8 !text-base">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost !py-3.5 !px-8 !text-base">
                  <Github className="w-5 h-5" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* GitHub Section */}
      <div className="pt-20 border-t border-brand-5/10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold mb-4">My Minor Projects</h2>
          <p className="text-muted-foreground">Some of my minor projects.</p>
        </div>
        <GithubRepos />
      </div>
    </section>
  );
}