const {Router} =require("express");
const router = Router();
const {
        usersGet,
        userGet,
        userDelete,
        createUser,
        userUpdate
}=require("../controllers/usuariosController");

router.get("/",usersGet);
router.get("/id/:id",userGet);
router.post("/createUser",createUser);
router.put("/updateUser/id/:id", userUpdate)
router.delete("/id/:id",userDelete);

module.exports=router;