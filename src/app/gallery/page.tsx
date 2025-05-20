'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';

interface Media {
  id: string;
  url: string;
  title: string;
  date: string;
  description: string;
  location?: string;
  groupId?: string;
  type: 'image' | 'video';
  width?: number;
  height?: number;
}

// 获取前缀，适配本地和GitHub Pages
const prefix = process.env.NODE_ENV === 'production' ? '/love' : '';

// 静态媒体数据
const mediaItems: Media[] = [
  // 日常相处
  {
    id: '1',
    url: `${prefix}/photos/img2.jpg`,
    title: '',
    date: '2024',
    description: '我们在一起了',
    location: '不详',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '2',
    url: `${prefix}/photos/img3.jpg`,
    title: '成就感满满',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '3',
    url: `${prefix}/photos/img4.jpg`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '4',
    url: `${prefix}/photos/img5.jpg`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },              
  {
    id: '5',
    url: `${prefix}/photos/img6.JPG`,
    title: '',
    date: '',
    description: '',
    location: '',             
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '6',
    url: `${prefix}/photos/img7.JPG`,  
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '7',
    url: `${prefix}/photos/img8.PNG`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '8',
    url: `${prefix}/photos/img9.JPG`,
    title: '',  
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  }, 
  {
    id: '9',
    url: `${prefix}/photos/img10.JPG`,
    title: '',
    date: '',
    description: '',
    location: '', 
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '10',
    url: `${prefix}/photos/img11.JPG`,
    title: '',    
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '11',
    url: `${prefix}/photos/img12.JPG`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '12',
    url: `${prefix}/photos/img13.JPG`, 
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '13',
    url: `${prefix}/photos/img14.JPG`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '14',
    url: `${prefix}/photos/img15.jpg`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '15',
    url: `${prefix}/photos/img17.JPG`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '16',
    url: `${prefix}/photos/img18.JPG`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '17',
    url: `${prefix}/photos/img19.PNG`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },    
  {
    id: '18',
    url: `${prefix}/photos/img21.PNG`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '19',
    url: `${prefix}/photos/img22.PNG`,
    title: '',
    date: '',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '20',
    url: `${prefix}/photos/img23.PNG`,
    title: '',
    date: '2024-10-02',
    description: '',
    location: '',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '21',
    url: `${prefix}/photos/img24.jpg`,
    title: '黄山gogogo',
    date: '2024-10-02',
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '22',
    url: `${prefix}/photos/img25.jpg`, 
    title: '黄山gogogo',
    date: '2024-10-02',
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '24',
    url: `${prefix}/photos/img80.jpg`, 
    title: '黄山gogogo',
    date: '2024-10-02',
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '25',
    url: `${prefix}/photos/img81.jpg`, 
    title: '黄山gogogo',
    date: '2024-10-02',
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '26',
    url: `${prefix}/photos/img82.jpg`, 
    title: '黄山gogogo',
    date: '2024-10-02',
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '27',
    url: `${prefix}/photos/img83.jpg`, 
    title: '黄山gogogo',
    date: '2024-10-02',
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',   
    type: 'image'
  },
  {
    id: '28',
    url: `${prefix}/photos/img84.jpg`, 
    title: '黄山gogogo',  
    date: '2024-10-02',
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',
    type: 'image'
  },  
  {
    id: '29',
    url: `${prefix}/photos/img85.jpg`, 
    title: '黄山gogogo',
    date: '2024-10-02',     
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',
    type: 'image'
  },
  {
    id: '34',
    url: `${prefix}/photos/img90.jpg`, 
    title: '黄山gogogo',  
    date: '2024-10-02',
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',
    type: 'image'
  },      
  {
    id: '35',
    url: `${prefix}/photos/img91.jpg`, 
    title: '黄山gogogo',
    date: '2024-10-02', 
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'daily',
    type: 'image'
  },

  // 旅行相册
  ...Array.from({ length: 26 }, (_, i) => ({
    id: `travel-${i + 1}`,
    url: `${prefix}/photos/img${27 + i}.jpg`,
    title: '旅行记录',
    date: '2024-10-02',
    description: '我们的旅行时光',
    location: '旅行',
    groupId: 'travel',
    type: 'image' as const
  })),
  {
    id: '30',
    url: `${prefix}/photos/img16.jpg`, 
    title: '黄山gogogo',
    date: '2024-10-02', 
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'travel',
    type: 'image'
  },
  {
    id: '31',
    url: `${prefix}/photos/img20.jpg`, 
    title: '黄山gogogo',
    date: '2024-10-02', 
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'travel',
    type: 'image'
  },
  // 视频分组
  {
    id: '1',
    url: `${prefix}/videos/video4.mp4`,
    title: '我们的第一个视频',
    date: '2024.06.02----',
    description: '记录美好时刻',
    location: '不详',
    groupId: 'videos',
    type: 'video'
  },
  {
    id: '3',
    url: `${prefix}/videos/video2.mp4`,
    title: '说要跳钢管舞来着',
    date: '',
    description: '记录美好时刻',
    location: '',
    groupId: 'videos',
    type: 'video'
  },
  {
    id: '4',
    url: `${prefix}/videos/video1.mp4`,
    title: '卵泡期',
    date: '',
    description: '一起度过的美好时光',
    location: '',
    groupId: 'videos',
    type: 'video'
  },
  {
    id: '5',
    url: `${prefix}/videos/video5.mp4`,
    title: '喝多了',
    date: '',
    description: '记录美好时刻',
    location: '',
    groupId: 'videos',
    type: 'video'
  },
  {
    id: '6',
    url: `${prefix}/videos/video6.mp4`,
    title: '黄山之旅',
    date: '2024-10-02',
    description: '一起度过的美好时光',
    location: '黄山',
    groupId: 'videos',
    type: 'video'
  },
  {
    id: '7',
    url: `${prefix}/videos/video7.mp4`,
    title: '拿捏',
    date: '',
    description: '记录美好时刻',
    location: '',
    groupId: 'videos',
    type: 'video'
  },
  {
    id: '8',
    url: `${prefix}/videos/video8.mp4`,
    title: '困了',
    date: '',
    description: '记录美好时刻',
    location: '火车上',
    groupId: 'videos',
    type: 'video'
  }, 
  {
    id: '9',
    url: `${prefix}/videos/video9.mp4`,
    title: '我也是个大色懒😊',
    date: '',
    description: '记录美好时刻',
    location: '',
    groupId: 'videos',
    type: 'video'
  },

  // 订婚相册
  ...Array.from({ length: 22 }, (_, i) => ({
    id: `engagement-${i + 1}`,
    url: `${prefix}/photos/img${53 + i}.jpg`,
    title: '订婚相册',
    date: '2024-12-07',
    description: '我们的订婚时刻',
    location: '订婚现场',
    groupId: 'engagement',
    type: 'image' as const
  }))
];

