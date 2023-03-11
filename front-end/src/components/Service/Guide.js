import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import petGuide1 from "../../images/petguide1.jpg";
import petGuide2 from "../../images/petguide2.jpg";
import petGuide3 from "../../images/petguide3.jpg";
import petGuide4 from "../../images/petguide4.jpg";
import petGuide5 from "../../images/petguide5.jpg";
import petGuide6 from "../../images/petguide6.jpg";
import petGuide7 from "../../images/petguide7.jpg";
import petGuide8 from "../../images/petguide8.jpg";
import "./Guide.css";
import ReactPlayer from 'react-player';
import MetaData from "../layout/MetaData";

const Guide = () => {
  return (
    <Fragment>
      <MetaData title="Pet Guide" />
      <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h1>PET GUIDE </h1>

          <div className="section-guide row gy-4">
            <div
              className="col-sm-8 position-relative about-img"
              style={{ backgroundImage: `url(${petGuide1})`}}
              data-aos="fade-up"
              data-aos-delay="150"
            ></div>
            <div className="col-sm-4 d-flex align-items-center">
              <div className="content ps-0 ps-lg-5">
                <p className="text-align center">
                  <strong>Pet</strong> Training Guides
                </p>
                <ul>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Don't teach the basics like "sit" or "down".
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Teach advanced skills too, such as staying put with the
                    added challenge of distance and distractions.
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Also consider taking up a pet sport with your pet so you can
                    really dig into the technical aspects of training like
                    timing, rate of reinforcement, and reward placement
                  </li>
                </ul>

                <div className="position-relative mt-4">
                  <img src={petGuide5} className="img-fluid" alt="" />
                  <a href={`https://www.youtube.com/watch?v=1oDGa2yPb2g`} className="glightbox play-btn" target="_blank"></a>
                </div>
              </div>
            </div>
          </div>

          <div className="section-guide row gy-4">
            <div className="col-sm-4 d-flex align-items-center">
              <div className="content ps-0 ps-lg-5">
                <p className="text-align center">
                  <strong>Make</strong> them Behave
                </p>

                <ul>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Be Consistent: Another important thing to know about
                    training your pet is to be consistent.
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Positive Reinforcement: While sone people might tell you a
                    strict demeanor is the key to training, this is not always
                    true.
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Keep it Simple: Pets don't just learn how to do elaborate
                    activies right away when training. They need to learn the
                    parts of each exercise, so you need to start your pet
                    training basics.
                  </li>
                </ul>
                <div className="position-relative mt-4">
                  <img src={petGuide6} className="img-fluid" alt="" />
                  <a href={"https://www.youtube.com/watch?v=6w_8gUABsFg"} className="glightbox play-btn" target="_blank"></a>
                </div>
              </div>
            </div>
            <div
              className="col-sm-8 position-relative about-img"
              style={{ backgroundImage: `url(${petGuide2})`}}
              data-aos="fade-up"
              data-aos-delay="150"
            ></div>
          </div>
          <div className="section-guide row gy-4">
            <div
              className="col-sm-8 position-relative about-img"
              style={{ backgroundImage: `url(${petGuide3})`}}
              data-aos="fade-up"
              data-aos-delay="150"
            ></div>
            <div className="col-sm-4 d-flex align-items-center">
              <div className="content ps-0 ps-lg-5">
                <p className="text-align center">
                  <strong>Pet</strong> nutrition
                </p>

                <ul>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Nourishing natural and real food for their cherished
                    companion animals.
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Confidence in quality, suitability and sustainable sourcing.
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Choice in the way their pets nutrition is produced and
                    delivered.
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Special attention to specific nutritional needs.
                  </li>
                </ul>
                <div className="position-relative mt-4">
                  <img src={petGuide7} className="img-fluid" alt="" />
                  <a href={"https://www.youtube.com/watch?v=qNZsXt5pT-I"} className="glightbox play-btn" target="_blank"></a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-guide row gy-4">
            <div className="col-sm-4 d-flex align-items-center">
              <div className="content ps-0 ps-lg-5">
                <p className="text-align center">
                  <strong>Exercise,</strong> good for you and your pet!
                </p>

                <ul>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Reseach suggests that individuals who exercise with a pet
                    are more likely to stick to their fitness routine.
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#f48c06" }}
                    ></i>{" "}
                    Regular walks may help with pet behavior their heart health,
                    just like it does for your blood pressure, bone density and
                    mental health.
                  </li>
                </ul>
                <div className="position-relative mt-4">
                  <img src={petGuide8} className="img-fluid" alt="" />
                  <a href={"https://www.youtube.com/watch?v=92abvfkGMPI"} className="glightbox play-btn" target="_blank"></a>
                </div>
              </div>
            </div>
            <div
              className="col-sm-8 position-relative about-img"
              style={{ backgroundImage: `url(${petGuide4})`}}
            ></div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  );
};

export default Guide;
