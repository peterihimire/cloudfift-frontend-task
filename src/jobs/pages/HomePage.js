import React from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/navigation/Navbar";
import Banner from "../../shared/components/Banner";
// import HomeAbout from "../../properties/components/HomeAbout";
import HomeRecent from "../components/HomeRecent";
// import HomeHow from "../../properties/components/HomeHow";
import HomeTestimonials from "../components/HomeTestimonials";
// import HomePopularCities from "../../properties/components/HomePopularCities";

const HomePage = (props) => {
  console.log(props);

  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <Banner />
        <HomeRecent />
        <div className="main-content">
          <div className="main-content-container">
            {/* <HomeAbout />
            <HomeHow />
            <HomePopularCities /> */}

            <HomeTestimonials />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
