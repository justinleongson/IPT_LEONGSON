// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from actually submitting

        // Retrieve input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate inputs
        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.classList.remove('hidden', 'success');
            formMessage.classList.add('error');
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.remove('hidden', 'success');
            formMessage.classList.add('error');
            return;
        }

        // Success message
        formMessage.textContent = 'Thank you for your message. We will get back to you soon!';
        formMessage.classList.remove('hidden', 'error');
        formMessage.classList.add('success');

        // Clear the form
        form.reset();
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
