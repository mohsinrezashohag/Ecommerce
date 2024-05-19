import { HiOutlineReceiptRefund } from "react-icons/hi";
import { DataTable } from "./table/data-table";
const handleRefunds =()=>{

}
const Refunds = () => {
    const columns = [
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
          header: "Track Order",
          cell: ({ row }) => (
            <button
              onClick={() => handleRefunds(row.original)}
            >
                          <HiOutlineReceiptRefund size={20}  />

            </button>
          ),
        },
      ];
 
    const refunds = [
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
    return (
        <div className="w-full mx-auto py-10">
        <DataTable data ={refunds} columns={columns}></DataTable>
        </div>
    );
};

export default Refunds;