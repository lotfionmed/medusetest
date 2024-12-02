import { useState } from 'react';

export const useCourseNavigation = () => {
  const [showMindMap, setShowMindMap] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [showImage, setShowImage] = useState(false);

  return {
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
  };
};