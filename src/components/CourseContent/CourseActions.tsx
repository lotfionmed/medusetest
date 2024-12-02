import React from 'react';
import { ClipboardCheck, BookOpen, Youtube, X } from 'lucide-react';
import { motion } from 'framer-motion';
import QuizModal from '../QuizModal';

interface CourseActionsProps {
  course: any;
  isDarkMode: boolean;
  showQuiz: boolean;
  setShowQuiz: (show: boolean) => void;
  showReferences: boolean;
  setShowReferences: (show: boolean) => void;
  showVideos: boolean;
  setShowVideos: (show: boolean) => void;
}

const CourseActions: React.FC<CourseActionsProps> = ({
  course,
  isDarkMode,
  showQuiz,
  setShowQuiz,
  showReferences,
  setShowReferences,
  showVideos,
  setShowVideos
}) => {
  const openYoutubeVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div className={`flex justify-center gap-4 py-8 mt-8 border-t ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        {course.content?.normalMode?.quiz && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowQuiz(true)}
            className={`p-3 rounded-full shadow-lg ${
              isDarkMode
                ? 'bg-primary-600 hover:bg-primary-500 text-white'
                : 'bg-primary-500 hover:bg-primary-400 text-white'
            }`}
          >
            <ClipboardCheck className="h-5 w-5" />
          </motion.button>
        )}

        {course.content?.normalMode?.references && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowReferences(true)}
            className={`p-3 rounded-full shadow-lg ${
              isDarkMode
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-blue-500 hover:bg-blue-400 text-white'
            }`}
          >
            <BookOpen className="h-5 w-5" />
          </motion.button>
        )}

        {course.content?.normalMode?.videos && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowVideos(true)}
            className={`p-3 rounded-full shadow-lg ${
              isDarkMode
                ? 'bg-red-600 hover:bg-red-500 text-white'
                : 'bg-red-500 hover:bg-red-400 text-white'
            }`}
          >
            <Youtube className="h-5 w-5" />
          </motion.button>
        )}
      </div>

      {/* Modals */}
      {showQuiz && course.content?.normalMode?.quiz && (
        <QuizModal
          isOpen={showQuiz}
          onClose={() => setShowQuiz(false)}
          isDarkMode={isDarkMode}
          quizId={course.content.normalMode.quiz.id}
          title={course.content.normalMode.quiz.title}
          questions={course.content.normalMode.quiz.questions}
        />
      )}

      {/* References Modal */}
      {showReferences && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowReferences(false)} />
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-2xl rounded-xl shadow-2xl p-6 ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Références</h2>
                <button
                  onClick={() => setShowReferences(false)}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="space-y-4">
                {course.content?.normalMode?.references.map((ref: any, index: number) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-semibold">{ref.title}</span>
                    <span className="text-sm text-gray-500">{ref.edition}</span>
                    <span className="text-sm">{ref.pages}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      )}

      {/* Videos Modal */}
      {showVideos && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowVideos(false)} />
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-2xl rounded-xl shadow-2xl p-6 ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Vidéos Suggérées</h2>
                <button
                  onClick={() => setShowVideos(false)}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="space-y-4">
                {course.content?.normalMode?.videos.map((video: any, index: number) => (
                  <li key={index}>
                    <button
                      onClick={() => openYoutubeVideo(video.url)}
                      className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${
                        isDarkMode
                          ? 'hover:bg-gray-700 bg-gray-750'
                          : 'hover:bg-gray-100 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Youtube className="h-5 w-5 text-red-500" />
                        <span>{video.title}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseActions;