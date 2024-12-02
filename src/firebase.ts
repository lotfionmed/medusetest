import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZAdNGZ827qTOM8T0GXKBua3sTWzCrqFM",
  authDomain: "meduse-36385.firebaseapp.com",
  projectId: "meduse-36385",
  storageBucket: "meduse-36385.firebasestorage.app",
  messagingSenderId: "239641402171",
  appId: "1:239641402171:web:d7b6fd0a6b5fea0b9a351e",
  measurementId: "G-09Q1X8Z3XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;