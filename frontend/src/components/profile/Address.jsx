import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "../ui/button";

const Address = () => {
    return (
        <div className="w-full px-5">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold">Address</h1>
          <div>
            <Button className="block">Add New</Button>
          </div>
        </div>
  
  <div className="w-full bg-white justify-between pr-10 shadow-md mt-10 p-4 md:px-4">
      <div className="flex flex-col md:flex-row gap-y-4 items-start md:items-center justify-between">
        <h5>Default</h5>
          <h5 className="md:ps-10"> 2020 - Islampur Powroshova, Jamalpur, Mymensingh </h5>
          <div className="md:pl-5 flex items-center">
              <h6> (*880) 1629365037</h6>
          </div>
          <div className="min-w-[10%] cursor-pointer">
              <AiOutlineDelete color="red"></AiOutlineDelete>
          </div>
      </div>
  </div>
  
      </div>
    );
};

export default Address;