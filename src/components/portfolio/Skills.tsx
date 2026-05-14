import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";
import { SKILLS } from "@/data/portfolio";

const ICONS = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
} as const;

export function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">Tools I work with</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A handpicked stack I use to build modern, performant, and beautiful products.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(SKILLS).map(([group, items], gi) => {
          const Icon = ICONS[group as keyof typeof ICONS];
          return (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-3xl p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-3 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + i * 0.04 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/60 border border-brand-5/40 text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
