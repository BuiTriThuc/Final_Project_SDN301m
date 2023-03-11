import React, { Fragment } from "react";
import "./Spa.css";
import firstImage from "../../images/first-img-index.png"
import secondImage from "../../images/second-img-index.png"
import MetaData from "../layout/MetaData";

const Spa = () => {
  return (
    <Fragment>
      <MetaData title="Spa Pet" />
       <section style={{ background: "#fff5ee" }} className="petspa">
        <div className="container">
          <div className="row">
            <div>
              <h3 className="top-title-petspa">
                Pet spa - Dog and cat hair strimming
              </h3>
              <h4 className="title-2-petspa">
                Do you want your pets to be better, healthy and living longer?
              </h4>
              <h6 className="title-3-petspa">
                It is a fact that, Grooming and spa regulary will help your pet
                stay healthy and prolong life.
              </h6>
            </div>
            <div className="row-top-petspa">
              <div className="row-top-left-petspa">
                <div className="ol-1-index">
                  <h3 className="title-ol-1">
                    Why should you regularly bathe and trim the hair for pets?
                  </h3>
                  <ol className="ol-1">
                    <li>Grooming & Spa prevents pet skin problems</li>
                    <li>
                      Grooming & Spa stimulates the nerve to help hair grow
                    </li>
                    <li>
                      Grooming & Spa combined with massage movements helps
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row-top-right-petspa">
                <div>
                  <img
                    className="img1-spa-gromming"
                    src={firstImage}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div id="border">
              <p>
                According to the Center for Physiotherapy and Rehabilitation,
                Massachusetts Veterinary Hospital, Intown Veterinary Group,
                Woburn, MA, USA, Grooming and Spa for pets also has the effect
                of treating diseases and restoring health. after injury.
              </p>
            </div>
            <div className="row-bottom-petspa">
              <div className="row-bottom-left-petspa">
                <img
                  className="img2-spa-gromming"
                  src={secondImage}
                  alt=""
                />
              </div>
              <div className="row-bottom-right-petspa">
                <div className="ol-2-index">
                  <h3 className="title-ol-1">
                    Why should they come to PettSitter's pet grooming service?
                  </h3>
                  <ol className="ol-1">
                    <li>
                      They don't need to struggle for hours and hours to bathe
                      and do basic cleaning for their pets.
                    </li>
                    <li>
                      They no longer stress when cutting their own pets nails
                      and fear that the pet will bleed.
                    </li>
                    <li>
                      They feel less anxious when they don't know h ow to brush,
                      dry or brush their pets teeth and ears.
                    </li>
                    <li>
                      They are happy to know that their pet is more comfortable
                      and healthy when going to Grooming & Spa.
                    </li>
                    <li>
                      They are also very confident when their pet is highlighted
                      with a clean, smelling good.<br />
                      Event their pets are loved by many people because of their
                      colored hair.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Spa;
