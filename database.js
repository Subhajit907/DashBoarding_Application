const sqlite3 = require('sqlite3').verbose();

// Create and connect to the database (or open it if it exists)
const db = new sqlite3.Database('user_credentials.db');

// Create a "users" table to store user data
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
)`);

// Close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Database connection closed.');
});
