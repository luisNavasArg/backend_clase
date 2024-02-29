const {Router} =require("express");
const router = Router();
const {check} = require("express-validator");
const{validarCampos}=require("../middlewares/validar_campos");
const {
        usersGet,
        userGet,
        userDelete,
        createUser,
        userUpdate
}=require("../controllers/usuariosController");
const {emailExiste}=require("../helpers/db-validator");
router.get("/",usersGet);
router.get("/id/:id",userGet);
router.post("/createUser",[
        check("nombre","El nombre es obligatorio").notEmpty(),
        check("password","La contraseña debe ser mayor a 6 digitos").isLength({min:6}),
        check("email","No es un email valido").isEmail(),
        check("email").custom(emailExiste),
        validarCampos

],createUser);
router.put("/updateUser/id/:id", userUpdate)
router.delete("/id/:id",userDelete);

module.exports=router;