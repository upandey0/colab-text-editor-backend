import mongoose from "mongoose";

const cursorSchema = new mongoose.Schema({
    title: {
        type: String
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    documentId: {
        type: mongoose.Schema.ObjectId,
        ref: 'document'
    }
    
}, {timestamps: true})

export default mongoose.model('document',cursorSchema);