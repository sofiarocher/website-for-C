import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Ig from "../assets/ig.png"

function Footer() {
  return (
    <div className="bg-pink">
    <div className="flex flex-col sm:flex-row items-center justify-evenly w-3/4 m-auto py-3 mt-7">
      <div className="mb-3 sm:mb-0 sm:mr-2">
        <button className="border p-2.5 rounded-full bg-brown hover:opacity-90 mr-2">
          <a href="#" className="text-white">
            <img src={Ig} width={25} alt="Instagram" />
          </a>
        </button>
        <button className="border p-2.5 rounded-full bg-brown hover:opacity-90">
          <a href="#" className="text-white">
            <img src={Ig} width={25} alt="Instagram" />
          </a>
        </button>
      </div>
      <div className="font-montserrat font-semibold text-brown text-center">
        <p className="mb-2 sm:mb-0">2024 &copy; Todos los derechos reservados por Camila Villalobos.</p>
        <p>Desarrollado por <a className='font-bold' href="#">srocher.</a></p>
      </div>
        <button className="border p-1 rounded-full bg-brown text-white hover:opacity-90 mt-3 sm:mt-0">
          <KeyboardArrowUpIcon fontSize='large' />
        </button>
    </div>
  </div>
  )
}

export default Footer