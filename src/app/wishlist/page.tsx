'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

interface Wish {
  id: string;
  title: string;
  description: string;
  emoji: string;
  completed: boolean;
}

// 静态愿望数据
const wishes: Wish[] = [
  {
    id: '1',
    title: '逛宜家买床',
    description: '一起挑选一张舒适的床',
    emoji: '🛏️',
    completed: false
  },
  {
    id: '2',
    title: '买梳妆台',
    description: '为她挑选一个漂亮的梳妆台',
    emoji: '💄',
    completed: false
  },
  {
    id: '3',
    title: '买一辆电车',
    description: '一起挑选一辆适合我们的电车',
    emoji: '🚗',
    completed: false
  },
  {
    id: '4',
    title: '去威海',
    description: '去威海看海，看一望无际的海，住大阳台酒店，早上不赶着起床也能看到日出日落那种',
    emoji: '🌊',
    completed: false
  },
  {
    id: '5',
    title: '去赛里木湖',
    description: '验证一下是不是看完太平洋的最后一滴眼泪，以后就再也不会流眼泪了',
    emoji: '🏔️',
    completed: false
  },
  {
    id: '6',
    title: '领证',
    description: '正式成为合法夫妻',
    emoji: '💍',
    completed: false
  },
  {
    id: '7',
    title: '结婚',
    description: '举办我们的婚礼',
    emoji: '👰',
    completed: false
  },
  {
    id: '8',
    title: '生孩子',
    description: '期待我们的爱情结晶',
    emoji: '👶',
    completed: false
  },
  {
    id: '9',
    title: '未完待续',
    description: '中华民族历尽磨难，也能再站起来，且屹立不倒，我们也要一起加油',
    emoji: '✨',
    completed: false
  }
  
];

export default function Wishlist() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">愿望清单</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{wish.emoji}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{wish.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{wish.description}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 ${
                  wish.completed ? 'bg-pink-500 border-pink-500' : 'border-pink-300'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 