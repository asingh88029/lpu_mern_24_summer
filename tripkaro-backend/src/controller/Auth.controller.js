const httpStatus = require("http-status")
const bcrypt = require('bcrypt')

const {RegisterUserService, GetUserByEmailId} = require("./../service/User.service")

async function RegisterUserController(req, res){
    try{

        const {name, email, password} = req.body;

        if(!name){
            throw new Error("Name is required")
        }

        if(!email){
            throw new Error("Email is required")
        }

        if(!password){
            throw new Error("Passowrd is required")
        }

        // Encrypt the password -> change the original password to the cypher text

        const salt = await bcrypt.genSalt(10)

        const encryptedPassword = await bcrypt.hash(password, salt)

        const result = await RegisterUserService(name, email, encryptedPassword)

        if(result.success){
            res.status(httpStatus.CREATED).json({
                success : true
            })
        }else{
            throw new Error("Failed to register the user.")
        }

    }catch(err){
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : err.message
        })
    }
}

async function LoginUserController(req, res){
    try{

        const {email, password} = req.body;

        if(!email){
            throw new Error("Email is required")
        }

        if(!password){
            throw new Error("Passowrd is required")
        }

        // we have to create check first user is present with this email or not

        const userResult = await GetUserByEmailId(email)

        console.log(userResult)

        // user having the same password that we are receiving

    }catch(err){
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : err.message
        })
    }
}

module.exports = {
    RegisterUserController,
    LoginUserController
}