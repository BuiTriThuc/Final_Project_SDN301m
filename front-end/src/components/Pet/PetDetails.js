import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getPetDetails } from "../../actions/petAction";
import MetaData from "../layout/MetaData";
import "./PetDetails.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { formatDate, fromNow } from "../Utils/Date";

const PetDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const [contactShow, setContactShow] = useState(false);
  const [phoneShow, setPhoneShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { loading, error, pet } = useSelector((state) => state.petDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getPetDetails(id));
  }, [dispatch, error, alert, id]);
  return (
    <Fragment>
      <MetaData title={`${pet?.name}`} />
      <div className="container well">
        <div className="row">
          <div className="col-md-10">
            <div className="pet-details-features margin-bottom-0">
              {pet.image &&
                pet.image.map((item, i) => (
                  <img
                    className="no-padding widget-image image-pet-info width-full"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                    style={{
                      objectPosition: "top left",
                      position: "static",
                      marginBottom: "15px",
                    }}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="row border-bottom-gray">
            <div className="col-md-3 col-xs-4 bg-white rounded-tl-lg">
              <p className="fido-blue-text text-left pb-0 mb-0 pet-id-label">
                <strong>PET ID</strong>
              </p>
            </div>
            <div className="col-md-3 col-xs-8 bg-white rounded-tr-lg">
              <h2
                className="fido-green-text text-left font-size-21"
                style={{ marginTop: "2.2rem" }}
              >
                {pet?._id}
              </h2>
            </div>
            {(() => {
              if (pet?.status === "Lost" || pet?.status === "Found") {
                return (<div className="col-md-6 visible-lg visible-md hidden-sm hidden-xs">
                  <Button
                    className="btn-center btn btn-primary-pet font-size-20 font-weight-800"
                    style={{ border: "none" }}
                    onClick={() => setContactShow(true)}
                  >
                    <i
                      className="text-left fa fa-envelope"
                      aria-hidden="true"
                    ></i>
                    Contact Owner
                  </Button>
                </div>);
              } else {
              }
            })()}
          </div>
          <div className="row border-bottom-gray pt-3 pb-2 bg-white rounded-tr-lg">
            <div className="col-md-4 col-xs-4">
              <p className="info-label">
                <strong>NAME</strong>
              </p>
            </div>
            <div className="col-md-8 col-xs-8">
              <h2 className="fido-green-text text-left margin-top-0">
                {pet?.name}
              </h2>
            </div>
          </div>
          <div className="row border-bottom-gray pt-3 pb-2 bg-white">
            <div className="col-md-4 col-xs-4">
              <p className="info-label">
                <strong>STATUS</strong>
              </p>
            </div>
            <div className="col-md-8 col-xs-8">
              <p
                className="text-left text-info-pet"
                style={{ marginTop: "9px" }}
              >
                <span
                  className={`label-status ${(() => {
                    if (pet?.status === "Lost") {
                      return `label-status-danger`;
                    } else if (pet?.status === "Found") {
                      return `label-status-warning`;
                    } else {
                      return `label-status-success`;
                    }
                  })()}`}
                >{`${(() => {
                  if (pet?.status === "Lost") {
                    return `LOST`;
                  } else if (pet?.status === "Found") {
                    return `FOUND`;
                  } else {
                    return `SAFE`;
                  }
                })()}`}</span>
                {`${(() => {
                  if (pet?.status === "Reunited") {
                    return ` - reunited after ${fromNow(pet?.createAt)}`;
                  } else {
                    return ``;
                  }
                })()}`}
              </p>
            </div>
          </div>
          <div className="row border-bottom-gray pt-3 pb-2 bg-white">
            <div className="col-md-4 col-xs-4">
              <p className="info-label">
                <strong>SEX</strong>
              </p>
            </div>
            <div className="col-md-8 col-xs-8">
              <h2 className="fido-green-text text-left margin-top-0">
                {pet?.gender}
              </h2>
            </div>
          </div>
          <div className="row border-bottom-gray pt-3 pb-2 bg-white">
            <div className="col-md-4 col-xs-4">
              <p className="info-label">
                <strong>SPECIES</strong>
              </p>
            </div>
            <div className="col-md-8 col-xs-8">
              <h2 className="fido-green-text text-left margin-top-0">
                {pet?.species}
              </h2>
            </div>
          </div>
          <div className="row border-bottom-gray pt-3 pb-2 bg-white">
            <div className="col-md-4 col-xs-4">
              <p className="info-label">
                <strong>{`${(() => {
                  if (pet?.status === "Lost") {
                    return `MESSAGE FROM OWNER`;
                  } else if (pet?.status === "Found") {
                    return `MESSAGE FROM FINDER`;
                  } else {
                    return `${pet?.name}'s Owner/Finder Say`;
                  }
                })()}`}</strong>
              </p>
            </div>
            <div className="col-md-8 col-xs-8">
              <p className="text-left text-info-pet margin-top-0">
                {`"${pet?.message}"`}
              </p>
            </div>
          </div>
          <div className="row border-bottom-gray pt-3 pb-2 bg-white">
            <div className="col-md-4 col-xs-4">
              <p className="info-label">
                <strong>DESCRIPTION</strong>
              </p>
            </div>
            <div className="col-md-8 col-xs-8">
              <p className="text-left text-info-pet margin-top-0">
                {pet?.description}
              </p>
            </div>
          </div>
          <div className="row border-bottom-gray pt-3 pb-2 bg-white">
            <div className="col-md-4 col-xs-4">
              <p className="info-label">
                <strong>
                  {(() => {
                    if (pet?.status === "Lost" || pet?.status === "Reunited") {
                      return `AREA LAST SEEN`;
                    } else {
                      return `AREA FOUND`;
                    }
                  })()}
                </strong>
              </p>
            </div>
            <div className="col-md-8 col-xs-8">
              <h2 className="fido-green-text text-left margin-top-0">
                {`${pet?.area}`}
              </h2>
            </div>
          </div>
          <div className="row border-bottom-gray pt-3 pb-2 bg-white">
            <div className="col-md-4 col-xs-4">
              <p className="info-label">
                <strong>
                  {(() => {
                    if (pet?.status === "Lost" || pet?.status === "Reunited") {
                      return `ADDRESS LAST SEEN`;
                    } else {
                      return `ADDRESS FOUND`;
                    }
                  })()}
                </strong>
              </p>
            </div>
            <div className="col-md-8 col-xs-8">
              <h2 className="fido-green-text text-left margin-top-0">
                {pet.address}
              </h2>
            </div>
          </div>

          <div className="row border-bottom-gray pt-3 pb-2 bg-white">
            <div className="col-md-4 col-xs-4">
              <p className="info-label">
                <strong>
                  {(() => {
                    if (pet?.status === "Lost" || pet?.status === "Reunited") {
                      return `DATE LAST SEEN`;
                    } else {
                      return `DATE FOUND`;
                    }
                  })()}
                </strong>
              </p>
            </div>
            <div className="col-md-8 col-xs-8">
              <h2 className="fido-green-text text-left margin-top-0">
                {pet?.date ? formatDate(Date.parse(pet?.date)) : ""}
              </h2>
            </div>
          </div>

          {(() => {
            if (pet?.status === "Lost" || pet?.status === "Found") {
              return (<div className="row border-bottom-gray pt-3 pb-2 bg-white">
                <div className="col-md-4 col-xs-4">
                  <p className="info-label">
                    <strong>PHONE</strong>
                  </p>
                </div>
                <div className="col-md-3 col-xs-3">
                  <Button
                    className=" btn btn-primary-pet"
                    style={{ border: "none" }}
                    onClick={() => setContactShow(true)}
                  >
                    <i className="text-left fa fa-phone" aria-hidden="true"></i>
                    View Phone
                  </Button>
                </div>
              </div>);
            } else {
            }
          })()}
        </div>
      </div>

      <Modal
        show={contactShow}
        onHide={() => setContactShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "#8DC63F", letterSpacing: "1px" }}
          >{`CONTACT OWNER of ${pet?.name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Phone: </strong>
          {pet?.phone ? pet?.phone : "0858797595"}
        </Modal.Body>
        <Modal.Body>
          <strong>Email: </strong>
          <span style={{ color: "#8dc63f" }}>petsitter@gmail.com</span>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </Fragment>
  );
};

export default PetDetails;
