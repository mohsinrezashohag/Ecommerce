import { DataTable } from "@/components/profile/table/data-table";
import { CarFront, ShoppingBag } from "lucide-react";

export const columns = [
  {
    accessorKey: "_id",
    header: "Order ID",
  },
  {
    accessorKey: "orderStatus",
    header: "Order Status",
  },
  {
    accessorKey: "itemsQty",
    header: "Qty",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "",
    header: "Show Details",
    cell: ({ row }) => (
        <button
        >
                      <ShoppingBag size={20}  />
        </button>
      ),
  },
];

const data = [
  {
    _id: "dwdwdwsw2w23242324244",
    orderItems: [{ name: "iPhone 14 pro max" }],
    itemsQty: 1,
    totalPrice: 120,
    orderStatus: "processing",
    email: "abc@mail.com",
  },
 
  {
    _id: "dwdwdwsw2w23242324244",
    orderItems: [{ name: "iPhone 14 pro max" }],
    itemsQty: 1,
    totalPrice: 120,
    orderStatus: "processing",
    email: "abc@mail.com",
  },
  {
    _id: "dwdwdwsw2w23242324244",
    orderItems: [{ name: "iPhone 14 pro max" }],
    itemsQty: 1,
    totalPrice: 120,
    orderStatus: "processing",
    email: "abc@mail.com",
  },

  {
    _id: "dwdwdwsw2w23242324244",
    orderItems: [{ name: "iPhone 14 pro max" }],
    itemsQty: 1,
    totalPrice: 120,
    orderStatus: "processing",
    email: "abc@mail.com",
  },

  {
    _id: "dwdwdwsw2w23242324244",
    orderItems: [{ name: "iPhone 14 pro max" }],
    itemsQty: 1,
    totalPrice: 120,
    orderStatus: "processing",
    email: "abc@mail.com",
  },
 

];

const SellerOrders = () => {
  return (
    <div className="w-full mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SellerOrders;
