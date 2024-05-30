import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import sideImage from "../../assets/images/seller.jpg";
import axios from "axios";
import { server } from "../../../Constant";
import { toast } from "@/components/ui/use-toast";

const CreateShop = () => {
  const [shopInfo, setShopInfo] = useState({
    sellerName: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    password: "",
  });
  const [avatar, setAvatar] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("fullObject", JSON.stringify(shopInfo));
    formData.append("avatar", avatar);
    await axios
      .post(`${server}/seller/create-seller`, formData)
      .then((res) => {
        toast({ title: res.data.message });
        setShopInfo({ name: null, email: null, password: null });
        setAvatar(null);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <section className="h-[80%] flex flex-col md:flex-row items-center justify-center bg-gray-50 rounded-2xl  my-20 text-left md:mx-40">
        <div className="flex w-full md:w-1/2 h-full">
          <img
            src={sideImage}
            alt="Shop"
            className="w-full h-full object-cover md:rounded-l-2xl"
          />
        </div>
        <div className="flex w-full md:w-1/2 justify-center items-center full ">
          <form onSubmit={handleSubmit} className="w-full h-full">
            <Card className="w-full !border-none shadow-none bg-inherit ">
              <CardHeader>
                <CardTitle className="text-left font-bold text-3xl pb-10">
                  Create Seller Shop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="sellerName">Shop Name</Label>
                    <Input
                      id="sellerName"
                      value={shopInfo.sellerName}
                      onChange={(e) =>
                        setShopInfo({ ...shopInfo, sellerName: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      onChange={(e) =>
                        setShopInfo({ ...shopInfo, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      type="number"
                      id="phoneNumber"
                      onChange={(e) =>
                        setShopInfo({
                          ...shopInfo,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="address">Zip Code</Label>
                    <Input
                      type="text"
                      id="zipCode"
                      onChange={(e) =>
                        setShopInfo({ ...shopInfo, zipCode: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      type="text"
                      id="address"
                      onChange={(e) =>
                        setShopInfo({ ...shopInfo, address: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <div>
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type={visible ? "text" : "password"}
                      onChange={(e) =>
                        setShopInfo({ ...shopInfo, password: e.target.value })
                      }
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        {!visible && (
                          <div
                            className="flex gap-1 cursor-pointer"
                            onClick={() => setVisible(true)}
                          >
                            <AiOutlineEye />
                            <p className="text-xs">Show Password</p>
                          </div>
                        )}
                        {visible && (
                          <div
                            className="flex gap-1 cursor-pointer"
                            onClick={() => setVisible(false)}
                          >
                            <AiOutlineEyeInvisible />
                            <p className="text-xs">Hide Password</p>
                          </div>
                        )}
                        <div className="py-4">
                          <label
                            htmlFor="avatar"
                            className="block text-sm font-medium text-gray-700"
                          ></label>
                          <div className="mt-2 flex items-center">
                            <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                              {avatar ? (
                                <img
                                  // src={userInfo?.avatar}
                                  src={URL.createObjectURL(avatar)}
                                  alt="avatar"
                                  className="h-full w-full object-cover rounded-full"
                                />
                              ) : (
                                <RxAvatar className="h-8 w-8" />
                              )}
                            </span>
                            <label
                              htmlFor="file-input"
                              className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                              <span>Upload a file</span>
                              <input
                                filename={avatar}
                                type="file"
                                name="avatar"
                                id="file-input"
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => setAvatar(e.target.files[0])}
                                className="sr-only"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-400 cursor-pointer text-sm">
                      forgot password ?
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <Button type="submit" className="w-full mt-2">
                  Create Shop Account
                </Button>
                <Link
                  to="/login-seller"
                  className="text-blue-400 cursor-pointer text-sm block mt-2"
                >
                  Already registered ?
                </Link>
              </CardFooter>
            </Card>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateShop;
