const Producto = require("../models/producto");
const getProducts=async(req,res)=>{
    const {limite=5,desde=0} =req.query;
    const productos = await Producto.find().skip(Number(desde)).limit(Number(limite));
    res.json({productos})
 }
 const addProduct=async(req,res)=>{
    const {name,description,price,src,category}=req.body;
    const producto ={name,description,price,src,category};
    const newProd=new Producto(producto);
    await newProd.save();
    res.json({msg:"Producto creado con éxito",producto:newProd});
 }
 const updateProduc=async(req,res)=>{
    const {id} =req.params;
    const {name,description,price,src,category}=req.body;
    const producto = {name,description,price,src,category};
    const productUpdate=await Producto.findByIdAndUpdate(id,producto,{new:true});
    res.status(201).json({
        productUpdate,
        msg:"El producto se actualizó"
    })
 }
 const deleteProduct=async(req,res)=>{
    const {id}=req.params;
    await Producto.deleteOne({_id:id});
    res.json({msg:id})
 }
 module.exports={
    getProducts,
    addProduct,
    updateProduc,
    deleteProduct
 }