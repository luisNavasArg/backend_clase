const jwt = require("jsonwebtoken");
const generarJwt=(uid)=>{
    return new Promise((resolve,reject)=>{
        const payload ={uid};
        // generamos
        jwt.sign(
            payload,
            process.env.SECRET_KEY,
            {
                expiresIn:"4h",
            },
            (err,token)=>{
                if (err) {
                    reject("No se puede generar tu token");
                }else{
                    resolve(token);
                }
            }
        )
    })
}
module.exports={
    generarJwt
}