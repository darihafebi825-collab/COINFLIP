import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function login() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => alert(err.message));
}