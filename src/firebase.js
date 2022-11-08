import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = firebase.initializeApp({
        apiKey: "AIzaSyBV_NoH8o6IaX_IefqiCGWPrSYdE0Thg5Q",
        authDomain: "clone-dd366.firebaseapp.com",
        projectId: "clone-dd366",
        storageBucket: "clone-dd366.appspot.com",
        messagingSenderId: "362911133946",
        appId: "1:362911133946:web:a55f95ab87df907f4a5943",
        measurementId: "G-8BQKZ7K2HR"
});

// const auth = initializeApp(firebaseConfig);
const auth = firebase.auth()
// const analytics = getAnalytics(auth);

export { auth}