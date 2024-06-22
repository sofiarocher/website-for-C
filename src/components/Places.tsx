import "../styles/places.css";

export default function Places() {
  const placesInfo = [
    {
      city: "CABA, Argentina",
      description: "Mi estudio de pastelería."
    },
    {
      city: "Córdoba, Argentina",
      description: "Mi estudio de pastelería."
    },
    {
      city: "Santa Fé, Argentina",
      description: "Mi estudio de pastelería."
    },
    {
      city: "Montevideo, Uruguay",
      description: "Mi estudio de pastelería."
    },
    {
      city: "CABA, Argentina",
      description: "Mi estudio de pastelería."
    },
    {
      city: "Córdoba, Argentina",
      description: "Mi estudio de pastelería."
    },
    {
      city: "Santa Fé, Argentina",
      description: "Mi estudio de pastelería."
    },
    {
      city: "Montevideo, Uruguay",
      description: "Mi estudio de pastelería."
    }
    

  ];

  return (
    <div className="font-bold text-brown pt-4 bg-pink">
      <h2 className="text-2xl sm:text-3xl text-center">Lugares donde di cursos</h2>
      <div className="sm:w-[40%] mx-auto overflow-hidden py-8">
        <div className="flex animate-scroll duration-2000 justify-evenly">
          {placesInfo.map((place, index) => (
            <div key={index} className="border-l-4 border-solid border-brown pr-12">
              <p className="pl-2 w-36 text-xl sm:text-2xl font-extrabold">{place.city}</p>
              <p className="pl-2 font-semibold">{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
