import {Router} from 'express'

const resumeRouter = Router()

resumeRouter.post('/resume', resume)

export default resumeRouter;