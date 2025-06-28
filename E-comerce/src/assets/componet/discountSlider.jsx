import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/simpleslider.css"

//img part
import img1 from "../image/discount6.avif";
import img2 from "../image/discount7.avif";
import img3 from "../image/discount8.avif";
import img4 from "../image/discount9.avif";
import img5 from "../image/discount10.avif";
import img6 from "../image/discount11.avif";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 2000, 
  };
  return (
    <Slider {...settings} className="discount-slider">
      <div>
        <img src={img1} alt="logo" />
      </div>
      <div>
        <img src={img2} alt="logo" />
      </div>
      <div>
        <img src={img3} alt="logo" />
      </div>
      <div>
        <img src={img4} alt="logo" />
      </div>
      <div>
        <img src={img5} alt="" />
      </div>
      <div>
        <img src={img6} alt="" />
      </div>
    </Slider>
  );
}