import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CounterProps } from "../utils/interfaces";

function Count({ target, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const interval = 10;

  useEffect(() => {
    const increment = target / (duration / interval);
    let currentCount = 0;

    const counterInterval = setInterval(() => {
      currentCount += increment;

      if (currentCount >= target) {
        currentCount = target;
        clearInterval(counterInterval);
      }

      setCount(Math.floor(currentCount));
    }, interval);

    return () => clearInterval(counterInterval);
  }, [target]);

  return (
    <div className="bg-white h-24 w-48 rounded-xl mx-4 box-shadow text-brown flex flex-col items-center justify-center mb-6 sm:mb-0">
      <h2 className="font-extrabold text-3xl pb-2">{count}</h2>
      <p className="font-bold text-md">{label}</p>
    </div>
  );
}

export default function Counter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-pink h-auto sm:h-40 pt-12 flex flex-col sm:flex-row items-center justify-center text-center ${
        inView ? "animate-count" : ""
      }`}
    >
      {inView && <Count target={489} label="Alumnos Presenciales" />}
      {inView && <Count target={2670} label="Alumnos Online" />}
      {inView && <Count target={210} label="Clases Dictadas" />}
    </div>
  );
}

