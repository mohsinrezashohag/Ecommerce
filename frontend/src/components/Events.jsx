import commonStyles from "@/styles/commonStyles";
import EventCard from "./EventCard";

const Events = () => {
   
  return (
    <div>
   
        <div className={`${commonStyles.section}`}>
      <div className={`${commonStyles.heading}`}>
        <h1>Popular Events</h1>
      </div>

      <div className="w-full grid">
  
            <EventCard  />
   
    
      </div>
     
    </div>


  </div>
  )
}

export default Events