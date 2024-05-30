const resHandler = require("../utils/resHandler.js");
const Seller = require("../models/seller.model.js");
const createActivationToken = require("../utils/activationTokenGenerate.js");
const sendMail = require("../utils/sendMail.js");
const jwt = require('jsonwebtoken');
const { sendToken } = require("../utils/sendToken.js");

module.exports.createSeller = async (req, res, next) => {
  try {
    const sellerInfo = JSON.parse(req.body.fullObject);
    const avatar = req.file?.filename;
    const { sellerName, email, phoneNumber, zipCode, address, password } =
      sellerInfo;
    const seller = { ...sellerInfo, avatar: avatar };

    const sellerExists = await Seller.findOne({ email: email });

    if (sellerExists) {
      // If the user already exists, delete the newly uploaded file
      const filename = req.file.filename;
      const filePath = path.join("uploaded-images/", filename);
      fs.unlink(filePath, (err) => {
        if (err) {
          res.status(500).json({
            message: "Error deleting file",
          });
        } else {
          return res.json({ message: "Seller already resister" });
        }
      });
    }

    // activation  related things
    const activationToken = createActivationToken(seller);
    const activationURL = `http://localhost:5173/seller/activation/${activationToken}`;

    try {
      console.log("mail er ekhane ashteche");
      await sendMail({
        email: seller.email,
        subject: `Activate your account`,
        message: `Hello ${seller.name} please clink on the link to activate your shop : ${activationURL}`,
      });
    } catch (error) {
      console.log(error);
    }

    return resHandler(res, 200, true, "Check your email to activate your account ");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports.activateSeller = async (req, res, next) => {
  try {

    const { activationToken } = req.body;
    const newSeller = jwt.verify(activationToken, process.env.JWT_SECRET_KEY);

    console.log(newSeller);
    if (!newSeller) {
      return resHandler(res, 200, false, "Invalid token");
    }

    const { sellerName, email,avatar, phoneNumber, zipCode, address, password } =
    newSeller;

    let seller = await Seller.findOne({ email });
    if (seller) {
      return resHandler(res, 400, false, "Seller already exists !");
    }

    seller = Seller.create({ sellerName, email, avatar, password });
    sendToken(seller, 201, res);
  } catch (error) {


    console.log(error);
  }
};





module.exports.LoginSeller =async(req,res,next)=>{
  try {
    console.log("login seller ee ashteche");
    const { email, password } = req.body;

    if (!email || !password) {
      return resHandler(res,400,false,"Please provide all the fields !")
    }

    const seller = await Seller.findOne({ email }).select("+password");

    if (!seller) {
      return resHandler(res,400,false,"Seller doesn't exists !")
    }

    const isPasswordValid = await seller.comparePassword(password);
    console.log(isPasswordValid);

    if (!isPasswordValid) {
      return resHandler(res,400,false,"password doesn't match")
    }

    return res.status(200).json({
      success: true,
      seller :seller,
    });
    // sendToken(seller, 201, res);
   
  } catch (error) {
    console.log(error);
  }
}



module.exports.loadSeller=async(req,res,next)=>{

  console.log(req.body);
  try {
    const seller = await  Seller.findById(req.user.id) ;
    if (!user){
      return resHandler(res,400, false,"Seller  does't exists")
    }
    res.status(200).json({
      success : true,
      seller : seller
    })
  } catch (error) {
    return resHandler(res,400,false,error.message)
  }
}