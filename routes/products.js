const {Router} = require("express");
const router = Router();
const{getProducts, getOneProduct, addProduct,updateProduc,deleteProduct}=require("../controllers/productosController");

router.get("/",getProducts);
router.get("/getOneProduct/:id",getOneProduct);
router.post("/createProduct",addProduct);
router.put("/updateProduct/:id",updateProduc);
router.delete('/deleteProdut/:id',deleteProduct);
module.exports=router;
 