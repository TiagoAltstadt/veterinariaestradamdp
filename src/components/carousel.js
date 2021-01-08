import Carousel from 'react-bootstrap/Carousel'

import carousel1 from "../public/images/nico.jpg";
import carousel2 from "../public/images/cris.jpg";
import carousel3 from "../public/images/3.jpg";

    const title1 = 'Nico';
    const description1 = '';

    const title2 = 'Cris';
    const description2 = '';

    const title3 = 'Charly';
    const description3 = '';

function CarouselOK(){

return(
    <Carousel indicators="false" className="w-75 ml-auto mr-auto mt-2 ">
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3 className='homeCarouselTitle' >{title1}</h3>
            <p className='homeCarouselDescription' >{description1}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="First slide" />
          <Carousel.Caption>
            <h3 className='homeCarouselTitle' >{title2}</h3>
            <p className='homeCarouselDescription' >{description2}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="First slide" />
          <Carousel.Caption>
            <h3 className='homeCarouselTitle' >{title3}</h3>
            <p className='homeCarouselDescription' >{description3}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
);

}

export default CarouselOK;
