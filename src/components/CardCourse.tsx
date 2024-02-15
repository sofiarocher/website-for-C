
interface CardProps {
  img: any;
  title: string;
  infoLink: any;
}

function CardCourse({title, img, infoLink} : CardProps) {
    return (
        <div className="h-56 w-48 relative rounded-xl overflow-hidden box-shadow mb-6 mx-12 sm:mt-4 hover:scale-110 duration-300">
          <img src={img} className="object-cover h-full w-full"/>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold pt-16 bg-black/30">
            <div className="text-center text-monserrat">
              <p className="text-2xl pb-12">{title}</p>
              <a href={infoLink} rel="noopener noreferrer">
                <button className="text-brown bg-white px-4 py-0.5 rounded-full hover:bg-white/80">+ Info</button>
              </a>            
            </div >
          </div>
        </div>
      );
      
}

export default CardCourse