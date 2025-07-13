import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const hashpassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashpassword,
    });
    await createdUser.save();
    res.status(201).json({ message: " User Created Succesfully",user: {
        id:createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email
    } });
  } catch (error) {
    if(error.response)
    {
        console.log(error);
        alert("Error : " + error.response)
    }
    
  }
};

export const login = async ( req,res) => {
    try {
        const {email , password} = req.body;
        const user= await User.findOne({email});
        //console.log(user)
        const isMatch = await bcryptjs.compare( password, user.password );
        //console.log(isMatch)
        if(!user || !isMatch)
        {
             return res.status(402).json({message: " Invalid Email and Password"});
        }
        else{
            res.status(200).json({message: "Login Succesful" , user: {
                id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error : "+ error.message)
        res.status(500).json({
            message:"Server Error",
        });
    }
};
