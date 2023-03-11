import React, { Fragment } from "react";
import Iframe from "react-iframe";
import "./Contact.css";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <Fragment>
      <MetaData title="Contact" />
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header" style={{ paddingBottom: "30px" }}>
            <h2>Contact</h2>
            <p>
              Need Help? <span>Contact Us</span>
            </p>
          </div>

          <div className="mb-3">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6099414916575!2d106.8076943149421!3d10.841132860960094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1655576097587!5m2!1svi!2s"
              width="1300"
              height="450"
              styles={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="icon bi bi-map flex-shrink-0"></i>

                <div>
                  <h3>Our Address</h3>
                  <p>
                    Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức,
                    Thành phố Hồ Chí Minh 700000
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="icon bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>
                    pettsitter@gmail.com <br />
                    service@gmail.com
                  </p>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="icon bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>
                    1800-123-4567 <br />
                    +91 987-654-3210
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="icon bi bi-share flex-shrink-0"></i>
                <div>
                  <h3>Opening Hours</h3>
                  <div>
                    <strong>Mon-Sat:</strong> 11AM - 23PM;
                    <strong>Sunday:</strong> Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="php-email-form p-3 p-md-4">
            <div className="row">
              <div className="col-xl-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-xl-6 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
