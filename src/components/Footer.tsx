import Ig from "../assets/ig.png"

function Footer() {
  return (
    <div className="bg-pink">
    <div className="bg-pink flex flex-col sm:flex-row items-center justify-around sm:w-2/4 mx-auto py-3 px-4">
        <div className="mb-3 sm:mb-0 sm:mr-2">
          <button className="border p-2.5 rounded-full bg-brown hover:opacity-90 mr-2">
            <a href="#" className="text-white">
              <img src={Ig} width={25} alt="Instagram" />
            </a>
          </button>
        </div>
        <div className="font-montserrat font-semibold text-brown text-center">
          <p className="mb-2 sm:mb-0">2024 &copy; Todos los derechos reservados por Camila Villalobos.
          Desarrollado por <a className='font-bold' href="#">srocher.</a></p>
        </div>
          <button className="border p-2.5 rounded-full bg-brown hover:opacity-90">
            <a href="#" className="text-white">
              <img src={Ig} width={25} alt="Instagram" />
            </a>
          </button>
      </div>
    </div>
  )
}

export default Footer