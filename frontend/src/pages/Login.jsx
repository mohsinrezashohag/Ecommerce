import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import commonStyles from "@/styles/commonStyles";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../Constant";
import { toast } from "@/components/ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAuthInfo } from "@/redux/features/userSlice";

const Login = () => {
  const [loginInfo,setLoginInfo] = useState({email:"",password:""})
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
const dispatch = useDispatch()


  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios
    .post(
      `${server}/user/login-user`,
      {
        email :loginInfo.email,
        password :loginInfo.password,
      },
      { withCredentials: true }
    )
    .then((res) => {
      console.log(res.data.user);
      dispatch(setAuthInfo(res.data))
      localStorage.setItem("user",JSON.stringify(res.data.user))
      toast({ title: "Login Successful" });
      navigate("/");
      // window.location.reload(true); 
    })
    .catch((err) => {
      toast({ title: "hello" });
    });
};



const user = useSelector(state => state.user)
useEffect(()=>{
if (user ===null){
  navigate ("/")
}
},[])


  return (
   
    <section className="h-screen  flex justify-center items-center">
    
    <form onSubmit={handleSubmit}>

    <Card className="w-[380px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center font-bold text-3xl pb-10">Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your email address" onChange={(e)=> setLoginInfo({...loginInfo,email:e.target.value})} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div>
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" placeholder="Your password" type={visible ? "text" :"password"} onChange={(e)=> setLoginInfo({...loginInfo,password:e.target.value})}  />
                <div className="flex justify-between items-center">
              <div>
              {!visible &&  <div className="flex gap-1 cursor-pointer" onClick={()=> setVisible(true)}>
                    <AiOutlineEye></AiOutlineEye>{" "}
                    <p className="text-xs">Show Password</p>
                  </div>}
                {visible===true &&   <div className="flex gap-1 cursor-pointer" onClick={()=> setVisible(false)}>
                    <AiOutlineEyeInvisible ></AiOutlineEyeInvisible>{" "}
                    <p className="text-xs">Hide Password</p>
                  </div>}
              </div>
              <p className="text-blue-400 cursor-pointer text-sm">forgot password ?</p>

                </div>
              </div>
            </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start" >
          <Button type="submit" className="w-full mt-2">Login Now</Button>
          <Link to="/register" className="text-blue-400 cursor-pointer text-sm block mt-2">Don't have an account ?</Link>

        </CardFooter>


      </Card>

    </form>
    
    </section>
  );
};

export default Login;
