import Carousel from 'react-bootstrap/Carousel';
import black from './assets/black.jpeg'

function UncontrolledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={black}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={black}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={black}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledCarousel;