document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form'); // Selects the contact form

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validates if all fields are filled
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`); // Success message
            contactForm.reset();
        } else {
            alert('Please fill in all fields.'); // Error message if fields are not filled
        }
    });
});
