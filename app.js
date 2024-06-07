require('dotenv').config(); // Load environment variables from a .env file
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Database connection setup
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

app.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send('Database connection failed');
            return;
        }
        connection.query('SELECT 1', (err, results) => {
            connection.release();
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
                return;
            }
            res.send('Hello, World! Database connected successfully.');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
