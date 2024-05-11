import BestDeals from "@/components/BestDeals";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import SecondHeader from "@/components/SecondHeader";

const HomePage = () => {
 
  return (
    <div className="bg-[#F3F3F3]">
      <SecondHeader active={1}/>
      <Hero></Hero>
      <Categories></Categories>
      <BestDeals></BestDeals>
    </div>
  );
};

export default HomePage;
