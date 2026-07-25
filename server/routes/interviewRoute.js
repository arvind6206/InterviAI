import {Router} from 'express'
import { authMiddleware } from '../middlewares/auth'
import { startInterview } from '../controllers/interviewController'


const interviewRouter = Router()

interviewRouter.post('/start', authMiddleware,startInterview )
interviewRouter.post('/answer', authMiddleware )
interviewRouter.post('/:id', authMiddleware )

export default interviewRouter;