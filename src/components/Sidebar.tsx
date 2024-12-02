import React from 'react';
import { Sun, Moon, Info, X, GraduationCap, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { Module } from '../types';

interface SidebarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  brightness: number;
  setBrightness: (value: number) => void;
  onAboutClick: () => void;
  onClose: () => void;
  isClinicalMode: boolean;
  toggleClinicalMode: () => void;
  modules: Module[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isDarkMode,
  toggleDarkMode,
  brightness,
  setBrightness,
  onAboutClick,
  onClose,
  isClinicalMode,
  toggleClinicalMode,
  modules
}) => {
  // Liste des modules de type système et fondamentaux
  const systemModules = [
    'gastro', 'cardio', 'infectious', 'hemato', 'pulmo', 'neuro',
    'locomotor', 'immuno', 'reproductive', 'urinary'
  ];
  
  const fundamentalModules = [
    'anatomy', 'biochem', 'onco', 'biophys', 'cyto', 
    'embryo', 'physio', 'histo', 'genetics', 'microbio', 'parasito'
  ];

  // Calcul des statistiques
  const calculateStats = () => {
    const filteredModules = isClinicalMode 
      ? modules.filter(m => systemModules.includes(m.id))
      : modules;

    let totalModules = filteredModules.length;
    let totalCourses = 0;
    let totalQuizQuestions = 0;
    let totalKeywords = 0;
    let totalImages = 0;
    let totalClinicalCases = 0;

    filteredModules.forEach(module => {
      module.chapters.forEach(chapter => {
        chapter.courses.forEach(course => {
          totalCourses++;

          if (isClinicalMode) {
            // Stats mode clinique
            if (course.content?.clinicalMode?.clinicalQuiz?.cases) {
              totalClinicalCases += course.content.clinicalMode.clinicalQuiz.cases.length;
            }
          } else {
            // Stats mode normal
            if (course.content?.normalMode?.quiz?.questions) {
              totalQuizQuestions += course.content.normalMode.quiz.questions.length;
            }
            if (course.content?.normalMode?.keywords) {
              totalKeywords += course.content.normalMode.keywords.length;
            }
            if (course.content?.images) {
              totalImages += course.content.images.length;
            }
          }
        });
      });
    });

    return {
      modules: totalModules,
      courses: totalCourses,
      quizQuestions: totalQuizQuestions,
      keywords: totalKeywords,
      images: totalImages,
      clinicalCases: totalClinicalCases
    };
  };

  const stats = calculateStats();

  return (
    <div className={`h-full w-full flex flex-col ${
      isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    } shadow-lg`}>
      <div className="flex justify-between items-center p-4 border-b border-primary-100 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
            }}
            className="relative w-6 h-6"
          >
            <motion.svg
              viewBox="0 0 24 24"
              className={`w-full h-full ${
                isDarkMode 
                  ? isClinicalMode ? 'text-emerald-400' : 'text-primary-400'
                  : isClinicalMode ? 'text-emerald-600' : 'text-primary-600'
              }`}
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M12,2C7.58,2,4,5.58,4,10c0,4.42,3.58,8,8,8s8-3.58,8-8C20,5.58,16.42,2,12,2z"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M12,4c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,4,12,4z"
              />
            </motion.svg>
          </motion.div>
          <h2 className="text-lg font-semibold">{isClinicalMode ? 'MEDUSE CLINIC' : 'MEDUSE'}</h2>
        </div>
        <button
          onClick={onClose}
          className={`p-2 rounded-lg transition-colors duration-300 ${
            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-primary-50'
          }`}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Statistiques de la plateforme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-4 rounded-lg ${
            isDarkMode ? 'bg-gray-700' : isClinicalMode ? 'bg-emerald-50' : 'bg-primary-50'
          }`}
        >
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            {isClinicalMode ? 'Statistiques - Mode Clinique' : 'Statistiques'}
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">
                {isClinicalMode ? 'Systèmes' : 'Modules'}
              </span>
              <span className="font-semibold">{stats.modules}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">
                {isClinicalMode ? 'Cas cliniques' : 'Cours'}
              </span>
              <span className="font-semibold">{stats.courses}</span>
            </div>
            {isClinicalMode ? (
              <div className="flex justify-between items-center">
                <span className="text-sm">Cas dans les quiz</span>
                <span className="font-semibold">{stats.clinicalCases}</span>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Questions de quiz</span>
                  <span className="font-semibold">{stats.quizQuestions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mots-clés</span>
                  <span className="font-semibold">{stats.keywords}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Images</span>
                  <span className="font-semibold">{stats.images}</span>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Paramètres */}
        <div className="space-y-4">
          <motion.div 
            className="space-y-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={toggleDarkMode}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : isClinicalMode
                    ? 'bg-emerald-50 hover:bg-emerald-100'
                    : 'bg-primary-50 hover:bg-primary-100'
              }`}
            >
              <span>{isDarkMode ? 'Mode clair' : 'Mode sombre'}</span>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </motion.div>

          <motion.div 
            className="space-y-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={toggleClinicalMode}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : isClinicalMode
                    ? 'bg-emerald-50 hover:bg-emerald-100'
                    : 'bg-primary-50 hover:bg-primary-100'
              }`}
            >
              <span>{isClinicalMode ? 'Mode cours' : 'Mode clinique'}</span>
              <Stethoscope className={`h-5 w-5 ${
                isClinicalMode ? 'text-emerald-600' : ''
              }`} />
            </button>
          </motion.div>
          
          <div className="space-y-2">
            <label className="flex items-center justify-between">
              <span>Luminosité</span>
              <span className="text-sm">{brightness}%</span>
            </label>
            <input
              type="range"
              min="50"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                isDarkMode ? 'bg-gray-700' : isClinicalMode ? 'bg-emerald-100' : 'bg-primary-100'
              }`}
              style={{
                backgroundImage: `linear-gradient(to right, ${
                  isDarkMode ? '#c084fc' : isClinicalMode ? '#059669' : '#9333ea'
                } 0%, ${
                  isDarkMode ? '#c084fc' : isClinicalMode ? '#059669' : '#9333ea'
                } ${brightness}%, ${
                  isDarkMode ? '#374151' : isClinicalMode ? '#ecfdf5' : '#f3e8ff'
                } ${brightness}%)`
              }}
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAboutClick}
          className={`w-full p-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : isClinicalMode
                ? 'bg-emerald-50 hover:bg-emerald-100'
                : 'bg-primary-50 hover:bg-primary-100'
          }`}
        >
          <Info className="h-5 w-5" />
          <span>À propos</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Sidebar;