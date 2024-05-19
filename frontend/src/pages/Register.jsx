import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

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
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../Constant";
import { useToast } from "@/components/ui/use-toast";
import { useSelector } from "react-redux";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState("");

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userInfo);
    const formData = new FormData();

    formData.append("fullObject", JSON.stringify(userInfo));
    formData.append("avatar", avatar);
    await axios
      .post(`${server}/user/register`, formData)
      .then((res) => {
        toast({ title: res.data.message });
        setUserInfo({ name: null, email: null, password: null });
        setAvatar(null);
      })
      .catch((res) => {
        toast({ title: res.err.message });
      });
  };

  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <section className=" h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle className="text-center font-bold text-3xl pb-10">
              Register a new account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Name</Label>
                <Input
                  value={userInfo.name}
                  id="name"
                  placeholder="Your full name"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={userInfo.email}
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div>
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  value={userInfo.password}
                  id="password"
                  placeholder="Your password"
                  type={visible ? "text" : "password"}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
                <div className="flex justify-between items-center">
                  <div>
                    {!visible && (
                      <div
                        className="flex gap-1 cursor-pointer"
                        onClick={() => setVisible(true)}
                      >
                        <AiOutlineEye></AiOutlineEye>{" "}
                        <p className="text-xs">Show Password</p>
                      </div>
                    )}
                    {visible === true && (
                      <div
                        className="flex gap-1 cursor-pointer"
                        onClick={() => setVisible(false)}
                      >
                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>{" "}
                        <p className="text-xs">Hide Password</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

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
                    // onChange={handleFileInputChange}

                    // onChange={(e) =>
                    //   setUserInfo({ ...userInfo, avatar: e.target.files[0]})
                    // }

                    onChange={(e) => setAvatar(e.target.files[0])}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <Button type="submit" className="w-full mt-2">
              Register Now
            </Button>
            <Link
              to="/login"
              className="text-blue-400 cursor-pointer text-sm block mt-2"
            >
              Already have an account ?
            </Link>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
};

export default Register;
