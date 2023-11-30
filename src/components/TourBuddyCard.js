import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "../css/TourBuddyCard.css";

/**
 * TourBuddyCard component should
 * - name
 * - tourbuddy id
 * - rate?
 */
const TourBuddyCard = (props) => {
  const { tourId } = useParams();
  return (
    <Link to={`/${tourId}/tourbuddy/${props.id}`} className="card tour-buddy-card">
      <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img className="card-img" src={props.url} alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">{props.name}</p>
              <p className="card-text"><small>{props.rate}</small></p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TourBuddyCard;