import { categoriesData, productData } from "../static/data";
import commonStyles from "@/styles/commonStyles";
import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "../components/Navbar";
import { CgProfile } from "react-icons/cg";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

// eslint-disable-next-line react/prop-types
const SecondHeader = ({ active }) => {
  //demo purpose
const isAuthenticated = true
const user =null

  const [searchText, setSearchText] = useState();
  const [searchData, setSearchData] = useState();
  const [menuActive, setMenuActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );

    setSearchData(filteredProducts);
  };

  // menu sticky feature
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
  });

  return (
    <div className={`${commonStyles.section}`}>
      <div className="flex flex-col md:flex-row md:my-4 items-center justify-between">
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>
        </div>

        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="Search Product..."
            value={searchText}
            onChange={handleSearchChange}
            className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
          {searchData && searchData.length !== 0 ? (
            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
              {searchData &&
                searchData.map((i, index) => {
                  return (
                    <Link key={index} to={`/product/${i._id}`}>
                      <div className="w-full flex items-start-py-3">
                        <img
                          src={`${i.image_Url[0]?.url}`}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>

        <div className={`${commonStyles.button}`}>
          <Link to="/seller">
            <h1 className="text-white flex items-center">
              Became Seller <IoIosArrowForward className="ml-1" />
            </h1>
          </Link>
        </div>
      </div>

      <div
        className={`${
          menuActive === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition flex items-center justify-between w-full bg-blue-500 h-[70px]`}
      >
        <div
          className={`${commonStyles.section} relative flex justify-between`}
        >
          {/* categories */}

          <div className="">
            <div
              className="bg-white text-black relative h-[68px] ml-2 mt-[10px] w-[270px] flex justify-between items-center cursor-pointer rounded-t-lg"
              onClick={() => setDropDown(!dropDown)}
            >
              <div>
                <BiMenuAltLeft
                  size={30}
                  className="absolute top-5 left-2 "
                ></BiMenuAltLeft>
                <h1 className=" font-semibold ml-12 py-3">All Categories</h1>
              </div>

              <IoIosArrowDown className="mr-3"></IoIosArrowDown>
            </div>

            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              ></DropDown>
            ) : null}
          </div>
        </div>

        <Navbar active={active}></Navbar>

        <div className="flex">
          <div className={`${commonStyles.noramlFlex}`}>
            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenWishlist(true)}
            >
              <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                {/* {wishlist && wishlist.length} */}
                {0}
              </span>
            </div>
          </div>

          <div className={`${commonStyles.noramlFlex}`}>
            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                {/* {cart && cart.length} */}
                {0}
              </span>
            </div>
          </div>

          <div className={`${commonStyles.noramlFlex}`}>
            <div className="relative cursor-pointer mr-[15px]">
              {isAuthenticated ? (
                <Link to="/profile">
                  <img
                    src={`${user ? user?.avatar?.url : ""}`}
                    className="w-[35px] h-[35px] rounded-full"
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              )}
            </div>
          </div>

          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
