import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, UserCircle } from 'lucide-react';
import Sidebar from '@components/Sidebar';
import CourseContent from '@components/CourseContent';
import ModuleList from '@components/ModuleList';
import ChapterList from '@components/ChapterList';
import CourseList from '@components/CourseList';
import Splashscreen from '@components/Splashscreen';
import ClinicalSplashscreen from '@components/ClinicalSplashscreen';
import AboutModal from '@components/AboutModal';
import AuthModal from '@components/AuthModal';
import ProfileModal from '@components/ProfileModal';
import ChatBot from '@components/ChatBot';
import { useModules } from '@modules/index';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showSplashscreen, setShowSplashscreen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [isClinicalMode, setIsClinicalMode] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { modules } = useModules();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    document.documentElement.style.filter = `brightness(${brightness}%)`;
  }, [brightness]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleUpdateSelection = (event: CustomEvent) => {
      const { moduleId, chapterId, courseId } = event.detail;
      setSelectedModule(moduleId);
      setSelectedChapter(chapterId);
      setSelectedCourse(courseId);
      setShowAudio(false);
      if (isMobile) setSidebarOpen(false);
    };

    window.addEventListener('updateSelection', handleUpdateSelection as EventListener);

    return () => {
      window.removeEventListener('updateSelection', handleUpdateSelection as EventListener);
    };
  }, [isMobile]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleModuleSelect = useCallback((moduleId: string) => {
    console.log('Module selected:', moduleId);
    const selectedModule = modules.find(m => m.id === moduleId);
    
    if (!selectedModule) {
      console.error(`Module with ID ${moduleId} not found`);
      return;
    }

    console.log('Selected module details:', selectedModule);
    setSelectedModule(moduleId);
    setSelectedChapter(null);
    setSelectedCourse(null);
    setShowAudio(false);
  }, [modules]);

  const handleChapterSelect = useCallback((chapterId: string) => {
    console.log('Chapter selected:', chapterId);
    
    if (!selectedModule) {
      console.error('No module selected before selecting chapter');
      return;
    }

    const currentModule = modules.find(m => m.id === selectedModule);
    
    if (!currentModule) {
      console.error(`Module with ID ${selectedModule} not found`);
      return;
    }

    const selectedChapter = currentModule.chapters.find(c => c.id === chapterId);
    
    if (!selectedChapter) {
      console.error(`Chapter with ID ${chapterId} not found in module ${currentModule.title}`);
      return;
    }

    console.log('Selected chapter details:', selectedChapter);
    setSelectedChapter(chapterId);
    setSelectedCourse(null);
    setShowAudio(false);
  }, [selectedModule, modules]);

  const handleCourseSelect = useCallback((courseId: string) => {
    console.log('Course selected:', courseId);
    
    if (!selectedModule || !selectedChapter) {
      console.error('No module or chapter selected before selecting course');
      return;
    }

    const currentModule = modules.find(m => m.id === selectedModule);
    
    if (!currentModule) {
      console.error(`Module with ID ${selectedModule} not found`);
      return;
    }

    const currentChapter = currentModule.chapters.find(c => c.id === selectedChapter);
    
    if (!currentChapter) {
      console.error(`Chapter with ID ${selectedChapter} not found in module ${currentModule.title}`);
      return;
    }

    const selectedCourse = currentChapter.courses.find(course => course.id === courseId);
    
    if (!selectedCourse) {
      console.error(`Course with ID ${courseId} not found in chapter ${currentChapter.title}`);
      return;
    }

    console.log('Selected course details:', selectedCourse);
    setSelectedCourse(courseId);
    setShowAudio(false);
  }, [selectedModule, selectedChapter, modules]);

  const goHome = () => {
    setSelectedModule(null);
    setSelectedChapter(null);
    setSelectedCourse(null);
    setShowAudio(false);
  };

  const getCurrentModule = () => {
    return selectedModule ? modules.find(m => m.id === selectedModule) : null;
  };

  const getCurrentChapter = () => {
    const module = getCurrentModule();
    return module && selectedChapter 
      ? module.chapters.find(c => c.id === selectedChapter)
      : null;
  };

  const toggleClinicalMode = () => {
    setIsClinicalMode(!isClinicalMode);
    setShowSplashscreen(true);
    goHome();
    setSidebarOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowUserMenu(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (showSplashscreen) {
    return isClinicalMode ? (
      <ClinicalSplashscreen onComplete={() => setShowSplashscreen(false)} isDarkMode={isDarkMode} />
    ) : (
      <Splashscreen onComplete={() => setShowSplashscreen(false)} isDarkMode={isDarkMode} />
    );
  }

  const renderContent = () => {
    const currentModule = getCurrentModule();
    const currentChapter = getCurrentChapter();

    if (selectedCourse && currentModule && currentChapter) {
      return (
        <CourseContent
          modules={modules}
          selectedModule={selectedModule}
          selectedChapter={selectedChapter}
          selectedCourse={selectedCourse}
          isDarkMode={isDarkMode}
          onModuleSelect={handleModuleSelect}
          showAudio={showAudio}
          setShowAudio={setShowAudio}
          isClinicalMode={isClinicalMode}
        />
      );
    }

    if (selectedChapter && currentModule) {
      return (
        <CourseList
          module={currentModule}
          chapter={currentChapter!}
          isDarkMode={isDarkMode}
          onCourseSelect={handleCourseSelect}
          onBack={() => setSelectedChapter(null)}
          isClinicalMode={isClinicalMode}
        />
      );
    }

    if (selectedModule && currentModule) {
      return (
        <ChapterList
          module={currentModule}
          isDarkMode={isDarkMode}
          onChapterSelect={handleChapterSelect}
          onBack={() => setSelectedModule(null)}
          isClinicalMode={isClinicalMode}
        />
      );
    }

    return (
      <ModuleList
        modules={modules}
        isDarkMode={isDarkMode}
        onModuleSelect={handleModuleSelect}
        isClinicalMode={isClinicalMode}
      />
    );
  };

  return (
    <div className={`h-screen flex ${isDarkMode ? 'dark bg-gray-900' : isClinicalMode ? 'bg-emerald-50' : 'bg-primary-50'}`}>
      <div className="flex-1 flex flex-col">
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`h-16 ${
            isDarkMode ? 'bg-gray-800' : isClinicalMode ? 'bg-white border-b border-emerald-100' : 'bg-white border-b border-primary-100'
          } shadow-lg flex items-center justify-between px-4 sticky top-0 z-30`}
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goHome}
              className="flex items-center cursor-pointer"
            >
              <div className="relative w-10 h-10">
                <motion.svg
                  viewBox="0 0 24 24"
                  className={`w-full h-full ${
                    isDarkMode 
                      ? isClinicalMode ? 'text-emerald-400' : 'text-primary-400'
                      : isClinicalMode ? 'text-emerald-600' : 'text-primary-600'
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <path fill="currentColor" d="M12,2C7.58,2,4,5.58,4,10c0,4.42,3.58,8,8,8s8-3.58,8-8C20,5.58,16.42,2,12,2z" />
                  <path fill="currentColor" d="M12,4c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,4,12,4z" />
                </motion.svg>
              </div>
              <motion.span
                className={`ml-2 text-xl font-bold hidden sm:inline ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {isClinicalMode ? 'MEDUSE CLINIC' : 'MEDUSE'}
              </motion.span>
            </motion.div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => user ? setShowUserMenu(!showUserMenu) : setIsAuthOpen(true)}
                className={`p-2 rounded-lg transition-colors duration-300 flex items-center gap-2 ${
                  isDarkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : isClinicalMode
                      ? 'text-emerald-600 hover:bg-emerald-50'
                      : 'text-primary-600 hover:bg-primary-50'
                }`}
              >
                <UserCircle className="h-6 w-6" />
                {user && (
                  <span className="hidden sm:inline">{user.displayName || 'Utilisateur'}</span>
                )}
              </motion.button>

              {showUserMenu && user && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } ring-1 ring-black ring-opacity-5`}
                >
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        setIsProfileOpen(true);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        isDarkMode 
                          ? 'text-gray-200 hover:bg-gray-700' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Profil
                    </button>
                    <button
                      onClick={handleLogout}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        isDarkMode 
                          ? 'text-gray-200 hover:bg-gray-700' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Se déconnecter
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSidebar}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-200 hover:bg-gray-700' 
                  : isClinicalMode
                    ? 'text-emerald-600 hover:bg-emerald-50'
                    : 'text-primary-600 hover:bg-primary-50'
              }`}
            >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </motion.header>

        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex-1 overflow-auto p-4 md:p-6 ${isSidebarOpen ? 'mr-0 md:mr-64' : 'mr-0'}`}
        >
          {renderContent()}
        </motion.main>
      </div>

      {/* Overlay pour la version mobile */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Barre latérale */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className={`fixed top-0 right-0 h-full z-50 ${isMobile ? 'w-64' : 'w-64'}`}
          >
            <Sidebar
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              brightness={brightness}
              setBrightness={setBrightness}
              onAboutClick={() => setIsAboutOpen(true)}
              onClose={() => setSidebarOpen(false)}
              isClinicalMode={isClinicalMode}
              toggleClinicalMode={toggleClinicalMode}
              modules={modules}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        isDarkMode={isDarkMode}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        isDarkMode={isDarkMode}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        isDarkMode={isDarkMode}
      />
      <ChatBot isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default App;