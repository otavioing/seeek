const {Router} = require('express');
const {GetAll, GetById, Erase, Create, Update, Login} = require("../model/usuariosService")
const upload = require('../config/upload'); 


const rota = Router()

rota.get("/", GetAll);
rota.get("/:id", GetById);
rota.post("/", upload.single("foto"), Create); 
rota.post("/", Create);
rota.put("/:id", Update)
rota.delete("/:id", Erase);
rota.post("/login", Login)


module.exports = rota;