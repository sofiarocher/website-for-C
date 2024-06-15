interface CardProps {
  img: any;
  title: string;
  infoLink?: any;
  target?: any;
}

function CardCourse({ title, img, infoLink, target }: CardProps) {
  return (
    <div className="h-56 w-[200px] lg:w-[300px] relative rounded-xl overflow-hidden box-shadow mb-6 mx-12 sm:mt-4 hover:scale-110 duration-300">
      <img src={img} className="object-cover h-full w-full" />
      <a href={infoLink} target={target} rel="noopener noreferrer">
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold pt-16 bg-black/30">
          <div className="text-center text-monserrat">
            <p className="text-2xl pb-12 px-2">{title}</p>
            <button className="text-brown bg-white px-4 py-0.5 rounded-full hover:bg-white/80">
              + Info
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardCourse;
