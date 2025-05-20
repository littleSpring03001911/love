'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'anniversary' | 'travel' | 'gift' | 'other';
}

// 静态时间线数据
const events: TimelineEvent[] = [
  {
    id: '1',
    date: '2024-06-04',
    title: '我们的第一次约会',
    description: '在咖啡厅度过了美好的下午',
    type: 'anniversary'
  },
  {
    id: '2',
    date: '2024-02-14',
    title: '情人节',
    description: '一起看了浪漫的电影',
    type: 'anniversary'
  }
];

export default function Timeline() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">我们的时间线</h1>
        </div>

        <div className="relative">
          {/* 时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-200"></div>

          {/* 事件列表 */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-sm text-pink-600 mb-2">{event.date}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-pink-700 bg-pink-100 rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 