
const generateBillButton = document.getElementById('generate-bill');
const contentSection = document.getElementById('content'); // Reference to the content section

generateBillButton.addEventListener('click', () => {
    const patientName = document.getElementById('patient-name').value;
    const services = document.getElementById('services').value;
    const totalAmount = parseFloat(document.getElementById('total-amount').value);

    if (patientName && services && totalAmount) {
        const billHTML = `
            <h2>Generated Bill</h2>
            <p><strong>Patient Name:</strong> ${patientName}</p>
            <p><strong>Services Provided:</strong></p>
            <p>${services}</p>
            <p><strong>Total Amount:</strong> $${totalAmount.toFixed(2)}</p>
        `;

        contentSection.innerHTML = billHTML; // Update the content section with the bill summary
    } else {
        contentSection.innerHTML = '<p class="error">Please fill in all fields.</p>';
    }
});
