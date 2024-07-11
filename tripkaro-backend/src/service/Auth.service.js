const User = require("./../model/User.model")

async function RegisterUserService(name, email, encryptedPassword){
    try{

        const result = await User.create({
            name,
            email,
            password : encryptedPassword
        })

        if(result){
            return {
                success : true,
                data : result
            }
        }else{
            throw new Error("Error in RegisterUserService")
        }

    }catch(err){
        console.log(err)
        return {
            success : false
        }
    }
}

module.exports = {
    RegisterUserService
}