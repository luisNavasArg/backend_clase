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
module.exports=model("Producto",ProductoSchema);