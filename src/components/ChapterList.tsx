import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Module, Chapter } from '../types';
import { ArrowLeft, Book, Key, BookOpen, AlertTriangle } from 'lucide-react';
import ModuleKeywordsModal from '../utils/moduleKeywordsModal';
import { generateModuleContentPDF } from '../utils/moduleContentPDF';

interface ChapterListProps {
  module: Module;
  isDarkMode: boolean;
  onChapterSelect: (chapterId: string) => void;
  onBack: () => void;
  isClinicalMode?: boolean;
}

const ChapterList: React.FC<ChapterListProps> = ({ 
  module, 
  isDarkMode, 
  onChapterSelect, 
  onBack,
  isClinicalMode = false
}) => {
  const [showKeywords, setShowKeywords] = useState(false);
  const [iconError, setIconError] = useState(false);

  const handleIconError = () => {
    console.warn(`Failed to load icon for module: ${module.title}`);
    setIconError(true);
  };

  const handleDownloadPDF = () => {
    const pdf = generateModuleContentPDF(module, isDarkMode);
    pdf.save(`${module.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.button
        whileHover={{ x: -5 }}
        onClick={onBack}
        className={`mb-8 flex items-center space-x-2 ${
          isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Retour aux modules</span>
      </motion.button>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          {iconError ? (
            <AlertTriangle 
              className={`h-10 w-10 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} 
            />
          ) : (
            <img 
              src={module.icon} 
              alt={`${module.title} icon`}
              onError={handleIconError}
              className={`h-10 w-10 mr-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} 
            />
          )}
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {module.title}
          </h1>
        </div>

        {!isClinicalMode && (
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowKeywords(true)}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-primary-600/20 hover:bg-primary-600/30 text-primary-300' 
                  : 'bg-primary-100 hover:bg-primary-200 text-primary-600'
              }`}
            >
              <Key className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDownloadPDF}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-blue-600/20 hover:bg-blue-600/30 text-blue-300' 
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
              }`}
            >
              <BookOpen className="h-4 w-4" />
            </motion.button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {module.chapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onChapterSelect(chapter.id)}
            className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-102 cursor-pointer ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 hover:shadow-blue-500/20' 
                : 'bg-white hover:bg-gray-50 hover:shadow-blue-500/30'
            }`}
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'
              }`}>
                <Book className={`h-6 w-6 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <div className="ml-4">
                <h2 className={`text-xl font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {chapter.title}
                </h2>
                <p className={`mt-1 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {chapter.courses.length} cours disponibles
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ModuleKeywordsModal
        isOpen={showKeywords}
        onClose={() => setShowKeywords(false)}
        isDarkMode={isDarkMode}
        module={module}
      />
    </div>
  );
};

export default ChapterList;