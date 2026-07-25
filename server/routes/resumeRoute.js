import {Router} from 'express'
import { authMiddleware } from '../middlewares/auth.js';
import { upload } from '../middlewares/multer.js';
import { resume } from '../controllers/resumeController.js';

const resumeRouter = Router()

resumeRouter.post('/upload', authMiddleware, upload.single("resume"), resume)

export default resumeRouter;