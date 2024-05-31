// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyBUsa96T__IxEJyTcPkrkp5eznGMjb8E",
  authDomain: "radar-25a52.firebaseapp.com",
  projectId: "radar-25a52",
  storageBucket: "radar-25a52.appspot.com",
  messagingSenderId: "300173309686",
  appId: "1:300173309686:web:74d0b2f51c7560bcee9ed7",
  measurementId: "G-EX9S9E0WTF"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);

export { firebaseApp, auth, provider, firestore };
