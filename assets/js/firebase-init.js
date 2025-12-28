/* ======================================================
   ServeKerala – Firebase Initialization (SAFE & MODULAR)
   Works with GitHub + Vercel
   ====================================================== */

// 🔹 Import Firebase SDKs (v9 – modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

/* ======================================================
   🔑 FIREBASE CONFIG (PASTE YOUR VALUES HERE)
   ====================================================== */
const firebaseConfig = {
  apiKey: "AIzaSyDGNp1xjRGa2XbrpxUJc0yarplLabdY53w",
  authDomain: "servekerala-012026.firebaseapp.com",
  projectId: "servekerala-012026",
  storageBucket: "servekerala-012026.firebasestorage.app",
  messagingSenderId: "803056193042",
  appId: "1:803056193042:web:6574770a4b3222bc8592cb",
  measurementId: "G-NW3CS03SJ9"
};

/* ======================================================
   🚀 Initialize Firebase
   ====================================================== */
const app = initializeApp(firebaseConfig);

/* ======================================================
   🔗 Firebase Services (Exported)
   ====================================================== */
export const auth = getAuth(app);          // Admin Login
export const db = getFirestore(app);       // Firestore Database
export const storage = getStorage(app);    // Image Uploads
export const analytics = getAnalytics(app);// Analytics (optional)

/* ======================================================
   ✅ Firebase Ready
   ====================================================== */
console.log("🔥 Firebase initialized successfully");
