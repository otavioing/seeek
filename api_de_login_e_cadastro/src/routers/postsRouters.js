const { Router } = require('express');
const { CriarPost, ListarPosts } = require("../model/postsService");
const upload = require('../config/upload_foto_post');

const rota = Router();

rota.post("/", upload.single("arquivo"), CriarPost);
rota.get("/", ListarPosts);

module.exports = rota;
