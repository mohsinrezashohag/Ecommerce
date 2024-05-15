import commonStyles from "@/styles/commonStyles";
import { Link } from "react-router-dom";
import CountDown from "./CountDown";


const EventCard = () => {

const active = false
  const addToCartHandler = () => {
  }

  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="md:w-50  m-auto mx-28 my-12 ">
        <img src="https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center ps-20">
        <h2 className={`${commonStyles.productTitle}`}>Apple Iphone 15 Pro Max</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing eadipisci nisi officia perspiciatis ipsum doloribus modi vero nulla unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error sed harum hic officia quam accusamus eius? Ea ipsum, quae dolorum quas id commodi a ipsa perferendis aspernatur et necessitatibus saepe perspiciatis tempore maxime ad rem ducimus itaque accusamus asperiores eveniet non. Ad voluptatum odio harum delectus, laboriosam explicabo ullam.</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              500 $
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              460$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            70 sold
          </span>
        </div>
        <CountDown  />
        <br />
        <div className="flex items-center">
          <Link to={`Hello`}>
            <div className={`${commonStyles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${commonStyles.button} text-[#fff] ml-5`} onClick={()=> console.log("Hello clciked")}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
