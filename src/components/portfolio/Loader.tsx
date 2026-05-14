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
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full border-[3px] border-primary/20" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary"
          />

          <div className="absolute inset-2 rounded-full bg-primary/20 blur-2xl" />

          <div className="absolute inset-[6px] overflow-hidden rounded-full border-2 border-white shadow-2xl">
            <img
              src="https://res.cloudinary.com/harsh21/image/upload/v1778748890/Screenshot_1_dh0qt3.png"
              alt="Harsh Jain"
              className="w-full h-90 object-cover"
            />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 font-serif text-3xl text-foreground"
        >
          Welcome<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}