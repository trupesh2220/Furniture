import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Slider.css'
import {IoIosArrowDropleft} from 'react-icons/io'
function Slider() {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    // dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    nav: true,
    autoplaySpeed:3000,
    // navText:[<IoIosArrowDropleft/>,<IoIosArrowDropleft/>],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div>
        <OwlCarousel
          className="owl-theme"
          
          
          {...options}
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
