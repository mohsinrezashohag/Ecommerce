import { useState } from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
    MdOutlineAdminPanelSettings,
    MdOutlineTrackChanges,
  } from "react-icons/md";
  import { RiLockPasswordLine } from "react-icons/ri";
  import { TbAddressBook } from "react-icons/tb";


import { RxPerson } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProfileSidebar = () => {
    const [active,setActive] = useState();
const navigate = useNavigate()
const {user} = useSelector(state=> state.user)

    // functions
    const logoutHandler =()=>{
      localStorage.clear()
      navigate("/")
      window.location.reload()

    }
 
 
 
    return (
        <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
        <div
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => setActive(1)}
        >
         <Link to="account" className="flex">
         <RxPerson size={20} color={active === 1 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 1 ? "text-[red]" : ""
            } hidden md:block `}
          >
            Account
          </span>
         </Link>
        </div>
        



        <div
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => setActive(2)}
        >
         <Link to="orders" className="flex">
         <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 2 ? "text-[red]" : ""
            } hidden md:block `}
          >
            Orders
          </span>
         </Link>
        </div>

        


       <div
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => setActive(3)}
        >
         <Link to="refunds" className="flex">
         <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
          <span
            className={`pl-3 ${
                active === 3 ? "text-[red]" : ""
            } hidden md:block `}
          >
            Refunds
          </span>
         </Link>
        </div>  

     
  
        <div
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => setActive(4)}//  || navigate("/inbox")
        >
         <Link to="inbox" className="flex">
         <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 4 ? "text-[red]" : ""
            } hidden md:block `}
          >
            Inbox
          </span>
         </Link>
        </div>
  
        <div
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => setActive(5)}
        >
          <Link to ="track-order" className="flex">
          <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 5 ? "text-[red]" : ""
            } hidden md:block `}
          >
            Track Order
          </span>
          </Link>
        </div>
  
        <div
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => setActive(6)}
        >
          <Link to ="address" className="flex">
          <RiLockPasswordLine size={20} color={active === 6 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 6 ? "text-[red]" : ""
            } hidden md:block `}
          >
Address          </span>
          </Link>
        </div>
  
        <div
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => setActive(7)}
        >
          <Link to="payment-method" className="flex">
          <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 7 ? "text-[red]" : ""
            } hidden md:block `}
          >
            Payment Method
          </span></Link>
        </div>


        <div
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => setActive(8)}
        >
          <Link to="change-password" className="flex">
          <TbAddressBook size={20} color={active === 8 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 8 ? "text-[red]" : ""
            } hidden md:block `}
          >

Change Password 
          </span></Link>
        </div>
  
        {user && user?.role === "Admin" && (
          <Link to="/admin/dashboard">
            <div
              className="flex items-center cursor-pointer w-full mb-8"
              onClick={() => setActive(9)}
            >
              <MdOutlineAdminPanelSettings
                size={20}
                color={active === 9 ? "red" : ""}
              />
              <span
                className={`pl-3 ${
                  active === 9 ? "text-[red]" : ""
                } hidden md:block `}
              >
                Admin Dashboard
              </span>
            </div>
          </Link>
        )}
        <div
          className="single_item flex items-center cursor-pointer w-full mb-8"
          onClick={logoutHandler}
        >
          <AiOutlineLogin size={20} color={active === 10 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 10 ? "text-[red]" : ""
            } hidden md:block `}
          >
            Log out
          </span>
        </div>
      </div>
    );
};

export default ProfileSidebar;