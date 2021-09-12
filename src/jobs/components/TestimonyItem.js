import React from "react";
import "./TestimonyItem.css";
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
          <p>{testimonials.testimony}</p>
          <div className="testimony-b">
            <b>{testimonials.name}</b>
          </div>
        </div>
      </div>
    // </Card>
  );
};

export default TestimonyItem;
