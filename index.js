const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'mydb'
})

connection.connect();

app.get('/', (req, res) => {
    res.send('Hello World com Node.js444!');
})

app.listen(process.env.PORT || 3000, () =>{
    console.log('Servidor rodando na porta 3000');
});