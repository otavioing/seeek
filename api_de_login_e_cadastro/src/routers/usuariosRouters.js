const {Router} = require('express');
const {GetAll, GetById, Erase, Create, Update, Login} = require("../model/usuariosService")

const rota = Router()

rota.get("/", GetAll);
rota.get("/:id", GetById);
rota.post("/", Create);
rota.put("/:id", Update)
rota.delete("/:id", Erase);
rota.post("/login", Login)


module.exports = rota;