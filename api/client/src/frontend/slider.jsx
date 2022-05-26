import React, {Component} from "react";
import Slider from "react-slick";
import './slider.css'
import showcaseImageOne from '../frontend/showcasImageOne.jpg'
import showcaseImageTwo from '../frontend/showcaseImageTwo.jpg'
import showcaseImageFive from '../frontend/showcaseImageFive.jpg'
import { BluetoothSearchingOutlined, ViewListOutlined } from "@material-ui/icons";
import { useState } from "react";
import {HashLink as Hlink } from 'react-router-hash-link'






function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", marginRight: 30, background:"grey", width:40, height:40, justifyContent:"center", alignItems:"center", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", marginLeft: 30, background:"grey", width:40, height:40, justifyContent:"center", alignItems:"center", }}
      onClick={onClick}
    />

  );
}

function SimpleSlider()  {

  
   
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)



    return (
  <div className="container">

      <div className="showcase">
        <Slider {...settings}>

        <div>
          <div className="image">
              {/* <img src={showcaseImageFive} alt="" /> */}
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm0yMDhiYXRjaDgtMjUxLW5hcC10d2l0dGVyaGVhZGVyLTAxLmpwZw.jpg?s=4xTP6qGTJYm0eW5jpgWLBGFmUFKcMVizNgKoLVM35x8" alt="j" />

             </div>
          </div>

          <div>
          <div className="image">
              {/* <img src={showcaseImageFive} alt="" /> */}
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm0yMDhiYXRjaDE0LXdhbi0wNS1sLmpwZw.jpg?s=mGNc-pFOoHDAXQ-TbLIrC0ems3vEYiRjeSZ2W1IMiJY" alt="j" />

             </div>
          </div>
        </Slider>
      </div>

      {/* Mobile View */}
      <div className="mobileShowCase">
        <div className="mobileShowCase-container">
          <h1><span style={{color:"orangered"}}>40%</span> SALE OFF</h1>
          <h1>END OF YEAR DEALS</h1>
          <button><Hlink to="#latestShoes" style={{color: "black"}}>SHOP NOW</Hlink></button>
        </div>
      </div>
  </div>
    );
    
    }


    export default SimpleSlider;
