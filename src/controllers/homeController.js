const connection = require('../config/database');
const { getListUsers } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
//   const { success, error } = req.query;
//   return res.render('home.ejs', { success, error });

    let listUsers = await getListUsers();


    return res.render('home.ejs', { result: listUsers });
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let { name, email, city } = req.body;

    console.log("name: ", name, ", email: ", email, "city: ", city);


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

// const getHomePage = async (req, res) => {
//   const { success, error } = req.query;
//   return res.render('home.ejs', { success, error });
// }

const getCreateUser =  async (req, res) => {
    const { success, error } = req.query;
    
    return res.render('createUser.ejs', { success, error });
}

module.exports = {
    getHomePage, 
    getHoiDanIT,
    postCreateUser,
    getCreateUser
};