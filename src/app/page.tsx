'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FlowerPopup from '@/components/FlowerPopup';
import ChatDialog from '@/components/ChatDialog';

interface Photo {
  id: string;
  url: string;
  title: string;
  date: string;
  description: string;
}

// 固定的五张重要照片
const importantPhotos: Photo[] = [
  {
    id: '1',
    url: '/photos/img7.jpg',
    title: '第一条朋友圈',
    date: '2024-01-01',
    description: '我们的第一次相遇'
  },
  {
    id: '2',
    url: '/photos/img20.jpg',
    title: '成就感满满',
    date: '2024-01-15',
    description: '在咖啡厅的甜蜜时光'
  },
  {
    id: '3',
    url: '/photos/img15.jpg',
    title: '哥哥',
    date: '2024-02-01',
    description: '一起去看海'
  },
  {
    id: '4',
    url: '/photos/img4.jpg',
    title: '花花',
    date: '2024-02-14',
    description: '浪漫的晚餐'
  },
  {
    id: '5',
    url: '/photos/img16.jpg',
    title: '黄山gogogo',
    date: '2024-10-02',
    description: '一起度过的美好时光'
  }
];

export default function Home() {
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // 设置恋爱开始时间
  const startDate = new Date('2024-06-04');

  // 计算在一起的时间
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeTogether({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <FlowerPopup />
      <Navbar />
      <ChatDialog />
      <div className="container mx-auto px-4 py-8 mt-16">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">我们的家，我们的故事</h1>
          <p className="text-lg text-gray-600">记录每一个美好的瞬间</p>
        </motion.div>

        {/* 计时器部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">我们已经在一起</h2>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-600">{timeTogether.days}</div>
              <div className="text-gray-600">天</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">{timeTogether.hours}</div>
              <div className="text-gray-600">小时</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">{timeTogether.minutes}</div>
              <div className="text-gray-600">分钟</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">{timeTogether.seconds}</div>
              <div className="text-gray-600">秒</div>
            </div>
          </div>
        </motion.div>

        {/* 照片展示部分 - 五张照片的特殊布局 */}
        <div className="relative w-full max-w-4xl mx-auto aspect-square">
          {/* 左上 */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-0 left-0 w-1/2 h-1/2 p-2"
          >
            <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={importantPhotos[0].url}
                alt={importantPhotos[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-sm font-semibold">{importantPhotos[0].title}</h3>
              </div>
            </div>
          </motion.div>

          {/* 右上 */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute top-0 right-0 w-1/2 h-1/2 p-2"
          >
            <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={importantPhotos[1].url}
                alt={importantPhotos[1].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-sm font-semibold">{importantPhotos[1].title}</h3>
              </div>
            </div>
          </motion.div>

          {/* 右下 */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-0 right-0 w-1/2 h-1/2 p-2"
          >
            <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={importantPhotos[2].url}
                alt={importantPhotos[2].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-sm font-semibold">{importantPhotos[2].title}</h3>
              </div>
            </div>
          </motion.div>

          {/* 左下 */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-0 left-0 w-1/2 h-1/2 p-2"
          >
            <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={importantPhotos[3].url}
                alt={importantPhotos[3].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-sm font-semibold">{importantPhotos[3].title}</h3>
              </div>
            </div>
          </motion.div>

          {/* 中间 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 p-2"
          >
            <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={importantPhotos[4].url}
                alt={importantPhotos[4].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-sm font-semibold">{importantPhotos[4].title}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
