import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    documents: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'document'
            }
        ]
    }
}, {timestamps: true})

export default mongoose.model('user',userSchema)