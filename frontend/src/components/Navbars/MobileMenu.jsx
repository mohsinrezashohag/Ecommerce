import { SheetClose, SheetContent } from "../ui/sheet";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { navItems, productData } from "@/static/data";
import commonStyles from "@/styles/commonStyles";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const MobileMenu = () => {
  const [searchText, setSearchText] = useState();
  const [searchData, setSearchData] = useState();

  const {user} = useSelector((state) => state.user);

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

  return (
    <SheetContent side="left">
      <SheetClose asChild>
        <div>
          <Link to="/">
            <img className="w-60 mb-4" src={logo} alt="" />
          </Link>
        </div>
      </SheetClose>

      <div className="w-full relative ">
        <input
          type="text"
          placeholder="Search Product"
          value={searchText}
          onChange={handleSearchChange}
          className="h-[50px] w-full border-[2px] border-black rounded-sm bg-blue-400 text-white placeholder-white placeholder:font-semibold px-2"
        />
        <AiOutlineSearch
          color="white"
          size={30}
          className="absolute right-4 top-3 cursor-pointer"
        />
        {searchData && searchData.length !== 0 ? (
          <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
            {searchData &&
              searchData.map((i, index) => {
                return (
                  <SheetClose key={index} asChild>
                    <Link key={index} to={`/product/${i.name}`}>
                      <div className="w-full flex items-start-py-3">
                        <img
                          src={`${i.image_Url[0]?.url}`}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  </SheetClose>
                );
              })}
          </div>
        ) : null}
      </div>

      {/* nav links for mobile */}

      <div className={`flex flex-col md:hidden  w-full pt-6`}>
        {navItems &&
          navItems.map((i, index) => (
            <div key={index} className="flex">
              <Link
                to={i.url}
                className={`${"text-blue-400 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-1 cursor-pointer text-yellow-600}`}
              >
                {i.title}
              </Link>
            </div>
          ))}
      </div>

      <div className={`${commonStyles.button}`}>
        <Link to="/create-seller">
          <h1 className="text-white flex items-center">
            Sell With Us <IoIosArrowForward className="ml-1" />
          </h1>
        </Link>
      </div>

      {user ? (
        <Link to="/profile">
        <img
          src={`http://localhost:8000/uploaded-images/${user.avatar}`}
          className="w-[100px] h-[100px] rounded-md border-[3px] border-blue-400 mt-10 border-spacing-14]"
          alt=""
        />
        
      </Link>
      ) : (
        <div className={`${commonStyles.button} bg-yellow-600`}>
          <Link to="/login">
            <h1 className="text-white flex items-center ">
              Login Or Register <IoIosArrowForward className="ml-1" />
            </h1>
          </Link>
        </div>
      )}
    </SheetContent>
  );
};

export default MobileMenu;
