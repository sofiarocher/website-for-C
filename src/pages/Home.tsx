import Page from "../components/Hero";
import bgImage from "../assets/bgImage.jpg";
import Counter from "../components/Counter";
import CardCourse from "../components/CardCourse";
import imgCourse from "../assets/imgCurso.webp";
import imgCourse2 from "../assets/imgCurso2.webp";
import CardFormacion from "../components/CardFormacion";
import Footer from "../components/common/Footer";
import Newsletter from "../components/Newsletter";
import Cam from "../assets/Cam.png";
import Results from "../components/Results";
import NewsletterModal from "../components/NewsletterModal";
import { useEffect, useState } from "react";
import SocialIcon from "../components/SocialIcon";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Page
        videoSrc={bgImage}
        title="La pastelería alternativa nunca fue tan fácil."
        description="Aprenderás todos los trucos para que tus postres sean más sabrosos y sencillos de hacer.¿Pastelería sin lácteos? Te enseñamos. ¿Pastelería vegana? Mi especialidad. ¿Sin gluten? También!. Ahorrá tiempo y dinero aprendiendo con Cam, sumate hoy!"
        buttonText="CURSOS DISPONIBLES"
        buttonLink="#servicesSection"
      />
      <Counter />
      <div className="bg-pink text-center pt-4 sm:py-12 text-brown">
        <p className="text-3xl font-bold mb-4">¿Quién soy?</p>
        <div className="sm:flex sm:flex-row sm:items-center sm:justify-center">
          <img
            src={Cam}
            className="bg-creme rounded-full w-48 h-48 object-cover mt-4 mx-auto sm:mx-0 sm:w-1/5 sm:h-auto sm:mr-4"
            alt="Cam Villalobos"
          />
          <div className="sm:w-1/4">
            <p className="font-bold text-2xl py-2">Camila Villalobos</p>
            <p className="px-4 mb-4 text-sm">
              A los 19 abrí mi propia pastelería vegana en Belgrano y mientras
              que atravesaba la pandemia cada día me íba enamorando más de este
              oficio. Por ánimo de mis clientes, comencé a enseñar lo que
              ofrecía en mi local y desde ahí, no paré. Hoy me describo como una
              apasionada de la pastelería alternativa, que ama formular nuevas
              recetas y transmitirlas de la mejor manera. Enseñar no solo es mi
              trabajo, sino que es mi pasión.
            </p>
            <p className="px-6 text-lg font-bold">
              Si buscas comenzar o seguir aprendiendo, ¡te espero!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-6 bg-pink pb-20" id="servicesSection">
        <p className="text-2xl sm:text-3xl text-brown font-bold py-4">
          Mis Servicios
        </p>
        <div className="sm:flex sm:flex-row items-center justify-center">
          <CardCourse
            title="Cursos Online"
            img={imgCourse2}
            infoLink="/cursos-online-pasteleria-vegana-sin-gluten"
          />
          <CardCourse
            title="Cursos Presenciales"
            img={imgCourse}
            infoLink="/cursos-presenciales-pasteleria-vegana-sin-gluten"
          />
        </div>
        <CardFormacion />
      </div>
      <Results />
      <Newsletter />
      <Footer />
      {modalOpen && <NewsletterModal closeModal={handleCloseModal} />}
      <SocialIcon />
    </div>
  );
}

export default Home;
