const express = require("express")
const router = express.Router()
const sellerController = require ('../controller/seller.controller')
const upload = require("../config/multerConfig")



router.post("/create-seller",upload.single("avatar"),sellerController.createSeller)
router.post("/activation",sellerController.activateSeller)
router.post("/login-seller",sellerController.LoginSeller)
router.post("/get-seller",sellerController.loadSeller)

module.exports = router