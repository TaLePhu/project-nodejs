const connection = require('../config/database');

const getHomePage = async (req, res) => {
  const { success, error } = req.query;
  return res.render('home.ejs', { success, error });
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let { name, email, city } = req.body;

    console.log("name: ", name, ", email: ", email, "city: ", city);

    // console.log('req body: ', req.body);

    try {
        // Insert vào database
        const [results] = await connection.execute(
            'INSERT INTO Users (name, email, city) VALUES (?, ?, ?)',
            [name, email, city]
        );
        
        console.log('User created successfully with ID:', results.insertId);
        
        // Redirect về trang home sau khi submit thành công
        res.redirect('/?success=User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        
        // Redirect về trang home với thông báo lỗi
        res.redirect('/?error=Failed to create user. Please try again.');
    }
}

module.exports = {
    getHomePage, 
    getHoiDanIT,
    postCreateUser
};