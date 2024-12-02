import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Module } from '../types';
import SearchBar from './SearchBar';
import { Filter } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';

interface ModuleListProps {
  modules: Module[];
  isDarkMode: boolean;
  onModuleSelect: (moduleId: string) => void;
  isClinicalMode?: boolean;
}

const ModuleList: React.FC<ModuleListProps> = ({ 
  modules, 
  isDarkMode, 
  onModuleSelect,
  isClinicalMode = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fundamental' | 'systems'>('all');
  const [moduleErrors, setModuleErrors] = useState<{[key: string]: boolean}>({});

  const handleCourseSelect = (moduleId: string, chapterId: string, courseId: string) => {
    const event = new CustomEvent('updateSelection', {
      detail: { moduleId, chapterId, courseId }
    });
    window.dispatchEvent(event);
  };

  const handleImageError = (moduleId: string) => {
    console.warn(`Failed to load icon for module: ${moduleId}`);
    setModuleErrors(prev => ({
      ...prev,
      [moduleId]: true
    }));
  };

  useEffect(() => {
    // Réinitialiser les erreurs si les modules changent
    setModuleErrors({});
  }, [modules]);

  const fundamentalModules = [
    'anatomy', 'biochem', 'onco', 'biophys', 'cyto', 
    'embryo', 'physio', 'histo', 'genetics', 'microbio', 'parasito'
  ];
  
  const systemModules = [
    'gastro', 'cardio', 'infectious', 'hemato', 'pulmo', 'neuro',
    'locomotor', 'immuno', 'reproductive', 'urinary'
  ];

  const filteredModules = modules.filter(module => {
    if (isClinicalMode) {
      return systemModules.includes(module.id);
    }

    if (selectedCategory === 'fundamental') {
      return fundamentalModules.includes(module.id);
    } else if (selectedCategory === 'systems') {
      return systemModules.includes(module.id);
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-4xl font-bold mb-8 text-center ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {isClinicalMode ? 'Cas Cliniques par Système' : 'Explorez nos modules d\'apprentissage'}
      </motion.h1>

      <div className="max-w-2xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            isDarkMode={isDarkMode}
            modules={modules}
            onCourseSelect={handleCourseSelect}
            isClinicalMode={isClinicalMode}
          />

          {!isClinicalMode && (
            <div className="flex items-center justify-center gap-4">
              <Filter className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <div className="flex gap-2">
                {[
                  { id: 'all', label: 'Tous' },
                  { id: 'fundamental', label: 'Modules fondamentaux' },
                  { id: 'systems', label: 'Systèmes' }
                ].map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id as 'all' | 'fundamental' | 'systems')}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? isDarkMode
                          ? 'bg-primary-600 text-white'
                          : 'bg-primary-500 text-white'
                        : isDarkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredModules.map((module, index) => {
          const Icon = module.icon;
          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-102 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 hover:shadow-blue-500/20' 
                  : 'bg-white hover:bg-gray-50 hover:shadow-blue-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                {moduleErrors[module.id] ? (
                  <AlertTriangle 
                    className={`h-8 w-8 mr-4 ${
                      isDarkMode ? 'text-red-400' : 'text-red-600'
                    }`} 
                  />
                ) : (
                  <img 
                    src={module.icon} 
                    alt={`${module.title} icon`}
                    onError={() => handleImageError(module.id)}
                    className={`h-8 w-8 mr-4 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} 
                  />
                )}
              </div>
              
              <div 
                className="cursor-pointer"
                onClick={() => onModuleSelect(module.id)}
              >
                <h2 className={`text-xl font-semibold text-center mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {module.title}
                </h2>
                
                <div className={`text-sm text-center ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {module.chapters.length} chapitres
                </div>

                <div className={`mt-2 text-xs text-center ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {fundamentalModules.includes(module.id) ? 'Module fondamental' : 'Système'}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleList;