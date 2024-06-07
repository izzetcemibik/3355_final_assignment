const express = require('express'); 

const app = express(); 
const mysql = require('mysql');
const PORT = 8080; 
const ejs = require('ejs'); 

app.set('view engine', 'ejs');
app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
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

app.get('/', (req, res) => {
    connection.query('SELECT idnews, image, topic, category FROM news', (error, results, fields) => {
        if (error) {
            console.error('Error fetching data from MySQL:', error);
            res.status(500).send('An error occurred while fetching data');
            return;
        }

        // Bütün haberleri slider için kullanma
        const slider = results;

        // Rastgele iki haber seçme
        const randomNews = shuffleArray(results).slice(0, 2);

        // Şablonlara verileri aktarma
        res.render('home', { slider, randomNews });
    });
});
