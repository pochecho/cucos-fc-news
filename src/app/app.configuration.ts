import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: 'AIzaSyBSw2xCJvcykgUvKpFn3e1IPh_4qNoQnpQ',
    authDomain: 'wep-page-2409f.firebaseapp.com',
    projectId: 'wep-page-2409f',
    storageBucket: 'wep-page-2409f.appspot.com',
    messagingSenderId: '1033333649383',
    appId: '1:1033333649383:web:78a817156551eeaa001742',
    measurementId: 'G-K3XRHRN90W',
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);