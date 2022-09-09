import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.SENDER_ID,
//   appId: process.env.APP_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyCxGhqk5X7ydO3jgsepklxsej8hcb-PlBk",
  authDomain: "twitter-clone-a7323.firebaseapp.com",
  projectId: "twitter-clone-a7323",
  storageBucket: "twitter-clone-a7323.appspot.com",
  messagingSenderId: "649855340920",
  appId: "1:649855340920:web:ad762e2a33ccd7415ef88d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
export const storage = getStorage();

