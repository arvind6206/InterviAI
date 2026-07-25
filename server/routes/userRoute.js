import {Router} from 'express'
import { getProfile, login, signup } from '../controllers/userController.js'

const userRouter = Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.get('/profile', getProfile)



export default userRouter
