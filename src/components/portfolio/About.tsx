import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Code2 } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";
import { GithubStats } from "./GithubStats";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={reveal}
        className="text-center mb-14"
      >
        <span className="section-eyebrow">About me</span>
        <h2 className="section-title">A few words about who I am</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm a MERN Stack Developer who loves building products that feel as good as they work.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          className="glass rounded-3xl p-8 card-hover"
        >
          <Sparkles className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Hello there</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm <strong className="text-foreground">Harsh Jain</strong> — a passionate MERN Stack Developer
            from India. I specialize in building scalable, modern web applications using
            <strong className="text-foreground"> React, Node.js, Express,</strong> and
            <strong className="text-foreground"> MongoDB</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            My passion lies in turning ideas into clean, performant products — combining solid engineering
            with thoughtful, aesthetic UI. I care about the small details that make software feel human.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl p-8 card-hover"
        >
          <GraduationCap className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-6">Education</h3>

          <div className="relative pl-6 border-l-2 border-brand-5/60 space-y-6">
            {EDUCATION.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-brand-3" />
                <div className="text-xs font-mono text-primary">{e.period}</div>
                <h4 className="text-lg font-semibold mt-1">{e.degree}</h4>
                <p className="text-sm text-foreground/80">{e.school}</p>
                <p className="text-xs text-muted-foreground mt-1">{e.note}</p>
                <p className="text-xs text-muted-foreground mt-1">CGPA: <span className="font-bold">{e.cgpa}</span></p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Code2 className="w-4 h-4" /> Always learning, always shipping
          </div>
        </motion.div>
      </div>

      <GithubStats />
    </section>
  );
}
