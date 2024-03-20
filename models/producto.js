const {Schema,model}=require("mongoose");
const ProductoSchema=Schema({
    name:{
        type:String,
        required:[true,"Este campo es obligatorio"]
    },
    description:{
        type:String,
        required:[true,"Este campo es obligatorio"]
    },
    price:{
        type:Number,
        required:[true,"Este campo es obligatorio"]
    },
    src:{
        type:String
    },
    category:{
        type:String
    }
});
ProductoSchema.methods.toJSON=function () {
    const {__v, _id , ...producto}=this.toObject();
    producto.id=_id;
    return producto;
}
module.exports=model("ProductoRoll70i",ProductoSchema);