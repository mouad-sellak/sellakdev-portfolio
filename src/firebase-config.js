// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDZhmcnI_qJ2DrP_0vUQlPWFmAT2BQ4JE",
  authDomain: "sellakdev-e25ab.firebaseapp.com",
  projectId: "sellakdev-e25ab",
  storageBucket: "sellakdev-e25ab.appspot.com",
  messagingSenderId: "619264538473",
  appId: "1:619264538473:web:0575ab2f0b4114d3eceff8",
  measurementId: "G-38JG4WCE9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)