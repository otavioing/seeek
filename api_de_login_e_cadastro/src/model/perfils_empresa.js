const express = require('express');

const {banco} = require("./database")


const GetAll = async (request, response) => {
    try {
        const data = await banco.query("SELECT * FROM perfis_empresa");
        response.status(200).send(data[0]);
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    } 
};

const GetById = async (request, response) => {
    try {
        const id = request.params.id;
        const data = await banco.query("SELECT * FROM perfis_empresa WHERE id=?", [id]);
        response.status(200).send(data[0]);
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    }
};

const Erase = async (request, response) => {
    try {
        const id = request.params.id;
        const data = await banco.query("DELETE FROM perfis_empresa WHERE id=?", [id]);
        response.status(200).send(data[0]);
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    }
};

const Create = async (request, response) => {
    try {
        const {usuario_id} = request.params 
        const {razao_social, nome_fantasia, cnpj, telefone_comercial, categoria_negocio, numero_funcionarios, endereco_completo, descricao} = request.body;

        const data = await banco.query(
            'INSERT INTO perfis_empresa (usuario_id, razao_social, nome_fantasia, cnpj, telefone_comercial, categoria_negocio, numero_funcionarios, endereco_completo, descricao) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [usuario_id, razao_social, nome_fantasia, cnpj, telefone_comercial, categoria_negocio, numero_funcionarios, endereco_completo, descricao]
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
        const {nome, email, senha, tema, cidade_pais, cargo, nome_de_usuario, descricao, banner, url_do_perfil_do_instagram, url_do_perfil_do_x_twitter} = request.body;
        const foto = request.file ? `/uploads/foto_perfil${request.file.filename}` : null;
        const data = await banco.query('UPDATE perfis_empresa SET nome=?, email=?, senha=?, foto=?, tema=?, cidade_pais=?, cargo=?, nome_de_usuario=?, descricao=?, banner=?, url_do_perfil_do_instagram=?, url_do_perfil_do_x_twitter=? WHERE id=?', [nome, email, senha, foto, tema, cidade_pais, cargo, nome_de_usuario, descricao, banner, url_do_perfil_do_instagram, url_do_perfil_do_x_twitter, id]);
        response.status(200).send(data[0]);
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados: ", error.message);
        response.status(401).send({"message": "Falha ao executar a ação!"})
    }
}


module.exports = {GetAll, GetById, Erase, Create, Update}