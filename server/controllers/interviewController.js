import { InterviewModel } from "../models/Interview.js"
import { ResumeModel } from "../models/Resume.js"
import { evaluateAnswer, generateFirstQuestion } from "../services/interview.service.js"

export const startInterview = async(req, res) => {
    try {
        const userId = req.userId
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

export const answerInterview = async(req, res) => {
    try {
        const {interviewId, answer} = req.body

        if(!interviewId || !answer){
            return res.status(400).json({
                msg: "Interview ID and answer are required"
            })
        }

        const interview = await InterviewModel.findById(interviewId)

        if(!interview){
            return res.status(404).json({
                msg: "Interview not found"
            })
        }

        if(interview.status === "completed"){
            return res.status(400).json({
                msg: "Interview already completed"
            })
        }

        //current question
        const currentIndex = interview.currentQuestion - 1
        const currentRound = interview.conversation[currentIndex]

        if(!currentRound){
            return res.status(400).json({
                msg: "Current question not found"
            })
        }

        currentRound.answer = answer

        const resume = await ResumeModel.findById(interview.resumeId);
        if(!resume){
            return res.status(404).json({
                msg: "Resume not found"
            })
        }

        //ask gemini to evaluate
        const aiResponse = await evaluateAnswer(
            resume,
            currentRound.question,
            answer
        )

        //save feedback
        currentRound.feedback = aiResponse.feedback;
        currentRound.score = aiResponse.score

        //Interview finished?
        if(interview.currentQuestion >= 10){
            interview.status = "completed"

            interview.overallScore = aiResponse.overallScore
            interview.overallFeedback = aiResponse.overallFeedback
            interview.strengths = aiResponse.strengths;
            interview.weaknesses = aiResponse.weaknesses;
            interview.recommendations = aiResponse.recommendations

            await interview.save()

            return res.status(200).json({
                completed: true,
                msg: "Interview completed successfully",
                interview
            })
        }

        //add next question
        interview.conversation.push({
            question: aiResponse.nextQuestion,
            answer: "",
            feedback: "",
            score: 0,
        })

        interview.currentQuestion += 1;
        await interview.save()

        return res.status(200).json({
            completed: false,
            nextQuestion: aiResponse.nextQuestion,
            feedback: currentRound.feedback,
            score: currentRound.score
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Internal server Error"
        })
    }
}