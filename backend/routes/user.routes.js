const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')

// multer functionality

const multer = require('multer')
const path = require('path')
const { isAuthenticated } = require('../middleware/isAuthenticated')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploaded-images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
    
})
const upload = multer({ storage: storage })

router.post('/register',upload.single("avatar"),userController.registerUser)
router.post('/activation',userController.activateUser)
router.post('/login-user',userController.LoginUser)
router.post('/get-user',isAuthenticated,userController.loadUser)


module.exports = router