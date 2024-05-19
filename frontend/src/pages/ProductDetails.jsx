import Footer from "@/components/Footer";
import ProductDetailsInfo from "@/components/ProductDetailsInfo";
import SecondHeader from "@/components/SecondHeader";
import { productData } from "@/static/data";
import commonStyles from "@/styles/commonStyles";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  let { name } = useParams();
  const [data, setData] = useState(null);
  const [select, setSelect] = useState(0);
  const [count, setCount] = useState(1);
  const [click,setClick] = useState(null)

  const productName = name.replace(/-/g, " ");
  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, []);

  // functions
  const incrementCount = () => {
    setCount(count + 1)
  };
  const decrementCount = () => {
    if (count !== 0){
        setCount(count - 1)
    }
  };

  const addToWishlistHandler =()=>{

  }
  const removeFromWishlistHandler =()=>{
  }

  const handleMessageSubmit =()=>{

  }

const averageRating = 10
  
  return (
    <>
      <SecondHeader />
      <div className="bg-white">
        {data ? (
          <div className={`${commonStyles.section} w-[90%] 800px:w-[80%]`}>
            <div className="w-full py-5">
              <div className="w-full flex flex-col md:flex-row">
                <div className="w-full md:w-[70%]">
                  <img
                    src={`${data && data.image_Url[0]?.url}`}
                    alt=""
                    className="w-[70%] mb-6"
                  />
                  <div className="w-full flex">
                    {data &&
                      data.image_Url.map((i, index) => (
                        <div
                          key={index}
                          className={`${
                            select === 0 ? "border" : "null"
                          } cursor-pointer`}
                        >
                          <img
                            src={`${i?.url}`}
                            alt=""
                            className="h-[80px] overflow-hidden mr-3 mt-3"
                            onClick={() => setSelect(index)}
                          />
                        </div>
                      ))}
                    <div
                      className={`${
                        select === 1 ? "border" : "null"
                      } cursor-pointer`}
                    ></div>
                  </div>
                </div>
                <div className="w-full 800px:w-[50%] pt-5">
                  <h1 className={`${commonStyles.productTitle}`}>
                    {data.name}
                  </h1>
                  <p>{data.description}</p>
                  <div className="flex pt-6 items-center">
                    <h1 className={`${commonStyles.productDiscountPrice}`}>
                      {data.discount_price}$
                    </h1>
                    <h3 className={`${commonStyles.price}`}>
                      {data.price ? data.price + "$" : null}
                    </h3>
                  </div>

                  <div className="flex items-center mt-12 justify-between pr-3">
                    <div>
                      <button
                        className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                        onClick={decrementCount}
                      >
                        -
                      </button>
                      <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                        {count}
                      </span>
                      <button
                        className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                        onClick={incrementCount}
                      >
                        +
                      </button>
                    </div>
                    <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                  </div>
                  <div
                    className={`${commonStyles.button} !mt-6 !rounded !h-11 flex items-center`}
                    //   onClick={() => addToCartHandler(data._id)}
                  >
                    <span className="text-white flex items-center">
                      Add to cart <AiOutlineShoppingCart className="ml-1" />
                    </span>
                  </div>
                  <div className="flex items-center pt-8">
                    <Link to={`/shop/preview/${data?.shop._id}`}>
                      <img
                        src={`${data?.shop?.shop_avatar?.url}`}
                        alt=""
                        className="w-[50px] h-[50px] rounded-full mr-2"
                      />
                    </Link>
                    <div className="pr-8">
                      <Link to={`/shop/preview/${data?.shop._id}`}>
                        <h3 className={`${commonStyles.shop_name} pb-1 pt-1`}>
                          {data.shop.name}
                        </h3>
                      </Link>
                      <h5 className="pb-3 text-[15px]">
                      ({averageRating}/5) Ratings
                    </h5>
                    </div>
                    <div
                      className={`${commonStyles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                      onClick={handleMessageSubmit}
                    >
                      <span className="text-white flex items-center">
                        Send Message <AiOutlineMessage className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductDetailsInfo
            data={data}
            // products={products}
            // totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          />
            <br />
            <br />
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
