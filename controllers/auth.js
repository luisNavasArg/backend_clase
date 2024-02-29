const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const { generarJwt }=require("../helpers/generar-jwt");
const login=async(req=request,res=response)=>{
    const {email,password}=req.body;
    try {
        const usuario = await Usuario.findOne({email});
        if (!usuario) {
            return res.json({
                msg:"Correo o password incorrecto!"
            });  
        }
        if(!usuario.estado){
            return res.json({
                msg:"Correo o password incorrecto | usuario inactivo"
            });
        }
        

    let validPassword =bcrypt.compareSync(password,usuario.password);
    console.log(password);
    console.log(validPassword);
        if (!validPassword) {
            return res.json({
                msg:"Correo o password incorrectos!"
            }); 
        }
        //generamos el token
        const token = await generarJwt(usuario.uid);
        return res.json({
            msg:"Login Ok",
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
       return res.json({
        msg:"Contactar al administrador"
       }); 
    }
}
module.exports={login};
