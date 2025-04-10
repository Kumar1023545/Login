const express=require('express')
const mongoose=require('mongoose')
const authRoutes=require('./Routes/Auth')
const authMiddle=require('./Routes/authMiddleware')
const cors=require('cors')
require('dotenv').config();

const app=express();
const PORT=3001;

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,})
.then(()=>{
    console.log("Connected to database")
})
.catch((error)=>{
    console.error("error connecting to database",error)
})

app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT} `)
});