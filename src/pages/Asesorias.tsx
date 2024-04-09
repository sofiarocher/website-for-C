import Page from "../components/Layout"
import bgImage from "../assets/bgImage.jpg"
import Vsl from "../components/Vsl"
import Footer from "../components/Footer"
import vsl from "../assets/bgvideo.mp4"
import Contact from "../components/Contacto"



function Asesorias() {
  return (
    <div>
        <Page 
            videoSrc={bgImage} 
            title="ASESORÍAS GASTRONÓMICAS." 
            description="Aprenderás todos los trucos para que tus postres sean más sabrosos y sencillos de hacer. Ahorrá tiempo y dinero, sumate hoy!" 
            buttonText="CURSOS DISPONIBLES" />
        <div className="flex flex-col items-center justify-center pt-6 bg-pink pb-20">
            <p className="text-4xl text-brown font-bold py-4">Mis cursos Asesorias</p>
            <p className="text-xl font-semibold text-brown w-1/3 text-center pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. Sint dolor obcaecati distinctio nemo, accusamus repellat esse rerum sapiente tenetur eos?</p>
        </div>
        <Vsl title="Si tenés una fábrica, local o emprendimiento..." video={vsl} />
        FALTAA
        Resultados
        <Contact />
        <Footer />
    </div>
  )
}

export default Asesorias