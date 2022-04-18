import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  let newDate = new Date();
  let date = newDate.getFullYear();
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h3>SBN Photography</h3>
                <p className="mt-4 ">
                  <small>One of the Best Photography Service</small>
                </p>

                <p className="mt-2">
                  <small>Shahed &copy; All rights reserved {date}</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <Link to="/home">
                    <li className="footer-menu">Home</li>
                  </Link>
                  <Link to="/gallery">
                    <li className="footer-menu">Gallery</li>
                  </Link>
                  <Link to="/blogs">
                    <li className="footer-menu">Blogs</li>
                  </Link>
                  <Link to="/about">
                    <li className="footer-menu"> About</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container ">
                <h3>Sign up for Booking</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <h5>+88 017 400 000 00</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p>
                      Sukrabad, Dhanmondi-32
                      <br /> Bangladesh, Dhaka-1207
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
