// ================================
// FIREBASE CONFIG
// ================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// 🔴 REPLACE with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

// ================================
// INIT
// ================================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ================================
// LOGIN
// ================================
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// ================================
// SIGN UP (OPTIONAL)
// ================================
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// ================================
// LOGOUT
// ================================
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};

// ================================
// PROTECT PAGES
// ================================
onAuthStateChanged(auth, (user) => {
  const isLoginPage = window.location.pathname.includes("index.html");

  if (!user && !isLoginPage) {
    window.location.href = "index.html";
  }

  if (user && isLoginPage) {
    window.location.href = "dashboard.html";
  }
});

// ================================
// GET CURRENT USER
// ================================
window.getCurrentUser = function () {
  return auth.currentUser;
};