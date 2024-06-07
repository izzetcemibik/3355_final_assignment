const express = require('express');
const ejs = require('ejs');
const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const dbConfig = {
    host: 'se3355midtermdb.mysql.database.azure.com',
    user: 'midtermizzetcemibik',
    password: '12345Izo',
    database: 'izzetcemibik_19070001035_finalassignment',
};

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
