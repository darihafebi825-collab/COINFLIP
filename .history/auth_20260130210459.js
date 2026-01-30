// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// 🔴 PUT YOUR REAL CONFIG HERE
const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  appId: "PASTE_HERE"
};

// init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase auth loaded");

// login
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// signup
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// logout
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};

// protect pages
onAuthStateChanged(auth, user => {
  const isLoginPage = window.location.pathname.includes("index.html");

  if (!user && !isLoginPage) {
    window.location.href = "index.html";
  }

  if (user && isLoginPage) {
    window.location.href = "dashboard.html";
  }
});