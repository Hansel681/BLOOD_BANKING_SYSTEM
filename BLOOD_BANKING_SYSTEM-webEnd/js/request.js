// Show the credentials section when a hospital is selected
document.getElementById('hospital').addEventListener('change', function() {
    var credentialsSection = document.getElementById('credentials-section');
    if (this.value) {
        credentialsSection.classList.remove('hidden');
    } else {
        credentialsSection.classList.add('hidden');
    }
});

// Handle form submission
document.getElementById('request-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Display the success message
    var formContainer = document.querySelector('.request-container');
    formContainer.innerHTML = `
        <h1>Thank You!</h1>
        <p>Your request has been successfully sent to the selected hospital.</p>
        <p>We appreciate your efforts in ensuring access to blood when needed.</p>
    `;
});

