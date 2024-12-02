import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Case {
  id: string;
  title: string;
  questions: Question[];
}

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  quizId: string;
  title: string;
  questions?: Question[];
  cases?: Case[];
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, isDarkMode, title, questions, cases }) => {
  const [currentCase, setCurrentCase] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQuestions = cases ? cases[currentCase].questions : questions;
  const totalCases = cases ? cases.length : 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    if (answerIndex === currentQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else if (cases && currentCase < cases.length - 1) {
      setCurrentCase(currentCase + 1);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentCase(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const totalQuestions = cases 
    ? cases.reduce((total, c) => total + c.questions.length, 0)
    : questions?.length || 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`relative w-full max-w-2xl rounded-xl shadow-2xl p-6 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Quiz Content */}
          {!quizCompleted ? (
            <div className="space-y-6">
              {/* Cases Navigation */}
              {cases && (
                <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
                  {cases.map((c, index) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        if (selectedAnswer === null) {
                          setCurrentCase(index);
                          setCurrentQuestion(0);
                        }
                      }}
                      disabled={selectedAnswer !== null}
                      className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                        currentCase === index
                          ? isDarkMode
                            ? 'bg-primary-600 text-white'
                            : 'bg-primary-500 text-white'
                          : isDarkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } ${selectedAnswer !== null ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      Cas {index + 1}
                    </button>
                  ))}
                </div>
              )}

              {/* Case Title and Questions Navigation */}
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                {cases && (
                  <h3 className="font-semibold mb-3">{cases[currentCase].title}</h3>
                )}
                <div className="flex gap-2 overflow-x-auto">
                  {currentQuestions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (selectedAnswer === null) {
                          setCurrentQuestion(index);
                        }
                      }}
                      disabled={selectedAnswer !== null}
                      className={`px-3 py-1 rounded transition-all duration-300 ${
                        currentQuestion === index
                          ? isDarkMode
                            ? 'bg-emerald-600 text-white'
                            : 'bg-emerald-500 text-white'
                          : isDarkMode
                            ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      } ${selectedAnswer !== null ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      Q{index + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 transition-all duration-300"
                  style={{ 
                    width: `${(((currentCase * (questions?.length || 0)) + currentQuestion + 1) / totalQuestions) * 100}%` 
                  }}
                />
              </div>

              {/* Question */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Question {currentQuestion + 1} sur {currentQuestions.length}
                </h3>
                <p className="text-lg">{currentQuestions[currentQuestion]?.text}</p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                      selectedAnswer === null
                        ? isDarkMode
                          ? 'hover:bg-gray-700 bg-gray-750'
                          : 'hover:bg-gray-100 bg-gray-50'
                        : selectedAnswer === index
                          ? index === currentQuestions[currentQuestion].correctAnswer
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : index === currentQuestions[currentQuestion].correctAnswer
                            ? 'bg-green-500 text-white'
                            : isDarkMode
                              ? 'bg-gray-750'
                              : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      {selectedAnswer !== null && (
                        <span className="mr-2">
                          {index === currentQuestions[currentQuestion].correctAnswer ? (
                            <CheckCircle2 className="h-5 w-5 text-white" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="h-5 w-5 text-white" />
                          ) : null}
                        </span>
                      )}
                      {option}
                    </div>
                  </button>
                ))}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                >
                  <p className="text-sm">{currentQuestions[currentQuestion]?.explanation}</p>
                </motion.div>
              )}

              {/* Navigation */}
              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-between items-center"
                >
                  {cases && currentCase > 0 && (
                    <button
                      onClick={() => {
                        setCurrentCase(currentCase - 1);
                        setCurrentQuestion(0);
                        setSelectedAnswer(null);
                        setShowExplanation(false);
                      }}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-300 ${
                        isDarkMode
                          ? 'hover:bg-gray-700 text-gray-300'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span>Cas précédent</span>
                    </button>
                  )}
                  <button
                    onClick={handleNextQuestion}
                    className={`ml-auto flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                      isDarkMode
                        ? 'bg-primary-600 hover:bg-primary-500 text-white'
                        : 'bg-primary-500 hover:bg-primary-400 text-white'
                    }`}
                  >
                    <span>
                      {currentQuestion < currentQuestions.length - 1 
                        ? 'Question suivante'
                        : cases && currentCase < cases.length - 1
                          ? 'Cas suivant'
                          : 'Voir les résultats'
                      }
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            // Quiz Results
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6 text-center"
            >
              <div className={`p-8 rounded-full mx-auto w-32 h-32 flex items-center justify-center ${
                score === totalQuestions
                  ? 'bg-green-500'
                  : score >= totalQuestions / 2
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
              } text-white text-3xl font-bold`}>
                {score}/{totalQuestions}
              </div>
              
              <h3 className="text-2xl font-bold">
                {score === totalQuestions
                  ? 'Parfait !'
                  : score >= totalQuestions / 2
                    ? 'Bien joué !'
                    : 'Continuez à vous entraîner !'}
              </h3>
              
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Vous avez correctement répondu à {score} question{score > 1 ? 's' : ''} sur {totalQuestions}.
              </p>

              <div className="flex space-x-4">
                <button
                  onClick={resetQuiz}
                  className={`flex-1 p-4 rounded-lg font-semibold transition-colors duration-300 ${
                    isDarkMode
                      ? 'bg-primary-600 hover:bg-primary-500 text-white'
                      : 'bg-primary-500 hover:bg-primary-400 text-white'
                  }`}
                >
                  Recommencer
                </button>
                <button
                  onClick={onClose}
                  className={`flex-1 p-4 rounded-lg font-semibold transition-colors duration-300 ${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  Terminer
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default QuizModal;