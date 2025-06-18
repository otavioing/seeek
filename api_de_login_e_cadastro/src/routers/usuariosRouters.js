const {Router} = require('express');
const {GetAll, GetById, Erase, Create, Update, Login, RecuperarSenha, AtualizarSenha, SolicitarCriacao, Solicitarexclusao, Atualizartema, Atualizaracessibilidade, updatecompletarcadastropadrao, Getbyidvarificarcaixa, definirtipo, verificartipo, completarcadastro, updatecompletarcadastroempresa, EnviarfotoPerfil} = require("../model/usuariosService")
const upload = require('../config/upload_foto_perfil'); 


const rota = Router()

rota.get("/", GetAll);
rota.get("/:id", GetById);
rota.get("/verificarcaixa/:id", Getbyidvarificarcaixa);
rota.get("/verificartipo/:id", verificartipo);
rota.post("/", upload.single("foto"), Create); 
rota.post("/", Create);
rota.put("/:id", Update)
rota.post("/completar-cadastro-padrao", updatecompletarcadastropadrao);
rota.delete("/:id", Erase);
rota.post("/login", Login)
rota.post("/recuperar-senha", RecuperarSenha);
rota.post("/atualizar-senha", AtualizarSenha);
rota.post("/solicitar-criacao", SolicitarCriacao);
rota.post("/solicitar-exclusao", Solicitarexclusao);
rota.post("/atualizar-tema", Atualizartema);
rota.post("/atualizar-acessibilidade", Atualizaracessibilidade);
rota.put("/atualizar-tipo/:id", definirtipo);
rota.put("/completarcoluna-cadastro/:id", completarcadastro)
rota.post("/completar-cadastro-empresa", updatecompletarcadastroempresa);
rota.post("/enviar-foto-perfil/:id", upload.single("foto"), EnviarfotoPerfil);




module.exports = rota;