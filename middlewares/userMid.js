import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'


const userMid = (req,res, next)=>{
    const token = req.cookies.token;
    console.log(token)
    if(!token) return res.status(401).json({ message: 'Unauthorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded._id; // Pass user ID to next function
        req.email = decoded.email; 
        console.log(req.userId)
        next(); // Call next middleware
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

export default userMid;