import BestDeals from "@/components/BestDeals";
import Categories from "@/components/Categories";
import Events from "@/components/Events";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SecondHeader from "@/components/SecondHeader";
import Sponsor from "@/components/Sponsor";

const HomePage = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <SecondHeader active={1} />
      <Hero/>
      <Categories/>
      <BestDeals/>
      <FeaturedProducts/>
      <Events/>
      <Sponsor/>
      <Footer/>
    </div>
  );
};

export default HomePage;
