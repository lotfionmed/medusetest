import React from 'react';
import { Play, Map, Image } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseHeaderProps {
  course: any;
  isDarkMode: boolean;
  showAudio: boolean;
  setShowAudio: (show: boolean) => void;
  setShowMindMap: (show: boolean) => void;
  setShowImage: (show: boolean) => void;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({
  course,
  isDarkMode,
  showAudio,
  setShowAudio,
  setShowMindMap,
  setShowImage
}) => {
  return (
    <div className={`p-8 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } shadow-lg border ${
      isDarkMode ? 'border-gray-700' : 'border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <div className="flex gap-2">
          {course.content?.audio && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAudio(true)}
              className={`p-3 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-primary-600 hover:bg-primary-500 text-white' 
                  : 'bg-primary-500 hover:bg-primary-400 text-white'
              }`}
            >
              <Play className="h-5 w-5" />
            </motion.button>
          )}
          {course.content?.mindMap && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMindMap(true)}
              className={`p-3 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-green-600 hover:bg-green-500 text-white' 
                  : 'bg-green-500 hover:bg-green-400 text-white'
              }`}
            >
              <Map className="h-5 w-5" />
            </motion.button>
          )}
          {course.content?.images && course.content.images.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowImage(true)}
              className={`p-3 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                  : 'bg-blue-500 hover:bg-blue-400 text-white'
              }`}
            >
              <Image className="h-5 w-5" />
            </motion.button>
          )}
        </div>
      </div>
      {course.content?.definition && (
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {course.content.definition}
        </p>
      )}
    </div>
  );
};

export default CourseHeader;