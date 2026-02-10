const connection = require('../config/database');

const getHomePage = async (req, res) => {
  return res.render('home.ejs');
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, 
    getHoiDanIT
};