import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import validator from "validator"
import jwt from "jsonwebtoken"


const createToken = (id) =>{
  return jwt.sign({id}, process.env.JWT_SECRET);
}

//Route for userLogin
const loginUser = async(req, res) => {
  try {
    const {email, password} = req.body;
    const user = await userModel.findOne({email});
    

    if(!user){
      return res.json({success: false, message: "user doesn't exists"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch){
      const token = createToken(user._id);
      res.json({success: true, token});
    }else{
      res.json({success: false, message: "Invalid credentials!"})
    }

  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}


//Route for registerUser
const registerUser = async(req, res) => {
  try {
    const{name, email, password} = req.body;

    //checking user already exists or not
    const exists = await userModel.findOne({email});

    if(exists) return res.json({success: false, message: "User already exists"});

    //validating email & strong password
    if(!validator.isEmail(email)){
      return res.json({success: false, message: "Invalid email"});
    }

    if(password.length < 8){
      return res.json({success: false, message: "password should be more than or equal to 8 character & strong"});
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({success: true, token});

  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})
  } 
}


//Route for adminLogin
const adminLogin = async(req, res) => {

}

export{loginUser, registerUser, adminLogin};