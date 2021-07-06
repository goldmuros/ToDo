import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1-gZPIw_00lVi25HBMfem1mId7-QAXGA",
  authDomain: "todo-9a80f.firebaseapp.com",
  databaseURL: "https://todo-9a80f-default-rtdb.firebaseio.com",
  projectId: "todo-9a80f",
  storageBucket: "todo-9a80f.appspot.com",
  messagingSenderId: "996496503935",
  appId: "1:996496503935:web:aed6841c5834d07a6afb4a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
