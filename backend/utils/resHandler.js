const resHandler =(res,statusCode,success,message)=>{
    return res.status(statusCode).json({
        success :success,
        message :message
        })
}


module.exports = resHandler