import { SheetContent } from "@/components/ui/sheet";
import { IoBagHandleOutline } from "react-icons/io5";
import commonStyles from "@/styles/commonStyles";
import CartSingle from "./CartSingle";
import { Link } from "react-router-dom";

const cart = [
  {
    id: 1,
    category: "Computers and Laptops",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "data:image/jpeg;base64,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",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 35,
    stock: 10,
    qty: 2,
  },
];

const Cart = () => {
  const removeFromCartHandler = () => {};

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discount_price,
    0
  );

  const quantityChangeHandler = () => {};

  return (
    <SheetContent>
      <div className="max-w-[900px] mx-auto">
        <div className="">
          {cart && cart.length === 0 ? (
            <div className="h-screen flex-col items-center  justify-center text-center mt-28">
              <img
                src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
                alt=""
              />
              <h5 className="text-red-400 mt-10 text-xl font-semibold">
                Cart Items is empty !
              </h5>
            </div>
          ) : (
            <div className="flex flex-col justify-between h-screen">
              <div>
                <div className={`${commonStyles.noramlFlex} p-4`}>
                  <IoBagHandleOutline size={25} />
                  <h5 className="pl-2 text-[20px] font-[500]">
                    {cart && cart.length} items
                  </h5>
                </div>

                <div className="w-full border-t flex-1 overflow-auto">
                  {cart &&
                    cart.map((i, index) => (
                      <CartSingle
                        key={index}
                        product={i}
                        quantityChangeHandler={quantityChangeHandler}
                        removeFromCartHandler={removeFromCartHandler}
                      />
                    ))}
                </div>
              </div>

              <div className="px-2 pb-12">
                <Link to="/checkout">
                  <div
                    className={`h-[45px] flex items-center justify-center w-[100%] bg-blue-400 rounded-[5px]`}
                  >
                    <h1 className="text-[#fff] text-[18px] font-[600]">
                      Checkout Now -  <span className="text-black mx-2"> ${totalPrice}</span> USD
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </SheetContent>
  );
};

export default Cart;
