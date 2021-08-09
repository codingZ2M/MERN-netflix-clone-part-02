import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import React from 'react'

const ImageSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return (
           <Carossel {...settings} >
              <Wrap>
                <a>
                    <img src="/images/home_slider_images01.jpg" alt="" />
                 </a>
             </Wrap>

            <Wrap>
                <a>
                     <img src="/images/home_slider_images02.jpg" alt="" />
                 </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/home_slider_images03.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/home_slider_images04.jpg" alt="" />
                </a>
            </Wrap>
        </Carossel>
       
    )
}

export default ImageSlider;

const Carossel = styled(Slider)`
    ul li button {
        &:before {
          font-size: 10px;
          color: #f9f9f9;
       }
  }
  li.slick-active button {
    &:before {
        color: white;
    }
}
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;  
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
        img {
             width: 100%;
             height: 100%;
            }
    &:hover {
      padding: 0;
      border: 4px solid #f9f9f9;
      transition-duration: 300ms;
    }
  }
`;
