import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyC_fRwUALgV0CDMEdtz1x5aBTYV3o3n5vQ",
    authDomain: "timothy-portfolio-ef733.firebaseapp.com",
    projectId: "timothy-portfolio-ef733",
    storageBucket: "timothy-portfolio-ef733.appspot.com",
    messagingSenderId: "530647493619",
    appId: "1:530647493619:web:f7204b0a3224d4eb218086",
    measurementId: "G-PFZCPL9R9Z"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  export const auth = getAuth(app)
  export const storage = getStorage(app)