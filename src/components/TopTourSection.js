import React from "react";
import { useEffect, useState } from 'react';
import PackageCard from './PackageCard';


const TopTourSection = (props) => {
  

  const TourCards = () => {
    let cards = [];
    props.tourData.forEach((data) => {
      cards.push(<PackageCard
        title={data.tourName}
        location={data.location}
        url={data.imageURL}
        desc={data.description}
        id={data.tourID}
        />)
      })
    return cards;
  }

  return (
    <div className='row gy-5 gx-5 mt-5 mb-5'>
      <TourCards />
    </div>
  )
}

export default TopTourSection;