const Usuario = require("../models/usuario");
//validar email
const emailExiste=async(email)=>{
    const existeEmail = await Usuario.findOne({email:email});
    if (existeEmail) {
        throw new Error(`El email ${email} ya existe regitrado!`)
        
    }
}
module.exports={
    emailExiste
}