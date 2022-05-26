import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfwEP_Ux2h3UQgxAKztKX_dy47w24K2dI",
    authDomain: "full-commerce-newsletter.firebaseapp.com",
    projectId: "full-commerce-newsletter",
    storageBucket: "full-commerce-newsletter.appspot.com",
    messagingSenderId: "286985967697",
    appId: "1:286985967697:web:81c932ad2a649bbfab8070"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();

  export default db;
