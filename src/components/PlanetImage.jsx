import { useState } from "react";

export default function PlanetImage({ image }) {
  const [rotation, setRotation] = useState(0);

  return (
    <div
      className="mx-auto my-8 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px]"
      style={{ animation: "spin 120s linear infinite" }}
    >
      <img
        src={image}
        loading="lazy"
        alt="Planet"
        className="w-full h-full rounded-full cursor-pointer"
        onClick={() => setRotation((prev) => prev + 180)}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 1s ease-in-out",
        }}
      />
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
