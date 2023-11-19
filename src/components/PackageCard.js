import React from "react"
import { Link } from "react-router-dom";
import '../css/PackageCard.css'

/**
 * PackageCard components should have
 * - Name
 * - Location
 * - Description
 * - id (no display)
 * - img url
 */
const PackageCard = (props) => {
  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={props.url} alt="tour image" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="">{props.location}</div>
          <div className="card-text">{props.desc}</div>
        </div>
        <div className="card-footer">
          <Link className="btn btn-primary" to={`/tours/${props.id}`}>more</Link>
        </div>
      </div>
    </div>
  )
}

export default PackageCard;