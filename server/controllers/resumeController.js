import { ResumeModel } from "../models/Resume";


export const resume = async(req, res) => {
    try {
        const {summary, skills, projects, education} = req.body;
        await ResumeModel.create({
            summary,
            skills,
            projects,
            experience,
            education,
            certifications
        })
        res.json({
            msg: "Resume created successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}