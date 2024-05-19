import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ActivationPage from "./pages/ActivationPage";
import { useEffect } from "react";
import store from "./redux/app/store";
// import { loadUser } from "./redux/actions/user";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Bestsellings from "./pages/Bestsellings";
import { useSelector } from "react-redux";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Account from "./components/profile/Account";
import Orders from "./components/profile/Orders";
import TrackOrder from "./components/profile/TrackOrder";
import ChangePassword from "./components/profile/ChangePassword";
import Refunds from "./components/profile/Refunds";
import Inbox from "./components/profile/Inbox";
import Address from "./components/profile/Address";
import PaymentMethod from "./components/profile/PaymentMethod";
import ProtectedRoutes from "./RouteProtection/ProtectedRoutes";


function App() {
  
const {user} = useSelector(state => state.user)
console.log(user);
  // useEffect(()=>{
  //   store.dispatch(loadUser());
  // })


  return (
   <>
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}/>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/activation/:activationToken" element={<ActivationPage></ActivationPage>} />

          <Route path="/products" element={<Products></Products>} />
          <Route path="/best-selling" element={<Bestsellings></Bestsellings>} />
          <Route path="/product/:name" element={<ProductDetails></ProductDetails>} />

          {/* <Route path ="/profile" element={<Profile></Profile>}></Route>
          <Route path ="/profile/orders" element={<Orders></Orders>}></Route> */}

          <Route path ="/profile" element={<ProtectedRoutes><Profile></Profile></ProtectedRoutes>}>
          <Route path ="" element={<Account></Account>}></Route>
          <Route path ="account" element={<Account></Account>}></Route>
          <Route path ="orders" element={<Orders></Orders>}></Route>
          <Route path ="refunds" element={<Refunds></Refunds>}></Route>
          <Route path ="inbox" element={<Inbox></Inbox>}></Route>
          <Route path ="payment-method" element={<PaymentMethod></PaymentMethod>}></Route>
          <Route path ="address" element={<Address></Address>}></Route>
          <Route path ="track-order" element={<TrackOrder></TrackOrder>}></Route>
          <Route path ="change-password" element={<ChangePassword></ChangePassword>}></Route>
          </Route>

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
