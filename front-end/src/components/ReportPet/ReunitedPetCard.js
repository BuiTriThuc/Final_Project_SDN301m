import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import badgeReunited from "../../images/badge_reunited.png";
import { fromNow } from "../Utils/Date";

const ReunitedPetCard = ({ pet }) => {
  return (
    <Fragment>
      {pet.status === "Reunited" && pet.statusConfirm === "Censored" ? (
        <Fragment>
          <Link
            to={`/pet/${pet._id}`}
            className="reunited-item col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src={pet.image[0].url}
                  className="card-img-top"
                  alt={pet.name}
                />
                <img
                  className="badge-lost"
                  src={badgeReunited}
                  alt="badge-reunited"
                />
              </div>

              <div className="card-title">
                <div className="card-title-left">
                  <h5>{pet.name}</h5>
                  <p>{pet.address}</p>
                </div>
                <div className="card-title-right">{fromNow(pet.createAt)}</div>
              </div>
              <div className="card-content">
                <p>{pet.message}</p>
              </div>
            </div>
          </Link>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

export default ReunitedPetCard;
