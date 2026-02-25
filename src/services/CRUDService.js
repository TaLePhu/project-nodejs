const connection = require('../config/database');


const getListUsers = async (req, res) => {

    let [users] = await connection.execute('SELECT * FROM Users');

    return users;
}

module.exports = {
    getListUsers
}