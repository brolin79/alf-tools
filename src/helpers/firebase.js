import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { envVars } from "./envVars";


const { 
    VITE_API_FIREBASE_APIKEY,
    VITE_API_FIREBASE_AUTHDOMAIN,
    VITE_API_FIREBASE_PROJECTID,
    VITE_API_FIREBASE_STORAGE,
    VITE_API_FIREBASE_MESSAGING,
    VITE_API_FIREBASE_APPID
    
} = envVars();

const firebaseConfig = {
  apiKey: VITE_API_FIREBASE_APIKEY,
  authDomain: VITE_API_FIREBASE_AUTHDOMAIN,
  projectId: VITE_API_FIREBASE_PROJECTID,
  storageBucket: VITE_API_FIREBASE_STORAGE,
  messagingSenderId: VITE_API_FIREBASE_MESSAGING,
  appId: VITE_API_FIREBASE_APPID
};

export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase);