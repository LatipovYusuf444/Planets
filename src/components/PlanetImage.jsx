import { useState } from "react";

export default function PlanetImage({ image, name }) {
  const [isSpinning, setIsSpinning] = useState(true); // dastlab aylanish yoqilgan

  return (
    <div
      className={`w-48 sm:w-64 md:w-80 lg:w-[500px] mx-auto my-8 rounded-full  cursor-pointer ${
        isSpinning ? "animate-spin-slow" : ""
      }`}
      onClick={() => setIsSpinning(!isSpinning)}
    >
      <img
        src={`/images/${image}`}
        alt={name}
        className="w-full h-full rounded-full"
        loading="lazy"
      />
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
