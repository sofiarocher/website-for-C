import Page from "../components/Hero"
import bgImage from "../assets/bgImage.jpg"
import Counter from "../components/Counter"
import CardCourse from "../components/CardCourse"
import imgCourse from "../assets/imgCurso.webp"
import imgCourse2 from "../assets/imgCurso2.webp"
import CardFormacion from "../components/CardFormacion"
import Footer from "../components/common/Footer"
import Newsletter from "../components/Newsletter"
import Cam from "../assets/Cam.png"
import Results from "../components/Results"
import NewsletterModal from "../components/NewsletterModal"
import { useEffect, useState } from "react"
import SocialIcon from "../components/SocialIcon"

function Home() {
    const [modalOpen, setModalOpen] = useState(false)

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
            title="La pastelería vegana nunca fue tan fácil." 
            description="Aprenderás todos los trucos para que tus postres sean más sabrosos y sencillos de hacer. Ahorrá tiempo y dinero, sumate hoy!" 
            buttonText="CURSOS DISPONIBLES" />
        <Counter />
        <div className="bg-pink text-center pt-4 sm:py-12 text-brown">
            <p className="text-3xl font-bold mb-4">¿Quién soy?</p>
            <div className="sm:flex sm:flex-row sm:items-center sm:justify-center">
                <img src={Cam} className="bg-creme rounded-full w-48 h-48 object-cover mt-4 mx-auto sm:mx-0 sm:w-1/5 sm:h-auto sm:mr-4" alt="Cam Villalobos" />
                <div className="sm:w-1/4">
                    <p className="font-bold text-2xl py-2">Cam Villalobos</p>
                    <p className="px-4 mb-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos iure quas maxime commodi possimus, quasi dolorem harum ipsa amet, dolore provident error odio temporibus fuga! Possimus eius laborum velit a tempore suscipit aliquam quia. Ipsa ratione tempora laborum obcaecati, pariatur neque?
                    </p>
                    <p className="px-6 text-xl font-bold">Si buscas comenzar o seguir aprendiendo, ¡te espero!</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-6 bg-pink pb-20">
            <p className="text-2xl sm:text-3xl text-brown font-bold py-4">Mis Servicios</p>
            <div className="sm:flex sm:flex-row items-center justify-center">
                <CardCourse title="Cursos Online" img={imgCourse2} infoLink="/online" />
                <CardCourse title="Cursos Presenciales" img={imgCourse} infoLink="/presenciales"/>
            </div>
            <CardFormacion />
        </div>
        <Results />
        <Newsletter />
        <Footer />
        {modalOpen && <NewsletterModal closeModal={handleCloseModal}/>}
        <SocialIcon />
    </div>
  )
}

export default Home