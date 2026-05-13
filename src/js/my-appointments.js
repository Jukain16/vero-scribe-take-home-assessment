document.addEventListener("DOMContentLoaded", () => {
  renderAppointments();
});

function renderAppointments() {
  const container = document.getElementById("appointmentsList");

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  console.log("Appointments:", appointments);

  
  appointments = appointments.filter(app => app.status !== "cancelled");

  if (appointments.length === 0) {
    container.innerHTML = "<p>No appointments yet.</p>";
    return;
  }

  container.innerHTML = "";

  appointments.forEach((app, index) => {
    container.innerHTML += `
      <div class="card">
        <h3>${app.doctorName}</h3>
        <p>Date: ${app.date}</p>
        <p>Time: ${app.time}</p>
        <p>Status: <b>${app.status}</b></p>
      </div>
    `;
  });
}


function updateStatus(index, newStatus) {
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  appointments[index].status = newStatus;

  localStorage.setItem("appointments", JSON.stringify(appointments));

  renderAppointments(); 
}

window.updateStatus = updateStatus;