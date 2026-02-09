const connection = require('../config/database');

const getHomePage = async (req, res) => {
  try {
    const conn = await connection;
    console.log(">>> Connected to DB successfully!");
    let array = [];

    // Test query
    const [results, fields] = await conn.query('SELECT * FROM Users');
    console.log("----results: ", results);
    
    array = results;
    res.send('array: ' + JSON.stringify(array));
  } catch (err) {
    console.error(">>> Error: ", err);
    res.status(500).send('Error');
  }
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, 
    getHoiDanIT
};