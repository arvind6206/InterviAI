import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: "",
    },
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume",
        default: null
    },
  
    
}, {timestamps: true})

export const UserModel = mongoose.model('User', userSchema)