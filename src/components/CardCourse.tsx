import imgCurso from "../assets/imgCurso.webp"

function CardCourse() {
    return (
        <div className="h-56 w-48 relative rounded-xl overflow-hidden box-shadow">
          <img src={imgCurso} className="object-cover h-full w-full"/>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold pt-16 bg-black/30">
            <div className="text-center w-2/3 text-monserrat">
              <p className="text-2xl pb-12">Cursos Online</p>
              <button className="text-brown bg-white px-4 py-0.5 rounded-full hover:bg-white/80">+ Info</button>
            </div >
          </div>
        </div>
      );
      
}

export default CardCourse