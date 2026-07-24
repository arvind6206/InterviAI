import bcrypt from 'bcryptjs'
import { UserModel } from '../models/User.js';
import { loginSchema, signupSchema } from '../validators/auth.validator.js';
import jwt from 'jsonwebtoken'

export const signup = async(req, res) => {
    const result = signupSchema.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({
            success: false,
            message: result.error.issues[0].message
        })
    }
    try {
        const {name, email, password} = result.data
       
        const user = await UserModel.findOne({email})
        if(user){
            return res.status(400).json({
                msg: "User already exist"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({
            name, 
            email,
            password: hashedPassword
        })
        res.status(201).json({
            msg: "User signed up successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}

export const login = async(req, res) => {
     const result = loginSchema.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({
            success: false,
            message: result.error.issues[0].message
        })
    }
    try {
        const {email, password} = req.body
        const findUser = await UserModel.findOne({email})
        if(!findUser){
            return res.status(400).json({
                msg: "User does not exist first signup"
            })
        }

        const matched = await bcrypt.compare(password, findUser.password)
        if(!matched){
            return res.status(400).json({
                msg: "Incorrect Password"
            })
        }

        const token = jwt.sign({
            id: findUser._id
        }, process.env.JWT_SECRET)

        res.status(200).json({
            msg: "Login Successfully",
            token: token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Internal Server error"
        })
    }
}