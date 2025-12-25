/* =====================================
   SERVEKERALA – GLOBAL MAIN JS
   Used across entire website
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     MOBILE MENU TOGGLE
  =============================== */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
    });
  }

  /* ===============================
     SEARCH HANDLER (SAFE PLACEHOLDER)
     Later can be connected to backend
  =============================== */
  const searchBtn = document.querySelector(".btn-search");

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      const selects = document.querySelectorAll(".search-box select");
      let params = [];

      selects.forEach(select => {
        if (select.value.trim() !== "") {
          params.push(
            encodeURIComponent(select.value.toLowerCase().replace(/\s+/g, "-"))
          );
        }
      });

      if (params.length > 0) {
        // Example redirect structure
        window.location.href = "/search/" + params.join("/");
      } else {
        alert("Please select at least one option to search.");
      }
    });
  }

  /* ===============================
     CLICK TRACKING (CALL / WHATSAPP / EMAIL)
     Backend or GA4 can listen to this
  =============================== */
  function trackAction(type, value) {
    // Console log for now (safe)
    console.log("Tracked:", type, value);

    // Example hook for backend / GA4
    /*
    fetch("/track-action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: type,
        value: value,
        timestamp: new Date().toISOString()
      })
    });
    */
  }

  // Call tracking
  document.querySelectorAll("a[href^='tel:']").forEach(link => {
    link.addEventListener("click", function () {
      trackAction("call", this.getAttribute("href"));
    });
  });

  // WhatsApp tracking
  document.querySelectorAll("a[href*='wa.me']").forEach(link => {
    link.addEventListener("click", function () {
      trackAction("whatsapp", this.getAttribute("href"));
    });
  });

  // Email tracking
  document.querySelectorAll("a[href^='mailto:']").forEach(link => {
    link.addEventListener("click", function () {
      trackAction("email", this.getAttribute("href"));
    });
  });

  /* ===============================
     OFFER AUTO-EXPIRY HANDLER
     Requires data-valid-to attribute
  =============================== */
  const today = new Date().setHours(0, 0, 0, 0);

  document.querySelectorAll("[data-valid-to]").forEach(item => {
    const validTo = new Date(item.getAttribute("data-valid-to")).setHours(0, 0, 0, 0);
    if (validTo < today) {
      item.style.display = "none";
    }
  });

  /* ===============================
     EVENT AUTO-HIDE HANDLER
     Requires data-event-date attribute
  =============================== */
  document.querySelectorAll("[data-event-date]").forEach(eventItem => {
    const eventDate = new Date(eventItem.getAttribute("data-event-date")).setHours(0, 0, 0, 0);
    if (eventDate < today) {
      eventItem.style.display = "none";
    }
  });

  /* ===============================
     UX: CLOSE MENU ON LINK CLICK (MOBILE)
  =============================== */
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", function () {
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
      }
    });
  });

});
