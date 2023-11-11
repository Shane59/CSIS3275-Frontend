import React from "react";
import TourBuddyCard from "./TourBuddyCard";

const TourBuddySection = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">Recommended Tour Buddies</h2>
      {/* add for loop */}
      <div className="row">
        <TourBuddyCard
          id="1"
          name="Shigeru Smith"
          rate="4.5"
          desc="Meet Alex, your charismatic tour guide from Vancouver, Canada, where stunning natural beauty meets vibrant urban life. With a passion for sharing the wonders of the Pacific Northwest, Alex combines local expertise with a friendly demeanor to create an unforgettable touring experience. Whether navigating through the lush landscapes of Stanley Park, unraveling the history of Gastown's cobbled streets, or recommending the best spots for a taste of poutine, Alex ensures that every moment of your tour is infused with enthusiasm and a genuine love for Vancouver's diverse culture. Get ready to explore the city's hidden gems and iconic landmarks with Alex as your guide, making your visit to Vancouver an enriching and delightful adventure."
          url="https://xsgames.co/randomusers/assets/avatars/male/7.jpg"
        />
        <TourBuddyCard
          id="2"
          name="Shigeru Smith"
          rate="4.5"
          desc="Meet Alex, your charismatic tour guide from Vancouver, Canada, where stunning natural beauty meets vibrant urban life. With a passion for sharing the wonders of the Pacific Northwest, Alex combines local expertise with a friendly demeanor to create an unforgettable touring experience. Whether navigating through the lush landscapes of Stanley Park, unraveling the history of Gastown's cobbled streets, or recommending the best spots for a taste of poutine, Alex ensures that every moment of your tour is infused with enthusiasm and a genuine love for Vancouver's diverse culture. Get ready to explore the city's hidden gems and iconic landmarks with Alex as your guide, making your visit to Vancouver an enriching and delightful adventure."
          url="https://xsgames.co/randomusers/assets/avatars/male/7.jpg"
        />

      </div>
    </div>
  )
}

export default TourBuddySection;