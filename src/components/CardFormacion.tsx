import imgCurso from "../assets/imgCurso4.jpg"

function CardFormacion() {
    return (
        <div className="h-72 sm:h-72 w-[56%] sm:w-[40.5%] relative rounded-xl sm:rounded-3xl overflow-hidden box-shadow sm:mt-4 hover:scale-110 duration-300">
          <img src={imgCurso} className="object-cover h-full w-full" alt="Curso Image" />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black/40">
            <div className="text-center w-2/4 sm:w-3/4 text-montserrat pt-8 sm:pt-12">
              <p className="text-xl sm:text-3xl pb-4 sm:pb-8">Formación Intensiva: <br /> Todo lo que tenés que saber.</p>
              <a href="/" rel="noopener noreferrer">
                <button className="text-brown bg-white px-4 py-0.5 rounded-full hover:bg-white/80">+ Info</button>
              </a>
            </div>
          </div>
        </div>
      );
      
}

export default CardFormacion