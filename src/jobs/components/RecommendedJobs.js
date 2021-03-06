import React from "react";
import "./RecommendedJobs.css";
// import { Link } from "react-router-dom";
import JobSlide from "./JobSlide";
// import { FaLongArrowAltRight } from "react-icons/fa";

const RecommendedJobs = () => {
  return (
    <div className="recommended">
      <div className="title recommended-title-container">
        <h4>Recommended Jobs</h4>
      </div>
      <div className="">
        <JobSlide />
      </div>
    </div>
  );
};

export default RecommendedJobs;
