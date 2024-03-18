
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBvHm_HPzJPnfVP_CKNm7-547AOiEtQh7w",
  authDomain: "kassa-3288f.firebaseapp.com",
  projectId: "kassa-3288f",
  storageBucket: "kassa-3288f.appspot.com",
  messagingSenderId: "1008579433632",
  appId: "1:1008579433632:web:80595e0dcc78a03a5a25c5",
  measurementId: "G-GFZVQE8XE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);







