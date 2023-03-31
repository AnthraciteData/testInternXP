// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyA55cVjKwwrx3wfNOFCSUjA3cgvo4rXSko",
  authDomain: "internxp-508c9.firebaseapp.com",
  databaseURL: "https://internxp-508c9-default-rtdb.firebaseio.com",
  projectId: "internxp-508c9",
  storageBucket: "internxp-508c9.appspot.com",
  messagingSenderId: "427538435454",
  appId: "1:427538435454:web:3a0af4701bbbbce970372f",
  measurementId: "G-5H79PPSGN8"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
