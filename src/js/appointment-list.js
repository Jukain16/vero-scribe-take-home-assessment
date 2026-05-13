document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("appointmentsList");

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  if (appointments.length === 0) {
    container.innerHTML = "<p>No appointments found.</p>";
    return;
  }

  appointments.forEach((app, index) => {
    container.innerHTML += `
      <div class="card">
        <h3>${app.doctorName}</h3>
        <p><b>Patient:</b> ${app.patientFirstName} ${app.patientLastName}</p>
          <p><b>Reason:</b> ${app.reason}</p>
        <p>Date: ${app.date}</p>
        <p>Time: ${app.time}</p>

        <p>Status: <b>${app.status}</b></p>

        <button onclick="updateStatus(${index}, 'confirmed')">
          Confirm
        </button>

        <button onclick="updateStatus(${index}, 'cancelled')">
          Cancel
        </button>
      </div>
    `;
  });

});

function updateStatus(index, newStatus) {
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  appointments[index].status = newStatus;

  localStorage.setItem("appointments", JSON.stringify(appointments));

  location.reload();
}

window.updateStatus = updateStatus;