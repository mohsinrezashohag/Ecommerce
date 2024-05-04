import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <nav className="h-auto md:h-20 bg-emerald-400 px-12 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-4xl font-bold text-white hidden md:block">
        MediShop
      </h1>
      <div className="flex w-full max-w-xl items-center space-x-2">
        <Input
          className="h-12"
          type="text"
          placeholder="Type Medicine ( Ex : Napa )"
        />
      </div>

      <div className="flex gap-4 items-center">
        <div className="bg-white p-1 rounded-md h-auto justify-center">
          <CiShoppingCart className="text-green-500 text-2xl md:text-3xl cursor-pointer hover:text-gray-300" />
        </div>
        <div className="text-white">|</div>
        <div className="bg-white p-1 rounded-md h-auto justify-center">
          <CiUser className="text-green-500 text-2xl md:text-3xl cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
