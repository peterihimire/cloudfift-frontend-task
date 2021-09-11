import React from "react";
import "./CompaniesNetwork.css";
import homeImg from "../../assets/group-of-companies.svg";

const CompaniesNetwork = () => {
  return (
    <div className="group-about">
      <div className="group-about-content">
        <div className="home-about-text-container">
          <p>
            When the time to invest on home comes dont fail to invest with
            bnk-homes and real-estate. we offer competitive home price offer and
            sales that you will always find attractive. Hurry up now and grab
            your best offer now.
          </p>
          <p>
            Our homes and real-estate are located in various part of Nigeria,
            from Benin, Lagos , Imo , Port-Harcourt and Abuja. And they are
            located in the urban and sub-urban areas of the state. Places youll
            always fall in love with once you see it .
          </p>
          <div className="">
            <button className="btn btn-bigger">learn more</button>
          </div>
        </div>
        <div className="home-about-img-container">
          <img src={homeImg} alt="home-img" />
        </div>
      </div>
    </div>
  );
};

export default CompaniesNetwork;
