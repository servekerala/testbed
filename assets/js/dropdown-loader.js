import { db } from "./firebase-init.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const categorySelect = document.getElementById("categorySelect");
const districtSelect = document.getElementById("districtSelect");
const citySelect = document.getElementById("citySelect");
const areaSelect = document.getElementById("areaSelect");

/* ================= CATEGORIES ================= */
async function loadCategories() {
  const snap = await getDocs(collection(db, "categories"));
  snap.forEach(doc => {
    const d = doc.data();
    if (d.active) {
      categorySelect.innerHTML += `
        <option value="${doc.id}">${d.name}</option>
      `;
    }
  });
}

/* ================= DISTRICTS ================= */
async function loadDistricts() {
  const snap = await getDocs(collection(db, "locations"));
  snap.forEach(doc => {
    const d = doc.data();
    if (d.active) {
      districtSelect.innerHTML += `
        <option value="${doc.id}">${d.name}</option>
      `;
    }
  });
}

/* ================= CITIES ================= */
districtSelect.addEventListener("change", async () => {
  citySelect.innerHTML = `<option value="">Select City *</option>`;
  areaSelect.innerHTML = `<option value="">Select Area *</option>`;
  citySelect.disabled = true;
  areaSelect.disabled = true;

  if (!districtSelect.value) return;

  const citiesRef = collection(
    db,
    "locations",
    districtSelect.value,
    "cities"
  );

  const snap = await getDocs(citiesRef);
  snap.forEach(doc => {
    const d = doc.data();
    if (d.active) {
      citySelect.innerHTML += `
        <option value="${doc.id}">${d.name}</option>
      `;
    }
  });

  citySelect.disabled = false;
});

/* ================= AREAS ================= */
citySelect.addEventListener("change", async () => {
  areaSelect.innerHTML = `<option value="">Select Area *</option>`;
  areaSelect.disabled = true;

  if (!citySelect.value) return;

  const areasRef = collection(
    db,
    "locations",
    districtSelect.value,
    "cities",
    citySelect.value,
    "areas"
  );

  const snap = await getDocs(areasRef);
  snap.forEach(doc => {
    const d = doc.data();
    if (d.active) {
      areaSelect.innerHTML += `
        <option value="${doc.id}">${d.name}</option>
      `;
    }
  });

  areaSelect.disabled = false;
});

/* ================= INIT ================= */
loadCategories();
loadDistricts();
