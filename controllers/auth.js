const { createUser } = require("../models/user");

exports.createUser = async (email, password) =>{
    try{
        const uid = Date.now();
        await createUser(email,password, uid);
    }catch(error){
        throw error;
    }
}
exports.loginUser = ()=>{
}

