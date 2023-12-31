import React from "react";
import { useParams, useLocation } from "react-router-dom";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import "../css/BookingConfirm.css";

/**
 * TourId
 * TouristId
 * TourBuddyID
 * BookingDate
 */

const BookingConfirm = () => {
  const { tourID } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const date = searchParams.get('date');
  const time = searchParams.get('time');
  const travelBuddyName = searchParams.get('travelBuddyName');
  
  return (
    <div className="booking-confirmation-wrapper text-center mt-5 mb-5">
      <div><EventAvailableIcon /></div>
      <p>Booking Completed!</p>
      <div className="mt-5">
        <div className="row">
          <div className="col">
            <div className="fw-bold">{date}</div>
          </div>
          <div className="col divider"></div>
          <div className="col fw-bold">
            TourBuddy Name
          </div>
        </div>
        <div className="row">
          <div className="col fw-bold">{time}</div>
          <div className="col divider"></div>
          <div className="col fw-bold">
            {travelBuddyName}
          </div>
        </div>
      </div>
      <button className="btn mt-5">My Booking</button>
    </div>
  )
}

export default BookingConfirm;