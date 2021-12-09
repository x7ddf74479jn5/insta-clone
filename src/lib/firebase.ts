// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-RGb3Q93jOwE0JEnukZG6INcy2L3D24",
  authDomain: "insta-f09b1.firebaseapp.com",
  projectId: "insta-f09b1",
  storageBucket: "insta-f09b1.appspot.com",
  messagingSenderId: "146651459231",
  appId: "1:146651459231:web:bce0b0d494fedb779c7caa",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
