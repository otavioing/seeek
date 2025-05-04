const express = require('express');

const {banco} = require("./database")

const bcrypt = require("bcrypt");

const { enviarEmailRecuperacao, enviaremailcriacao, enviaremailexclusao } = require('../utils/emailService');

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

const SolicitarCriacao = async (request, response) => {
    try {
        const { nome, email, senha } = request.body;
        const foto = request.file ? `/uploads/${request.file.filename}` : null;

        const codigo = Math.floor(100000 + Math.random() * 900000);


        await enviaremailcriacao(email, nome, codigo);

        // Retorna o código (se estiver em dev/teste)
        response.status(200).send({
            message: "Código de verificação enviado para o email",
            codigo, // em produção, talvez você **não envie isso no response**
            dados: { nome, email, senha, foto } // temporário, ou salva em cache
        });

    } catch (error) {
        console.error("Erro ao enviar código:", error.message);
        response.status(500).send({ message: "Erro ao solicitar criação de conta" });
    }
};

const Solicitarexclusao = async (request, response) => {
    try {
        const { nome, email, senha } = request.body;
        const foto = request.file ? `/uploads/${request.file.filename}` : null;

        const codigo = Math.floor(100000 + Math.random() * 900000);


        await enviaremailexclusao(email, nome, codigo);

        // Retorna o código (se estiver em dev/teste)
        response.status(200).send({
            message: "Código de verificação enviado para o email",
            codigo, // em produção, talvez você **não envie isso no response**
            dados: { nome, email, senha, foto } // temporário, ou salva em cache
        });

    } catch (error) {
        console.error("Erro ao enviar código:", error.message);
        response.status(500).send({ message: "Erro ao solicitar exclusão de conta" });
    }
};

const Create = async (request, response) => {
    try {
        const { nome, email, senha } = request.body;
        const foto = request.file ? `/uploads/${request.file.filename}` : null;

        // gera o hash da senha
        const saltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);

        const data = await banco.query(
            'INSERT INTO usuarios (nome, email, senha, foto) VALUES (?, ?, ?, ?)',
            [nome, email, senhaHash, foto] // aqui usamos a senha já criptografada
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
        const {cidade_pais, cargo, nome, email, senha, foto} = request.body;
        const data = await banco.query('UPDATE usuarios SET cidade_pais=?, cargo=?, nome=?, email=?, senha=?, foto=? WHERE id=?', [cidade_pais, cargo, nome, email, senha, foto, id]);
        response.status(200).send(data[0]);
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    }
}

const Login = async (request, response) => {
    const { email, senha } = request.body;

    try {
        const [rows] = await banco.query("SELECT * FROM usuarios WHERE email = ?", [email]);

        if (rows.length === 0) {
            return response.status(401).send({ message: "Email ou senha inválidos" });
        }

        const usuario = rows[0];

        // Aqui compara a senha digitada com a criptografada
        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return response.status(401).send({ message: "Email ou senha inválidos" });
        }

        // Login OK, pode retornar os dados (sem a senha de preferência)
        delete usuario.senha; // remove a senha da resposta
        response.status(200).send({ usuario });

    } catch (error) {
        console.error("Erro ao verificar login:", error.message);
        response.status(500).send({ message: "Erro interno no servidor" });
    }
};



const RecuperarSenha = async (req, res) => {
    const { email } = req.body;
    try {
        const [result] = await banco.query("SELECT * FROM usuarios WHERE email = ?", [email]);
        if (result.length === 0) {
            return res.status(404).send({ message: "Email não encontrado" });
        }
        const codigo = Math.floor(100000 + Math.random() * 900000); // Ex: 654321
        // Aqui você pode salvar esse código temporariamente no banco ou só validar depois (simples)
        await enviarEmailRecuperacao(email, result[0].nome, codigo);
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

const Atualizartema = async (req, res) => {
    const { id, tema } = req.body;

    try {
        await banco.query("UPDATE usuarios SET tema = ? WHERE id = ?", [tema, id]);

        res.status(200).send({ message: "Tema atualizado com sucesso!" });
    } catch (err) {
        res.status(500).send({ message: "Erro ao atualizar tema.", error: err.message });
    }

};

const Atualizaracessibilidade = async (req, res) => {
    const { id, acessibilidade_ativa } = req.body;

    try {
        await banco.query("UPDATE usuarios SET acessibilidade_ativa = ? WHERE id = ?", [acessibilidade_ativa, id]);

        res.status(200).send({ message: "acessibilidade atualizada com sucesso!" });
    } catch (err) {
        res.status(500).send({ message: "Erro ao atualizar tema.", error: err.message });
    }

    console.log("acessibilidade atualizado com sucesso!")
};



module.exports = {GetAll, GetById, Erase, Create, Update, Login, RecuperarSenha, AtualizarSenha, SolicitarCriacao, Solicitarexclusao, Atualizartema, Atualizaracessibilidade}