import ProductCard from "@/components/ProductCard";
import { productData } from "@/static/data";
import commonStyles from "@/styles/commonStyles";
import { useState } from "react";
import { Link } from "react-router-dom";

const SellerProfile = ({isSeller}) => {
 console.log(isSeller);
    const [active,setActive] = useState(1)

    const  products = productData

    return (
        <div className="w-full">
        <div className="flex flex-col md:flex-row justify-start md:justify-evenly items-start md:items-center w-full ">
          <div className="w-full flex">
            <div className="flex items-center" onClick={() => setActive(1)}>
              <h5
                className={`font-[600] text-[20px] ${
                  active === 1 ? "text-red-500" : "text-[#333]"
                } cursor-pointer pr-[20px]`}
              >
                Shop Products
              </h5>
            </div>
            <div className="flex items-center" onClick={() => setActive(2)}>
              <h5
                className={`font-[600] text-[20px] ${
                  active === 2 ? "text-red-500" : "text-[#333]"
                } cursor-pointer pr-[20px]`}
              >
                Running Events
              </h5>
            </div>
  
            <div className="flex items-center" onClick={() => setActive(3)}>
              <h5
                className={`font-[600] text-[20px] ${
                  active === 3 ? "text-red-500" : "text-[#333]"
                } cursor-pointer pr-[20px]`}
              >
                Shop Reviews
              </h5>
            </div>
          </div>
          <div>
            {isSeller && (
              <div className="mt-8 md:mt-0">
                <Link to="/seller-dashboard">
                  <div className={`${commonStyles.button} !rounded-[4px] h-[42px]`}>
                    <span className="text-[#fff]">Go Dashboard</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
  
        <br />
        {active === 1 && (
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {products &&
              products.map((i, index) => (
                <ProductCard product={i} key={index} isShop={true} />
              ))}
          </div>
        )}
  
        {active === 2 && (
          <div className="w-full">
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
              {events &&
                events.map((i, index) => (
                  <ProductCard
                    data={i}
                    key={index}
                    isShop={true}
                    isEvent={true}
                  />
                ))}
            </div>
            {events && events.length === 0 && (
              <h5 className="w-full text-center py-5 text-[18px]">
                No Events have for this shop!
              </h5>
            )}
          </div>
        )}
  
        {active === 3 && (
          <div className="w-full">
            {allReviews &&
              allReviews.map((item, index) => (
                <div className="w-full flex my-4">
                  <img
                    src={`${item.user.avatar?.url}`}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  <div className="pl-2">
                    <div className="flex w-full items-center">
                      <h1 className="font-[600] pr-2">{item.user.name}</h1>
                      <Ratings rating={item.rating} />
                    </div>
                    <p className="font-[400] text-[#000000a7]">{item?.comment}</p>
                    <p className="text-[#000000a7] text-[14px]">{"2days ago"}</p>
                  </div>
                </div>
              ))}
            {allReviews && allReviews.length === 0 && (
              <h5 className="w-full text-center py-5 text-[18px]">
                No Reviews have for this shop!
              </h5>
            )}
          </div>
        )}
      </div>
    );
};

export default SellerProfile;