const sqlite3 = require('sqlite3').verbose();

// Create and connect to the database (or open it if it exists)
const db = new sqlite3.Database('user_credentials.db');

// Login logic
function loginUser(username, password) {
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        if (row) {
            console.log('Login successful');
            // Redirect to the success page
            window.location.href = 'success.html';
        } else {
            console.log('Login failed. Invalid credentials.');
        }
    });
}

// Example usage
loginUser('user123', 'password123');

// Close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Database connection closed.');
});
