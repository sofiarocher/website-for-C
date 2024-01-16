import imgCurso from "../assets/imgCurso.webp"

function CardFormacion() {
    return (
        <div className="h-38 sm:h-72 w-3/4 sm:w-2/4 relative rounded-3xl overflow-hidden box-shadow">
          <img src={imgCurso} className="object-cover h-full w-full" alt="Curso Image" />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black/40">
            <div className="text-center w-full sm:w-3/4 text-montserrat pt-8 sm:pt-12">
              <p className="text-lg sm:text-3xl pb-4 sm:pb-8">Formación Intensiva: <br /> Todo lo que tenés que saber.</p>
              <button className="text-brown bg-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-full hover:bg-white/80">+ Info</button>
            </div>
          </div>
        </div>
      );
      
}

export default CardFormacion