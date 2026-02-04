// import express from 'express'
require('dotenv').config();
const express = require('express'); //commonjs import
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');


//
const app = express(); // initialize express app
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config view engine
configViewEngine(app);

// khai báo route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`)
})