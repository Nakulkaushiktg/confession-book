import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generated: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 10 + Math.random() * 18,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      opacity: 0.08 + Math.random() * 0.15,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute"
          style={{ left: `${h.x}%`, bottom: -30 }}
          animate={{
            y: [0, -window.innerHeight - 60],
            x: [0, (Math.random() - 0.5) * 80],
            rotate: [0, (Math.random() - 0.5) * 60],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <Heart
            className="text-primary fill-primary"
            style={{ width: h.size, height: h.size, opacity: h.opacity }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
