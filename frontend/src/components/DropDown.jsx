import commonStyles from "@/styles/commonStyles";
import { useNavigate } from "react-router-dom";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();

  const handleSubmit = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="ms-2 pb-4 w-[270px] bg-white absolute z-30 rounded-b-sm shadow-md">
      {categoriesData.map((item, index) => (
        <div className={`${commonStyles.noramlFlex}`} key={index} onClick={()=> handleSubmit(item)}>
            <img src={item.image_Url} style={{
                width :"25px",
                height:"25px",
                objectFit :"contain",
                marginLeft :"10px",
                userSelect :"none"
            }} alt="" />
            <h1 className="m-3 cursor-pointer select-none">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
