const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const login=async(req=request,res=response)=>{
    const {email,password}=req.body;
    try {
        const usuario = await Usuario.findOne({email});
        if (!usuario) {
            res.status(400).json({
                msg:"Correo o password incorrecto!"
            });  
        }
        if(!usuario.estado){
            res.status(400).json({
                msg:"Correo o password incorrecto | usuario inactivo"
            });
        }
        if (!bcrypt.compareSync(password,usuario.password)) {
            res.status(400).json({
                msg:"Correo o password incorrecto!"
            }); 
        }
        res.json({
            msg:"Login Ok",
            usuario
        });

    } catch (error) {
       return res.status(500).json({
        msg:"Contactar al administrador"
       }); 
    }
}
module.exports={login};
