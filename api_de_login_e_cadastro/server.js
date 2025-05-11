const express = require('express');
const { checkConnection } = require("./src/model/database")
const rotasUsuarios = require("./src/routers/usuariosRouters")
const cors = require('cors');
const app = express();
const path = require('path');
const rotasPosts = require("./src/routers/postsRouters");
const dotenv = require("dotenv");
dotenv.config();
const Port = process.env.APP_PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('../uploads'));
app.use(express.static(path.join(__dirname, '..')));
app.use("/posts", rotasPosts);



app.get("/", (request, response) => {
    response.send({"message:": "Servidor rodando!"})
}); 

app.use("/usuarios", rotasUsuarios);


app.listen(Port, () => {
    console.log(`Servidor rodando na porta: ${Port}`)
});



