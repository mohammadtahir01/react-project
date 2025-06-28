// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../image/image1.jpg'
import img2 from '../image/ladka2.jpg'
import img3 from '../image/image3.jpg'
import img4 from '../image/image4.jpg'
import img5 from '../image/image5.png'
import img7 from '../image/image7.jpg'
import img8 from '../image/image8.jpg'
import img9 from '../image/image9.jpg'
import img10 from '../image/ladka1.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../css/navigation3.css';

// import required modules
import { Navigation } from 'swiper/modules';

function Navigation2() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} 
        className="mySwiper">
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Navigation2;
