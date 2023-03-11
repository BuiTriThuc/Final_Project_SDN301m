import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SideBar from "./Sidebar";
import {
  getPetDetails,
  clearErrors,
  updatePetStatusConfirm,
} from "../../actions/petAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@material-ui/core";
import { UPDATE_PET_STATUS_RESET } from "../../constants/petConstant";
import "./UpdatePetAdmin.css";

const UpdatePetAdmin = () => {
  const { pet, error, loading } = useSelector((state) => state.petDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.pet);
  const { id } = useParams();

  const updatePetSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("statusConfirm", statusConfirm);

    dispatch(updatePetStatusConfirm(id, myForm));
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const [statusConfirm, setStatusConfirm] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Censored Successfully");
      dispatch({ type: UPDATE_PET_STATUS_RESET });
    }

    dispatch(getPetDetails(id));
  }, [dispatch, alert, error, id, isUpdated, updateError]);

  return (
    <Fragment>
      <MetaData title="Censored Pet" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display: pet?.statusConfirm === "Censored" ? "block" : "grid",
                
              }}
            >
              <div>
                <div className="confirmshippingArea" style={{ paddingTop: "1vmax" }}>
                  <Typography>Pet Info</Typography>
                  <div className="orderDetailsContainerBox">
                  
                    <div>
                      <p>Name of pet:</p>
                      <span>{pet?.name}</span>
                    </div>
                    <div>
                      <p>Species:</p>
                      <span>{pet?.species}</span>
                    </div>
                    <div>
                      <p>Sex:</p>
                      <span>{pet?.gender}</span>
                    </div>
                    <div>
                      <p>City:</p>
                      <span>{pet?.city}</span>
                    </div>
                    <div>
                      <p>Area:</p>
                      <span>{pet?.area}</span>
                    </div>
                    <div>
                      <p>Address:</p>
                      <span>{pet?.address}</span>
                    </div>
                    <div>
                      <p>Message:</p>
                      <span>{pet?.message}</span>
                    </div>
                    <div>
                      <p>Description:</p>
                      <span>{pet?.description}</span>
                    </div>
                    <div>
                      <p>Phone:</p>
                      <span>085897595</span>
                    </div>
                  </div>

                  <Typography>Pet Status</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        className={
                          pet?.status === "Lost" ? "redColor" : "organeColor"
                        }
                      >
                        {pet?.status}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="confirmCartItems">
                  <Typography>Pet</Typography>
                  <div className="confirmCartItemsContainer">
                    <div style={{ justifyContent: "none !important"}}>
                      {pet.image &&
                        pet.image.map((item, i) => (
                          <img key={i} src={item.url} alt={`${i} Slide`} />
                        ))}
                      <div>{pet?.name}</div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  display:
                    pet?.statusConfirm === "Censored" ? "none" : "block",
                }}
              >
                <form
                  className="updatePetForm"
                  onSubmit={updatePetSubmitHandler}
                >
                  <h1>Process Report</h1>

                  <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatusConfirm(e.target.value)}>
                      <option value="">Choose Status Confim</option>

                      {pet?.statusConfirm === "Waiting" && (
                        <option value="Censored">Censored</option>
                      )}
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading
                        ? true
                        : false || statusConfirm === ""
                        ? true
                        : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UpdatePetAdmin;
