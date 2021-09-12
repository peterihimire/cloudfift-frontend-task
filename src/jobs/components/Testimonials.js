import React, { Component } from "react";
import "./Testimonials.css";
// NOTE react-slick and slick-carousel are needed for the react-slick slider to work
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonyItem from "./TestimonyItem";
import testimonies from "../../testimonial-items";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 4000,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="testimonials">
        <div className="title testimonials-title">
          <h4 className="">What are our customers saying</h4>
        </div>
        <div className="testimonial-slider-container">
          <div className="slick-btn-container" style={{ textAlign: "right" }}>
            <button className="chev-btn testimony-chev" onClick={this.previous}>
              <FaChevronLeft className="arrow-icon" />
            </button>
            <button className="chev-btn testimony-chev" onClick={this.next}>
              <FaChevronRight className="arrow-icon" />
            </button>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {testimonies.map((testimony) => {
              console.log(testimony);
              return (
                <TestimonyItem key={testimony.id} testimonials={testimony} />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Testimonials;
