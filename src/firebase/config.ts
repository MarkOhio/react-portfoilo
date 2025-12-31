// src/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHhVX5Vz5TNaPhhndAIRpguzr46uz4J54",
  authDomain: "testimonials-1dc13.firebaseapp.com",
  projectId: "testimonials-1dc13",
  storageBucket: "testimonials-1dc13.firebasestorage.app",
  messagingSenderId: "1079505670559",
  appId: "1:1079505670559:web:777460e9384713546dadaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
