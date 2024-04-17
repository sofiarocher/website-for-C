import  { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/galeria.css"

const PrevArrow = ({ onClick }: any) => (
    <button
      className="slick-prev slick-arrow"
      onClick={onClick}
      aria-label="Previous slide"
      type="button"
    >
      {"<"}
    </button>
  );
  
  const NextArrow = ({ onClick }: any) => (
    <button
      className="slick-next slick-arrow"
      onClick={onClick}
      aria-label="Next slide"
      type="button"
    >
      {">"} 
    </button>
  );

function Galeria() {
    const sliderRef = useRef(null);

    const slidesData = [
        {
            year: '2016',
            text: 'Primeras facturas veganas de Argentina',
            description: 'Lorem ipsum dolor sit similique obcaecati placeat veniam eos nesciunt molestiae esse dicta?'
        },
        {
            year: '2019',
            text: 'Primera cafetería vegana de Argentina',
            description: 'Descripción para la cafetería vegana...'
        },
        {
            year: '2020',
            text: 'Primera manteca vegana de Argentina',
            description: 'Descripción para la manteca vegana...'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className='p-2 mb-4 w-full sm:w-3/4 m-auto'>
            <Slider ref={sliderRef} {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className='!flex flex-col sm:flex-row items-center justify-center m-auto text-center overflow-x-hidden'>
                        <div className='bg-creme rounded-xl box-shadow text-brown text-center m-4 p-4 w-52 mb-8'>
                            <p className='font-extrabold'>{slide.year}</p>
                            <p className='font-medium'>{slide.text}</p>
                        </div>
                        <div>
                            <p className='text-center m-0 mb-4 hidden sm:flex sm:ml-8 w-80 sm:w-[450px]'>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Galeria;