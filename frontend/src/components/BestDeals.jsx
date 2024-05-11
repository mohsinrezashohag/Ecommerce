import { productData } from "@/static/data";
import commonStyles from "@/styles/commonStyles";
import ProductCard from "./ProductCard";

const BestDeals = () => {
 const sortedProducts = productData.sort((a,b)=> a.total_sell - b.total_sell)
 const firstFive =sortedProducts && sortedProducts.slice(0,5)
    return (
        <div>
      <div className={`${commonStyles.section}`}>
        <div className={`${commonStyles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
           {
            firstFive && firstFive.length !== 0 &&(
              <>
               {firstFive && firstFive.map((product, index) => <ProductCard product={product} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
    );
};

export default BestDeals;