import { BsCartPlus } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const WishlistSingle = ({ product }) => {
  const removeFromWishlistHandler = () => {};

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        {/* <div>
            <div
              className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${commonStyles.noramlFlex} justify-center cursor-pointer`}
            //   onClick={() => increment(product)}
            >
              <HiPlus size={18} color="#fff" />
            </div>
            <span className="pl-[10px]">{product.qty}</span>
            <div
              className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            //   onClick={() => decrement(product)}
            >
              <HiOutlineMinus size={16} color="#7d879c" />
            </div>
          </div> */}

        <RxCross1
          size={50}
          className="mx-1cursor-pointer"
          onClick={() => removeFromWishlistHandler(product)}
        />
        <img
          src={`${product?.image_Url[0].url}`}
          alt=""
          className="w-[50px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>`{product.name.slice(0, 60)}</h1>
          {/* <h4 className="font-[400] text-[15px] text-[#00000082]">
              ${product.discount_price} * {value}
            </h4> */}
          {/* <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
             {totalPrice} $
            </h4> */}
        </div>

        <div>
            <BsCartPlus  size={30} className="mx-1"></BsCartPlus>
        </div>
      </div>
    </div>
  );
};

export default WishlistSingle;
