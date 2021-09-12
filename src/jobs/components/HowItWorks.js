import React from "react";
import "./HowItWorks.css";
import homeImg from "../../assets/top-workers.svg";
import greenCheck from "../../assets/greencheck-round.svg";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="how-it-works-content">
        <div className="how-it-works-img-container">
          <img src={homeImg} alt="home-img" />
        </div>
        <div className="how-it-works-text-container">
          <div className="how-it-works-heading">
            <div className="title">
              <h4>How It Works</h4>
            </div>
            <p>
              Getajob helps you find the right job easily. Getajob helps you
              find the right job easily. Getajob helps you find the right job
              easily.
            </p>
          </div>

          <div className="howitworks-item">
            <div className="howitworks-item-title">
              <div>
                <img src={greenCheck} alt="" />
              </div>
              <div className="">
                <h5>Search Jobs</h5>
              </div>
            </div>
            <p>
              We have jobs in the most popular industries and with top
              companies. Plus, you can create alerts so you never miss a job
              opportunity.
            </p>
          </div>
          <div className="howitworks-item">
            <div className="howitworks-item-title">
              <div>
                <img src={greenCheck} alt="" />
              </div>
              <div className="">
                <h5>Create a Profile and Get Noticed</h5>
              </div>
            </div>
            <p>
              Create a profile to showcase your skills and experience so
              recruiters can find you. Upload your CV so you can apply for jobs
              quickly and easily.
            </p>
          </div>
          <div className="howitworks-item">
            <div className="howitworks-item-title">
              <div>
                <img src={greenCheck} alt="" />
              </div>
              <div className="">
                <h5>Apply for jobs</h5>
              </div>
            </div>
            <p>
              Find the training you need to improve your skills, or visit our
              Career Center for tips and advice to build your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
