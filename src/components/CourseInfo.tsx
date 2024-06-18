import { CourseInfoProps } from "../utils/interfaces";

export default function CourseInfo({
  imgInfo,
  altInfo,
  title,
  description,
  price,
  buyLink,
}: CourseInfoProps) {
  return (
    <div className="bg-pink flex sm:flex-row flex-col items-center justify-around sm:px-20 px-4 py-20 gap-4 sm:gap-0">
      <img src={imgInfo} alt={altInfo} className="pb-4 sm:pb-0"/>
      <div className="flex flex-col sm:w-[32%] sm:items-end items-center justify-evenly text-brown text-center sm:text-end gap-8 sm:gap-3">
        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="text-lg">{description}</p>
        <p className="font-semibold text-xl">${price}</p>
        <button className="bg-brown px-4 py-1 rounded-full w-full sm:w-auto">
          <a href={buyLink} className="text-white font-semibold text-xl">Comprar</a>
        </button>
      </div>
    </div>
  );
}