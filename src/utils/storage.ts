// 存储键名
export const STORAGE_KEYS = {
  TIMELINE: 'timeline_events',
  GALLERY: 'gallery_photos',
  ANNIVERSARY: 'anniversary_dates',
  WISHLIST: 'wishlist_items'
} as const;

// 通用的存储函数
export function saveToStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

// 通用的读取函数
export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
}

// 通用的更新函数
export function updateStorage<T>(key: string, updateFn: (data: T) => T): void {
  try {
    const currentData = loadFromStorage<T>(key, [] as T);
    const newData = updateFn(currentData);
    saveToStorage(key, newData);
  } catch (error) {
    console.error('Error updating localStorage:', error);
  }
} 