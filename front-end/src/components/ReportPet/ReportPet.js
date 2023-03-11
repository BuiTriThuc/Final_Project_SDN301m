import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ReportPet.css";
import LostPetCard from "./LostPetCard";
import FoundPetCard from "./FoundPetCard";
import ReunitedPetCard from "./ReunitedPetCard";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getAllPets, clearErrors, createPet } from "../../actions/petAction";
import { NEW_PET_RESET } from "../../constants/petConstant";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import format from "date-fns/format";

const ReportPet = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, error, pets } = useSelector((state) => state.pets);
  const { error: newPetError, success } = useSelector((state) => state.newPet);
  

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  const statuses = ["Lost", "Found"];

  const genders = ["Male", "Female"];

  const specieses = ["Dog", "Cat"];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (newPetError) {
      alert.error(newPetError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Report Pet Created Successfully");
      navigate("/report");
      dispatch({ type: NEW_PET_RESET });
    }

    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    // set current date on component load
    setDate(format(new Date(), "dd/MM/yyyy"));
    dispatch(getAllPets());
  }, [dispatch, navigate, error, alert, newPetError, success]);

  const createPetLostSubmitHandler = (e) => {
    e.preventDefault();
    
    navigate("/login?redirect=/report")

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("city", city);
    myForm.set("area", area);
    myForm.set("address", address);
    myForm.set("date", date);
    myForm.set("description", description);
    myForm.set("message", message);
    myForm.set("status", status);
    myForm.set("gender", gender);
    myForm.set("species", species);
    image.forEach((image) => {
      myForm.append("image", image);
    });

    dispatch(createPet(myForm));
  };

  const createPetImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImage([]);
    setImagePreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview((old) => [...old, reader.result]);
          setImage((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleSelectDate = (date) => {
    setDate(format(date, "MM/dd/yyyy"));
  };

  

  return (
    <Fragment>
      <section className="enter-infor">
        <div className="container">
          <div className="row">
            <div className="enter-left col-xl-6">
              <h1 className="foundPetTransformHeader xs:mt-ff-20 lg:mt-ff-27 md:mb-10 lg:mb-ff-20">
                <strong>
                  Find Your Lost Pet<strong></strong>
                </strong>
              </h1>
              <h3 style={{ marginTop: "50px"}}>
                We will help you by filling out the form here !
              </h3>
            </div>
            <div className="enter-right col-xl-5">
              <div className="enter-title">
                <h3>Start Your Free Alert</h3>
                <p>
                  Enter your pet's information to instantly start spreading
                  local awareness.
                </p>
              </div>
              <form onSubmit={createPetLostSubmitHandler} encType="multipart/form-data">
                <div className="enter-main">
                  <h5>
                    Pet status <span>*</span>
                  </h5>
                  <div
                    className="field-petsubmitform-status required md:w-1/2 md:float-left lg:w-1/2 lg:float-left"
                    style={{ marginBottom: "20px"}}
                  >
                    <input
                      type="hidden"
                      name="PetSubmitForm[status]"
                      value=""
                    />
                    <div
                      id="petsubmitform-status"
                      role="radiogroup"
                      aria-required="true"
                    >
                      
                        <label>
                          <input
                            type="radio"
                            name="PetSubmitForm[status]"
                            value="Lost"
                            onChange={(e) => {
                              setStatus(e.target.value);
                            }}
                          />
                          <span
                            style={{ color: "black" }}
                            className="pet-form-radio-text"
                          >
                            Lost
                          </span>
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="PetSubmitForm[status]"
                            value="Found"
                            onChange={(e) => {
                              setStatus(e.target.value);
                            }}
                          />
                          <span
                            style={{ color: "black" }}
                            className="pet-form-radio-text"
                          >
                            Found
                          </span>
                        </label>
                      
                    </div>
                    <div className="label label-danger"></div>
                    {console.log(status)}
                  </div>

                  <div>
                    {/* Form Pet Name and Species */}
                    <div className="form-item">
                      <div className="form-left">
                        <label className="form-label">
                          Pet Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-right">
                        <label className="form-label">
                          Species <span>*</span>
                        </label>
                        <select
                          onChange={(e) => setSpecies(e.target.value)}
                          className="form-control"
                          required
                        >
                          <option value="">Select species...</option>
                          {specieses.map((speciesItem) => (
                            <option key={speciesItem} value={speciesItem}>
                              {speciesItem}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Form Gender And City */}
                    <div className="form-item">
                      <div className="form-left">
                        <label className="form-label">
                          Gender <span>*</span>
                        </label>
                        <select
                          onChange={(e) => setGender(e.target.value)}
                          className="form-control"
                          required
                        >
                          <option value="">Select gender...</option>
                          {genders.map((genderItem) => (
                            <option key={genderItem} value={genderItem}>
                              {genderItem}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-right">
                        <label className="form-label">
                          City <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Form Address Lost and Area Lost */}
                    <div className="form-item">
                      <div className="form-left">
                        <label className="form-label">
                          {status === "Lost" ? `Area Last Seen` : `Area Found`} <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                        />
                      </div>
                      <div className="form-right">
                        <label className="form-label">
                          {status === "Lost" ? `Address Last Seen` : `Address Found`} <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Form Date Lost and Message */}
                    <div className="form-item">
                      <div className="form-left">
                        <label className="form-label">
                          Message <span>*</span>
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          cols="30"
                          rows="1"
                        />
                      </div>
                      <div className="form-right">
                        <label className="form-label">
                          {status === "Lost" ? `Date Last Seen` : `Date Found`} <span>*</span>
                        </label>
                        <input
                          value={date}
                          readOnly
                          className="form-control"
                          onClick={() => setOpen((open) => !open)}
                        />

                        <div ref={refOne}>
                          {open && (
                            <Calendar
                              date={new Date()}
                              onChange={handleSelectDate}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Form Description Lost and Phone */}
                    <div className="form-item">
                      <div className="form-left" style={{ maxWidth: "100%" }}>
                        <label className="form-label">
                          Description <span>*</span>
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          cols="30"
                          rows="1"
                        />
                      </div>
                      <div className="form-right">
                        <label className="form-label">
                          Phone <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* From Select Image Lost */}
                    <div className="form-item">
                      <div className="form-image">
                        <label className="form-label">
                          Select image <span>*</span>:
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          name="myImage"
                          accept="image/*"
                          onChange={createPetImagesChange}
                        />
                      </div>
                    </div>

                    <div id="createProductFormImage">
                      {imagePreview.map((image, index) => (
                        <img key={index} src={image} alt="Product Preview" />
                      ))}
                    </div>
                  </div>

                  <div className="btn-enter">
                    <button className="btn btn-success" type="submit">
                      Find Your Pet Back Home
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="lost">
        <div className="container">
          <div className="lost-title">
            <h1>Lost</h1>
          </div>
          <div className="row">
            {pets && pets.map((pet) => <LostPetCard key={pet._id} pet={pet} />)}
          </div>
        </div>
      </section>
      <section className="comebackhome">
        <div className="container">
          <div className="reunited-title">
            <h1>Comeback Home</h1>
            <p>Read about recently reunited fur babies.</p>
            <h3>1,000</h3>
            <h6>Pets Reunited And Counting!</h6>
          </div>
          <div className="row">
            {pets &&
              pets.map((pet) => <ReunitedPetCard key={pet._id} pet={pet} />)}
          </div>
        </div>
      </section>
      <section className="found">
        <div className="container">
          <div className="found-title">
            <h1>Found</h1>
          </div>
          <div className="row">
            {pets &&
              pets.map((pet) => <FoundPetCard key={pet._id} pet={pet} />)}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ReportPet;
