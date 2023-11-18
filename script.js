document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform registration logic here (e.g., validation, API request)

    showMessage('Registration successful');
    clearForm('registration-form');
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    // Perform login logic here (e.g., validation, API request)

    showMessage('Login successful');
    clearForm('login-form');
});

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
    setTimeout(function () {
        messageDiv.classList.add('hidden');
    }, 3000);
}

function clearForm(formId) {
    document.getElementById(formId).reset();
    // In script.js, add the following code at the end of the file:

// Handle redirection from login to registration page
document.getElementById('register-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior of the link
    window.location.href = 'registration.html'; // Redirect to the registration page
});

}

