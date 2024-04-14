import Page from "../components/Layout"
import bgImage from "../assets/bgImage.jpg"
import CardCourse from "../components/CardCurso"
import imgCourse from "../assets/imgCurso.webp"
import imgCourse2 from "../assets/imgCurso2.webp"
import imgCourse3 from "../assets/imgCurso3.webp"
import Vsl from "../components/Vsl"
import Footer from "../components/Footer"
import vsl from "../assets/bgvideo.mp4"
import Results from "../components/Resultados"
import Testimonios from "../components/Testimonios"



const testimoniosData = [
  {
    id: 1,
    descripcion: 'Excelente servicio, atención personalizada y resultados por encima de las expectativas.',
    nombre: 'Alejandra Ruiz',
    puntaje: 5,
  },
  {
    id: 2,
    descripcion: 'Excelente servicio, atención personalizada y resultados por encima de las expectativas.',
    nombre: 'Roberto Hernández',
    puntaje: 4,
  },
  {
    id: 3,
    descripcion: 'Excelente servicio, atención personalizada y resultados por encima de las expectativas.',
    nombre: 'Carla Mendoza',
    puntaje: 5,
  },
  {
    id: 4,
    descripcion: 'Excelente servicio, atención personalizada y resultados por encima de las expectativas.',
    nombre: 'Carla Mendoza',
    puntaje: 5,
  },
];




function Online() {
  return (
    <div>
        <Page 
            videoSrc={bgImage} 
            title="Cursos Online" 
            description="Aprenderás todos los trucos para que tus postres sean más sabrosos y sencillos de hacer. Ahorrá tiempo y dinero, sumate hoy!" 
            buttonText="CURSOS DISPONIBLES" />
        <div className="flex flex-col items-center justify-center pt-6 bg-pink pb-20">
            <p className="text-3xl text-brown font-bold py-4">Mis cursos online</p>
            <p className="text-lg font-semibold text-brown sm:w-1/3 text-center pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. Sint dolor obcaecati distinctio nemo, accusamus repellat esse rerum sapiente tenetur eos?</p>
            <div className="sm:flex sm:flex-row items-center justify-center">
                <CardCourse title="Curso de Pastelería" img={imgCourse3}  />
                <CardCourse title="Curso de Laminados" img={imgCourse2}  />
                <CardCourse title="Curso de Alfajores" img={imgCourse}  />
            </div>
        </div>
        <Vsl title="Estos cursos son para vos si..." video={vsl} />
        <Testimonios testimonios={testimoniosData} />
        <Results />
        <Footer />
    </div>
  )
}

export default Online