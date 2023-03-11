import React from "react";
import profilePng from "../../images/Profile.png";
import { Rating } from "@material-ui/lab";
import { useSelector } from "react-redux";

const ReviewCard = ({ review }) => {
  const { user } = useSelector(state => state.user);
  const options = {
    readOnly: true,
    value: review.rating,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src={user?.avatar?.url} alt={user?.name} />
      <p>{review.name}</p>
      <Rating {...options} />
      <span>{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
