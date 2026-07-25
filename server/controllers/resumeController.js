import { ResumeModel } from "../models/Resume.js";
import {UserModel} from '../models/User.js'
import cloudinary from "../config/cloudinary.js";
import { extractPdfText } from "../services/pdfExtractor.service.js";
import fs from 'fs'


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

       const parsedText = await extractPdfText(req.file.path);

       //delete local file
       fs.unlinkSync(req.file.path);



       //create resume document
       const resume = await ResumeModel.create({
        userId,
        resumeUrl: result.secure_url,
        parsedText,
        summary: "",
        skills: [],
        projects: [],
        experience: "",
        education: "",
        certifications: []
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