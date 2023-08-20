// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfViZZZP-Y0rxvEPz-nGQMIgLVzjdugT8",
  authDomain: "fir-react-app-f1c7f.firebaseapp.com",
  projectId: "fir-react-app-f1c7f",
  storageBucket: "fir-react-app-f1c7f.appspot.com",
  messagingSenderId: "979107617769",
  appId: "1:979107617769:web:b32c0fb6c82a47b4d8c978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

