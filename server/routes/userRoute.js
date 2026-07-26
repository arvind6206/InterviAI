import {Router} from 'express'
import { getProfile, login, signup } from '../controllers/userController.js'
import { authMiddleware } from '../middlewares/auth.js'

const userRouter = Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.get('/profile', authMiddleware, getProfile)



export default userRouter
