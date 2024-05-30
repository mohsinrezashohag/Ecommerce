import { toast } from "@/components/ui/use-toast";
import { categoriesData } from "@/static/data";
import { server } from "../../../Constant";
import axios from "axios";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const CreateProducts = () => {
  const {seller} = useSelector(state=> state.seller)
  const [productInfo, setProductInfo] = useState({
    name: null,
    description: null,
    tags: null,
    stock: null,
    price: null,
    discountPrice: null,
    category: null,
    sellerId :null
  });
  const [images, setImages] = useState([]);



  const handleImageChange = (e) => {
    const files = e.target.files
    if (files.length + images.length <= 4) {
      const imagesArray = Array.from(files)
      setImages((previousImages) => previousImages.concat(imagesArray))
    } else {
      toast({title:"You can upload maximum 4 images"})
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();

   images.forEach((image) =>
      formData.append("images", image)
    );
    productInfo.sellerId=seller?._id
    formData.append("productInfo",JSON.stringify(productInfo));


    // calling api
try {
  
  const res= await axios.post(`${server}/product/create-product`,formData,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }})

    if (res.data){
     toast({title : res?.data?.message})
    }
}catch (error) {
  console.error("Error Details:", error);
  toast({ title: error.response ? error.response.data.message : error.message });
}


  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={productInfo.name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) =>
              setProductInfo({ ...productInfo, name: e.target.value })
            }
            placeholder="Enter your product name..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={productInfo.description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) =>
              setProductInfo({ ...productInfo, description: e.target.value })
            }
            placeholder="Enter your product description..."
          ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={productInfo.category}
            onChange={(e) =>
              setProductInfo({ ...productInfo, category: e.target.value })
            }
          >
            <option value="Choose a category">Choose a category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={productInfo.tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) =>
              setProductInfo({ ...productInfo, tags: e.target.value })
            }
            placeholder="Enter your product tags..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input
            type="number"
            name="price"
            value={productInfo.price}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) =>
              setProductInfo({ ...productInfo, price: e.target.value })
            }
            placeholder="Enter your product price..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Price (With Discount) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={productInfo.discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) =>
              setProductInfo({ ...productInfo, discountPrice: e.target.value })
            }
            placeholder="Enter your product price with discount..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={productInfo.stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) =>
              setProductInfo({ ...productInfo, stock: e.target.value })
            }
            placeholder="Enter your product stock..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*you can upload maximum images</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={URL.createObjectURL(i)}
                  key={i}
                  alt=""
                  className="h-[80px] w-[80px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
