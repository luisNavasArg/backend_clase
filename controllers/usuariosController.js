const {request,response}=require("express");
const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const usersGet= async(req=request,res=response)=> {
    let usuarios=await Usuario.find();
    res.json({usuarios}); 
}
const userGet=function (req,res) {
    let miid=req.params.id;
    res.json({id:miid});
}
const createUser=async(req=request,res=response)=>{
    let {nombre,email,password,img,rol,estado}=req.body;

    const usuario = new Usuario({nombre,email,password:bcrypt.hashSync(password,10),img,rol,estado});
    await usuario.save();
    res.json({usuario,message:"Usuario creado correctamente"});
}

const userUpdate=async(req=request,res=response)=>{
    let id=req.params.id;
    let resto = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id,resto,{new:true});
    res.json({
        msg:"Usuario actualizado",
        usuario
    });

}
const userDelete=async function (req=request,res=response) {
    let miid=req.params.id;
    const usuario = await Usuario.findById(miid);
    if (!usuario.estado) {
        return res.json({mgs:"El usuario ya está inactivo"});
    }
    const usuarioInabilitado=await Usuario.findByIdAndUpdate(
        miid,
        {estado:false},
        {new:true}
    );
    res.json({msg:"Usuario inactivo",data:usuarioInabilitado}); 
}
module.exports={
    usersGet,
    userGet,
    userDelete,
    createUser,
    userUpdate
}