import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./ProductsList.css";

const ProductsList = ({ product }) => {
  const options = {
    value: product.rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span style={{ border: "10px black" }} className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`${product.price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      })}`}</span>
    </Link>
  );
};

export default ProductsList;
