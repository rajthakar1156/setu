import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import chatRoutes from './routes/chat.route.js'
import cors from 'cors'
import path from "path"

import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser'
dotenv.config()

const port = process.env.PORT || 5001;
const __dirname = path.resolve();

const app = express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true // allowed frontend to send cookies
}))
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/chat',chatRoutes)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    connectDB()
})