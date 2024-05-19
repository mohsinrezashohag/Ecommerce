import { MdOutlineTrackChanges } from "react-icons/md";
import { DataTable } from "./table/data-table";

const TrackOrder = () => {
   
const handleTrackOrder =()=>{}


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
              onClick={() => handleTrackOrder(row.original)}
            >
                          <MdOutlineTrackChanges size={20}  />

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
    
    
      return (
        <div className="w-full mx-auto py-10">
        <DataTable data ={data} columns={columns}></DataTable>
        </div>
    );
};

export default TrackOrder;