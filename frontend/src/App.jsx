import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ActivationPage from "./pages/ActivationPage";
import axios from "axios";
import { useEffect } from "react";
import { server } from "../Constant";
import { toast } from "./components/ui/use-toast";


function App() {

  useEffect(()=>{
    axios.get(`${server}/user/get-user`,{withCredentials : true}).then((res)=>{
      toast({title :res.data.message})
    }).catch((error)=>{
      toast({title :error.response.data.message})
    })
  })


  return (
   <>
 <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/activation/:activationToken" element={<ActivationPage></ActivationPage>} />
        </Routes>
        {/* <div className="flex">
          <Sidebar></Sidebar>
          <div>
            <Routes>
              <Route path="/" element={<HomeMain></HomeMain>}></Route>
              <Route
                path="/categories/otc-medicine"
                element={<OtcMedicine></OtcMedicine>}
              ></Route>
              <Route
                path="/categories/womens-choice"
                element={<WomensChoice></WomensChoice>}
              ></Route>
            </Routes>
          </div>
        </div> */}
      </BrowserRouter>
   </>
  );
}

export default App;
