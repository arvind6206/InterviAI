import mongoose from 'mongoose'

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    resumeUrl: {
        type: String,
        required: true
    },
    parsedText: {
        type: String,

    },
    summary:{
        type: String
    },
    skills: [
        {
        type: String,
    }
    ],
    projects: [
        {
        type: String,
    }
    ],
    experience: {
        type: String
    },
    education: {
        type: String
    },
    certifications: [
        {
        type: String
    }
    ]
}, {timestamps: true})

export const ResumeModel = mongoose.model('Resume', resumeSchema)