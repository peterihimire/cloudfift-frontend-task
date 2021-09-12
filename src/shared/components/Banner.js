import React from "react";
import "./Banner.css";
import headerImg from "../../assets/hero-image.svg";
import paystack from "../../assets/paystack-removebg-preview.svg";
import google from "../../assets/google-removebg-preview.svg";
import kpmg from "../../assets/kpmg-removebg-preview.svg";
import locationIcon from "../../assets/location-icon.svg";
import searchIcon from "../../assets/search-icon.svg";

// import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-left">
            <h1>Find a job easily</h1>
            <p>
              With verified, up-to-date job listings directly from employer
              websites, we create a premium experience for job seekers,
              employers, and data seekers alike.
            </p>
            <div className="form-div">
              <form>
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type="text"
                      placeholder="Enter keywords,skill,interest"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="input-with-icon">
                    {/* <i className="fas fa-key"></i> */}
                    <img src={locationIcon} alt=" " className="location-icon" />
                    <input
                      type="text"
                      placeholder="Location"
                      id="password"
                      name="password"
                    />
                    {/* <i className="fas fa-eye"></i> */}
                    {/* <FaSearch className="search-icon" /> */}
                  </div>
                  <button>
                    <img src={searchIcon} alt="" />
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h4>Trusted by:</h4>
              <div className="trusted-companies">
                <div className="trusted-company">
                  <img src={paystack} alt="" />
                </div>
                <div className="trusted-company">
                  <img src={google} alt="" />
                </div>
                <div className="trusted-company">
                  <img src={kpmg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="banner-right">
            <div className="banner-img-div">
              <img src={headerImg} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
