import { productData } from "@/static/data";
import commonStyles from "@/styles/commonStyles";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const allProducts = productData;
    return (
        <div>
      <div className={`${commonStyles.section}`}>
        <div className={`${commonStyles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {
            allProducts && allProducts.length !== 0 &&(
              <>
               {allProducts && allProducts.map((i, index) => <ProductCard product={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
    );
};

export default FeaturedProducts;