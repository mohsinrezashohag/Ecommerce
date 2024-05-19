import { productData } from "@/static/data";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import commonStyles from "@/styles/commonStyles";

const SuggestedProducts = ({ category }) => {
  const allProducts = productData;
  const [suggestedProducts, setSuggestedProducts] = useState();

  useEffect(() => {
    const suggetions = allProducts.filter((item) => item.category === category);
    setSuggestedProducts(suggetions);
  }, []);

  return (
    <div>
      <div className={`${commonStyles.section}`}>
        <div className={`${commonStyles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {suggestedProducts && suggestedProducts.length !== 0 && (
            <>
              {suggestedProducts &&
                suggestedProducts.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestedProducts;
