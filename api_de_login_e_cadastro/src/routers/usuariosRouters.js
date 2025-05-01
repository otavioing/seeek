const {Router} = require('express');
const {GetAll, GetById, Erase, Create, Update, Login, RecuperarSenha, AtualizarSenha, SolicitarCriacao, Solicitarexclusao, Atualizartema, Atualizaracessibilidade} = require("../model/usuariosService")
const upload = require('../config/upload'); 


const rota = Router()

rota.get("/", GetAll);
rota.get("/:id", GetById);
rota.post("/", upload.single("foto"), Create); 
rota.post("/", Create);
rota.put("/:id", Update)
rota.delete("/:id", Erase);
rota.post("/login", Login)
rota.post("/recuperar-senha", RecuperarSenha);
rota.post("/atualizar-senha", AtualizarSenha);
rota.post("/solicitar-criacao", SolicitarCriacao);
rota.post("/solicitar-exclusao", Solicitarexclusao);
rota.post("/atualizar-tema", Atualizartema);
rota.post("/atualizar-acessibilidade", Atualizaracessibilidade);



module.exports = rota;