import React, { useState } from "react";

export default function Carousal() {
  const [activeIndex, setActiveIndex] = useState(false);
  const [animating, setAnimating] = useState(true);
  //   const car = document.getElementsByTagName("iframe");
  //   car.onClick = { setSlide };
  //   console.log("this is here", car);
  console.log("this is here", animating);
  function setSlide() {
    console.log("i dey her");
    setAnimating(!animating);
  }
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride={animating ? "carousel" : ""}
        // data-keyboard={true}
        data-pause="hover"
        onClick={setSlide}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" onClick={setSlide}>
          <div className="carousel-item active">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/QaORv2R7ZXs"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item" onClick={setSlide}>
            <iframe
              onClick={setSlide}
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/MBbb45rAqf0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/oRitLHoS9Io"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
