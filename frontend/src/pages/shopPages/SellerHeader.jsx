import { AiOutlineGift } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png'

const SellerHeader = () => {
    const { seller } = useSelector((state) => state.seller);
    return (
      <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
        <div>
          <Link to="/seller-dashboard">
            <img
            className='h-[90px] ms-[-10px]'
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <Link to="/dashboard/cupouns" className="md:block hidden">
              <AiOutlineGift
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-events" className="md:block hidden">
              <MdOutlineLocalOffer
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-products" className="md:block hidden">
              <FiShoppingBag
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-orders" className="md:block hidden">
              <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
            </Link>
            <Link to="/dashboard-messages" className="md:block hidden">
              <BiMessageSquareDetail
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to={`/seller/${seller._id}`}>
              <img
                src={`http://localhost:8000/uploaded-images/${seller.avatar}`}
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SellerHeader;