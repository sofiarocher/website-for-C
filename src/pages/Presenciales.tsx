import Page from "../components/Hero"
import bgImage from "../assets/bgImage.jpg"
import CardCourse from "../components/CardCourse"
import imgCourse from "../assets/imgCurso.webp"
import imgCourse2 from "../assets/imgCurso2.webp"
import imgCourse3 from "../assets/imgCurso3.webp"
import Vsl from "../components/Video"
import Footer from "../components/common/Footer"
import vsl from "../assets/bgvideo.mp4"
import Results from "../components/Results"
import Testimonios from "../components/Testimonials"
import SocialIcon from "../components/SocialIcon"
import Modalidad from "../components/Modality"
import FAQ from "../components/Faq"


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

function Presenciales() {
  return (
    <div>
        <Page 
            videoSrc={bgImage} 
            title="Cursos Presenciales" 
            description="Aprenderás todos los trucos para que tus postres sean más sabrosos y sencillos de hacer. Ahorrá tiempo y dinero, sumate hoy!" 
            buttonText="CURSOS DISPONIBLES" />
        <div className="flex flex-col items-center justify-center pt-6 bg-pink pb-20">
            <p className="text-3xl text-brown font-bold py-4">Mis cursos presenciales</p>
            <p className="text-lg font-semibold text-brown sm:w-1/3 text-center pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. Sint dolor obcaecati distinctio nemo, accusamus repellat esse rerum sapiente tenetur eos?</p>
            <div className="sm:flex sm:flex-row items-center justify-center">
                <CardCourse title="Pastelería sin gluten" img={imgCourse3} target={"_blank"} infoLink={"https://camilavillalobosvica.tiendup.com/e/pastelera-clsica-gluten-free-intensivo"}  />
                <CardCourse title="Laminados franceses" img={imgCourse2} target={"_blank"} infoLink={"https://camilavillalobosvica.tiendup.com/e/laminados-franceses-plant-based"}  />
                <CardCourse title="Alfajores sin gluten" img={imgCourse}  target={"_blank"} infoLink={"https://camilavillalobosvica.tiendup.com/e/alfajores-gluten-free-intensivo"} />
                <CardCourse title="Tortas sin gluten" img={imgCourse}  target={"_blank"} infoLink={"https://camilavillalobosvica.tiendup.com/e/tortas-gluten-free"} />
            </div>
        </div>
        <Modalidad />
        <Vsl title="Estos cursos son para vos si..." video={vsl} />
        <Testimonios testimonios={testimoniosData} />
        <Results />
        <FAQ/>
        <Footer />
        <SocialIcon />
    </div>
  )
}

export default Presenciales