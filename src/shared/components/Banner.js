import React from "react";
import "./Banner.css";
// import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-left">
            <h1>Find a job easily</h1>
            <p>
            With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.
            </p>
            {/* <button className="btn btn-bigger">
              <Link to="/property/new">add property</Link>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
