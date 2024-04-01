import jwtSign from '../helpers/jwtSign.js';
import userSchema from '../models/userSchema.js';
import bcrypt from 'bcryptjs'

const userSignin = async (req,res) => {
    const {email,password} = req.body;
    if(!password || !email){
        res.status(400).json({message: 'Fields are missing', success: false, status: 401});
    }

    try {
        const user = await userSchema.findOne({email});
        if(!user) {
            res.status(400).json({staus: 400, message: 'No user exists please sign in first ', success: false});
        } else {
            const passwordFromDb = user.password;
            const flag = await bcrypt.compare(password,passwordFromDb)
            if(!flag) {
                res.status(401).json({staus: 401, message: 'Enter correct password', success: false});
            } else {
                const token = jwtSign(user._id, email)
                res.status(200).cookie('token',token, {maxAge: 24*60*60*1000,httpOnly: true}).json({staus: 200, message: 'User logged in', success: true});
            }
        }
    } catch(e){
        res.status(500).json({message: e.message })
    }

}

export default userSignin