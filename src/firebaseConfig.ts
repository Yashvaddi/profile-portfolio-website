// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPAiIVISn3eQbcpTW6mHkYJ5a07VaH3d4",
  authDomain: "yash-s-portfolio-react-dev.firebaseapp.com",
  projectId: "yash-s-portfolio-react-dev",
  storageBucket: "yash-s-portfolio-react-dev.firebasestorage.app",
  messagingSenderId: "374712250777",
  appId: "1:374712250777:web:419dfa651b9095cb6c6308",
  measurementId: "G-2364PNP57T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
