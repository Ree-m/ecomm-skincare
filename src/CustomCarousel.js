
import React from 'react';
import './assets/css/CustomCarousel.css'
//Install and import the library
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import black from './assets/black.jpeg';
import pink from "./assets/images/cosrx-snailmucin.jpg"
import Product from './Product.js';


function CustomCarousel() {

  //Responsiveness 
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };


  //The carousel items 
  const items = [
    <div className="item">

      <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={''} />

    </div>,
    <div className="item">
      <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

    </div>,
    <div className="item">
      <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

    </div>,
    <div className="item">
      <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

    </div>,
    <div className="item">
      <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

    </div>,
    <div className="item">
      <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

    </div>,
    <div className="item">
      <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

    </div>,
     <div className="item">
     <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

  </div>,
   <div className="item">
   <Product imgSrc={pink} imgAlt={"Cosrx toner"} brandName={"Cosrx"} productName={"Cosrx toner"} price={'$15'} />

</div>,




  ];


  return (
    <div className="customCarousel">

      <div className="customCarouselTitle">
        <h1>Best</h1>
        <p>Best items of the month</p>

      </div>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite={true}


      />
    </div>
  );
}

export default CustomCarousel;