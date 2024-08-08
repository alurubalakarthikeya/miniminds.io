import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVs4SVCoYzk7-SJnejF9rSMNRC_deUkys",
  authDomain: "minimindslogin.firebaseapp.com",
  projectId: "minimindslogin",
  storageBucket: "minimindslogin.appspot.com",
  messagingSenderId: "825100100718",
  appId: "1:825100100718:web:29ad5e9a0fde9f57bdb27f",
  measurementId: "G-2KX291SFHM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value; // Move this inside the event listener
    const password = document.getElementById('password').value; // Move this inside the event listener

    alert("Sign in if you already have an account!");
    // Additional logic for signing in can be added here
});
