import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDAn80fLwFnnffP8tt2y8j3y4N2ldsaVqY",
  authDomain: "himovie-c19d5.firebaseapp.com",
  projectId: "himovie-c19d5",
  storageBucket: "himovie-c19d5.appspot.com", // ✅ fixed
  messagingSenderId: "939791952706",
  appId: "1:939791952706:web:5fe3be65fd9e7fdd24f6db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password); // ✅ fixed
    const user = res.user;
    await addDoc(collection(db, "users"), {
      // ✅ use "users"
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" ")); // ✅ use error.message for clarity
  }
};

// Login
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" ")); // ✅ more user-friendly
  }
};

// Logout
const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout }; // ✅ fixed export
