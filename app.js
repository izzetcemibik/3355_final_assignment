require('dotenv').config(); // Load environment variables from a .env file
const express = require('express');

const mysql = require('mysql');
const session = require('express-session');

const app = express();
const PORT = 8080;

//app.set('view engine', 'ejs');
//app.use(express.static('public'));

// Database connection setup
const connection = mysql.createConnection({
    host: 'final3355db.mysql.database.azure.com',
    user: 'izzet',
    password: '12345Izo',
    database: 'izzetcemibik_19070001035_finalassignment'
  });
  
  // Event: Connection Established
  connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
  });

// Create a MySQL pool

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
