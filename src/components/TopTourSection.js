import React, { useEffect } from "react";
import { useState } from 'react';
import PackageCard from './PackageCard';
import SearchBar from './SearchBar';


const TopTourSection = ({ tourData }) => {
  const [tours, setTours] = useState(tourData || []);

  useEffect(() => {
    setTours(tourData)
  }, [tourData]);
  
  const handleSearch = (searchValue) => {
    const filteredData = tourData.filter((tour) => 
      tour.tourName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setTours(filteredData);
  }

  const TourCards = () => {
    if (tourData.length === 0) {
      return (<p>Laoding...</p>);
    }
    let cards = [];
    tours.forEach((data) => {
      cards.push(<PackageCard
        key={data.tourID}
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
      <SearchBar onSearch={handleSearch}/>
      <TourCards />
    </div>
  )
}

export default TopTourSection;