
interface VslProps {
    title: string;
    video: any;
}

function Vsl({title, video} : VslProps) {
  return (
    <div className="px-4">
        <h2 className="text-brown font-bold text-center text-2xl my-3 sm:text-4xl sm:my-6">{title}</h2>
        <video src={video} className="sm:w-[50%] mx-auto pt-4"></video>
    </div>
  )
}

export default Vsl