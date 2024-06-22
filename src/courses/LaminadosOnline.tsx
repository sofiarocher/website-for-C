import InfoCurso from "../components/CourseInfo";
import Faq from "../components/FAQ";
import Resultados from "../components/Results";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

function LaminadosOnline() {
  return (
    <div>
      <Navbar />
      <InfoCurso
        imgInfo=""
        altInfo="ola"
        title="Laminados franceses 100% basados en plantas"
        description="Soy emprendedora desde que tengo memoria. Con familia gastronómica, comencé a desarrollarme como pastelera vegana en mi adolescencia. Abuscas comenzar o seguir aprendiendo, te espero!Soy emprendedora desde que tengo memoria. Con familia gastronómica, comencé a desarrollarme como pastelera vegana en mi adolescencia. Abuscas comenzar o seguir aprendiendo, te espero!"
        buyLink="/"
        price="42.000"
      />
      <Faq />
      <Resultados />
      <Footer />
    </div>
  );
}

export default LaminadosOnline;
