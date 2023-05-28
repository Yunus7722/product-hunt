

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // Your Firebase configuration object
  apiKey: "AIzaSyAhZTvM8yRY_M1FQRzOky_-SJg3mNg_3ak",
    authDomain: "product-hunt-91a75.firebaseapp.com",
    projectId: "product-hunt-91a75",
    storageBucket: "product-hunt-91a75.appspot.com",
    messagingSenderId: "205280194754",
    appId: "1:205280194754:web:d7ef08a2dd532eae4c0b5b",
    measurementId: "G-9R87TBZ1WZ"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };

