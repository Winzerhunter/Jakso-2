'use strict';

const express = require('express');
require('dotenv').config();
const multer = require('multer');
const upload = multer({dest: 'public/uploads/'});
const database = require('./modules/database');

const app = express();

app.use(express.static('public'));

const connection = database.connect();

const cb = (result, res) => {
  console.log(result);
  res.send(result);
};

const insertToDB = (data, res, next) => {
  database.insert(data, connection, (response) => {
    next();
  });
};

app.use('/upload', upload.single('mediafile'), (req, res, next) => {
  console.log(req.body);
  next();
});

app.use('/upload', (req, res, next) => {
  const data = [req.file.filename, req.file.mimetype, req.body.Category];
  insertToDB(data, res, next);
});

app.get('/rand', (req, res) => {
  database.select(connection, cb, res);
});

app.get('/Landscape', (req, res) => {
  database.selectL(connection, cb, res);
});

app.get('/City', (req, res) => {
  database.selectC(connection, cb, res);
});

app.get('/Fantasy', (req, res) => {
  database.selectF(connection, cb, res);
});

app.get('/update', (req, res) => {
  database.select(connection, cb, res);
});

app.listen(3000);
