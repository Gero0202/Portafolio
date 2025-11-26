'use client'
import React from "react";
import Slider from "react-slick";
import styles from "@/app/styles/certificades.module.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, 
    autoplaySpeed: 3000,
  };

  const images = [
    "./certificado1.png",
    "./backend1.png",
    "./backend2.png",
    "./backend3.png",
    "./JavaScript.png",
    "./reactjs.png",
    "./Desarrollo-web.png",
    "./Desarrollo-web-2.png",
    "./ciberseguridad.png",
    "./googleCertificado.png",
    "./Marketing-Coder.png"
  ];

  return (
    <div className={styles["slider-container"]}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} className={styles["slider-image"]} />
          </div>
        ))}
      </Slider>
    </div>
  );
}