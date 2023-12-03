import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfVTLTp8WVOGx6WyWMyQn85rNRfZCMPso",
  authDomain: "courses-79e7d.firebaseapp.com",
  projectId: "courses-79e7d",
  storageBucket: "courses-79e7d.appspot.com",
  messagingSenderId: "286065822566",
  appId: "1:286065822566:web:cbb75ab2866358513a16a7",
  measurementId: "G-X34PYEVBD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}