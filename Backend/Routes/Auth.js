const express=require('express')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const User =require('../Models/User')
const router=express.Router();
const {generateToken,verifyToken}=require('../Utils/jwtHelper')


router.post('/register', async (req, res)=>{
    try{
      const { username, password } = req.body;

      const existingUser= await User.findOne({ username })
      if(existingUser){
        return res.status(400).json({error:"username already exists"})
      }

      const salt=await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(password, salt);

      const user = new User({username,password:hashedPassword,})

      const savedUser=await user.save();
      res.json({
        message:"user registered successfully",
        userId: savedUser._id,
      })
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:"internal server error"})
    }
});

router.post('/login', async (req,res)=>{
    const { username , password }=req.body;
    const user= await User.findOne({ username });
    
    if(!user){
       return res.status(400).send("invalid username or password")
    }
    
    const validPassword= await bcrypt.compare(password,user.password)

    if(!validPassword){
      return res.status(400).send("invalid username or password")
   }

    
    
    

    const token = jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:'10s'})
    res.send({ token })
    
    // const token = generateToken(user);
    // const verify=verifyToken(token);
    // res.json({ verify, token, userId: user._id });

   
    



    




})

module.exports=router;