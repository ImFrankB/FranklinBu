import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const AnimatedBackground = () => {
  const { currentTheme } = useTheme();

  const patterns = {
    noir: (
      <>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-neutral-700/30 via-stone-600/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-gradient-to-br from-zinc-700/20 via-neutral-600/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-stone-600/20 via-neutral-700/25 to-transparent rounded-full blur-3xl"
        />
      </>
    ),
    light: (
      <>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-slate-300/40 via-zinc-200/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-zinc-300/30 via-slate-200/40 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-slate-200/20 via-zinc-300/30 to-slate-200/20 rounded-full blur-3xl"
        />
      </>
    ),
    dark: (
      <>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 via-purple-600/30 to-transparent rounded-full blur-3xl"
        />
      </>
    ),
    breastCancer: (
      <>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/40 via-rose-400/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-rose-400/30 via-pink-400/40 to-transparent rounded-full blur-3xl"
        />
      </>
    ),
    autism: (
      <>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-blue-400/40 via-indigo-400/30 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 240, 120, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-br from-purple-400/30 via-indigo-400/40 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-400/20 to-transparent rounded-full blur-3xl"
        />
      </>
    ),
    environmental: (
      <>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-green-400/40 via-emerald-400/30 to-teal-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-br from-teal-400/30 via-emerald-400/40 to-green-400/20 rounded-full blur-3xl"
        />
      </>
    ),
    gad: (
      <>
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, 180, 360],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-teal-400/40 via-cyan-400/30 to-sky-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-br from-sky-400/30 via-cyan-400/40 to-teal-400/20 rounded-full blur-3xl"
        />
      </>
    ),
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {patterns[currentTheme]}
    </div>
  );
};

export default AnimatedBackground;
