import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProductRandom } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import carousel1 from "../../images/carousel-1.jpg";
import carousel2 from "../../images/carousel-2.jpg";
import carousel3 from "../../images/carousel-3.jpg";
import lostAndFound from "../../images/lost&found-home.jpg";

import dogInTowel from "../../images/Dog-in-Towel.jpg";
import bathDog from "../../images/tam-cho-dung-cach.jpg";
import hairStrimming from "../../images/hair-strimming.jpg";
import nailDog from "../../images/mong-cho.jpg";
import petRelax from "../../images/pet-relax.jpg";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, productsRandom } = useSelector(
    (state) => state.productsRandom
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductRandom());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Pet Sitter" />

          <section className="carouffsel">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={carousel1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={carousel2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={carousel3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <i className="fa-solid fa-arrow-left-long"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <i className="fa-solid fa-arrow-right-long"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>

          {/* <section className="lostAndFound">
            <div className="container">
              <div className="row">
                <div className="lost-left col-xl-6 col-lg-12">
                  <img src={lostAndFound} alt="lost-and-found" />
                </div>
                <div className="lost-right col-xl-6 col-lg-12">
                  <div className="lost-title">
                    <h1 className="col-xl-8">Welcome to Lost&Found Page</h1>
                    <p>
                      Here you can fill in the form to post the article and then
                      the article will be posted on the website to help you!
                    </p>
                  </div>
                  <div className="lost-content">
                    <span>
                      <i className="fa-solid fa-check"></i>
                      We will help you find your pet and help you contact the
                      finder
                    </span>
                    <br />
                    <span>
                      <i className="fa-solid fa-check"></i>
                      All post are free and no need to login if not needed
                    </span>
                    <br />
                    <span>
                      <i className="fa-solid fa-check"></i>
                      Enthusiastic admin team and support as quickly as possible
                    </span>
                  </div>
                  <div className="lost-button">
                    <Link to="/report"> Report Now </Link>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="home-shop">
            <div className="container">
              <div className="shop-title">
                <h1>Shop</h1>
              </div>

              <div className="shop-top">
                <div className="row">
                  {productsRandom &&
                    productsRandom.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </div>
              </div>
            </div>
          </section>
          <section className="home-spa">
            <div className="container">
              <div className="spa-title">
                <h1>SPA & GROOMING</h1>
                <p>
                  About bathing, nail, strimming and relaxation services for
                  your pet
                </p>
              </div>
              <div className="row">
                <div className="spa-cover-img col-md-12">
                  <Link to="/spa">
                    <img src={dogInTowel} alt="dog" />
                  </Link>
                </div>
                <div className="spa-bath-img col-md-6">
                  <Link to="/wash">
                    <img src={bathDog} alt="bathing" />
                    <h3>Bathing</h3>
                  </Link>
                </div>
                <div className="spa-trimming-img col-md-6">
                  <Link to="/hair">
                    <img src={hairStrimming} alt="strimming" />
                    <h3>Hair Strimming</h3>
                  </Link>
                </div>
                <div className="spa-nail-img col-md-6">
                  <Link to="/nail">
                    <img src={nailDog} alt="nail" />
                    <h3>Nail</h3>
                  </Link>
                </div>
                <div className="spa-relax-img col-md-6">
                  <Link to="/relax">
                    <img src={petRelax} alt="relax" />
                    <h3>Relax</h3>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="contact">
            <div className="container">
              <div className="contact-title">
                <h1>Contact</h1>
              </div>
              <div className="row">
                <div className="contact-left col-xl-8 col-md-12">
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6099414916575!2d106.8076943149421!3d10.841132860960094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1655576097587!5m2!1svi!2s"
                    width="600"
                    height="450"
                    styles={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="contact-right col-xl-4 col-md-12">
                  <label className="form-label">You are...</label>
                  <br />
                  <div className="choose-role">
                    <button>Loser Pet</button>
                    <button>Finder Pet</button>

                    <button>Customer</button>
                    <button>Other</button>
                  </div>
                  <div className="mb-3 form-text">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3 form-text">
                    <input
                      type="tel"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-3 form-text">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
