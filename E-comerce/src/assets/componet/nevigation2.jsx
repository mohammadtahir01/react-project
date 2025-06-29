import "../css/nevigation2.css"
import Carousel from 'react-bootstrap/Carousel';
//image
import img1 from "../image/sliderImg.avif";
import img2 from "../image/sliderImg1.avif";
import img3 from "../image/sliderImg2.avif";


import  img5 from "../image/styleIcon.avif";


const NavSlider=()=>{

    return(
        <>
        <div id="nevi">
        <div>
            <img src={img5} alt="" />
        </div>

      <Carousel interval={2000} pause={false} controls={false} style={{borderRadius:"32px"}}>
      <Carousel.Item>
       <img src={img1} alt="logo" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={img2} alt="logo" />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={img3} alt="logo" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        </>
    )
}
export default NavSlider;