import React, { Fragment, useEffect, useState, useRef } from "react";
import "./NewProduct.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getPetDetails,
  updatePetAdmin,
} from "../../actions/petAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeIcon from "@mui/icons-material/Home";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SideBar from "./Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../Utils/Date";
import format from "date-fns/format";
import { Calendar } from "react-date-range";
import { UPDATE_PET_RESET } from "../../constants/petConstant";

const UpdateReunited = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { id } = useParams();

  const { error, pet } = useSelector((state) => state.petDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.pet);

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
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesReview] = useState([]);

  const statuses = ["Lost", "Found", "Reunited"];

  useEffect(() => {
    if (pet && pet._id !== id) {
      dispatch(getPetDetails(id));
    } else {
      setName(pet.name);
      setSpecies(pet.species);
      setGender(pet.gender);
      setDescription(pet.description);
      setMessage(pet.message);
      setPhone(pet.phone);
      setCity(pet.city);
      setArea(pet.area);
      setAddress(pet.address);
      setDate(pet.date);
      setStatus(pet.status);
      setOldImages(pet.image);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Pet Updated Successfully");
      navigate("/admin/pets");
      dispatch({ type: UPDATE_PET_RESET });
    }
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    setDate(format(new Date(), "dd/MM/yyyy"));
  }, [dispatch, navigate, pet, id, error, alert, isUpdated, updateError]);

  const updatePetSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("city", city);
    myForm.set("area", area);
    myForm.set("address", address);
    myForm.set("message", message);
    myForm.set("status", status);
    myForm.set("date", date);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(updatePetAdmin(id, myForm));
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesReview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesReview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
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
    setDate(format(date, "dd/MM/yyyy"));
  };

  return (
    <Fragment>
      <MetaData title="Update Reunited Pet" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updatePetSubmitHandler}
            style={{ height: "93%" }}
          >
            <h1>Update Pet</h1>
            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Address"
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <HolidayVillageIcon />
              <input
                type="text"
                placeholder="Area"
                defaultValue={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="City"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <CalendarMonthIcon />
              <input
                value={date}
                readOnly
                onClick={() => setOpen((open) => !open)}
              />

              <div ref={refOne}>
                {open && (
                  <Calendar date={new Date()} onChange={handleSelectDate} />
                )}
              </div>
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Pet Description"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <ModeCommentIcon />

              <textarea
                placeholder="Pet Message"
                defaultValue={message}
                onChange={(e) => setMessage(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select
                defaultValue={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Choose Category</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProductImagesChange}
              />
            </div>

            <div id="createProductFormImage">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Product Preview" />
                ))}
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateReunited;
