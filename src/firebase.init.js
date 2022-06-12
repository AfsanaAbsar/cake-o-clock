// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQgcevyUMkUZqQRAz15u08JwosI-mG-Ow",
    authDomain: "henna-react-firebase.firebaseapp.com",
    projectId: "henna-react-firebase",
    storageBucket: "henna-react-firebase.appspot.com",
    messagingSenderId: "530419824586",
    appId: "1:530419824586:web:2396e736225e05c4ba0133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;