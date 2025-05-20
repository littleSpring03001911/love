'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const specialDates = [
  { month: 5, day: 20, message: '520快乐' },
  { month: 6, day: 2, message: '周年快乐' },
  { month: 8, day: 10, message: '七夕快乐' },
  { month: 12, day: 8, message: '生日快乐，永远爱你' }
];

export default function FlowerPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const isSpecialDay = specialDates.some(
      date => date.month === month && date.day === day
    );

    if (isSpecialDay) {
      const specialDate = specialDates.find(
        date => date.month === month && date.day === day
      );
      setMessage(specialDate?.message || '');
      setShowPopup(true);

      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <div className="relative">
            {/* 主花束 */}
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-8xl mb-4 relative"
            >
              💐
            </motion.div>

            {/* 卡布奇诺玫瑰 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -right-8 -top-4 text-4xl"
            >
              🌹
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -left-8 -top-4 text-4xl"
            >
              🌹
            </motion.div>
            
            {/* 消息框 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center relative"
            >
              <p className="text-2xl font-semibold text-pink-600">{message}</p>
              
              {/* 装饰性元素 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -right-4 text-3xl"
              >
                ✨
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 -left-4 text-3xl"
              >
                ✨
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -left-4 text-3xl"
              >
                💝
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-4 -right-4 text-3xl"
              >
                💝
              </motion.div>
            </motion.div>

            {/* 背景装饰 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              className="absolute inset-0 -z-10 text-9xl text-pink-300"
              style={{ transform: 'rotate(-15deg)' }}
            >
              💐
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 