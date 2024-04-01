import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;
const jwtSign = (_id,email)=>{
    const token = jwt.sign({_id,email}, secretKey,{expiresIn: '1d'})
    return token;
}

export default jwtSign;