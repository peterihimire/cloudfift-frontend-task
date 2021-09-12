import React from "react";
import Navbar from "../../shared/components/navigation/Navbar";
import Banner from "../../shared/components/Banner";
import RecommendedJobs from "../components/RecommendedJobs";
import HowItWorks from "../components/HowItWorks";
import PopularCategories from "../components/PopularCategories";
import CompaniesNetwork from "../components/CompaniesNetwork";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import Footer from "../../shared/components/Footer";

const HomePage = (props) => {
  console.log(props);

  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <Banner />
        <RecommendedJobs />
        <div className="main-content">
          <div className="main-content-container">
            <HowItWorks />
            <PopularCategories />
          </div>
        </div>
        <div className="companies-network-main-content">
          <div className="main-content-container">
            <CompaniesNetwork />
          </div>
        </div>
        <div className="main-content">
          <div className="main-content-container">
            <Testimonials />
            <GetStarted />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
