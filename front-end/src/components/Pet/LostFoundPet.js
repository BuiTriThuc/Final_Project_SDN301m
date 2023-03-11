import React, { Fragment, useEffect, useState } from "react";
import "./LostFoundPet.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { FormGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  getAllPets,
  getFilterPets,
} from "../../actions/petAction";
import PetList from "./PetList";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import Pagination from "react-js-pagination";

const LostFoundPet = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, pets } = useSelector((state) => state.pets);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [city, setCity] = useState("");
  const [statuses, setStatuses] = useState([]);
  const [address, setAddress] = useState("");
  const [species, setSpecies] = useState([]);
  const [gender, setGender] = useState([]);
  const [petsSearchData, setPetsSearchData] = useState([]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAllPets());
  }, [dispatch, alert, error]);



  const checkHandler = (e) => {
    let statusArray = [...statuses];
    if (e.target.checked === true) {
      statusArray = [...statuses, e.target.value];
    } else {
      statusArray.splice(statuses.indexOf(e.target.value), 1);
    }
    setStatuses(statusArray);
    console.log(statusArray);
  };

  const checkSpecies = (e) => {
    let speciesArray = [...species];
    if (e.target.checked === true) {
      speciesArray = [...species, e.target.value];
    } else {
      speciesArray.splice(species.indexOf(e.target.value), 1);
    }
    setSpecies(speciesArray);
    console.log(speciesArray);
  };

  const checkGender = (e) => {
    let genderArray = [...gender];
    if (e.target.checked === true) {
      genderArray = [...gender, e.target.value];
    } else {
      genderArray.splice(gender.indexOf(e.target.value), 1);
    }
    setGender(genderArray);
    console.log(genderArray);
  };

  const searchSubmitForm = (e) => {
    e.preventDefault();

    const newData = pets
      .filter((petName) =>
        petName.name
          .toLowerCase()
          .includes(
            name === "" ? petName.name.toLowerCase() : name.toLowerCase()
          )
      )
      .filter((petId) => petId._id === (id === "" ? petId._id : id.trim()))
      .filter((petCity) =>
        petCity.city
          .toLowerCase()
          .trim()
          .includes(
            city === ""
              ? petCity.city.toLowerCase().trim()
              : city.toLowerCase().trim()
          )
      )
      .filter((petAddress) =>
        petAddress.address
          .toLowerCase()
          .trim()
          .includes(
            address === ""
              ? petAddress.address.toLowerCase().trim()
              : address.toLowerCase().trim()
          )
      )
      .filter((petStatus) => statuses.includes(petStatus.status))
      .filter((petSpecies) => species.includes(petSpecies.species))
      .filter((petGender) => gender.includes(petGender.gender));

    setPetsSearchData(newData);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Lost and Found Search Database" />
          <div className="container-fluid light-base padding-spacer-md">
            <div className="col-md-4 pet-feed-search-block-container">
              <form id="lfdbFeedStatusForm" onSubmit={searchSubmitForm}>
                <div className="search-block">
                  <div>
                    <div className="panel-group show-tablet-cancel hide-desktop-cancel filter-widget">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title row">
                            <div className="col-xs-12">
                              <h5 className="text-reverse">
                                Showing lost and found pets
                              </h5>
                            </div>
                          </div>
                        </div>

                        <div
                          id="collapseOne"
                          className="panel-collapse collapse in"
                        >
                          <div className="panel-body">
                            <div className="col-xs-12">
                              <h4 className="fido-blue-text first">ID</h4>
                              <div className="form-group field-lfdbfeedstatusform-attributesearch">
                                <input
                                  type="text"
                                  id="lfdbfeedstatusform-attributesearch"
                                  className="form-control"
                                  placeholder="e.g. dsfdsHdlLK"
                                  value={id}
                                  onChange={(e) => setId(e.target.value)}
                                />
                                <p className="help-block help-block-error"></p>
                              </div>
                              <h4 className="fido-blue-text first">Name</h4>
                              <div className="form-group field-lfdbfeedstatusform-attributesearch">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="e.g. dsfdsHdlLK"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                />
                                <p className="help-block help-block-error"></p>
                              </div>
                              <div className="form-group field-lfdbfeedstatusform-zip">
                                <input
                                  type="hidden"
                                  id="lfdbfeedstatusform-zip"
                                  className="form-control"
                                  placeholder="e.g. dsfdsHdlLK"
                                />
                                <p className="help-block help-block-error"></p>
                              </div>
                              <div className="col-xs-12">
                                <h4 className="fido-blue-text second">
                                  Status
                                </h4>
                                <div className="form-group field-lfdbfeedstatusform-status required">
                                  <input
                                    type="hidden"
                                    name="LfdbFeedStatusForm[status]"
                                    value=""
                                  />
                                  <div
                                    id="lfdbfeedstatusform-status"
                                    aria-required="true"
                                  >
                                    <FormGroup
                                      row
                                      style={{ marginLeft: "10px" }}
                                    >
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            color="success"
                                            value="Lost"
                                            onChange={checkHandler}
                                          />
                                        }
                                        label="Lost"
                                      />

                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            color="success"
                                            value="Found"
                                            onChange={checkHandler}
                                          />
                                        }
                                        label="Found"
                                      />

                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            color="success"
                                            value="Reunited"
                                            onChange={checkHandler}
                                          />
                                        }
                                        label="Reunited"
                                      />
                                    </FormGroup>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xs-12">
                                <h4
                                  className="fido-blue-text third"
                                  style={{ marginLeft: "10px" }}
                                >
                                  Location
                                </h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="fido-blue-text city-zip-address">
                                      <strong>City</strong>
                                    </div>
                                    <input
                                      type="text"
                                      id="lfdbfeedstatusform-city"
                                      className="form-control fido-green-text"
                                      placeholder="Ho Chi Minh"
                                      value={city}
                                      onChange={(e) => setCity(e.target.value)}
                                    />
                                    <div className="fido-blue-text city-zip-address">
                                      <strong>Address</strong>
                                    </div>
                                    <input
                                      type="text"
                                      id="lfdbfeedstatusform-address"
                                      className="form-control fido-green-text"
                                      placeholder="District 1"
                                      value={address}
                                      onChange={(e) =>
                                        setAddress(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-xs-12">
                                <h4
                                  className="fido-blue-text fifth"
                                  style={{ marginLeft: "10px" }}
                                >
                                  Animal
                                </h4>
                                <div className="row">
                                  <div className="col-xs-12">
                                    <div
                                      className="fido-blue-text sixth"
                                      style={{ marginLeft: "20px" }}
                                    >
                                      <strong>Type</strong>
                                    </div>
                                    <FormGroup
                                      row
                                      style={{ marginLeft: "20px" }}
                                    >
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            color="success"
                                            value="Dog"
                                            onChange={checkSpecies}
                                          />
                                        }
                                        label="Dog"
                                      />

                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            color="success"
                                            value="Cat"
                                            onChange={checkSpecies}
                                          />
                                        }
                                        label="Cat"
                                      />
                                    </FormGroup>

                                    <FormControl>
                                      <div
                                        className="fido-blue-text sixth"
                                        style={{ marginLeft: "20px" }}
                                      >
                                        <strong>Sex</strong>
                                      </div>
                                      <FormGroup
                                        row
                                        style={{ marginLeft: "20px" }}
                                      >
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              color="success"
                                              value="Male"
                                              onChange={checkGender}
                                            />
                                          }
                                          label="Male"
                                        />

                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              color="success"
                                              value="Female"
                                              onChange={checkGender}
                                            />
                                          }
                                          label="Female"
                                        />
                                      </FormGroup>
                                    </FormControl>

                                    {/* <FormControl>
                                      <div
                                        className="fido-blue-text sixth"
                                        style={{ marginLeft: "20px" }}
                                      >
                                        <strong>With Past</strong>
                                      </div>
                                      <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        color="success"
                                        style={{ marginLeft: "20px" }}
                                      >
                                        <FormControlLabel
                                          value="1month"
                                          control={<Radio />}
                                          label="1 Month"
                                        />
                                        <FormControlLabel
                                          value="3month"
                                          control={<Radio />}
                                          label="3 Month"
                                        />
                                        <FormControlLabel
                                          value="6month"
                                          control={<Radio />}
                                          label="6 Months"
                                        />
                                      </RadioGroup>
                                    </FormControl> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="submit"
                          className="form-control btn btn-green text-reverse filterButton desktop-submit-button"
                          value="Find"
                          style={{ marginLeft: "0px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-8 col-xs-12 pet-feed-search-results-container">
              <h1>{`Lost and Found Pets Database ${
                petsSearchData?.city ? petsSearchData?.city : ""
              }`}</h1>
              <p className="text-center text-center-info">
                Search lost and found dogs, cats in your area.{" "}
              </p>
              <div className="list-view">
                {petsSearchData && petsSearchData.length > 0
                  ? petsSearchData.map((pet) => (
                      <PetList key={pet._id} pet={pet} />
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LostFoundPet;
