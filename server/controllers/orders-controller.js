const mysql = require('mysql');
var express = require('express');
const { v4: uuidv4 } = require('uuid');
var router = express.Router();
var jsonData = [];
var reqData ='';
/*get Connection to database*/


// Create controller for GET request to '/users/all'
exports.ordersGetAll = async (req, res) => {
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
  // res.send('There will be dragons, not posts.')
  res.json(jsonData)
};

exports.createOrder = async (req, res) => {
  const con_post = mysql.createConnection({
  host: '35.228.62.237',
  user: 'root',
  password: 'sibu',
  database: 'excavation_schema'
});
  reqData = req.body;
  reqData.id = uuidv4();
  reqData.satellite_name = 'larvis';
  reqData.delivery_coordinates = '51.5266, -0.0798';
  reqData.STATUS='New';
  console.log('reqData', reqData);
  con_post.query('INSERT INTO ORDERS SET?', reqData, (err,row) => {
  if(err) throw err;
    console.log('Last insert ID:', row.insertId);
    console.log('Last insert ID:', row.affectedRows);
    con_post.query('SELECT * FROM ORDERS', (err,rows) => {
      if (err) throw err;
      jsonData = rows;
    });
  con_post.end(err);
});
  res.json(jsonData)
};