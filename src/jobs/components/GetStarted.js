import React from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";
// import LadySmile from "../../assets/lady-smile.svg";

const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="get-started-content">
        <h1>Get a Job you actually like</h1>
        <p>Create an account and start applying</p>
        <Link to="/">
          <button className="btn btn-bigger get-started-btn">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
