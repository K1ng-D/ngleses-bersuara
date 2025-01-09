// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbL0IOsOLAHFqXg7ohYc69bDf0oGRCtUw",
  authDomain: "ngleses-bersuara.firebaseapp.com",
  projectId: "ngleses-bersuara",
  storageBucket: "ngleses-bersuara.firebasestorage.app",
  messagingSenderId: "825605598882",
  appId: "1:825605598882:web:fad5d84f0ad49ec25871fb",
  measurementId: "G-T2J8J53LNP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
