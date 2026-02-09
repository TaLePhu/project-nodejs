require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');


const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


// config view engine
configViewEngine(app);

// Khai báo route
app.use('/', webRoutes);

// Tạo hàm async để chạy query và start server
(async () => {
    try {
        const conn = await connection;
        console.log(">>> Connected to DB successfully!");

        // Test query
        const [results, fields] = await conn.query('SELECT * FROM Users');
        console.log("----results: ", results);

        // Chỉ start server sau khi check DB hoặc song song
        app.listen(port, hostname, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } catch (err) {
        console.error(">>> Error connecting to DB: ", err);
    }
})();