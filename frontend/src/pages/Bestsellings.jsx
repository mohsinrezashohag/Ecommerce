import { productData } from "@/static/data";
import SecondHeader from "@/components/SecondHeader";
import commonStyles from "@/styles/commonStyles";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const Bestsellings = () => {
  const allProducts = productData
  return (
  <>
   
      <div>
      <SecondHeader activeHeading={3} />
      <br />
      <br />
      <div className={`${commonStyles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {allProducts && allProducts.sort((a,b)=> b.total_sell - a.total_sell).map((i, index) => <ProductCard product={i} key={index} />)}
        </div>
      </div>
      <Footer />
    </div>
   
  </>
  );
};

export default Bestsellings;
