import commonStyles from "@/styles/commonStyles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SellerProfileData from "./SellerProfileData";

const ShowSellerProfile = () => {
  const { seller } = useSelector((state) => state.seller);
  const isSeller = seller.role==="seller" ? true : false;
 
 
 
  const logoutHandler = () => {};


  return (
    <div className="flex flex-col md:flex-row px-5 pt-2 ">
      <div className="min-w-[250px] py-5 ">
        <div className="flex flex-col justify-start items-start ms-2">
          <div >
            <img
              src={`http://localhost:8000/uploaded-images/${seller.avatar}`}
              alt=""
              className="w-[150px] h-[150px] rounded-sm"
            />
          </div>
          <h3 className="text-center py-2 text-[20px] font-semibold">{seller.sellerName}</h3>
          <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
            {seller.description}
          </p>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Address</h5>
          <h4 className="text-[#000000a6]">{seller.address}</h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Phone Number</h5>
          <h4 className="text-[#000000a6]">{seller.phoneNumber}</h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Total Products</h5>
          <h4 className="text-[#000000a6]">{5}</h4>
          {/* {products && products.length} */}
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Shop Ratings</h5>
          <h4 className="text-[#000000b0]">3/5</h4>
          {/* {averageRating} */}
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Joined On</h5>
          <h4 className="text-[#000000b0]">
            {seller?.createdAt?.slice(0, 10)}
          </h4>
        </div>
        {isSeller && (
          <div className="py-3 px-4">
            <Link to="/settings">
              <div
                className={`${commonStyles.button} !w-full !h-[42px] !rounded-[5px]`}
              >
                <span className="text-white">Edit Shop</span>
              </div>
            </Link>
            <div
              className={`${commonStyles.button} !w-full !h-[42px] !rounded-[5px]`}
              onClick={logoutHandler}
            >
              <span className="text-white">Log Out</span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 w-full ps-2">
        <SellerProfileData isSeller ={isSeller}></SellerProfileData>
      </div>
    </div>
  );
};

export default ShowSellerProfile;
