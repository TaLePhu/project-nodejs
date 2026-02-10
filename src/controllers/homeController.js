const connection = require('../config/database');

const getHomePage = async (req, res) => {
  return res.render('home.ejs');
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    console.log('req body: ', req.body);
    
    // TODO: Insert vào database ở đây
    
    // Redirect về trang home sau khi submit
    res.redirect('/');
}

module.exports = {
    getHomePage, 
    getHoiDanIT,
    postCreateUser
};