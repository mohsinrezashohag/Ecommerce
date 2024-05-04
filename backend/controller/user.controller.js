const User = require("../models/user.model");
const fs = require("fs");
const jwt = require('jsonwebtoken');
const sendMail = require("../utils/sendMail");
const createActivationToken = require("../utils/tokenGenerate");
const resHandler = require("../utils/resHandler");
// const ErrorHandler = require("../utils/ErrorHandler");

module.exports.registerUser = async (req, res, next) => {
  try {
    const userInfo = JSON.parse(req.body.fullObject);
    const avatar = req.file?.filename;
    const { name, email, password } = userInfo;
    const user = { ...userInfo, avatar: avatar };



    const userExists = await User.findOne({ email: email });
    if (userExists) {
      // If the user already exists, delete the newly uploaded file
      const filename = req.file.filename;
      const filePath = path.join('uploaded-images/', filename);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return res.status(500).json({
            message: "Error deleting file",
          });
        } else {
          console.log("File deleted successfully:", filename);
          return res.json({ message: "File deleted successfully" });
        }
      });
    } 
  

    // activation  related things 
    const activationToken = createActivationToken(user)
    const activationURL = `http://localhost:5173/activation/${activationToken}`

    try {
      await  sendMail({
        email : user.email,
        subject  : `Activate your account`,
        message : `Hello ${user.name} please clink on the link to activate your account : ${activationURL}`
      })
    } catch (error) {
      console.log(error);
    }

    // // user creation
    // const newUser = await User.create(user);

    // return res.status(200).json({
    //   success: true,
    //   message: "User created successfully",
    //   // user: newUser,
    // });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};




// activate user
module.exports.activateUser =async(req,res,next)=>{
  try {
    console.log("hitting after clicking");
    const {activationToken} = req.body;
    const newUser = jwt.verify(activationToken,process.env.JWT_SECRET_KEY)

    if (!newUser){
      return resHandler(res,200,false,"Invalid token")
    }

    
    const {name,email,password ,avatar} = newUser

    let user = await User.findOne({email})

    if (user){
      return resHandler(res,400,false,"User already exists !")
    }

     user = User.create({name,email,avatar,password}) 

    sendToken(user,201,res)

  } catch (error) {
    
  }
}


module.exports.LoginUser =async(req,res,next)=>{
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return resHandler(res,400,false,"Please provide all the fields !")
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return resHandler(res,400,false,"User doesn't exists !")
    }

    const isPasswordValid = await user.comparePassword(password);
    console.log(isPasswordValid);

    if (!isPasswordValid) {
      return resHandler(res,400,false,"password doesn't match")
    }

    sendToken(user, 201, res);
  } catch (error) {
    
  }
}

// load user

module.exports.loadUser=async()=>{
  try {
    const {email,password} = req.body;
    const user = await  User.findById(req.user.id) ;

    if (!user){
      return resHandler(res,400, false,"User  does't exists")
    }

    res.status(200).json({
      success : true,
      user : user
    })
  } catch (error) {
    return resHandler(res,400,false,error.message)
  }
}