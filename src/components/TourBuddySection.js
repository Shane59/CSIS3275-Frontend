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
          url="https://xsgames.co/randomusers/assets/avatars/male/7.jpg"
        />
        <TourBuddyCard
          id="2"
          name="Shigeru Smith"
          rate="4.5"
          url="https://xsgames.co/randomusers/assets/avatars/male/7.jpg"
        />

      </div>
    </div>
  )
}

export default TourBuddySection;