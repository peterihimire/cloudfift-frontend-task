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
          <div className="banner-right visible-xs visible-md hidden-xl">
            <div className="banner-img-div">
              <img src={headerImg} alt="hero" />
            </div>
          </div>
          <div className="banner-left">
            <h1>
              Find a <span>job</span> easily
            </h1>
            <p>
              With verified, up-to-date job listings directly from employer
              websites, we create a premium experience for job seekers,
              employers, and data seekers alike.
            </p>
            <div className="form-div">
              <form>
                <div className="form-group">
                  <div className="input-no-icon">
                    <input
                      type="text"
                      placeholder="Enter keywords, skill, interest"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="input-with-icon">
                    <img src={locationIcon} alt=" " className="location-icon" />
                    <input
                      type="text"
                      placeholder="Location"
                      id="password"
                      name="password"
                    />
                  </div>
                  <button className="banner-search-btn">
                    <img src={searchIcon} alt="" />
                  </button>
                </div>
              </form>
            </div>
            <div className="trusted-companies-div">
              <p>Trusted by:</p>
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

          <div className="banner-right hidden-md visible-xl hidden-xs">
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
