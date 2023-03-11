import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandle = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <div style={{marginTop: "20px"}}>
          <form className="searchBox" onSubmit={searchSubmitHandle}>
            <input
              type="text"
              placeholder="Search a Product ..."
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input type="submit" value="Search" />
          </form>
    </div>
  );
};

export default Search;
