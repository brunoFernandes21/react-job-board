// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0jai4GFfbmOGIlIRxHNEzfLsNbsSVnZA",
  authDomain: "reactjobboard-fba8e.firebaseapp.com",
  projectId: "reactjobboard-fba8e",
  storageBucket: "reactjobboard-fba8e.appspot.com",
  messagingSenderId: "1010069986233",
  appId: "1:1010069986233:web:ded756521568c192403468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);