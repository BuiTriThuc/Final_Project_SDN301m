import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import badgeLost from "../../images/badge_lost.png";
import { formatDate, fromNow } from "../Utils/Date";

function dateIsValid(date) {
  return !Number.isNaN(new Date(date).getTime());
}

const LostPetCard = ({ pet }) => {
  return (
    <Fragment>
      {pet.status === "Lost" && pet.statusConfirm === "Censored" ? (
        <Link
          to={`/pet/${pet._id}`}
          className="lost-item col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
          style={{ textDecoration: "none"}}
        >
          <div className="card">
            <div className="card-img">
              <img
                src={pet.image[0].url}
                className="card-img-top"
                alt={pet.name}
                style={{ height: "225px", width: "292px"}}
              />
              <img className="badge-lost" src={badgeLost} alt="badge-lost" />
            </div>
            <h5 className="card-title pt-2 px-2" style={{ color: "black"}}>{pet.name}</h5>
            <div className="card-content">
              <div className="pet-id">
                <div className="id-left">
                  <span>PET ID: </span>
                </div>
                <div className="id-right">
                  <span>{pet._id}</span>
                </div>
              </div>
              <div className="pet-missing">
                <div className="missing-left">
                  <span>MISSING SINCE:</span>
                </div>
                <div className="missing-right">
                  {formatDate(Date.parse(pet.date))}
                </div>
              </div>
              <div className="pet-place">
                <div className="place-left">FROM:</div>
                <div className="place-right">{pet.city}</div>
              </div>
              <p>{fromNow(pet.createAt)}</p>
              <div className="btn-card">
                <Link className="btn-lost-info" to={`/pet/${pet._id}`}>
                  MORE INFO
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

export default LostPetCard;
