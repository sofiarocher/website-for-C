import "../styles/places.css";
import tortas from "../assets/tortas.jpeg";

function Results() {
  const resultsInfo = [
    {
      city: "Nombre alumno",
      description: "Curso de pastelería sin gluten."
    },
    {
      city: "Nombre alumno",
      description: "Curso de pastelería sin gluten."
    },
    {
      city: "Nombre alumno",
      description: "Curso de pastelería sin gluten."
    },
    {
      city: "Nombre alumno",
      description: "Curso de pastelería sin gluten."
    },
    {
      city: "Nombre alumno",
      description: "Curso de pastelería sin gluten."
    },
    {
      city: "Nombre alumno",
      description: "Curso de pastelería sin gluten."
    }
  ];

  const doubledResults = [...resultsInfo, ...resultsInfo];

  return (
    <div className="font-bold text-brown pt-4 bg-pink">
      <h2 className="text-2xl lg:text-3xl text-center">Resultados de mis alumnos</h2>
      <div className="w-4/5 mx-auto overflow-hidden py-8">
        <div className="flex animate-scroll duration-2000 justify-evenly">
          {doubledResults.map((result, index) => (
            <div key={index} className="m-2 bg-white text-center rounded-xl p-1 w-full lg:w-48">
              <img src={tortas} alt="" className="rounded-xl w-full h-32 object-cover lg:h-48" />
              <p className="pl-2 font-semi text-sm lg:text-lg">{result.city}</p>
              <p className="pl-2 font-normal text-[12px] lg:text-md">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
