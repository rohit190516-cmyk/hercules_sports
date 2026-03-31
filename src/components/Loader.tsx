import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-foreground metallic-glow">
                HERCULES
              </h1>
              <p className="text-sm md:text-base tracking-[0.4em] text-muted-foreground mt-2 font-body">
                SPORTS & FITNESS
              </p>
            </div>

            <div className="w-64 md:w-80">
              <div className="h-[2px] w-full bg-secondary overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-primary"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center tracking-widest font-body">
                {Math.min(Math.round(progress), 100)}%
              </p>
            </div>

            <motion.div
              className="w-1 h-1 rounded-full bg-primary"
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
