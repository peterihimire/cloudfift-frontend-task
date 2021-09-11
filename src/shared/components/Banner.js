import React from "react";
import "./Banner.css";
import headerImg from "../../assets/hero-image.svg";
// import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-left">
            <h1>Find a job easily</h1>
            <p>
              With verified, up-to-date job listings directly from employer
              websites, we create a premium experience for job seekers,
              employers, and data seekers alike.
            </p>
          </div>
          <div className="banner-right">
            <div className="banner-img-div">
              <img src={headerImg} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Banner = () => {
//   return (
//     <div className="banner">
//       <div className="banner-container">
//         <div className="left-grid">
//           <div className="grid-text">
//             <h1>Find a job easily</h1>
//             <p>
//               With verified, up-to-date job listings directly from employer
//               websites, we create a premium experience for job seekers,
//               employers, and data seekers alike.
//             </p>
//           </div>
//           <div className="btn-container"></div>
//         </div>
//         <div className="right-grid"></div>
//       </div>
//     </div>
//   );
// };

export default Banner;
