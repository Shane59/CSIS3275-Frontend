import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TourBuddySection from "./TourBuddySection";
import config from '../config';
import axios from 'axios';

const TourDetailPage = (props) => {
  const { tourId } = useParams();
  const [tour, setTour] = useState();
  const [travelBuddies, setTravelBuddies] = useState([]);

  
  useEffect(() => {
    const selected = props.tourData.find((tour) => tour.tourID == tourId);
    setTour(selected);

    axios.get(config.apiUrl + '/api/travelBuddy', {
      params: {
        tourID: tourId
      }
    })
      .then(response => {
        setTravelBuddies(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
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
          <TourBuddySection travelBuddies={travelBuddies}/>
        </div>
        </div>
        :
        null
      }
      </>
  )
}

export default TourDetailPage;