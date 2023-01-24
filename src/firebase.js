// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWCO4m3eoospnRcOEyUN7z1oMOR2TGN54",
  authDomain: "realtor-1-66dab.firebaseapp.com",
  projectId: "realtor-1-66dab",
  storageBucket: "realtor-1-66dab.appspot.com",
  messagingSenderId: "37609295919",
  appId: "1:37609295919:web:ba29868c9a4e0764ee76da"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()