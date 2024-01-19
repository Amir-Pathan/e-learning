import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ2hhr0euBJ94RsO8mMbNHFOemjCw3wI8",
  authDomain: "tokyo-crossbar-362406.firebaseapp.com",
  projectId: "tokyo-crossbar-362406",
  storageBucket: "tokyo-crossbar-362406.appspot.com",
  messagingSenderId: "520218560267",
  appId: "1:520218560267:web:88eb0af336595660e2040e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}