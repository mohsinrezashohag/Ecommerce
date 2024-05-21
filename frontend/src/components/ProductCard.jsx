import commonStyles from "@/styles/commonStyles";
import { useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "./smallComponents/Ratings";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductDetailsCard from "./ProductDetailsCard";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  console.log(product);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const addToCartHandler = () => {};

  const removeFromWishlistHandler = () => {};
  const addToWishlistHandler = () => {
    setClick(!click);
  };



  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>

        {/* {`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`} */}
        <Link to={`/product/${product.name.replace(/\s+/g, '_')}`}>
          <img
            src={`${product && product.image_Url[0].url}`}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to={`/shop/preview/${product?.shop._id}`}>
          <h5 className={`${commonStyles.shop_name}`}>{product.shop.name}</h5>
        </Link>

        {/* {`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`} */}
        <Link to="">
          <h4 className="pb-3 font-[500]">
            {product.name.length > 40
              ? product.name.slice(0, 40) + "..."
              : product.name}
          </h4>

          <div className="flex">
            <Ratings rating={product?.rating} />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${commonStyles.productDiscountPrice}`}>
                {product.price === 0 ? product.price : product.discount_price}$
              </h5>
              <h4 className={`${commonStyles.price}`}>
                {product.price ? product.price + " $" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {product?.total_sell} sold
            </span>
          </div>
        </Link>

        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => removeFromWishlistHandler(product)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(product)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(product._id)}
            color="#444"
            title="Add to cart"
          />
          {/* {open ? <ProductDetailsCard setOpen={setOpen} data={product} /> : null} */}
          {
            <ProductDetailsCard
              setOpen={setOpen}
              open={open}
              product={product}
            />
          }
        </div>
      </div>
    </>
  );
};

export default ProductCard;
