const resHandler = require("../utils/resHandler");
const jwt= require("jsonwebtoken") 

module.exports.isAuthenticated=async(req,res,next)=>{
try {
    const {token} = req.cookies;

    if (!token){
        return resHandler(res,401,false,"please login first")
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)

    req.user = await User.findById(decoded.id);

    next();

} catch (error) {
    
}
}