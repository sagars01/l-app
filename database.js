'use strict';

const mysql = require('mysql');
const config = require('./config/config');

const connection = mysql.createConnection(config.database);
connection.connect((err) => {
    if (err) { 
        // Here we can add loggers to 
        console.log(err) 
    };
})

module.exports = connection;
