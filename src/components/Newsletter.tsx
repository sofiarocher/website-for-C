
function Newsletter() { 
  return (
        <div className="bg-white  px-10 py-6 rounded-3xl flex flex-col items-center text-center text-brown text-montserrat relative">
            <h2 className="font-bold text-2xl pb-4">CLASE GRATIS</h2>
            <p className="font-medium pb-4 sm:w-1/4 ">Así como escuchaste! Si querés recibirlas, lo único que tenés que hacer es dejar tu email acá abajo.</p>
            <input type="text" placeholder="ejemplo@outlook.com" className="mb-4 border-2 px-12 py-2 rounded-xl"/>
            <button className="font-bold bg-pink px-5 py-2 rounded-xl hover:bg-pink/70 hover:scale-110 duration-300">Suscribirme</button>
        </div>
  )
}

export default Newsletter