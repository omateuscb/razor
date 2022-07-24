async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/razor_db');
    console.log('conectado ao MySQL');
    global.connection = connection;
    return connection;
}
connect();

async function selectUsers(){
    const conn = await connect();
    return await conn.query('SELECT * FROM usuarios;')
}

module.exports = {}