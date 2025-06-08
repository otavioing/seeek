const {Router} = require('express');
const {GetAll, GetById, Erase, Create, Update} = require("../model/perfils_padrao")


const rota = Router()

rota.get("/", GetAll);
rota.get("/:id", GetById);
rota.post("/:usuario_id", Create);
rota.put("/:id", Update)
rota.delete("/:id", Erase);

module.exports = rota;
