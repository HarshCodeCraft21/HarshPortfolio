import { motion } from "framer-motion";
import { Github } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

export function GithubStats() {
  const githubUsername = "harshcodecraft21";

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={reveal}
      className="mt-20 pt-14 border-t border-[#d6ccc2]"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-2 rounded-full bg-[#e3d5ca]">
            <Github className="w-5 h-5 text-[#6b5b52]" />
          </div>

          <span className="uppercase tracking-[0.25em] text-sm text-[#8b735f] font-medium">
            GitHub Stats
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-[#4e4039] mb-4">
          My Coding Journey
        </h2>

        <p className="text-[#7b6d66] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          A showcase of my development consistency, open-source activity,
          coding streaks, and contribution history throughout my journey as a
          developer.
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* GitHub Streak */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            rounded-[32px]
            p-7
            backdrop-blur-xl
            bg-white/40
            border border-white/30
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            hover:-translate-y-1
            transition-all duration-300
            relative
            overflow-hidden
            flex
            flex-col
            h-full
          "
        >
          {/* Glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#d5bdaf]/30 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col h-full">
            {/* Heading */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#4e4039] mb-2">
                GitHub Streak
              </h3>

              <p className="text-[#7b6d66] text-sm md:text-base leading-relaxed">
                Tracking my consistency, learning journey, and daily
                development activity through continuous coding and
                contributions.
              </p>
            </div>

            {/* Streak Image */}
            <div className="flex-1 flex items-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=default&background=F5EBE0&border=D6CCC2&stroke=CBB8A8&ring=8B7355&fire=B08968&currStreakLabel=6B5B52`}
                alt="GitHub Streak"
                className="
                  w-full
                  rounded-2xl
                  hover:scale-[1.01]
                  transition-transform duration-500
                "
              />
            </div>
          </div>
        </motion.div>

        {/* Contribution Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            rounded-[32px]
            p-7
            backdrop-blur-xl
            bg-white/40
            border border-white/30
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            hover:-translate-y-1
            transition-all duration-300
            relative
            overflow-hidden
            flex
            flex-col
            h-full
          "
        >
          {/* Glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#d5bdaf]/30 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col h-full">
            {/* Heading */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#4e4039] mb-2">
                Contribution Activity
              </h3>

              <p className="text-[#7b6d66] text-sm md:text-base leading-relaxed">
                My daily coding consistency and open-source contributions
                across projects and repositories.
              </p>
            </div>

            {/* Chart */}
            <div
              className="
                flex-1
                flex
                items-center
                overflow-x-auto
                rounded-2xl
                border border-[#d6ccc2]
                bg-[#ede9e9]/60
                p-4
              "
            >
              <img
                src={`https://ghchart.rshah.org/b08968/${githubUsername}`}
                alt="GitHub Contribution Chart"
                className="
                  w-full
                  rounded-xl
                  hover:scale-[1.01]
                  transition-transform duration-500
                "
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Activity Graph */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="
          mt-8
          rounded-[32px]
          p-7
          backdrop-blur-xl
          bg-white/40
          border border-white/30
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
          overflow-hidden
          relative
        "
      >
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#d5bdaf]/30 blur-3xl rounded-full" />

        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#4e4039] mb-2">
              Development Overview
            </h3>

            <p className="text-[#7b6d66] text-sm md:text-base leading-relaxed">
              Visualizing my coding activity, repository contributions, and
              overall development workflow throughout the year.
            </p>
          </div>

          {/* Graph */}
          <div className="overflow-x-auto rounded-2xl">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=F5EBE0&color=6B5B52&line=B08968&point=8B7355&area=true&area_color=E3D5CA&hide_border=true`}
              alt="GitHub Activity Graph"
              className="
                w-full
                rounded-2xl
                hover:scale-[1.005]
                transition-transform duration-500
              "
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}