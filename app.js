const express = require('express'); 

const app = express(); 
const PORT = 8080; 
const ejs = require('ejs'); 

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

