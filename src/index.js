require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2/promise'); // Đã sửa ở đây

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
        // Create the connection to database
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 3308,
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '123456',
            database: process.env.DB_NAME || 'hoidanit',
        });

        console.log(">>> Connected to DB successfully!");

        // Test query
        const [results, fields] = await connection.query('SELECT * FROM Users');
        console.log("----results: ", results);

        // Chỉ start server sau khi check DB hoặc song song
        app.listen(port, hostname, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } catch (err) {
        console.error(">>> Error connecting to DB: ", err);
    }
})();