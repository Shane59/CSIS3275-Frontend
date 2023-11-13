import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from "@mui/material/styles";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { Link } from "react-router-dom";

import "../css/TourBuddyDetail.css";
import PaymentForm from "./PaymentForm";

// <date, [time]>
const HighlightedDay = styled(PickersDay)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const ServerDay = (props) => {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.includes(day.format("YYYY-MM-DD"));

  return (
    <HighlightedDay
      {...other}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
      selected={isSelected}
    />
  );
};


/**
 * get tour buddy data by id from db
 * - image url
 * - name
 * - star rate
 * - review information
 * - description
 * - available tours and time
 */
const TourBuddyDetail = (props) => {
  const { tourId, tourBuddyId } = useParams();
  const [calenderValue, setCalenderValue] = useState(dayjs());
  const [timeSlot, setTimeSlot] = useState();
  const [highlightedDays, setHighlitedDays] = useState([
    "2023-11-01",
    "2023-11-09",
    "2023-11-21",
    "2023-11-12",
  ]);
  return (
    <div className="tourbuddy-detail-wrapper">
      <div className="row mb-5">
        <img className="col rounded-circle" src="https://xsgames.co/randomusers/assets/avatars/male/7.jpg" alt="" />
        <div className="col">
          <h2>Name</h2>
          <Rating name="read-only" value={4} readOnly />
          <div>
          Meet Alex, your charismatic tour guide from Vancouver, Canada, where stunning natural beauty meets vibrant urban life. With a passion for sharing the wonders of the Pacific Northwest, Alex combines local expertise with a friendly demeanor to create an unforgettable touring experience. Whether navigating through the lush landscapes of Stanley Park, unraveling the history of Gastown's cobbled streets, or recommending the best spots for a taste of poutine, Alex ensures that every moment of your tour is infused with enthusiasm and a genuine love for Vancouver's diverse culture. Get ready to explore the city's hidden gems and iconic landmarks with Alex as your guide, making your visit to Vancouver an enriching and delightful adventure.
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center fw-bold">Travel Buddy Availabilities</div>  
        <div className="col fw-bold">Available Time During Day</div>
      </div>
      <div className="row mt-5">
        <div className="col">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar 
            value={calenderValue}
            slots={{
              day: ServerDay,
            }}
            slotProps={{
              day: {
                highlightedDays,
              },
            }}
            onChange={(newValue) => setCalenderValue(newValue)} />
        </LocalizationProvider>
        </div>
        <div className="col mt-2">
          <fieldset>
            <div>
              <input className="me-3" type="radio" value="12pm-3pm" name="pickedTime" onChange={(e) => setTimeSlot(e.target.value)} />12pm-3pm
            </div>
            <div>
              <input className="me-3" type="radio" value="4pm-6pm" name="pickedTime" onChange={(e) => setTimeSlot(e.target.value)} />4pm-6pm
            </div>
          </fieldset>
        </div>
      </div>
      <PaymentForm
        tourId={tourId}
        tourBuddyId={tourBuddyId}
        calenderValue={calenderValue}
        timeSlot={timeSlot}
      />
    </div>
  )
}

export default TourBuddyDetail;