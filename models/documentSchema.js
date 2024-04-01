import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    title: {
        type: String
    },
    owner: {
        type: mongoose.Schema.ObjectId,
    },
    collabs: [{
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }],
    content: {
        type: String
    }
}, {timestamps: true})

export default mongoose.model('document',documentSchema);