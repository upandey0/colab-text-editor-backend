import mongoose from "mongoose";
import userSchema from '../models/userSchema.js';
import bcryptjs from 'bcryptjs'

const registerUser = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password)
        res.json({status: 400, success: false, message : 'Any of the fields are missing'})

    const user = await userSchema.findOne({email});
    if(user){
        res.json({status: 400, success: false, message : 'User email already registered!'})
    } else {
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = await userSchema.create({
            email, 
            password: hashedPassword
        })
        res.status(201).json({status: 201, success: true, message: 'user created Successfully'})
    }
}

export default registerUser;