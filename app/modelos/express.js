const express = require('express');

const app = express();

const path = require('path');

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(require('../../routes/contacto'));

app.use(express.static(path.join(__dirname, '../../app')));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});