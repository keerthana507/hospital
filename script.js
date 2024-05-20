// Get references to navigation links and content section
const homeLink = document.getElementById('home');
const patientsLink = document.getElementById('patients');
const doctorsLink = document.getElementById('doctors');
const contentSection = document.getElementById('content');

const doctorsData = [
    { id: 101, name: 'Dr. Johnson', specialization: 'Cardiology' },
    { id: 102, name: 'Dr. Williams', specialization: 'Neurology' },
    { id: 103, name: 'Dr.Donna Paulsen',specialization: 'Pediatrician' }
    // ... more doctor data
];

// Event listeners for navigation links
homeLink.addEventListener('click', () => {
    contentSection.innerHTML = '<h2>Welcome to Hospital Management System</h2>';
});

patientsLink.addEventListener('click', () => {
    const patientsHTML = patientsData.map(patient => `
        <div class="patient">
            <h3>${patient.name}</h3>
            <p>Age: ${patient.age}</p>
        </div>
    `).join('');
    contentSection.innerHTML = `<h2>Patients</h2>${patientsHTML}`;
});

doctorsLink.addEventListener('click', () => {
    const doctorsHTML = doctorsData.map(doctor => `
        <div class="doctor">
            <h3>${doctor.name}</h3>
            <p>Specialization: ${doctor.specialization}</p>
        </div>
    `).join('');
    contentSection.innerHTML = `<h2>Doctors</h2>${doctorsHTML}`;
});
