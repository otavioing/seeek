const { Router } = require('express');
const { CriarPost, ListarPosts, ListarPostsPorUsuario } = require("../model/postsService");
const upload = require('../config/upload_foto_post');

const rota = Router();

rota.post("/", upload.single("arquivo"), CriarPost);
rota.get("/", ListarPosts);
rota.get("/usuario/:id", ListarPostsPorUsuario);

module.exports = rota;
