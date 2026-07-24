import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js';

dotenv.config()
const app = express();

app.use(express.json())

connectDB()
const PORT = process.env.PORT;

app.use('/api/v1/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server is litening on http://localhost:${PORT}`)
})