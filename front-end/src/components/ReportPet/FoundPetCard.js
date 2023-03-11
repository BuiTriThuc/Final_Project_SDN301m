import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import badgeFound from "../../images/badge_found.png";
import { formatDate, fromNow } from "../Utils/Date";

const FoundPetCard = ({ pet }) => {
  return (
    <Fragment>
      {pet.status === "Found" && pet.statusConfirm === "Censored" ? (
        <Link
          to={`/pet/${pet._id}`}
          className="found-item col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
          style={{ textDecoration: "none" }}
        >
          <div className="card">
            <div className="card-img">
              <img
                src={pet.image[0].url}
                className="card-img-top"
                alt={pet.name}
                style={{ height: "225px", width: "292px" }}
              />
              <img className="badge-found" src={badgeFound} alt={pet.name} />
            </div>
            <h5 className="card-title pt-2 px-2" style={{ color: "black" }}>
              {pet.name}
            </h5>
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
                  <span>FOUNDED SINCE:</span>
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
                <Link className="btn-found-info" to={`/pet/${pet._id}`}>
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

export default FoundPetCard;
