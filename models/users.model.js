const sql = require('../database');

const users = function (user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.birthdate = user.birthdate;
    this.added = user.added ? user.added : '';
}

users.getAllUsers = function (result) {
    sql.query('SELECT * FROM users', (err, res) => {
        if (err) {
            result(err)
        } else {
            result(res);
        }
    });
}

module.exports = users;