// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3lRGWobNtMkFXSsVdSlDTjYbUATAApoY",
  authDomain: "mbrito-38040.firebaseapp.com",
  projectId: "mbrito-38040",
  storageBucket: "mbrito-38040.appspot.com",
  messagingSenderId: "1079889008758",
  appId: "1:1079889008758:web:785bcb8138367beb526757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

