const {Schema,model}=require("mongoose");
const ProductoSchema=Schema({
    name:{
        type:String,
        required:[true,"Este campo es obligatorio"]
    },
    description:{
        type:String,
        required:[true,"Este campo es obligatorio"],
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

// UsuarioSchema.methods.toJSON=function () {
//     const {__v,password, _id , ...usuario}=this.toObject();
//     usuario.uid=_id;
//     usuario.password=password;
//     return usuario;
// }



module.exports=model("Producto",ProductoSchema);