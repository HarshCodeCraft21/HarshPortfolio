import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-brand-3" />
          <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
        <div className="mt-6 font-serif text-2xl text-foreground">
          Harsh<span className="text-primary">.</span>
        </div>
        <div className="mt-1 text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">
          loading portfolio
        </div>
      </div>
    </motion.div>
  );
}
