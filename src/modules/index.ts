import { onco } from './onco';
import { useState, useCallback, useEffect } from 'react';
import { cardiology } from './cardiology';
import { anatomy } from './anatomy';

export const useModules = () => {
  const [modules] = useState([anatomy, cardiology, onco]);

  useEffect(() => {
    console.log('Modules loaded:', modules);
    modules.forEach(module => {
      console.log(`Module ${module.title} icon:`, module.icon);
    });
  }, [modules]);

  const filterModules = useCallback((query: string) => {
    if (!query) return modules;

    const searchTerm = query.toLowerCase();
    
    return modules.map(module => ({
      ...module,
      chapters: module.chapters.map(chapter => ({
        ...chapter,
        courses: chapter.courses.filter(course =>
          course.title.toLowerCase().includes(searchTerm) ||
          course.content?.definition?.toLowerCase().includes(searchTerm)
        )
      })).filter(chapter => chapter.courses.length > 0)
    })).filter(module => module.chapters.length > 0);
  }, [modules]);

  return { modules, filterModules };
};