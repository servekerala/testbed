import { auth } from "./firebase-init.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".admin-login-form");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ CORRECT PATH
      window.location.href = "/admin-login/dashboard.html";

    } catch (error) {
      alert("Login failed: " + error.message);
    }
  });
});
