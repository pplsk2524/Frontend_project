function validateForm(event) {
    event.preventDefault();  // Prevent the default form submission

    const appointmentDateInput = document.getElementById('appointment-date');
    const errorMessage = document.getElementById('error-message');
    const appointmentDate = new Date(appointmentDateInput.value);
    const today = new Date();

    // Clear previous error message
    errorMessage.textContent = '';

    // Check if the appointment date is in the past
    if (appointmentDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
        errorMessage.textContent = 'Appointment date cannot be in the past.';
        alert("Appointment date cannot be in the past.")
        return false;
    }

    // If validation passes, submit the form programmatically
    document.getElementById('form').submit();
}

function populateServiceDropdown() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedService = urlParams.get('service');
    const serviceDropdown = document.getElementById('service');

    if (selectedService) {
        serviceDropdown.value = selectedService;
    }
}

document.addEventListener('DOMContentLoaded', populateServiceDropdown);
document.getElementById('form').addEventListener('submit', validateForm);
