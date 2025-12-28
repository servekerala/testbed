/* ======================================================
   ServeKerala – Admin Authentication Logic
   Uses Firebase Auth (Email/Password)
   ====================================================== */

import { auth } from "./firebase-init.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

/* ======================================================
   DOM Elements
   ====================================================== */
const loginForm = document.getElementById("adminLoginForm");
const emailInput = document.getElementById("adminEmail");
const passwordInput = document.getElementById("adminPassword");
const errorBox = document.getElementById("loginError");

/* ======================================================
   Handle Admin Login
   ====================================================== */
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    errorBox.textContent = "";

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ Login successful
      window.location.href = "/admin/dashboard.html";

    } catch (error) {
      console.error("Admin login failed:", error.code);

      // Friendly error messages
      switch (error.code) {
        case "auth/user-not-found":
          errorBox.textContent = "Admin account not found.";
          break;
        case "auth/wrong-password":
          errorBox.textContent = "Incorrect password.";
          break;
        case "auth/invalid-email":
          errorBox.textContent = "Invalid email address.";
          break;
        case "auth/too-many-requests":
          errorBox.textContent = "Too many attempts. Try again later.";
          break;
        default:
          errorBox.textContent = "Login failed. Please try again.";
      }
    }
  });
}
