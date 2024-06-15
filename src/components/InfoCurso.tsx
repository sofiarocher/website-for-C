interface infoCursoProps {
  imgInfo: string;
  altInfo: string;
  title: string;
  description: string;
  price: string;
  buyLink: string;
}
function InfoCurso({
  imgInfo,
  altInfo,
  title,
  description,
  price,
  buyLink,
}: infoCursoProps) {
  return (
    <div className="bg-pink flex items-center justify-around px-20 py-20">
      <img src={imgInfo} alt={altInfo} />
      <div className="flex flex-col w-[32%] items-end justify-evenly text-brown text-end gap-3">
        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="text-lg">{description}</p>
        <p className="font-semibold text-xl">${price}</p>
        <button className="bg-brown px-4 py-1 rounded-full">
          <a href={buyLink} className="text-white font-semibold text-xl">Comprar</a>
        </button>
      </div>
    </div>
  );
}

export default InfoCurso;
