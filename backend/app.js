const express =require('express');
require('dotenv').config()
// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')
const cors = require('cors')
const dbConnect = require('./db/dbConnect');
const ErrorHandler = require('./utils/ErrorHandler');


const app = express ()

// middleware
app.use(cors({
    origin :"http://localhost:5173",
    credentials :true
}))


// app.use(cookieParser())
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'))




// app.get('/',(req,res)=>{
//     res.send("Working fine")
// })
// importing all routes
const userRoutes = require('./routes/user.routes')
const sellerRoutes = require('./routes/seller.routes')
const productRoutes = require('./routes/product.routes')
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/seller',sellerRoutes)
app.use('/api/v1/product',productRoutes)

dbConnect()
// error handling
// app.use(ErrorHandler)
module.exports = app
