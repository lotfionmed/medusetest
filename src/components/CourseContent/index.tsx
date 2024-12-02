import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import CourseHeader from './CourseHeader';
import CourseOutline from './CourseOutline';
import CourseQuestions from './CourseQuestions';
import CourseActions from './CourseActions';
import KeywordsModal from './KeywordsModal';
import { useOutline } from './hooks/useOutline';
import { useCourseNavigation } from './hooks/useCourseNavigation';
import ClinicalCase from '../ClinicalCase';
import AudioModal from '../Modals/AudioModal';
import MindMapModal from '../Modals/MindMapModal';
import ImageModal from '../Modals/ImageModal';
import { generateCoursePDF } from '../../utils/pdfGenerator';
import { generateClinicalCasePDF } from '../../utils/clinicalPdfGenerator';

interface CourseContentProps {
  modules: any[];
  selectedModule: string | null;
  selectedChapter: string | null;
  selectedCourse: string | null;
  isDarkMode: boolean;
  onModuleSelect: (moduleId: string) => void;
  showAudio: boolean;
  setShowAudio: (show: boolean) => void;
  isClinicalMode: boolean;
}

const CourseContent: React.FC<CourseContentProps> = ({
  modules,
  selectedModule,
  selectedChapter,
  selectedCourse,
  isDarkMode,
  showAudio,
  setShowAudio,
  isClinicalMode
}) => {
  const course = selectedModule && selectedChapter && selectedCourse
    ? modules
        .find(m => m.id === selectedModule)
        ?.chapters.find(c => c.id === selectedChapter)
        ?.courses.find(c => c.id === selectedCourse)
    : null;

  const {
    showOutline,
    setShowOutline,
    activeSection,
    outlineRef,
    menuButtonRef,
    questionsRef
  } = useOutline();

  const {
    showMindMap,
    setShowMindMap,
    showQuiz,
    setShowQuiz,
    showReferences,
    setShowReferences,
    showVideos,
    setShowVideos,
    showImage,
    setShowImage
  } = useCourseNavigation();

  const [showKeywords, setShowKeywords] = React.useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (!course) return;

    if (isClinicalMode && course.content?.clinicalMode?.cases?.[0]) {
      const pdf = generateClinicalCasePDF(course.content.clinicalMode.cases[0], isDarkMode);
      pdf.save(`cas-clinique-${course.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    } else {
      const content = {
        title: course.title,
        definition: course.content?.definition,
        questions: course.content?.normalMode?.questions,
        keywords: course.content?.normalMode?.keywords
      };
      const pdf = generateCoursePDF(content, isDarkMode);
      pdf.save(`${course.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    }
  };

  if (!course) return null;

  if (isClinicalMode && course.content?.clinicalMode?.cases) {
    return (
      <div ref={contentRef}>
        <CourseOutline
          course={course}
          isDarkMode={isDarkMode}
          showOutline={showOutline}
          setShowOutline={setShowOutline}
          activeSection={activeSection}
          outlineRef={outlineRef}
          menuButtonRef={menuButtonRef}
          questionsRef={questionsRef}
          onKeywordsClick={() => setShowKeywords(true)}
          onDownloadPDF={handleDownloadPDF}
          isClinicalMode={isClinicalMode}
        />
        <ClinicalCase
          clinicalCase={course.content.clinicalMode.cases[0]}
          clinicalQuiz={course.content.clinicalMode.clinicalQuiz}
          isDarkMode={isDarkMode}
          onBack={() => window.history.back()}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <CourseOutline
        course={course}
        isDarkMode={isDarkMode}
        showOutline={showOutline}
        setShowOutline={setShowOutline}
        activeSection={activeSection}
        outlineRef={outlineRef}
        menuButtonRef={menuButtonRef}
        questionsRef={questionsRef}
        onKeywordsClick={() => setShowKeywords(true)}
        onDownloadPDF={handleDownloadPDF}
        isClinicalMode={isClinicalMode}
      />

      <div className="max-w-3xl mx-auto p-6">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <CourseHeader
            course={course}
            isDarkMode={isDarkMode}
            showAudio={showAudio}
            setShowAudio={setShowAudio}
            setShowMindMap={setShowMindMap}
            setShowImage={setShowImage}
          />

          <CourseQuestions
            course={course}
            isDarkMode={isDarkMode}
            questionsRef={questionsRef}
          />

          <CourseActions
            course={course}
            isDarkMode={isDarkMode}
            showQuiz={showQuiz}
            setShowQuiz={setShowQuiz}
            showReferences={showReferences}
            setShowReferences={setShowReferences}
            showVideos={showVideos}
            setShowVideos={setShowVideos}
          />
        </motion.div>
      </div>

      {/* Modals */}
      <AudioModal
        isOpen={showAudio && !!course.content?.audio}
        onClose={() => setShowAudio(false)}
        isDarkMode={isDarkMode}
        audioUrl={course.content?.audio?.url || ''}
        audioTitle={course.content?.audio?.title || ''}
      />

      <MindMapModal
        isOpen={showMindMap && !!course.content?.mindMap}
        onClose={() => setShowMindMap(false)}
        isDarkMode={isDarkMode}
        mindMap={course.content?.mindMap}
      />

      <ImageModal
        isOpen={showImage && !!course.content?.images}
        onClose={() => setShowImage(false)}
        isDarkMode={isDarkMode}
        imageUrl={course.content?.images?.[0]?.url || ''}
        imageTitle={course.content?.images?.[0]?.title || ''}
        imageDescription={course.content?.images?.[0]?.description || ''}
        images={course.content?.images}
      />

      <KeywordsModal
        isOpen={showKeywords}
        onClose={() => setShowKeywords(false)}
        isDarkMode={isDarkMode}
        keywords={course.content?.normalMode?.keywords || []}
        title={course.title}
      />
    </div>
  );
};

export default CourseContent;