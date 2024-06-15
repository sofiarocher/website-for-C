import imgCurso from "../assets/imgCurso4.jpg";

function CardFormacion() {
  return (
    <div className="h-56 lg:h-64 w-[200px] lg:w-[700px] relative rounded-xl sm:rounded-3xl overflow-hidden box-shadow sm:mt-4 hover:scale-110 duration-300">
      <img
        src={imgCurso}
        className="object-cover h-full w-full"
        alt="Curso Image"
      />
      <a href="/" rel="noopener noreferrer">
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black/40">
          <div className="text-center sm:w-3/4 text-montserrat pt-8 sm:pt-12">
            <p className="text-2xl pb-12 px-2 sm:pb-8 ">Formación Intensiva</p>
            <button className="text-brown bg-white px-4 py-0.5 rounded-full hover:bg-white/80">
              + Info
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardFormacion;
