import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",                 // Replace with your API key
    authDomain: "your-app.firebaseapp.com",  // Replace with your auth domain
    projectId: "your-project-id",           // Replace with your project ID
    storageBucket: "your-app.appspot.com",   // Replace with your storage bucket
    messagingSenderId: "your-sender-id",    // Replace with your messaging sender ID
    appId: "your-app-id",                   // Replace with your app ID
    measurementId: "your-measurement-id"    // Optional, for Google Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;