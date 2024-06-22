import { HeroProps } from "../utils/interfaces";
import Navbar from "./common/Navbar";
import "animate.css";

export default function Hero({
  videoSrc,
  title,
  description,
  buttonText,
  buttonLink,
}: HeroProps) {

   const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = buttonLink.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="overflow-x-hidden relative">
      <Navbar />
      <div className="relative">
        <img
          src={videoSrc}
          /* autoPlay muted */
          className="object-cover absolute h-screen w-full -z-10 top-0 left-0"
          style={{ zIndex: -10 }}
        />
        <div className="bg-pink/70 relative z-0 ">
          <div className="pb-24 lg:pb-0 px-4 md:px-10 lg:px-20 xl:px-40 w-full md:w-[80%] h-screen flex flex-col justify-center items-center text-brown space-y-5 m-auto text-center text-montserrat animate__animated animate__fadeIn">
            <span className="font-extrabold text-4xl lg:text-6xl max-w-4xl">
              {title}
            </span>
            <span className="text-xl md:text-xl font-semibold w-full md:w-[78%]">
              {description}
            </span>
            <a href={buttonLink} onClick={handleSmoothScroll}>
              <button className="w-[80%] md:w-fit px-6 py-2 rounded-full bg-white font-bold text-md md:text-lg hover:bg-creme hover:scale-110 duration-300">
                {buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
