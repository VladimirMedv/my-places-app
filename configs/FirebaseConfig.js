// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLSj01wJofjef36gd3AeE5PAVLY7mqHoo",
  authDomain: "my-places-app-61e51.firebaseapp.com",
  projectId: "my-places-app-61e51",
  storageBucket: "my-places-app-61e51.appspot.com",
  messagingSenderId: "586689275434",
  appId: "1:586689275434:web:ef5623a10d1451c6d60553",
  measurementId: "G-F5DSTM3BNJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
