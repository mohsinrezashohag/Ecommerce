const jwt = require('jsonwebtoken')

// token generate
const createActivationToken = (user)=>{
  return jwt.sign(user,process.env.JWT_SECRET_KEY,{expiresIn : "7d"})
 }
 
 module.exports = createActivationToken