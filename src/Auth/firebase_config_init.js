// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJU-GDw_CdLL-2PAv5N8tctAPJXUd0aI4",
    authDomain: "to-travel-daa88.firebaseapp.com",
    projectId: "to-travel-daa88",
    storageBucket: "to-travel-daa88.firebasestorage.app",
    messagingSenderId: "29300458705",
    appId: "1:29300458705:web:c6f4f00be6245ac95cb1f0",
    measurementId: "G-FZK0WTDQ4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;