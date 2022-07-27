const mysql = require('mysql2/promise');

class Database {
    constructor(user, pass, host, port, schema) {
        this.user = user;
        this.pass = pass;
        this.host = host;
        this.port = port;
        this.schema = schema;
    }

    //Conecta com o Banco
    async connect() {
        if (global.connection && global.connection.state !== 'disconnected') {
            return global.connection;
        }
        const connection = await mysql.createConnection('mysql://' + this.user + ':' + this.pass + '@' + this.host + ':' + this.port + '/' + this.schema);
        global.connection = connection;
        return connection;
    }

    //Busca todos os usuários
    async selectUsers() {
        const conn = await this.connect();
        const [usuarios] = await conn.query('SELECT * FROM usuarios;');
        return usuarios;
    }

    //Busca usuário por id
    async selectUsuario(id) {
        const conn = await this.connect();
        const [usuario] = await conn.query("SELECT * FROM usuarios WHERE id = '"+id+"';");
        //console.log(usuario);
        return usuario;
    }

    //Editar usuário
    async alterUsuario(usuario) {
        const conn = await conn.query("UPDATE usuarios SET nome ="+usuario.nome+";");
    }
}

module.exports = Database;