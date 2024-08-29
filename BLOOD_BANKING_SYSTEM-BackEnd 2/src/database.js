const mysql = require('mysql2');
const connection = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'bloodbankingsystem2'
}).promise();

module.exports = connection