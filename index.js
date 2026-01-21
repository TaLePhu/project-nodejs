// import express from 'express'
const express = require('express');
const path = require('path');

const app = express();

//config view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})