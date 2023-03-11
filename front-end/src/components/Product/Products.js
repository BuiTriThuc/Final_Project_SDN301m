import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductsList from "./ProductsList";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

const categories = [
  "Food",
  "Treat",
  "Toy",
  "Collar",
  "Leash",
  "Cage",
  "Muzzle",
  "Backpack",
];

const Products = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 3000000]);
  const priceRanges = [
    { label: "Less than 10,000", value: [0, 10000] },
    { label: "10,000 - 50,000", value: [10000, 50000] },
    { label: "50,000 - 100,000", value: [50000, 100000] },
    { label: "100,000 - 500,000", value: [100000, 500000] },
    { label: "500,000 - 1,000,000", value: [500000, 1000000] },
    { label: "More than 1,000,000", value: [1000000, 3000000] },
  ];
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
    totalProduct
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  let count = filteredProductsCount;

  // const priceHandler = (event, newPrice) => {
  //   setPrice(newPrice);
  // };

  const handleChangePrice = (e) => {
    const value = e.target.value;
    const [minPrice, maxPrice] = value.split(",").map(Number);
    let newPriceRange = [];
    if (e.target.checked) {
      newPriceRange = [minPrice, maxPrice];
    } else {
      newPriceRange = [0, 3000000];
    }
    setPrice(newPriceRange);

    const filteredProducts = totalProduct.filter((product) => {
      return product.price >= newPriceRange[0] && product.price <= newPriceRange[1];
    });
    // Update the count variable with the filtered products count
    count = filteredProducts.length;
  };

  

  const { keyword } = useParams();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, rating));
  }, [dispatch, keyword, currentPage, price, category, rating, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Products" />
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductsList key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            {/* <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={3000000}
              /> */}
            <ul className="categoryBox" style={{listStyleType: "none"}}>
              {priceRanges.map((range) => (
                <li key={range.label}>
                  <label>
                    <input
                      type="radio"
                      value={range.value}
                      onChange={handleChangePrice}
                    />
                    {range.label}
                  </label>
                </li>
              ))}
            </ul>
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={rating}
                onChange={(e, newRating) => {
                  setRating(newRating);
                }}
                aria-labelledby="continuous-slider"
                min={0}
                max={5}
                valueLabelDisplay="auto"
              />
            </fieldset>
          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={count}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
