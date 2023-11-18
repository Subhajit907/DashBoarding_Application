const sqlite3 = require('sqlite3').verbose();

// Create and connect to the database (or open it if it exists)
const db = new sqlite3.Database('user_credentials.db');

// Registration form submission handling
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Insert user data into the database
    const insertUser = db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
    insertUser.run(username, email, password);
    insertUser.finalize();

    // Redirect to a success page after registration
    window.location.href = 'success.html';

    // Close the database connection
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Database connection closed.');
    });
});
