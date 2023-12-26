// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcBoiG_ZkMS4fvHBcovoWCcWBahf63dn4",
  authDomain: "x-clone-69d30.firebaseapp.com",
  projectId: "x-clone-69d30",
  storageBucket: "x-clone-69d30.appspot.com",
  messagingSenderId: "585690642204",
  appId: "1:585690642204:web:d2dda1aa8ee43cfa3bacd9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
