# Patient Booking Workflow
This project is a patient booking workflow that includes a dashboard for physicians to view and confirm/cancel appointments, built using HTML, CSS, and JavaScript.

# Running the Project
## IMPORTANT
This project uses ES Modules and must be run through a local live server.

### Using VS Code Live Server:
- Open the project in VS Code
- Install the extension **Live Preview**
- Right-click ``index.html`` and click "**Show Preview**"
- The app will open within VS Code.

### Using Python HTTP Server
- Run 
    ``` cd src
    python -m http.server 8000
    ```
- Open 
    ```http://localhost:8000```

## How To Use Project
- Start the project using a live server (required)
- Open the home page (index.html)
- Choose:
    - Patient → book appointment
    - Physician → manage appointments
- Patients:
    - Select doctor → Fill in all fields in booking form → submit
    - To return to physicians page, click the "**Home**" button in the bottom left corner
- Physicians:
    - View appointments → confirm or cancel
- Changes update instantly using localStorage

# Key Technical Decisions
- Project was done in HTML, CSS, and base JavaScript as it was a tech stack that I have worked with in the past in a hackathon. Firebase was considered for hosting but was changed run locally due to circumstances.
- This project was based on the assumption that patient was based in Ontario and therefore included OHIP number when booking an appointment.
- Option to switch between physician and patient view was for the purpose of making demo as smooth as possible.
- This project originally used a database initialised in Firebase, however due to an outage that occurred during testing a database stored in localStorage was used instead.
- While cancelled appointments are no longer avaialble to view for patients and open slots for booking, healthcare providers are able to view a history of cancelled appointments in case they can later confirm a previously cancelled appointment (due to change in avaialbility, etc.).

# Improvements
- Filtering of cancelled appointments on physician's end with an archive database.
- Improved UI to be more aesthetically pleasing/include branding.
- Hosting on Firebase to allow for databases and authentication.
- Accounts for patients and physicians, where patients log in with name and date of birth, and physicians have a username and password.
- Authentication with Firebase, and multifactor authentication for physicians to ensure protection of patient data and compliance with HIPAA and other patient data privacy protection regulations.
- Include payment options when booking an appointment.