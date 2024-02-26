// const express = require("express");
// const app = express();
// app.get("/",function (req,res) {
//     res.send("Hola curso cómo están?");
// })
// app.listen(8080,function () {
//     console.log("se está ejecutando el servidor");
// })
const Server = require("./models/server");
require("dotenv").config();
const server = new Server();
server.listen();
