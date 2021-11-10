let log = require('./logger')(module);
const db = require('db');
db.connect();

const User = require('./user/index')

function run() {
    let jeka = new User('Eugenia')
    let pablo = new User('Paul')

    jeka.hello(pablo)

    log(db.getPhrase('Run succesful'))
}

if (module.parent) {
    exports.run = run
} else {
    run()
}
