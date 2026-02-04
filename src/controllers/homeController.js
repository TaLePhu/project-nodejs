
const getHomePage = (req, res) => {
  res.send('Hello World and setting nodemo');

}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, 
    getHoiDanIT
};