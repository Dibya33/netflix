// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB8tqTpXvY3MVDHKMdgqeLVAzs2XIGsjv4',
    authDomain: 'netflix-e0abc.firebaseapp.com',
    projectId: 'netflix-e0abc',
    storageBucket:'netflix-e0abc.appspot.com',
    messagingSenderId: '520305269880',
    appId: '1:520305269880:web:ba46f6335c66952313618d'
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)