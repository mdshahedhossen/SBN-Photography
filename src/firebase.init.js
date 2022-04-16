// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6IdxJZj7rRS1XDB_D9qbecxZ5sMD5kQQ",
  authDomain: "sbn-photographer.firebaseapp.com",
  projectId: "sbn-photographer",
  storageBucket: "sbn-photographer.appspot.com",
  messagingSenderId: "163507876114",
  appId: "1:163507876114:web:318c0067f6541eb9ff43cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth