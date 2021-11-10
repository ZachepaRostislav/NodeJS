let log = require('../logger')(module);

const db = require('db');

function User(name) {
    this.name = name
}

User.prototype.hello = function (who) {
    log(db.getPhrase('Hello') + ' ,' + who.name)
}

module.exports = User
