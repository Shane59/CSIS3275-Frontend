import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from "@mui/material/styles";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import config from '../config';
import axios from 'axios';

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

const TourBuddyDetail = (props) => {
  const { tourId, tourBuddyId } = useParams();
  const [travelBuddyData, setTravelBuddyData] = useState();
  useEffect(() => {
    axios.get(config.apiUrl + '/api/travelBuddy', {
      params: {
        tourID: tourId
      }
    })
      .then(response => {
        const travelBuddy = response.data.filter((travelBuddy)=>travelBuddy.travelBuddyID == tourBuddyId);
        setTravelBuddyData(...travelBuddy);
        console.log(...travelBuddy);
      })
      .catch(error => {
        console.log(error)
      })
  },[])
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
      {travelBuddyData !== undefined ?
      <>
      <div className="row mb-5">
        <img className="col rounded-circle" src={travelBuddyData.profileImageURL} alt="" />
        <div className="col">
          <h2>{travelBuddyData.firstName} {travelBuddyData.lastName}</h2>
          <Rating name="read-only" value={travelBuddyData.averageStarRate} readOnly />
          <div>
          {travelBuddyData.description}
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
      </>
      : <p>Loading</p>}
    </div>
  )
}

export default TourBuddyDetail;