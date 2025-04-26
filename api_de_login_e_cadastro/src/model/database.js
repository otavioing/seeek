const mysql = require('mysql2/promise');

const stringconnection = 'mysql://root@localhost:3306/seekdb';

const banco = mysql.createPool(stringconnection);

const checkConnection = async () => {
    try{
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "seekdb",
        });
        await connection.ping(); //testa se o banco está respondendo
        await connection.end(); //fecha a conexão
        return true;
    } catch (error){
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        return false;
    }
};


module.exports = {checkConnection, banco};