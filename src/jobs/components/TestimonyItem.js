import React from "react";
import "./TestimonyItem.css";
import quoteIcon from "../../assets/quote-icon.svg";
// import Card from "../../shared/components/uielements/Card";

const TestimonyItem = (props) => {
  console.log(props);
  const { testimonials } = props;
  console.log(testimonials);
  return (
    // <Card className="testimonials-card">
    <div className="testimony-content">
      <div className="testimony-img">
        <img src={testimonials.image} alt="people" />
      </div>
      <div className="testimony-content-text">
        <div className="quote-div">
          <img src={quoteIcon} alt="" />
        </div>

        <div className="testimony-main-div">
          <div className="testimony-main-text">
            <p>{testimonials.testimony}</p>
          </div>
          <div className="testimony-name">
            <p>{testimonials.name}</p>
          </div>
          <div className="testimony-role">
            <p>{testimonials.role}</p>
          </div>
        </div>
        {/* <div className=""></div> */}
      </div>
    </div>
    // </Card>
  );
};

export default TestimonyItem;
