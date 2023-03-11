import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./PetList.css";
import { fromNow } from "../Utils/Date";

const PetList = ({ pet }) => {
  return (
    <Fragment>
      <div className="container">
        <div className="col-md-12 pet-search-result widget-feature overflow-visible">
          <div className="row">
            <Link
              to={`/pet/${pet._id}`}
              className="col-sm-4 no-padding hero-pattern widget-image-feed fido-blue-bg"
            >
              <img
                alt={pet.name}
                src={pet.image[0].url}
                className="col-xs-12 no-padding image-pet"
              />
            </Link>
            <div className="col-sm-8">
              <p className="my-1 pull-right">
                <small className="px-3">
                  <Link
                    to={`/pet/${pet._id}`}
                    style={{ textDecoration: "none" }}
                    className="text-report"
                  >
                    <i className="fa fa-flag" aria-hidden="true"></i>
                    {`Report ${fromNow(pet.createAt)}`}
                  </Link>
                </small>
              </p>
              <h2 className="fido-green-text">
                {` ${pet.name} `}
                <small
                  className="fido-blue-text"
                  style={{ fontSize: "65%" }}
                >{`${pet.gender} ${pet.species}`}</small>
              </h2>
              <p>
                <small>
                  <span
                    className={`label-status ${(() => {
                      if (pet.status === "Lost") {
                        return `label-status-danger`;
                      } else if (pet.status === "Found") {
                        return `label-status-warning`;
                      } else {
                        return `label-status-success`;
                      }
                    })()}`}
                  >{`${(() => {
                    if (pet.status === "Lost") {
                      return `LOST`;
                    } else if (pet.status === "Found") {
                      return `FOUND`;
                    } else {
                      return `SAFE`;
                    }
                  })()}`}</span>
                  {` PET ID: ${pet._id}`}
                </small>
              </p>
              <hr className="my-1" />
              <span className="margin-spacer-sm"></span>
              <h3 className="fido-blue-text">{pet.city}</h3>
              <p className="pet-feed-description text-report">
                {pet.description}
              </p>
              <p>
                <Link to={`/pet/${pet._id}`} className="btn btn-primary-pet width-full">
                  <i className="text-reverse pull-right" aria-hidden="true"></i>
                  <span className="text-reverse"> View Pet </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PetList;
