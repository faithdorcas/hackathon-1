// script.js

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);

    // Create an AJAX request
    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Display the response message
        document.getElementById('formResponse').innerText = data;
        // Optionally, reset the form
        if (data === "Thank you for contacting us!") {
            document.getElementById('contactForm').reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('formResponse').innerText = "An error occurred. Please try again.";
    });
});