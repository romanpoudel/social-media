const router =require("express").Router();
const User=require("../models/User");
const bcrypt=require("bcrypt");

router.post("/register",async (req, res) => {
    
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser=await new User({
            username: req.body.username,
            email: req.body.email,
            password:hashedPassword,
        })

        //save user and return response
        const user=await newUser.save();
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
    
})

//login
router.post("/login", async (req, res) => {
    try{
        const user=await User.findOne({email:req.body.email});
        !user && res.status(404).json("User not found");
        const validatePassword=await bcrypt.compare(req.body.password, user.password);
        !validatePassword && res.status(400).json("Wrong password");
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
});


module.exports = router;