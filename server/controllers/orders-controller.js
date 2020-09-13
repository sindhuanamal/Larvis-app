const mysql = require('mysql');
var express = require('express');
var router = express.Router();
var jsonData = [];

/*get Connection to database*/
const con = mysql.createConnection({
  host: '35.228.62.237',
  user: 'root',
  password: 'sibu',
  database: 'excavation_schema'
});

con.query('SELECT * FROM ORDERS', (err,rows) => {
  if(err) throw err;
  jsonData = rows;
  con.end(err);
});

// Create controller for GET request to '/users/all'
exports.ordersGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  res.json(jsonData)
};

exports.createOrder = async (req, res) => {
  res.json(jsonData)
};