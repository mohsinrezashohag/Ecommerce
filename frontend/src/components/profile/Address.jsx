import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "../ui/button";

const Address = () => {
    return (
        <div className="w-full px-5">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold">Payment Methods</h1>
          <div>
            <Button className="block">Add New</Button>
          </div>
        </div>
  
  <div className="w-full bg-white justify-between pr-10 shadow-md mt-10 h-12">
      <div className="flex items-center justify-between">
        <h5>Default</h5>
          <h5 className="ps-10"> 2020 - Islampur Powroshova, Jamalpur, Mymensingh </h5>
          <div className="pl-5 flex items-center">
              <h6> (*880) 1629365037</h6>
          </div>
          <div className="min-w-[10%] cursor-pointer">
              <AiOutlineDelete></AiOutlineDelete>
          </div>
      </div>
  </div>
  
      </div>
    );
};

export default Address;