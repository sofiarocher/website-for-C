import Navbar from "./Navbar"
import bgVideo from "../assets/bgvideo.mp4"

function Page() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar/>
            <video src={bgVideo} autoPlay muted className='object-cover absolute h-screen w-full -z-10 top-0 left-0'></video>
            <div className='px-4 md:px-10 lg:px-20 xl:px-40 w-full md:w-[80%] h-screen flex flex-col justify-center items-center text-brown space-y-5 m-auto text-center text-montserrat'>
                <span className='font-extrabold text-4xl md:text-6xl lg:text-8xl'>
                La pastelería vegana nunca fue tan fácil.
                </span>
                <span className='text-xl md:text-3xl font-semibold w-full md:w-[78%]'>
                Aprenderás todos los trucos para que tus postres sean más sabrosos y sencillos de hacer. Ahorrá tiempo y dinero, sumate hoy!
                </span>
                <button className='w-[80%] md:w-fit px-8 py-4 rounded-full bg-white font-bold text-md md:text-xl hover:bg-creme duration-200'>
                CURSOS DISPONIBLES
                </button>
            </div>
        </div>
      );
    }

export default Page