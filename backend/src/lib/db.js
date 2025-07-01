import mongoose from 'mongoose'

export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("mongodb connection error",error)
        process.exit(1)
    }
}