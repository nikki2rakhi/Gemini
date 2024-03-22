// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF65pH1rbJTKL_5XkwUoABZQPbV7rjW_o",
  authDomain: "gemini-d30c1.firebaseapp.com",
  projectId: "gemini-d30c1",
  storageBucket: "gemini-d30c1.appspot.com",
  messagingSenderId: "105030768710",
  appId: "1:105030768710:web:25c118678bcbed06105247",
  measurementId: "G-27PFL4Z7BK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
