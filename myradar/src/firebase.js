import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAyBUsa96T__IxEJyTcPkrkp5eznGMjb8E",
    authDomain: "radar-25a52.firebaseapp.com",
    projectId: "radar-25a52",
    storageBucket: "radar-25a52.appspot.com",
    messagingSenderId: "300173309686",
    appId: "1:300173309686:web:74d0b2f51c7560bcee9ed7",
    measurementId: "G-EX9S9E0WTF"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOut = () => firebaseSignOut(auth); // Usa alias para evitar el conflicto de nombres
