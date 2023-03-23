import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slider() {
  return (
    <>
      <div>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          items={1}
          // dotsEach={"6"}
          autoPlay={true}
        >
          <div class="item">
            <div>
              <img src={require("../../../assets/asset 38.jpeg")} alt="" />
            </div>
          </div>
          <div class="item">
            <div>
              <img src={require("../../../assets/asset 38.jpeg")} alt="" />
            </div>
          </div>
          <div class="item">
            <div>
              <img src={require("../../../assets/asset 38.jpeg")} alt="" />
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}

export default Slider;
