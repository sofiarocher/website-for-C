import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonios.css"

type Testimonio = {
  id: any;
  descripcion: string;
  nombre: string;
  puntaje: number;
};

interface TestimoniosProps {
  testimonios: Testimonio[];
}

const Testimonios: React.FC<TestimoniosProps> = ({ testimonios }) => {
  // Configuración de react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    className: 'center',
    centerPadding: '60px',
    adaptiveHeight: true,
  };

  return (
    <div className='bg-pink pt-4'>
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-center text-3xl font-bold my-6 text-brown">Testimonios</h2>
        <Slider {...settings} >
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="outline-none focus:outline-none py-2">
              <div className="bg-white p-6 shadow-md rounded-lg mx-2">
                <p className="text-gray-600 text-base mb-4">
                  {testimonio.descripcion}
                </p>
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {testimonio.nombre}
                </h5>
                  <div className="flex">
                      <div className="star-rating">
                          {'★'.repeat(testimonio.puntaje)}
                      </div>
                      <div className="star-rating gray">
                          {'★'.repeat(5 - testimonio.puntaje)}
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonios;
