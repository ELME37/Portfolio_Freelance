import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { quicksand } from "@/utils/fonts";

import { Root, Image, ContainerSlide, ContainerFeedback, Feedback, Name, Position, ActiveDot, CustomDot} from './carousel.styled';

export default function Carousel ({ slides }) {
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "linear",
        arrows: false,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
            }
          }
        ],
        customPaging: i => (
          i === activeDotIndex ? <ActiveDot /> : <CustomDot />
        ),
        beforeChange: (current, next) => {
          setActiveDotIndex(next);
        }
      }

    return (
        <Root >
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <ContainerSlide key={index}>
                      <ContainerFeedback>
                        <Image src="/assets/images/quote-right-solid.png" alt="icon" />
                        <Feedback className={quicksand.variable}>{slide.recommendation}</Feedback>
                        <Name className={quicksand.variable}>{slide.firstName}</Name>
                        <Position className={quicksand.variable}>{slide.position}</Position>
                      </ContainerFeedback>
                    </ContainerSlide>
                ))}
            </Slider>
        </Root>
    );
};