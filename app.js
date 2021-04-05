const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/Register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/Login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.listen(process.env.PORT || port, () => {
    console.log('Servidor corriendo en el puerto '+ port);
});
