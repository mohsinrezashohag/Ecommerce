const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')
const upload = require('../config/multerConfig')
const { isAuthenticated } = require('../middleware/isAuthenticated')


router.post('/register',upload.single("avatar"),userController.registerUser)
router.post('/activation',userController.activateUser)
router.post('/login-user',userController.LoginUser)
router.post('/get-user',isAuthenticated,userController.loadUser)


module.exports = router