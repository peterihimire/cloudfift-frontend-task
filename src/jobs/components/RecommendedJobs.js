import React from "react";
import "./RecommendedJobs.css";
// import { Link } from "react-router-dom";
import JobSlide from "./JobSlide";
// import { FaLongArrowAltRight } from "react-icons/fa";

const RecommendedJobs = () => {
  return (
    <div className="recommended">
      {/* <h4>Recent</h4>
      <div className="recent-flex-start">
        <h4>recently added properties</h4>
      </div> */}
      <div className="title recommended-title-container">
        <h4>Recommended Jobs</h4>
      </div>
      <div className="">
        {/* <div className="more-flex-end">
          <Link to="/properties">
            <div className="more-arrow">
              <h4>Find more properties</h4>{" "}
              <span>{<FaLongArrowAltRight />}</span>
            </div>
          </Link>
        </div> */}

        <JobSlide />
      </div>
    </div>
  );
};

export default RecommendedJobs;
