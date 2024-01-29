const connection = function (){
    const mysql = require('mysql')

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'vcli_championship'
    })
}
module.exports = connection