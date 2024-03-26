// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "trtblog-7ff06.firebaseapp.com",
  projectId: "trtblog-7ff06",
  storageBucket: "trtblog-7ff06.appspot.com",
  messagingSenderId: "213763983485",
  appId: "1:213763983485:web:a4f19e9ce234e611684914"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);