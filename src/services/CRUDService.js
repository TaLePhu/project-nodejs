const connection = require('../config/database');


const getListUsers = async (req, res) => {

    let [users] = await connection.execute('SELECT * FROM Users');

    return users;
}

const getUserById = async (id) => {
    let [users] = await connection.execute('SELECT * FROM Users WHERE id = ?', [id]);
    return users.length > 0 ? users[0] : null;
}

const updateUser = async (id, name, email, city) => {
    const [result] = await connection.execute(
        'UPDATE Users SET name = ?, email = ?, city = ? WHERE id = ?',
        [name, email, city, id]
    );
    return result;
}

const deleteUser = async (id) => {
    const [result] = await connection.execute(
        'DELETE FROM Users WHERE id = ?',
        [id]
    );
    return result;
}

module.exports = {
    getListUsers,
    getUserById,
    updateUser,
    deleteUser
}