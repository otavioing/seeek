const express = require('express');

const {banco} = require("./database")

const bcrypt = require("bcrypt");



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
    try {
        const { nome, email, senha } = request.body;
        const foto = request.file ? `/uploads/${request.file.filename}` : null;

        const data = await banco.query(
            'INSERT INTO usuarios (nome, email, senha, foto) VALUES (?, ?, ?, ?)',
            [nome, email, senha, foto]
        );

        response.status(200).send({ message: 'Usuário cadastrado com sucesso' });
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({ message: "Falha ao executar a ação!" });
    }
}

const Update = async (request, response) => {
    try {
        const id = request.params.id;
        const {nome, email, senha, foto} = request.body;
        const data = await banco.query('UPDATE usuarios SET nome=?, email=?, senha=?, foto=? WHERE id=?', [nome, email, senha, foto, id]);
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

const { enviarEmailRecuperacao } = require('../utils/emailService');

const RecuperarSenha = async (req, res) => {
    const { email } = req.body;
    try {
        const [result] = await banco.query("SELECT * FROM usuarios WHERE email = ?", [email]);
        if (result.length === 0) {
            return res.status(404).send({ message: "Email não encontrado" });
        }
        const codigo = Math.floor(100000 + Math.random() * 900000); // Ex: 654321
        // Aqui você pode salvar esse código temporariamente no banco ou só validar depois (simples)
        await enviarEmailRecuperacao(email, codigo);
        // Envia o código também no response (só enquanto você não tiver banco ou cache pra ele)
        res.status(200).send({ message: "Código enviado para o email", codigo }); 
    } catch (err) {
        console.error("Erro ao recuperar senha:", err.message);
        res.status(500).send({ message: "Erro interno" });
    }
};

const AtualizarSenha = async (req, res) => {
    const { email, novaSenha } = req.body;

    try {
        const hashed = await bcrypt.hash(novaSenha, 10);
        await banco.query("UPDATE usuarios SET senha = ? WHERE email = ?", [hashed, email]);

        res.status(200).send({ message: "Senha atualizada com sucesso!" });
    } catch (err) {
        res.status(500).send({ message: "Erro ao atualizar senha." });
    }
};




module.exports = {GetAll, GetById, Erase, Create, Update, Login, RecuperarSenha, AtualizarSenha}