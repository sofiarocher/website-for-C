import Page from "../components/Layout"
import bgImage from "../assets/bgImage.jpg"
import CardCourse from "../components/CardCurso"
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
                <CardCourse title="Curso de Pastelería" img={imgCourse3}  infoLink={"https://vica.tiendup.com/curso/curso-pasteler"} target={"_blank"}/>
                <CardCourse title="Curso de Laminados" img={imgCourse2}  infoLink={"https://vica.tiendup.com/curso/curso-laminados-franceses"} target={"_blank"} />
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