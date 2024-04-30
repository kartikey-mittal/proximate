// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
// import { getMessaging } from "firebase/messaging";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAg6wVvGrg2PqukGBn7FXCex41dWOh4HMA",
//     authDomain: "proximate-2b4fd.firebaseapp.com",
//     projectId: "proximate-2b4fd",
//     storageBucket: "proximate-2b4fd.appspot.com",
//     messagingSenderId: "206256036400",
//     appId: "1:206256036400:web:c4ea052cbd83b3aa4d2bf5",
//     measurementId: "G-6Q1BJBFFL8"
//   };

// const firebaseConfig = {
//    apiKey: "AIzaSyCzDAaXidIzjcgnbi5evA8e6op9LBOKg9Y",
//   // apiKey: "feferg",
//    authDomain: "proxitest-27233.firebaseapp.com",
//   //  authDomain: "proxitest-fef.bvmnhgjbugjhfirebaseapp.com",
//    projectId: "proxitest-27233",
//   //  projectId: "proxitest-dewfe",
//   storageBucket: "proxitest-27233.appspot.com",
//   messagingSenderId: "708820532033",
//   appId: "1:708820532033:web:e66eacd0fcd800414b3fc0"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCzDAaXidIzjcgnbi5evA8e6op9LBOKg9Y",
  authDomain: "proxitest-27233.firebaseapp.com",
  projectId: "proxitest-27233",
  storageBucket: "proxitest-27233.appspot.com",
  messagingSenderId: "708820532033",
  appId: "1:708820532033:web:d840477b7617968c4b3fc0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const messaging = getMessaging(app);


export { db, storage,collection };