import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  image: string;
  isDarkMode: boolean;
  content?: {
    definition?: string;
    types?: string[];
    clinicalSigns?: string[];
    diagnosis?: string[];
    treatment?: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  image,
  isDarkMode,
  content
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:scale-102 hover:-translate-y-1 ${
        isDarkMode ? 'bg-gray-800 hover:shadow-blue-500/20' : 'bg-white hover:shadow-blue-500/30'
      } ${isHovered ? 'shadow-xl' : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out hover:scale-110"
        />
      </div>
      <div className={`p-6 transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-750' : 'hover:bg-gray-50'}`}>
        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        } ${isHovered ? 'text-blue-500' : ''}`}>
          {title}
        </h3>
        <p className={`mb-4 transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className={`flex items-center transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
            <Clock className={`h-4 w-4 transition-colors duration-300 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            } ${isHovered ? 'text-blue-500' : ''}`} />
            <span className={`ml-2 text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {duration}
            </span>
          </div>
          {content && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center text-sm transition-all duration-300 transform ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              } ${isHovered ? 'scale-105' : ''} hover:translate-x-1`}
            >
              {isExpanded ? (
                <>
                  <span className="mr-1">Moins</span>
                  <ChevronUp className="h-4 w-4 transition-transform duration-300" />
                </>
              ) : (
                <>
                  <span className="mr-1">Plus</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                </>
              )}
            </button>
          )}
        </div>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {content && (
            <div className={`mt-4 pt-4 border-t transition-colors duration-300 ${
              isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-700'
            }`}>
              {content.definition && (
                <div className="mb-3 transform transition-all duration-300 hover:translate-x-2">
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Définition
                  </h4>
                  <p>{content.definition}</p>
                </div>
              )}
              {content.types && (
                <div className="mb-3 transform transition-all duration-300 hover:translate-x-2">
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Types
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {content.types.map((type, index) => (
                      <li key={index} className="transition-transform duration-200 hover:translate-x-1">{type}</li>
                    ))}
                  </ul>
                </div>
              )}
              {content.clinicalSigns && (
                <div className="mb-3 transform transition-all duration-300 hover:translate-x-2">
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Signes Cliniques
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {content.clinicalSigns.map((sign, index) => (
                      <li key={index} className="transition-transform duration-200 hover:translate-x-1">{sign}</li>
                    ))}
                  </ul>
                </div>
              )}
              {content.diagnosis && (
                <div className="mb-3 transform transition-all duration-300 hover:translate-x-2">
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Diagnostic
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {content.diagnosis.map((item, index) => (
                      <li key={index} className="transition-transform duration-200 hover:translate-x-1">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {content.treatment && (
                <div className="mb-3 transform transition-all duration-300 hover:translate-x-2">
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Traitement
                  </h4>
                  <p>{content.treatment}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;