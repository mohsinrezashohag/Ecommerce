import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProductDetailsCard = ({ open, setOpen, product }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 1 ? count - 1 : 1);

  const addToCartHandler = () => {};
  const handleMessageSubmit = () => {};
  const addToWishlistHandler = () => {};
  const removeFromWishlistHandler = () => {};

  return (
    <section className='w-700px'>
        <Dialog open={open} onOpenChange={setOpen} className="">
      <DialogContent >
        <div className="bg-[#fff] p-4">
          {product ? (
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2">
                  {/* <img
                    src={`${product.images && product.images[0]?.url}`}
                    alt=""
                    className=""
                    width={400}
                    height={500}
                  /> */}
                  <div className="flex flex-col items-start mt-4">
                    <Link to={`/shop/preview/${product?.shop._id}`} className="flex items-center">
                      <img
                        src={`${product && product.image_Url[0].url}`}
                        alt=""
                        className="w-100 h-100 rounded-full"
                      />
                    </Link>

                    <div>
                        <h3 className="text-xl">{product?.shop?.name}</h3>
                        <h5 className="text-sm">{product?.rating} Ratings</h5>
                      </div>
                  </div>
                  <button
                    className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={handleMessageSubmit}
                  >
                    Send Message <AiOutlineMessage className="ml-1" />
                  </button>
                  <h5 className="text-sm text-red-500 mt-5">(50) Sold out</h5>
                </div>

                <div className="md:w-1/2 md:pl-8">
                  <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
                  <p className="text-sm mb-4">{product.description.slice(0,200)}</p>

                  <div className="flex items-center mb-4">
                    <h4 className="text-lg font-semibold mr-2">{product.discount_price}$</h4>
                    <h3 className="text-gray-500 line-through">{product.price ? product.price + "$" : null}</h3>
                  </div>

                  <div className="flex items-center mb-4">
                    <button className="bg-teal-500 text-white py-2 px-4 rounded-l-md hover:bg-teal-600 transition duration-300 ease-in-out" onClick={decrementCount}>-</button>
                    <span className="bg-gray-200 text-gray-800 font-medium py-2 px-4">{count}</span>
                    <button className="bg-teal-500 text-white py-2 px-4 rounded-r-md hover:bg-teal-600 transition duration-300 ease-in-out" onClick={incrementCount}>+</button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {click ? (
                        <AiFillHeart
                          size={30}
                          className="cursor-pointer text-red-500"
                          onClick={() => removeFromWishlistHandler(product)}
                          title="Remove from wishlist"
                        />
                      ) : (
                        <AiOutlineHeart
                          size={30}
                          className="cursor-pointer"
                          onClick={() => addToWishlistHandler(product)}
                          title="Add to wishlist"
                        />
                      )}
                    </div>
                    <div>
                      <button
                        className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300 ease-in-out"
                        onClick={() => addToCartHandler(product._id)}
                      >
                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : "Product not found"}
        </div>
      </DialogContent>
    </Dialog>
    </section>
  );
};

export default ProductDetailsCard;
