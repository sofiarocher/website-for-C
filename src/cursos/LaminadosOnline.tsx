import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import InfoCurso from "../components/InfoCurso";
import Navbar from "../components/Navbar";
import Resultados from "../components/Resultados";

function LaminadosOnline() {
  return (
    <div>
      <Navbar />
      <InfoCurso
        imgInfo=""
        altInfo="ola"
        title="Laminados franceses 100% basados en plantas"
        description="Soy emprendedora desde que tengo memoria. Con familia gastronómica, comencé a desarrollarme como pastelera vegana en mi adolescencia. Abuscas comenzar o seguir aprendiendo, te espero!Soy emprendedora desde que tengo memoria. Con familia gastronómica, comencé a desarrollarme como pastelera vegana en mi adolescencia. Abuscas comenzar o seguir aprendiendo, te espero!"
        buyLink=""
        price="42.000"
      />
      <FAQ />
      <Resultados />
      <Footer />
    </div>
  );
}

export default LaminadosOnline;