// 分组标题映射
const groupTitles: Record<string, string> = {
  daily: '日常',
  travel: '第一次旅行',
  videos: '喝多的跳舞的搞笑的',
  engagement: '订婚相册'
};

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [mediaWithDimensions, setMediaWithDimensions] = useState<Media[]>([]);

  // 加载图片尺寸
  useEffect(() => {
    const loadImageDimensions = async () => {
      const loadedMedia = await Promise.all(
        mediaItems.map(async (media) => {
          if (media.type === 'image') {
            return new Promise<Media>((resolve) => {
              const img = new Image();
              img.onload = () => {
                resolve({
                  ...media,
                  width: img.width,
                  height: img.height
                });
              };
              img.onerror = () => {
                resolve(media);
              };
              img.src = media.url;
            });
          }
          return media;
        })
      );
      setMediaWithDimensions(loadedMedia);
    };

    loadImageDimensions();
  }, []);

  // 按组ID分组媒体
  const groupedMedia = mediaWithDimensions.reduce((groups, media) => {
    const groupId = media.groupId || media.id;
    if (!groups[groupId]) {
      groups[groupId] = [];
    }
    groups[groupId].push(media);
    return groups;
  }, {} as Record<string, Media[]>);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">我们的相册</h1>
        </div>

        {/* 照片分组展示 */}
        {Object.entries(groupedMedia).map(([groupId, groupMedia]) => (
          <div key={groupId} className="mb-12">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{groupTitles[groupId]}</h2>
              <p className="text-sm text-pink-600">{groupMedia[0].date}</p>
              {groupMedia[0].location && (
                <p className="text-sm text-gray-600">地点：{groupMedia[0].location}</p>
              )}
              <p className="text-gray-600 mt-2">{groupMedia[0].description}</p>
            </div>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
              {groupMedia.map((media) => (
                <motion.div
                  key={media.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="break-inside-avoid mb-4"
                >
                  <div
                    className="relative cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedMedia(media)}
                  >
                    {media.type === 'image' ? (
                      <img
                        src={media.url}
                        alt={media.title}
                        className="w-full rounded-lg"
                        style={{
                          aspectRatio: media.width && media.height ? `${media.width}/${media.height}` : 'auto'
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative w-full bg-black rounded-lg">
                        <video
                          src={media.url}
                          className="w-full rounded-lg"
                          preload="metadata"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* 预览模态框 */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {selectedMedia.type === 'image' ? (
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      className="w-full h-auto"
                    />
                  ) : (
                    <video
                      src={selectedMedia.url}
                      className="w-full"
                      controls
                      autoPlay
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedMedia.title}</h3>
                  <p className="text-gray-600">{selectedMedia.description}</p>
                  {selectedMedia.location && (
                    <p className="text-sm text-gray-500 mt-2">地点：{selectedMedia.location}</p>
                  )}
                  <p className="text-sm text-pink-600 mt-2">{selectedMedia.date}</p>
                </div>
                <button
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                  onClick={() => setSelectedMedia(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
} 