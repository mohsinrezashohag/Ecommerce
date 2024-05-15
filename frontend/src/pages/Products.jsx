import { useSearchParams } from "react-router-dom";
import { productData } from "@/static/data";
import { useEffect, useState } from "react";
import SecondHeader from "@/components/SecondHeader";
import commonStyles from "@/styles/commonStyles";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const Products = () => {
  const allProducts = productData
    const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");

  console.log(categoryData);
  
  const [data, setData] = useState([]);


  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
      allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allProducts]);

  return (
  <>
   
      <div>
      <SecondHeader activeHeading={3} />
      <br />
      <br />
      <div className={`${commonStyles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard product={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
   
  </>
  );
};

export default Products;
