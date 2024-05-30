import { DataTable } from "@/components/profile/table/data-table";
import { server } from "../../../Constant";
import axios from "axios";
import { BiDetail } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const columns = [
  {
    accessorKey: "_id",
    header: "Product ID",
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "name", // Change accessorKey to "name"
    header: "Show Details",
    cell: ({ row }) => {
      const name = row.getValue("name").replace(/\s+/g, '_')
      return (
        <Link to={`/product/${name}`}>      
          <button>
            <BiDetail size={20} />
          </button>
        </Link>
      );
    },
  },
];

const AllProducts = () => {
  const { seller } = useSelector((state) => state.seller);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${server}/product/get-seller-products/${seller?._id}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [seller]);

  return (
    <div className="w-full mx-auto py-10">
      <DataTable columns={columns} data={products} />
    </div>
  );
};

export default AllProducts;
