const Seller = require("../models/seller.model");
const Product = require("../models/product.model");

module.exports.createProduct = async (req, res, next) => {
  try {
    const productInfo = JSON.parse(req.body.productInfo);
    console.log(productInfo);
    const sellerId = productInfo.sellerId;
    const seller = await Seller.findById(sellerId);

    if (!seller) {
      console.log("seller nah");
      return resHandler(res, 200, false, "Invalid seller id");
    }
   
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
  
        productInfo.images = imageUrls;

        const product = await Product.create(productInfo);
        return res.status(200).json({
          status: true,
          message: "Product created successfully",
          data: product,
        });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Something went wrong",
    });
  }
};


module.exports.getAllSellerProducts= async (req, res) => {
    try {

        console.log("coming here");
        const sellerId = req.params.sellerId 
        const sellerAllProduct = await Product.find({sellerId : sellerId})


        if (sellerAllProduct.length === 0){
            console.log("ekhane dhukteche");
            return res.status(200).json({
                success: true,
                message: "Seller does not have any product",
            }) 
        }

        return res.status(200).json({
            success: true,
            message: "Products loaded successfully",
            data: sellerAllProduct
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Seller Products Load failed",
        })
    }
}