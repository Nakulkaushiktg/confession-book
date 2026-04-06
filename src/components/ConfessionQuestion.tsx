import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ConfessionQuestion = () => {
  const [answered, setAnswered] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const dodgeNo = () => {
    setNoButtonPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    });
  };

  if (answered) {
  return (
      <div className="flex flex-col items-center justify-center h-full gap-4 px-10 text-center" style={{ minHeight: 520 }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-7xl">🎉</span>
          <p className="font-handwritten text-5xl text-primary">Yay!!!</p>
          <p className="font-display text-xl text-foreground italic">
            You just made me the happiest person ♥
          </p>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Heart className="w-16 h-16 text-primary fill-primary" />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 px-10 text-center" style={{ minHeight: 520 }}>
      <p className="font-handwritten text-5xl text-primary">
        Do you like me too?
      </p>
      <div className="flex gap-6 items-center relative mt-4">
        <button
          onClick={() => setAnswered(true)}
          className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-handwritten text-2xl shadow-lg hover:scale-110 transition-transform"
        >
          Yes! 💖
        </button>
        <motion.button
          animate={noButtonPos}
          onMouseEnter={dodgeNo}
          onTouchStart={dodgeNo}
          className="px-10 py-4 bg-muted text-muted-foreground rounded-full font-handwritten text-2xl shadow hover:scale-110 transition-transform"
        >
          No 😢
        </motion.button>
      </div>
      <p className="text-muted-foreground text-sm font-display italic mt-2">
        (hint: there's only one real option 😏)
      </p>
    </div>
  );
};

export default ConfessionQuestion;
