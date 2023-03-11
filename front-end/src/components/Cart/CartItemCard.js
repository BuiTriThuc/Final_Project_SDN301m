import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./CartItemCard.css";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="image" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`${item.price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}`}</span>
      </div>
      <button
        style={{ width: "50px", margin: "10px" }}
        onClick={() => deleteCartItems(item.product)}
        class="btn btn-danger"
      >
        <i class="fa fa-trash-o"></i>
      </button>
    </div>
  );
};

export default CartItemCard;
