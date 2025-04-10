const express = require('express');

const {banco} = require("./database")


const GetAll = async (request, response) => {
    try {
        const data = await banco.query("SELECT * FROM usuarios");
        response.status(200).send(data[0]);
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    } 
};

const GetById = async (request, response) => {
    try {
        const id = request.params.id;
        const data = await banco.query("SELECT * FROM usuarios WHERE id=?", [id]);
        response.status(200).send(data[0]);
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    }
};

const Erase = async (request, response) => {
    try {
        const id = request.params.id;
        const data = await banco.query("DELETE FROM usuarios WHERE id=?", [id]);
        response.status(200).send(data[0]);
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    }
};

const Create = async (request, response) => {
    
    try{
        const {nome, email, senha} = request.body;
        const data = await banco.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]);
        response.status(200).send(data[0]);

    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    }
}

const Update = async (request, response) => {
    try {
        const id = request.params.id;
        const {nome, email, senha} = request.body;
        const data = await banco.query('UPDATE usuarios SET nome=?, email=?, senha=? WHERE id=?', [nome, email, senha, id]);
        response.status(200).send(data[0]);
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    }
}

const Login = async (request, response) => {
    const { email, senha } = request.body;

    try {
        const [rows] = await banco.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senha]);
        
        if (rows.length > 0) {
            // Usuário encontrado
            response.status(200).send({ usuario: rows[0] });
        } else {
            // Nenhum usuário com esse email/senha
            response.status(401).send({ message: "Email ou senha inválidos" });
        }
    } catch (error) {
        console.log("Erro ao verificar login:", error.message);
        response.status(500).send({ message: "Erro interno no servidor" });
    }
};


module.exports = {GetAll, GetById, Erase, Create, Update, Login}