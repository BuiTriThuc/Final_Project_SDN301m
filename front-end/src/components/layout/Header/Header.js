import React, { useEffect, useState } from "react";
import logo from "../../../images/Logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const [click, setClick] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.user);
  console.log("Check isAuthenticated: ", isAuthenticated);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="header-left col-xl-8 col-lg-8 col-3">
            <div className="header-logo col-lg-1 col-sm-3">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            {/*  Start Header nav */}
            <div className="header-nav col-lg-11">
              <nav className="navbar d-none d-md-block">
                <ul className="nav-content">
                  <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">
                      Services
                      <FaAngleDown />
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/spa">Spa & Grooming</Link>
                      </li>
                      <li>
                        <Link to="/relax">Relax</Link>
                      </li>
                      <li>
                        <Link to="/wash">Wash</Link>
                      </li>
                      <li>
                        <Link to="/hair">Hair</Link>
                      </li>
                      <li>
                        <Link to="/nail">Nail</Link>
                      </li>
                      <li>
                        <Link to="/guide">Pet Guide</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/products">Shop</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* End header nav */}

          <div className="header-right col-xl-4 col-lg-4 col-9">
            <div className="header-right-item col-sm-3">
              <Link to="/search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>

              {isAuthenticated ? null : (
                <li className="nav-login">
                  <Link to="/login">Login</Link>
                </li>
              )}

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header" onClick={handleClick}>
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    Pet Sitter
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-toggle="offcanvas"
                    aria-label="Close"
                    onClick={closeMenu}
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav active justify-content-end flex-grow-1">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                        style={{ marginTop: "20px" }}
                      >
                        <i className="fa-solid fa-house-chimney-window"></i>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/lost-found">
                        <i className="fa-solid fa-magnifying-glass-location"></i>
                        Lost&Found
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">
                        <i className="fa-solid fa-magnifying-glass-location"></i>
                        Shop
                      </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to=""
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-hand-holding-heart"></i>
                        Services
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="offcanvasNavbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="/spa">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                            Spa & Grooming
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/relax">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                            Relax
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/wash">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                            Wash
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/hair">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                            Hair
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/nail">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                            Nail
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/guide">
                            <i className="fa-solid fa-handshake-angle"></i>
                            Pet Guide
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <i className="fa-solid fa-handshake-simple"></i>
                        Contact
                      </Link>
                      {isAuthenticated ? null : (
                        <Link className="nav-link" to="/login">
                          <i className="fa-solid fa-right-to-bracket"></i>
                          Login
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              {/* <Link to="/report" className="btn-report">
                REPORT PET
              </Link> */}
              <Link to="/cart">
                <i className="fas fa-shopping-cart cart-icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
