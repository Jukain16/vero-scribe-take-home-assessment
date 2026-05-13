import { doctors } from "./doctors.js";

document.addEventListener("DOMContentLoaded", () => {

  console.log("booking.js loaded");

  const dateSelect = document.getElementById("dateSelect");
  const timeSelect = document.getElementById("timeSelect");

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  const params = new URLSearchParams(window.location.search);
  const doctorId = Number(params.get("doctor"));

  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    console.error("Doctor not found!");
    return;
  }

  console.log("Doctor:", doctor);

  doctor.availability.forEach(slot => {
    const option = document.createElement("option");
    option.value = slot.date;
    option.textContent = slot.date;
    dateSelect.appendChild(option);
  });

  dateSelect.addEventListener("change", (e) => {

    const selectedDate = e.target.value;

    const slot = doctor.availability.find(
      d => d.date === selectedDate
    );

    timeSelect.innerHTML = "";

    const booked = (JSON.parse(localStorage.getItem("appointments")) || []).filter(app => app.status !== "cancelled");

    slot.times.forEach(t => {

      const isBooked = booked.some(app =>
        app.date === selectedDate && app.time === t && app.doctorId == doctor.id
      );

      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = isBooked ? `${t} (Booked)` : t;
      opt.disabled = isBooked;

      timeSelect.appendChild(opt);
    });

  });

  document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedDate = dateSelect.value;
    const selectedTime = timeSelect.value;

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const alreadyBooked = appointments
        .filter(app => app.status !== "cancelled")
        .some(app =>
        app.doctorId === doctor.id &&
        app.date === selectedDate &&
        app.time === selectedTime
    );

    if (alreadyBooked) {
      alert("This time slot is already booked!");
      return;
    }

    const newAppointment = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      date: selectedDate,
      time: selectedTime,

      patientFirstName: document.getElementById("fname").value,
      patientLastName: document.getElementById("lname").value,
      reason: document.getElementById("reason").value,
      status: "pending"
    };

    appointments.push(newAppointment);

    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment booked!");
    window.location.href = "../patient/homepage.html";
  });

  dateSelect.dispatchEvent(new Event("change"));
  console.log("FORM SUBMITTED");

});

function clearCancelledAppointments() {
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  appointments = appointments.filter(app => app.status !== "cancelled");

  localStorage.setItem("appointments", JSON.stringify(appointments));
}