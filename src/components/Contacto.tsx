
function Contact() {
  return (
    <div className="flex flex-col items-center justify-center bg-pink pt-4">
        <h2 className="font-bold text-brown text-3xl pb-4">CONTACTO</h2>
        <input type="text" placeholder="Email" className="mb-4 py-1 rounded-md px-3 sm:w-[35%] "/>
        <textarea placeholder="Tu mensaje..." className="mb-4 rounded-md w-[58%] px-2 py-1 h-28 sm:w-[35%] sm:px-3  "/>
        <button className="mb-4 bg-brown text-white font-bold px-8 py-1 rounded-xl sm:rounded-xl">ENVIAR</button>
    </div>
  )
}

export default Contact