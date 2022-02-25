// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoOUxVdH6giJHbHWm4q41uKRYzI3HQnDU",
  authDomain: "uber-next-clone-41e75.firebaseapp.com",
  projectId: "uber-next-clone-41e75",
  storageBucket: "uber-next-clone-41e75.appspot.com",
  messagingSenderId: "52485907986",
  appId: "1:52485907986:web:399a2eb4ac25d03498dacb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { provider, app, auth };