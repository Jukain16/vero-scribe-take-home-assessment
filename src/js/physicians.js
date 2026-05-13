import { doctors } from "./doctors.js";

const container = document.getElementById("doctorList");

doctors.forEach(doc => {
  container.innerHTML += `
    <div class="card">
      <img src="${doc.imageUrl}" width="120">

      <h3>${doc.name}</h3>

      <p>${doc.specialty}</p>

      <button onclick="bookDoctor(${doc.id})">
        Book Appointment
      </button>
    </div>
  `;
});

window.bookDoctor = function(id) {
  window.location.href = `appointments.html?doctor=${id}`;
};