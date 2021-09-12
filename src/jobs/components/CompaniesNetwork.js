import React from "react";
import "./CompaniesNetwork.css";
import { Link } from "react-router-dom";
import homeImg from "../../assets/group-of-companies.svg";
import { FaArrowRight } from "react-icons/fa";

const CompaniesNetwork = () => {
  return (
    <div className="companies-network">
      <div className="companies-network-content">
        <div className="companies-network-text-container">
          <div className="title">
            <h4>Over 1000+ jobs from top companies in our network</h4>
          </div>
          <p>
            Every day we index millions of jobs directly from employer websites.
            We’re committed to accurate, high-quality jobs so you won’t find
            old, duplicated, or spammy listings here.
          </p>
          <p>
            Organize and automate your job search while at home or on the go.
            We’ll deliver new, relevant jobs of interest straight to your inbox.
          </p>
          <div className="">
            <Link to="/" className="learn-more">
              learn more{" "}
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="companies-network-img-container">
          <img src={homeImg} alt="home-img" />
        </div>
      </div>
    </div>
  );
};

export default CompaniesNetwork;
