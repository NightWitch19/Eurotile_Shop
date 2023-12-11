import Carousel from 'react-bootstrap/Carousel';

function Carouselimg() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className='bg'
          src={"./img/bg1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='sale'>Более 20 ЛЕТ на рынке!</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
           className='bg'
           src={"./img/3d.jpg"}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='sale'>3D-дизайн БЕСПЛАТНО </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className='bg'
          src={"./img/bg3.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='sale'>Гибкая система скидок! </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselimg;