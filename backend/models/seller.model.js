const mongoose = require("mongoose");
const bcrypt =  require("bcrypt")


const sellerSchema = new mongoose.Schema({
  sellerName: {
    type: String,
    required: [true, "Please enter your name!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email!"],
  },
  phoneNumber: {
    type: Number,
  },
  addresses: {
    type: String,
    // {
    //   country: {
    //     type: String,
    //   },
    //   city:{
    //     type: String,
    //   },
    //   address1:{
    //     type: String,
    //   },
    //   address2:{
    //     type: String,
    //   },
    //   zipCode:{
    //     type: Number,
    //   },
    //   addressType:{
    //     type: String,
    //   },
    // }
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
  },
  role: {
    type: String,
    default: "seller",
  },
  //   avatar:{
  //     public_id: {
  //       type: String,
  //       // required: true,
  //     },
  //     url: {
  //       type: String,
  //       // required: true,
  //     },
  //  },

  avatar: {
    type: String,
  },
  zipCode: {
    type: Number,
    // required: [true, "Please enter the zip code"],
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});


// password hashing
sellerSchema.pre('save', async(next)=>{
  const hashedPass=await bcrypt.hash(this.password, 10, function(err, hash) { 
   });
   this.password = hashedPass
 })
 // compare password
 sellerSchema.methods.comparePassword =  function (enteredPassword) {
     return this.password ===enteredPassword ;
   };

module.exports = mongoose.model("Seller", sellerSchema);
