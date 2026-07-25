import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js';
import cors from 'cors'
import resumeRouter from './routes/resumeRoute.js';

dotenv.config()

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())

connectDB()
const PORT = process.env.PORT;

app.use('/api/v1/user', userRouter)
app.use('/api/v1/resume', resumeRouter)
app.use('/api/v1/interview', interviewRouter)

app.listen(PORT, () => {
    console.log(`Server is litening on http://localhost:${PORT}`)
})