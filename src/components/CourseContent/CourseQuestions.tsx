import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CourseQuestionsProps {
  course: any;
  isDarkMode: boolean;
  questionsRef: React.RefObject<(HTMLDivElement | null)[]>;
}

const CourseQuestions: React.FC<CourseQuestionsProps> = ({
  course,
  isDarkMode,
  questionsRef
}) => {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const toggleQuestion = (questionId: number) => {
    if (expandedQuestions.includes(questionId)) {
      setExpandedQuestions(expandedQuestions.filter(id => id !== questionId));
    } else {
      setExpandedQuestions([...expandedQuestions, questionId]);
    }
  };

  return (
    <div className="space-y-4">
      {course.content?.normalMode?.questions.map((q: any, index: number) => (
        <motion.div
          key={q.id}
          ref={el => questionsRef.current[index] = el}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg border ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <button
            onClick={() => toggleQuestion(q.id)}
            className="w-full text-left"
          >
            <div className="flex items-center justify-between">
              <h3 className={`text-xl font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {q.question}
              </h3>
              {expandedQuestions.includes(q.id) ? (
                <ChevronUp className={`h-5 w-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
              ) : (
                <ChevronDown className={`h-5 w-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
              )}
            </div>
          </button>
          
          <AnimatePresence>
            {expandedQuestions.includes(q.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={`mt-4 pt-4 border-t ${
                  isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-600'
                }`}>
                  <div className="whitespace-pre-line">{q.answer}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default CourseQuestions;