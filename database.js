'use strict';

const mysql = require('mysql');
const config = require('./config/config');

const connection = mysql.createPool(config.database);

module.exports = connection;
