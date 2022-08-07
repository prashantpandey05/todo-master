// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy2I7_EG50wAQirzulrGNYFw1DZy_eHiI",
  authDomain: "todo-1962b.firebaseapp.com",
  projectId: "todo-1962b",
  storageBucket: "todo-1962b.appspot.com",
  messagingSenderId: "333706148119",
  appId: "1:333706148119:web:01df5cdabce5f5f16ddf52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)