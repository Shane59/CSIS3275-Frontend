import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TourBuddySection from "./TourBuddySection";

const TourDetailPage = (props) => {
  const { tourId } = useParams();
  const [tour, setTour] = useState();

  
  useEffect(() => {
    const selected = props.tourData.find((tour) => tour.tourID == tourId);
    console.log("tours:");
    setTour(selected);
    console.log(tour);
  }, [])

  return (
      <>
      {tour !== undefined ?
      <div className="mt-5">
        <h2 className="text-center">{tour.tourName}</h2>
        <div className="mb-3"><LocationOnIcon />{tour.location}</div>
        <div className="row">
          <div className="col w-50">
            {tour.description}
          </div>
          <img className="col w-50" src={tour.imageURL} alt="image" />
        </div>
        <div className="tour-buddy-wrapper">
          <TourBuddySection />
        </div>
        </div>
        :
        null
      }
      </>
  )
}

export default TourDetailPage;