const upload = require("../config/multerConfig")

const express = require("express")
const router = express.Router()
const productController = require('../controller/product.controller')

router.post('/create-product',upload.array("images"),productController.createProduct)
router.get('/get-seller-products/:sellerId',productController.getAllSellerProducts)


module.exports  = router