import React from "react";
import TourBuddyCard from "./TourBuddyCard";

const TourBuddySection = ({ travelBuddies }) => {

  const TravelBuddyCard = () => {
    if (travelBuddies.length === 0) {
      return (<p>Laoding...</p>);
    }
    let cards = [];
    travelBuddies.forEach((data) => {
      const fullname = `${data.firstName} ${data.lastName}`;
      cards.push(<TourBuddyCard
        key={data.travelBuddyID}
        id={data.travelBuddyID}
        name={fullname}
        rate={data.averageRate}
        desc={data.description}
        url={data.profileImageURL}
        />)
      })
    return cards;
  }

  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">Recommended Tour Buddies</h2>
      <div className="row">
        <TravelBuddyCard />
      </div>
    </div>
  )
}

export default TourBuddySection;