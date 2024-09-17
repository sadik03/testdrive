// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA35yw088p0ls7u5nyxMbDTXK65gD0suy8",
  authDomain: "e-com-9579a.firebaseapp.com",
  projectId: "e-com-9579a",
  storageBucket: "e-com-9579a.appspot.com",
  messagingSenderId: "167195753299",
  appId: "1:167195753299:web:1d12ea0134c2de048a3fa6",
  measurementId: "G-JBDGKFBFM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
