import { RxCross1 } from "react-icons/rx";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { toast } from "./ui/use-toast";
import commonStyles from "@/styles/commonStyles";
import { useState } from "react";

const CartSingle = ({ product, quantityChangeHandler, removeFromCartHandler }) => {
    const [value, setValue] = useState(product.qty);
    const totalPrice = product.discount_price * value;

console.log(product);
    const increment = (data) => {
      if (data.stock < value) {
        toast({title :"Product stock limited!"});
      } else {
        setValue(value + 1);
        const updateCartData = { ...data, qty: value + 1 };
        quantityChangeHandler(updateCartData);
      }
    };
  
    const decrement = (data) => {
      setValue(value === 1 ? 1 : value - 1);
      const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
      quantityChangeHandler(updateCartData);
    };
  
    return (
      <div className="border-b p-4">
        <div className="w-full flex items-center">
          <div>
            <div
              className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${commonStyles.noramlFlex} justify-center cursor-pointer`}
              onClick={() => increment(product)}
            >
              <HiPlus size={18} color="#fff" />
            </div>
            <span className="pl-[10px]">{product.qty}</span>
            <div
              className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
              onClick={() => decrement(product)}
            >
              <HiOutlineMinus size={16} color="#7d879c" />
            </div>
          </div>
          <img
            src={`${product?.image_Url[0].url}`}
            alt=""
            className="w-[50px] h-min ml-2 mr-2 rounded-[5px]"
          />
          <div className="pl-[5px]">
            <h1>`{product.name.slice(0,60)}</h1>
            <h4 className="font-[400] text-[15px] text-[#00000082]">
              ${product.discount_price} * {value}
            </h4>
            <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
             {totalPrice} $
            </h4>
          </div>
          <RxCross1
          size={50}
            className="cursor-pointer"
            onClick={() => removeFromCartHandler(product)}
          />
        </div>
      </div>

    );
  };

  export default CartSingle