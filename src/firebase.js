import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyA9h5H1iNKemPSYl_krx4Y6aQPX50_HxaY",
    authDomain: "task-management-tool-dd5a9.firebaseapp.com",
    projectId: "task-management-tool-dd5a9",
    storageBucket: "task-management-tool-dd5a9.appspot.com",
    messagingSenderId: "656991711020",
    appId: "1:656991711020:web:8ad8a4d1d70b659e6d4689",
    // measurementId: "G-RBGHQP5EZ8"
});

export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)



