import Navbar from "./Navbar";

interface PageProps {
    videoSrc: any;
    title: string;
    description: string;
    buttonText: string;
  }

  function Page({ videoSrc, title, description, buttonText }: PageProps) {
    return (
      <div className='overflow-x-hidden relative'>
        <Navbar />
        <div className="relative">
          <img
            src={videoSrc}
            /* autoPlay muted */
            className='object-cover absolute h-screen w-full -z-10 top-0 left-0'
            style={{ zIndex: -10 }} 
          />
          <div className="bg-pink/70 relative z-0">
            <div className='px-4 md:px-10 lg:px-20 xl:px-40 w-full md:w-[80%] h-screen flex flex-col justify-center items-center text-brown space-y-5 m-auto text-center text-montserrat'>
              <span className='font-extrabold text-4xl lg:text-6xl max-w-4xl'>
                {title}
              </span>
              <span className='text-xl md:text-2xl font-semibold w-full md:w-[78%]'>
                {description}
              </span>
              <button className='w-[80%] md:w-fit px-6 py-2 rounded-full bg-white font-bold text-md md:text-lg hover:bg-creme hover:scale-110 duration-300'>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Page;
