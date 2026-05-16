import { useState, useEffect, useRef } from "react";
import { Github, Star, GitFork, ExternalLink, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  updated_at: string;
}

const GITHUB_USERNAME = "harshcodecraft21";

export function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="flex gap-6 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="min-w-[350px] h-60 rounded-3xl bg-brand-3/20 animate-pulse border border-brand-5/10" />
        ))}
      </div>
    );
  }

  return (
    <div className="relative group/slider w-full">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => scroll("left")}
          className="p-3 rounded-full bg-white shadow-xl border border-brand-5/20 text-primary hover:bg-brand-5 hover:text-white transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => scroll("right")}
          className="p-3 rounded-full bg-white shadow-xl border border-brand-5/20 text-primary hover:bg-brand-5 hover:text-white transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slider Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="min-w-[320px] md:min-w-[380px] snap-center"
          >
            <div className="h-full flex flex-col p-8 rounded-[32px] border border-brand-5/15 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-brand-5/40 transition-all duration-500 group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-brand-3/80 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-4 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-brand-5 fill-current" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GitFork className="w-4 h-4 text-brand-5" /> {repo.forks_count}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors truncate">
                {repo.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-8 h-10 leading-relaxed">
                {repo.description || "Open source excellence from my GitHub profile."}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-5/10">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-5 shadow-[0_0_8px_hsl(var(--brand-5)/0.4)]" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                    <Clock className="w-4 h-4" />
                    {new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                  </span>
                </div>
                
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-brand-5/10 text-primary hover:bg-brand-5 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}