import React from "react";
import "./PropertySlide.css";
import ItemsCarousel from "react-items-carousel";
import PropertyItem from "../components/PropertyItem";
import properties from "../../property-items";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const PropertySlide = () => {
  console.log(properties);
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 0;
  return (
    <div className="property-slide">
      <div className="property-slide-container">
        {/* FOR LAPTOPS */}
        <div className="hidden-xs  hidden-md visible-xl carousel-div">
          <div className="carousel">
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3.6}
                // gutter={10}
                freeScrolling={true}
                outsideChevron={false}
                leftChevron={
                  <button className="chev-btn">
                    {<FaChevronLeft className="arrow-icon" />}
                  </button>
                }
                rightChevron={
                  <button className="chev-btn">
                    {<FaChevronRight className="arrow-icon" />}
                  </button>
                }
                chevronWidth={chevronWidth}
                // showSlither={true}
                disableSwipe={true}
                // infiniteLoop={true}

                // requestToChangeActive={setActiveItemIndex}
                // activeItemIndex={activeItemIndex}
                // numberOfCards={2.2}
                gutter={5}
                slidesToScroll={1}
                firstAndLastGutter={true}
                // freeScrolling={true}
                // outsideChevron
                showSlither={true}
              >
                {properties.map((property) => {
                  return (
                    <div className="one-slide">
                      <PropertyItem properties={property} key={property.id} />
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
                numberOfCards={3}
                gutter={20}
                freeScrolling={true}
                outsideChevron={true}
                chevronWidth={chevronWidth}
                showSlither={true}

                // infiniteLoop={true}
              >
                {properties.map((property) => {
                  return (
                    <div className="one-slide" key={property.id}>
                      <PropertyItem properties={property} key={property.id} />
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
                gutter={20}
                freeScrolling={true}
                outsideChevron={true}
                chevronWidth={chevronWidth}
                showSlither={true}

                // infiniteLoop={true}
              >
                {properties.map((property) => {
                  return (
                    <div className="one-slide">
                      <PropertyItem properties={property} key={property.id} />
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

export default PropertySlide;
