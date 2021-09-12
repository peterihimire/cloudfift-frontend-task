import React from "react";
import "./JobItem.css";
import Card from "../../shared/components/uielements/Card";
import "./JobItem.css";
// import { Link } from "react-router-dom";
// import { FaBed, FaBath, FaInfo, FaTrash, FaMapMarker } from "react-icons/fa";
// import imgProperty from "../../assets/property-1.jpg";

const JobItem = (props) => {
  const { jobs } = props;
  console.log(props);
  console.log(jobs);
  console.log(jobs.imagez);
  return (
    <Card className="job-card">
      <article className="job">
        <div className="job-item-type">
          <p>{jobs.type}</p>
        </div>
        <div className="job-item-upper">
          <div className="job-item-img">
            <img src={jobs.image} alt="home" />
          </div>
          <div>
            <div>{jobs.role}</div>
          </div>
        </div>
        <div className="job-item-lower">
          <div>
            <div>{jobs.company}</div>
          </div>
          <div className="job-item-action">
            <div>{jobs.location}</div>
            <div>
              <button>apply</button>
            </div>
          </div>
        </div>
      </article>
    </Card>
  );
};

export default JobItem;
