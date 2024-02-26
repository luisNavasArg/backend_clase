const express = require("express");
const cors = require("cors");
const {dbConnection}=require("../database/config");
class Server{
    constructor(){
        this.app=express();
        this.port= 8080;
        this.auhtPath="/api/auth";
        this.usersPath="/api/users";
        // this.productsPath="/api/products";
        // this.categoriesPath="/api/categories";
        this.conectarDb();
        this.middlewares();
        this.routes();
        //middlewares
        //conectar a la base de datos
        
    }
    async conectarDb(){
        await dbConnection();
    }
    middlewares(){
        //cors
        this.app.use(cors());
        //leer json
        this.app.use(express.json());
        //archivos estaticos
        this.app.use(express.static("public"));
    }
    routes(){
        this.app.use(this.auhtPath,require("../routes/auth"));
        this.app.use(this.usersPath,require("../routes/users"));
        // this.app.use(this.productsPath,require("../routes/products"));
        // this.app.use(this.categoriesPath,require("../routes/categories"));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Server On ready port:",this.port);
        })
    }
}
module.exports=Server;
