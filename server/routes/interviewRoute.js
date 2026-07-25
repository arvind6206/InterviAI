import {Router} from 'express'
import { authMiddleware } from '../middlewares/auth.js'
import { answerInterview, startInterview } from '../controllers/interviewController.js'


const interviewRouter = Router()

interviewRouter.post('/start', authMiddleware,startInterview )
interviewRouter.post('/answer', authMiddleware, answerInterview )
interviewRouter.post('/:id', authMiddleware )

export default interviewRouter;