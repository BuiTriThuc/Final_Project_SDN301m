import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/Logo.png";
import {
  FaEnvelope,
  FaPhone,
  FaAngleRight,
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-logo col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-5 col-12">
            <div className="footer-img mb-4">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="footer-text">
            <i className="icon bi bi-telephone flex-shrink-0"></i>
              <p>
                1800-123-4567 <br />
                +91 987-654-3210
              </p>
            </div>
            <div className="footer-text">
            <i className="icon bi bi-share flex-shrink-0"></i>
              <p>
                pettsitter@gmail.com <br />
                service@gmail.com
              </p>
            </div>
          </div>

          <div className="footer-item col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-5 col-12">
            <h3>Quick Access</h3>
            <FaAngleRight />
            <Link to="/">
              {" "}
              <span>Lost&Found</span> <br />{" "}
            </Link>

            <FaAngleRight />
            <Link to="/">
              {" "}
              <span>Pet Item</span> <br />{" "}
            </Link>

            <FaAngleRight />
            <Link to="/">
              {" "}
              <span>Pet Shop</span> <br />{" "}
            </Link>

            <FaAngleRight />
            <Link to="/">
              {" "}
              <span>Spa&Grooming</span> <br />{" "}
            </Link>

            <FaAngleRight />
            <Link to="/">
              {" "}
              <span>Pet Hotel</span> <br />{" "}
            </Link>

            <FaAngleRight />
            <Link to="/">
              <span>Pet Guide</span>
            </Link>
          </div>
          <div className="footer-item footer-contact col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
            <h3>Follow Us</h3>
            <FaAngleRight />
            <Link to="/">
              <span>Facebook</span>
            </Link>
            <FaFacebookSquare style={{color: "#4267b2"}} />
            <br />
            <FaAngleRight />
            <Link to="/">
              <span>Youtube</span>
            </Link>
            <FaYoutube style={{color: "#ff0000"}} />{" "}
            <br />
            <FaAngleRight />
            <Link to="/">
              <span>Twitter</span>
            </Link>
            <FaTwitter style={{color: "#1da1f2"}} />
          </div>
          <div className="footer-item col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <h3>Shop Menu</h3>
            <FaAngleRight />
            <Link to="/">
              {" "}
              <span>Kennel</span> <br />{" "}
            </Link>

            <FaAngleRight />
            <Link to="/">
              {" "}
              <span>Food</span> <br />{" "}
            </Link>

            <FaAngleRight />
            <Link to="/">
              {" "}
              <span>Bag</span> <br />{" "}
            </Link>

            <FaAngleRight />
            <Link to="/">
              <span>Muzzle</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-coppyright">
      <div className="container">
        <div className="row">
          <div className="coppyright-left col-xl-6 col-lg-6 col-md-12">
            <p>
              Copyright © 2022 <Link to="/">PettSitter</Link> . All rights reserved.
            </p>
          </div>
          <div className="coppyright-right col-xl-6 col-lg-6">
            <Link to="/">
              <FaFacebookSquare style={{padding: "10px 13px", borderRadius: "50%"}} />
            </Link>
            <Link to="/">
              <FaYoutube />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <i id="backtop" className="fas fa-chevron-up"></i>
    </footer>
  );
};

export default Footer;
