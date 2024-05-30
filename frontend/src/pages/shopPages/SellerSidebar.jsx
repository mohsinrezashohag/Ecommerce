import  { useState } from 'react';
import { AiOutlineFolderAdd, AiOutlineGift } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { CiMoneyBill, CiSettings } from 'react-icons/ci';
import { FiPackage, FiShoppingBag } from 'react-icons/fi';
import { HiOutlineReceiptRefund } from 'react-icons/hi';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { VscNewFile } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const SellerSidebar = () => {

    const [active,setActive] = useState(1)

    return (
        <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
          {/* single item */}
          <div className="w-full flex items-center p-4">
            <Link to="/seller-dashboard" className="w-full flex items-center">
              <RxDashboard
                size={30}
                color={`${active === 1 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 1 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                Dashboard
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link to="orders" className="w-full flex items-center">
              <FiShoppingBag
                size={30}
                color={`${active === 2 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 2 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                All Orders
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link to="products" className="w-full flex items-center">
              <FiPackage size={30} color={`${active === 3 ? "crimson" : "#555"}`} />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 3 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                All Products
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link
              to="create-products"
              className="w-full flex items-center"
            >
              <AiOutlineFolderAdd
                size={30}
                color={`${active === 4 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 4 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                Create Product
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link to="all-events" className="w-full flex items-center">
              <MdOutlineLocalOffer
                size={30}
                color={`${active === 5 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 5 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                All Events
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link to="create-event" className="w-full flex items-center">
              <VscNewFile
                size={30}
                color={`${active === 6 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 6 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                Create Event
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link
              to="withdraw-money"
              className="w-full flex items-center"
            >
              <CiMoneyBill
                size={30}
                color={`${active === 7 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 7 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                Withdraw Money
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link to="inbox" className="w-full flex items-center">
              <BiMessageSquareDetail
                size={30}
                color={`${active === 8 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 8 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                Shop Inbox
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link to="discount-codes" className="w-full flex items-center">
              <AiOutlineGift
                size={30}
                color={`${active === 9 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 9 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                Discount Codes
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link to="sell-refunds" className="w-full flex items-center">
              <HiOutlineReceiptRefund
                size={30}
                color={`${active === 10 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 10 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                Refunds
              </h5>
            </Link>
          </div>
    
          <div className="w-full flex items-center p-4">
            <Link to="settings" className="w-full flex items-center">
              <CiSettings
                size={30}
                color={`${active === 11 ? "crimson" : "#555"}`}
              />
              <h5
                className={`hidden md:block pl-2 text-[18px] font-[400] ${
                  active === 11 ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                Settings
              </h5>
            </Link>
          </div>
        </div>
      );
    };

export default SellerSidebar;