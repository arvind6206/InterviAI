import { ResumeModel } from "../models/Resume.js";
import {UserModel} from '../models/User.js'
import cloudinary from "../config/cloudinary.js";
import { extractPdfText } from "../services/pdfExtractor.service.js";
import fs from 'fs'
import { analyzeResume } from "../services/gemini.service.js";


export const resume = async(req, res) => {
    try {
       const userId = req.userId;

       if(!req.file){
        return res.status(400).json({
            msg: "Please upload a resume"
        })
       }

       //upload pdf to cloudinary
       const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "raw",
        folder: "resume"
       })

       console.log(result)

       const parsedText = await extractPdfText(req.file.path);
       const aiResponse = await analyzeResume(parsedText)
       console.log(aiResponse)
       //delete local file
       fs.unlinkSync(req.file.path);



       //create resume document
       const resume = await ResumeModel.create({
        userId,
        resumeUrl: result.secure_url,
        parsedText,
        summary: aiResponse.summary,
        skills: aiResponse.skills,
        projects: aiResponse.projects,
        experience: aiResponse.experience,
        education: aiResponse.education,
        certifications: aiResponse.certifications
       })

       return res.status(201).json({
        msg: "Resume uploaded successfully",
        resume,
       })
    } catch (error) {
       console.log(error)
       //delete local file if an error occurs
       if(req.file){
        fs.unlink(req.file.path, () => {})
       }

       return res.status(500).json({
        msg: "Internal Server Error"
       })
    }
}