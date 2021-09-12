import React from "react";
import "./PopularCategories.css";
// import { FaBuilding, FaSearch, FaList } from "react-icons/fa";
import oilIcon from "../../assets/oil-and-gas.svg";

const PopularCategories = () => {
  return (
    <div className="popular">
      <div className="popular-heading">
        <div className="title">
          <h4>Popular Categories</h4>
        </div>
      </div>
      <div className="popular-content-logo">
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <h5>register</h5>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <h5>create property</h5>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <h5>search property</h5>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <h5>register</h5>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <h5>create property</h5>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <h5>search property</h5>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <h5>register</h5>
            <p>(10 new jobs)</p>
          </div>
        </div>
        <div className="popular-content">
          <div className="popular-logo">
            <img src={oilIcon} alt="" />
          </div>
          <div className="popular-text">
            <h5>create property</h5>
            <p>(10 new jobs)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
