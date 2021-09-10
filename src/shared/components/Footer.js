import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-one">
          <div className="footer-item">
            <h4>information</h4>
            <ul>
              <li>
                <a href="/">Become a Driver</a>
              </li>
              <li>
                <a href="/">Earnings</a>
              </li>
              <li>
                <a href="/">Cities</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>information</h4>
            <ul>
              <li>
                <a href="/">Become a Driver</a>
              </li>
              <li>
                <a href="/">Earnings</a>
              </li>
              <li>
                <a href="/">Cities</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>job seekers</h4>
            <ul>
              <li>
                <a href="/">Sign up to ride</a>
              </li>
              <li>
                <a href="/">Fare Estimate</a>
              </li>
              <li>
                <a href="/">Lyft Pink</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>employers</h4>
            <ul>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">LyftUp</a>
              </li>
              <li>
                <a href="/">Business</a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h4>social media</h4>
            <ul>
              <div className="rider-lyft-app-div">
                <div className="rider-lyft-app">
                  {/* <a href="/">Lyft driver app</a> */}
                </div>
              </div>
              <div className="rider-lyft-app-div">
                <div className="rider-lyft-app">
                  {/* <a href="/">Lyft rider app</a> */}
                </div>
              </div>
              <div className="rider-lyft-app-div">
                <div className="rider-lyft-app">
                  {/* <a href="/">Ride on web</a> */}
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div className="footer-two">
          <p>&copy; Copyright Get-A-Job RMS 2019, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
