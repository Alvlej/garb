// Importera Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Din Firebase-konfiguration
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initiera Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
