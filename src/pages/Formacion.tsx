import Footer from "../components/Footer"
import Page from "../components/Layout"
import Results from "../components/Resultados"
import SocialIcon from "../components/SocialIcon"
import bgImage from "../assets/bgImage.jpg"
import Vsl from "../components/Vsl"
import Testimonios from "../components/Testimonios"
import vsl from "../assets/bgvideo.mp4"



const testimoniosData = [
    {
      id: 1,
      descripcion: 'Con los cursos de vica di mis primeros pasos en la pastelería vegana! el primer presencial que hice en 2020, pre pandemia, es la base de mis recetas hoy, que me ayudan a crear mis mejores tortas.',
      nombre: 'Cami',
      puntaje: 5,
    },
    {
      id: 2,
      descripcion: 'Admiración y gratitud!. Esto es lo que me inspira Cami y todo el equipo de VICA. Agradezco su dedicación, buena vibra y la nobleza con que fui tratada.',
      nombre: 'Paulin',
      puntaje: 4.5,
    },
    {
      id: 3,
      descripcion: 'Me encantaron los cursos. Aprendí muchísimo y me sentí cómoda. Es lindo ver cómo las recetas son 100% creadas por ustedes y siempre priorizan una buena materia prima. Es excelente calidad y explican todo a la perfección.',
      nombre: 'Cande',
      puntaje: 5,
    },
    {
      id: 4,
      descripcion: 'Lo genial de lo online es que podes ver los videos todas las veces que quieras. También dan certificado al finalizar el curso, eso es clave. Me sirvió mucho para mi emprendimiento',
      nombre: 'Agustina',
      puntaje: 5,
    },
  ];

function Formacion() {
  return (
    <div>
         <Page 
            videoSrc={bgImage} 
            title="La pastelería vegana nunca fue tan fácil." 
            description="Aprenderás todos los trucos para que tus postres sean más sabrosos y sencillos de hacer. Ahorrá tiempo y dinero, sumate hoy!" 
            buttonText="CURSOS DISPONIBLES" />
        
       
        <Vsl title="Esta formación es para vos si..." video={vsl} />
        <Testimonios testimonios={testimoniosData} />
        <Results />
        <Footer />
        <SocialIcon />
    </div>
  )
}

export default Formacion