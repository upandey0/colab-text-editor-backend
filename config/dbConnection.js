import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

const dbURI = process.env.MONGO_URI
const dbConnection = async ()=>{
        try {
            const connection = await mongoose.connect(dbURI)
            console.log('Connected to dataBase Also')

        } catch (e) {
            console.log(e.message);
        }
}

export default dbConnection;