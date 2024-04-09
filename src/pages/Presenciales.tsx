import Page from "../components/Page"
import bgImage from "../assets/bgImage.jpg"
import CardCourse from "../components/CardCourse"
import imgCourse from "../assets/imgCurso.webp"
import imgCourse2 from "../assets/imgCurso2.webp"
import imgCourse3 from "../assets/imgCurso3.webp"
import Vsl from "../components/Vsl"
import Footer from "../components/Footer"
import vsl from "../assets/bgvideo.mp4"
import Results from "../components/Results"



function Presenciales() {
  return (
    <div>
        <Page 
            videoSrc={bgImage} 
            title="CURSOS PRESENCIALES." 
            description="Aprenderás todos los trucos para que tus postres sean más sabrosos y sencillos de hacer. Ahorrá tiempo y dinero, sumate hoy!" 
            buttonText="CURSOS DISPONIBLES" />
        <div className="flex flex-col items-center justify-center pt-6 bg-pink pb-20">
            <p className="text-4xl text-brown font-bold py-4">Mis cursos presenciales</p>
            <p className="text-xl font-semibold text-brown w-1/3 text-center pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. Sint dolor obcaecati distinctio nemo, accusamus repellat esse rerum sapiente tenetur eos?</p>
            <div className="sm:flex sm:flex-row items-center justify-center">
                <CardCourse title="Curso de Pastelería" img={imgCourse3}  />
                <CardCourse title="Curso de Laminados" img={imgCourse2}  />
                <CardCourse title="Curso de Alfajores" img={imgCourse}  />
            </div>
        </div>
        <Vsl title="Estos cursos son para vos si..." video={vsl} />
        <Results />
        FALTAA
        Testimonios
        <Footer />
    </div>
  )
}

export default Presenciales