'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, PhotoIcon, CalendarIcon, HeartIcon, ListBulletIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'OurHouse', href: '/', icon: HomeIcon },
//   { name: '这一路', href: '/timeline', icon: CalendarIcon },
  { name: '都好看', href: '/gallery', icon: PhotoIcon },
  { name: '好日子', href: '/anniversary', icon: HeartIcon },
  { name: '好多事要做', href: '/wishlist', icon: ListBulletIcon },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:top-0 md:bottom-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex justify-around md:justify-start md:space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? 'text-pink-600 border-b-2 border-pink-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <item.icon className="h-6 w-6 md:h-5 md:w-5 md:mr-2" />
                  <span className="hidden md:inline">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
} 