'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  delay: number;
  duration: number;
}

export default function StarRain() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // 创建50个星星
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // 随机水平位置
      delay: Math.random() * 2, // 随机延迟
      duration: 2 + Math.random() * 2 // 随机下落时间
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: 0,
            }}
            className="text-2xl"
          >
            ✨
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 