// src/firebase.js

import { initializeApp } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:         "AIzaSyCA2J6GjhugENuFm5RlWGL42hMfbkFwSOE",
  authDomain:     "vendaph.firebaseapp.com",
  projectId:      "vendaph",
  storageBucket:  "vendaph.firebasestorage.app",
  messagingSenderId: "193334376175",
  appId:          "1:193334376175:web:4de91bfa46d7fca789cd1a",
  measurementId:  "G-1X3DPBRTLF"
}

// Initialize Firebase
const app  = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// Authentication helpers
export const registerWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

export const loginWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

export const logout = () =>
  signOut(auth)

// Listener for auth-state changes
export const onAuthChange = (callback) =>
  onAuthStateChanged(auth, callback)
