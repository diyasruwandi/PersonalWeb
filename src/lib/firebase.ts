// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB3hzNRifzpvngjJG5bCbzfZx_ZCu-ng1Y",
  authDomain: "personal-web-55cb2.firebaseapp.com",
  databaseURL: "https://personal-web-55cb2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "personal-web-55cb2",
  storageBucket: "personal-web-55cb2.firebasestorage.app",
  messagingSenderId: "116657214247",
  appId: "1:116657214247:web:a077961e69c00a2ad10f02"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
