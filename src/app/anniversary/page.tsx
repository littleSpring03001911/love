'use client';

import { motion } from 'framer-motion';
import { differenceInDays, format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import Navbar from '@/components/Navbar';

interface Anniversary {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'anniversary' | 'birthday';
}

// 静态纪念日数据
const anniversaries: Anniversary[] = [
  {
    id: '1',
    title: '恋爱纪念日',
    date: '2024-06-04',
    description: '我们在一起的第一天',
    type: 'anniversary'
  },
  {
    id: '2',
    title: '求婚的日子',
    date: '2024-11-02',
    description: '求婚的生日',
    type: 'anniversary'
  },
  {
    id: '4',
    title: '她的生日',
    date: '2024-12-08',
    description: '她的生日',
    type: 'birthday'
  },
  {
    id: '5',
    title: '我的的生日',
    date: '2024-12-15',
    description: '我的生日',
    type: 'birthday'
  },
  {
    id: '3',
    title: '订婚的日子',
    date: '2024-12-07',
    description: '订婚的日子',
    type: 'anniversary'
  } 
];

export default function Anniversary() {
  const getDaysUntil = (date: string) => {
    const today = new Date();
    const anniversaryDate = new Date(date);
    const days = differenceInDays(anniversaryDate, today);
    return days;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">重要日期</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {anniversaries.map((anniversary, index) => {
            const daysUntil = getDaysUntil(anniversary.date);
            const isPast = daysUntil < 0;

            return (
              <motion.div
                key={anniversary.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{anniversary.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    anniversary.type === 'anniversary' ? 'bg-pink-100 text-pink-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {anniversary.type === 'anniversary' ? '纪念日' : '生日'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{anniversary.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    {format(new Date(anniversary.date), 'yyyy年MM月dd日', { locale: zhCN })}
                  </p>
                  <p className={`text-sm font-medium ${
                    isPast ? 'text-gray-500' : 'text-pink-600'
                  }`}>
                    {isPast ? '已过去' : `还有 ${Math.abs(daysUntil)} 天`}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
} 