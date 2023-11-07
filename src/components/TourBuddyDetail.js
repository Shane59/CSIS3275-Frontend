import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';

/**
 * get tour buddy data by id
 * - image url
 * - name
 * - star rate
 * - review information
 * - description
 * - available tours and time
 */
const TourBuddyDetail = (props) => {
  const { tourBuddyId } = useParams();
  return (
    <div className="row">
      <img className="col rounded-circle" src="https://xsgames.co/randomusers/assets/avatars/male/7.jpg" alt="" />
      <div className="col">
        <h2>Name</h2>
        <Rating name="read-only" value={4} readOnly />
        <div>
          description
        </div>
      </div>
    </div>
  )
}

export default TourBuddyDetail;