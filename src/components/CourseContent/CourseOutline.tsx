import React from 'react';
import { Menu, X, Key, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CourseOutlineProps {
  course: any;
  isDarkMode: boolean;
  showOutline: boolean;
  setShowOutline: (show: boolean) => void;
  activeSection: number | null;
  outlineRef: React.RefObject<HTMLDivElement>;
  menuButtonRef: React.RefObject<HTMLButtonElement>;
  questionsRef: React.RefObject<(HTMLDivElement | null)[]>;
  onKeywordsClick: () => void;
  onDownloadPDF: () => void;
  isClinicalMode: boolean;
}

const CourseOutline: React.FC<CourseOutlineProps> = ({
  course,
  isDarkMode,
  showOutline,
  setShowOutline,
  activeSection,
  outlineRef,
  menuButtonRef,
  questionsRef,
  onKeywordsClick,
  onDownloadPDF,
  isClinicalMode
}) => {
  const scrollToQuestion = (index: number) => {
    questionsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShowOutline(false);
  };

  return (
    <>
      <button
        ref={menuButtonRef}
        onClick={() => setShowOutline(!showOutline)}
        className={`fixed top-20 left-4 z-40 p-2 rounded-lg shadow-lg transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 hover:bg-gray-700 text-white' 
            : 'bg-white hover:bg-gray-50 text-gray-900'
        }`}
      >
        {showOutline ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {showOutline && (
          <motion.div
            ref={outlineRef}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className={`fixed top-0 left-0 w-64 h-screen z-30 overflow-y-auto p-4 pt-20 shadow-xl ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {isClinicalMode ? 'Plan du cas clinique' : 'Plan du cours'}
              </h3>
              {!isClinicalMode && (
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onDownloadPDF}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-primary-600/20 hover:bg-primary-600/30 text-primary-300'
                        : 'bg-primary-100 hover:bg-primary-200 text-primary-700'
                    }`}
                  >
                    <Download className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onKeywordsClick}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-primary-600/20 hover:bg-primary-600/30 text-primary-300'
                        : 'bg-primary-100 hover:bg-primary-200 text-primary-700'
                    }`}
                  >
                    <Key className="h-4 w-4" />
                  </motion.button>
                </div>
              )}
            </div>
            <nav className="space-y-2">
              {(isClinicalMode ? course.content?.clinicalMode?.cases[0]?.questions : course.content?.normalMode?.questions)?.map((q: any, index: number) => (
                <button
                  key={q.id}
                  onClick={() => scrollToQuestion(index)}
                  className={`w-full text-left p-2 rounded-lg text-sm transition-colors duration-300 ${
                    activeSection === index
                      ? isDarkMode
                        ? isClinicalMode
                          ? 'bg-emerald-600 text-white'
                          : 'bg-primary-600 text-white'
                        : isClinicalMode
                          ? 'bg-emerald-500 text-white'
                          : 'bg-primary-500 text-white'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {q.question}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CourseOutline;