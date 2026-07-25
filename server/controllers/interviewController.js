import { InterviewModel } from "../models/Interview"
import { ResumeModel } from "../models/Resume"

export const startInterview = async(req, res) => {
    try {
        const user = req.userId
        const resume = await ResumeModel.findOne({userId})
        if(!resume){
            return res.status(404).json({
                msg: "Please upload your resume first"
            })
        }

        //gen question
        const firstQuestion = await generateFirstQuestion(resume)

        //create interview session
        const interview = await InterviewModel.create({
            userId,
            resumeId: resume._id,
            status: "in-progress",
            currentQuestion: 1,
            conversation: [
                {
                    question: firstQuestion,
                    answer: "",
                    feedback: "",
                    score: 0,
                },
            ],
            overallScore: 0,
            overallFeedback: "",
            strengths: [],
            weaknesses: [],
            recommendations: []
        })

        return res.status(201).json({
            msg: "Interview started successfully",
            interviewId: interview._id,
            question: firstQuestion,
        })
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}