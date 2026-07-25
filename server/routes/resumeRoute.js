import {Router} from 'express'
import { authMiddleware } from '../middlewares/auth.js';
import { upload } from '../middlewares/multer.js';
import { getResume, resume } from '../controllers/resumeController.js';

const resumeRouter = Router()

resumeRouter.post('/upload', authMiddleware, upload.single("resume"), resume)
resumeRouter.get('/', authMiddleware, getResume)

export default resumeRouter;