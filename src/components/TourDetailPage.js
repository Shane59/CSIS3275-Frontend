import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TourBuddySection from "./TourBuddySection";

/**
 * Detail page should have following data
 * - Tour name
 * - location
 * - description
 * - image
 */
const TourDetailPage = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState();
// delete this later
  const tempTour = {
    name: "Granville Island Beer Hopping",
    location: "Granville Island, Vancouver",
    url: "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1",
    desc: "Nestled in the heart of Vancouver, Granville Island is a thriving cultural enclave. This unique destination boasts a dynamic blend of art, culinary delights, and outdoor beauty. Explore the vibrant arts scene in galleries and theaters. Savor local seafood and gourmet treats at the bustling Public Market. Discover one-of-a-kind treasures in artisan boutiques. Enjoy scenic waterfront views, embark on outdoor adventures, and immerse yourself in the island's rich history. Family-friendly and hosting events year-round, Granville Island is a captivating, multi-faceted destination where urban charm meets creative spirit, offering an unforgettable taste of Vancouver's diversity and vitality."
  }

  // include a logic to retrieve a tour information

  return (
    <div>
      <h2 className="text-center">{tempTour.name}</h2>
      <div className="mb-3"><LocationOnIcon />{tempTour.location}</div>
      <div className="row">
        <div className="col w-50">
          {tempTour.desc}
        </div>
        <img className="col w-50" src={tempTour.url} alt="" />
      </div>
      <div className="tour-buddy-wrapper">
        <TourBuddySection />
      </div>
    </div>
  )
}

export default TourDetailPage;