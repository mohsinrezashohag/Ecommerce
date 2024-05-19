import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "../ui/button";

const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold">Payment Methods</h1>
        <div>
          <Button className="block">Add New</Button>
        </div>
      </div>

<div className="w-full bg-white justify-between pr-10 shadow-md mt-5">
    <div className="flex items-center justify-between">
        <img src="https://logowik.com/content/uploads/images/219_visa.jpg" className="h-16" alt="" />
        <h5 className="ps-10">Mohsin Reza Shohag</h5>
        <div className="pl-5 flex items-center">
            <h6>1234 **** *** ****</h6>
            <div className="pl-6">02/25</div>
        </div>
        <div className="min-w-[10%] cursor-pointer">
            <AiOutlineDelete></AiOutlineDelete>
        </div>
    </div>
</div>

    </div>
  );
};

export default PaymentMethod;
