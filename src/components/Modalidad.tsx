import Plant from "../assets/plant-icon.svg"
import Online from "../assets/laptop-icon.svg"
import Chat from "../assets/chat-icon.svg"
import Time from "../assets/time-icon.svg"

function Modalidad() {
  return (
    <section className="bg-pink flex flex-wrap items-end justify-center gap-8 sm:gap-24 sm:py-4 py-2 sm:px-0 px-24">
        <div className="flex flex-col items-center justify-center">
            <img src={Plant} alt="Plant Icon" width={54}/>
            <p className="font-semibold text-brown text-xl py-2 sm:py-4">100% Vegano</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={Online} alt="Plant Icon" width={80}/>
            <p className="font-semibold text-brown text-xl py-2 sm:py-4">100% Online</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={Chat} alt="Plant Icon" width={80}/>
            <p className="font-semibold text-brown text-xl py-2 sm:py-4">Foro 24/7</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={Time} alt="Plant Icon" width={54}/>
            <p className="font-semibold text-brown text-xl py-2 sm:py-4">12 meses</p>
        </div>
    </section>
  )
}

export default Modalidad