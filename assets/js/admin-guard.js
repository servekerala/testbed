/* ======================================================
   ServeKerala – Admin Route Protection
   ====================================================== */

import { auth } from "./firebase-init.js";
import { onAuthStateChanged } from
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

/* ======================================================
   Protect Admin Pages
   ====================================================== */
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // ❌ Not logged in → redirect to admin login
    window.location.href = "/admin-login/";
  }
  // ✅ Logged in → stay on page
});
