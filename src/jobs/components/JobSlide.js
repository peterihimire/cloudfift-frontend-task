import React from "react";
import "./JobSlide.css";
import ItemsCarousel from "react-items-carousel";
import JobItem from "./JobItem";
import jobs from "../../job-items";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

const JobSlide = () => {
  console.log(jobs);
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 0;
  return (
    <div className="job-slide">
      <div className="job-slide-container">
        {/* FOR LAPTOPS */}
        <div className="hidden-xs  hidden-md visible-xl carousel-div">
          <div className="carousel">
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                freeScrolling={true}
                outsideChevron={false}
                leftChevron={
                  <button className="chev-btn">
                    <img src={arrowLeft} alt="" />
                  </button>
                }
                rightChevron={
                  <button className="chev-btn">
                    <img src={arrowRight} alt="" />
                  </button>
                }
                chevronWidth={chevronWidth}
                disableSwipe={true}
                gutter={20}
                slidesToScroll={1}
                firstAndLastGutter={true}
                showSlither={true}
              >
                {jobs.map((job) => {
                  return (
                    <div className="one-slide">
                      <JobItem jobs={job} key={job.id} />
                    </div>
                  );
                })}
              </ItemsCarousel>
            </div>
          </div>
        </div>
        {/* FOR TABLETS */}
        <div className="hidden-xs visible-md ">
          <div className="carousel">
            <div>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={2}
                gutter={20}
                freeScrolling={true}
                showSlither={true}
                firstAndLastGutter={true}
                outsideChevron={false}
                leftChevron={
                  <button className="chev-btn">
                    <img src={arrowLeft} alt="" />
                  </button>
                }
                rightChevron={
                  <button className="chev-btn">
                    <img src={arrowRight} alt="" />
                  </button>
                }
                chevronWidth={chevronWidth}
                // infiniteLoop={true}
              >
                {jobs.map((job) => {
                  return (
                    <div className="one-slide" key={job.id}>
                      <JobItem jobs={job} key={job.id} />
                    </div>
                  );
                })}
              </ItemsCarousel>
            </div>
          </div>
        </div>
        {/* FOR PHONES */}
        <div className="visible-xs hidden-md ">
          <div className="carousel">
            <div>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={10}
                freeScrolling={true}
                showSlither={true}
                firstAndLastGutter={true}
                outsideChevron={false}
                leftChevron={
                  <button className="chev-btn">
                    <img src={arrowLeft} alt="" />
                  </button>
                }
                rightChevron={
                  <button className="chev-btn">
                    <img src={arrowRight} alt="" />
                  </button>
                }
                chevronWidth={chevronWidth}
                // infiniteLoop={true}
              >
                {jobs.map((job) => {
                  return (
                    <div className="one-slide">
                      <JobItem jobs={job} key={job.id} />
                    </div>
                  );
                })}
              </ItemsCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSlide;
