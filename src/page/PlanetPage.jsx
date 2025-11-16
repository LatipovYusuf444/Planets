import { useState } from "react";
import { planets } from "../data/planets";
import PlanetButton from "../components/PlanetButton";
import PlanetImage from "../components/PlanetImage";
import PlanetInfo from "../components/PlanetInfo";

export default function PlanetPage() {
  const [active, setActive] = useState(planets[0]?.id ?? 1);
  const currentPlanet = planets.find((p) => p.id === active);

  if (!currentPlanet) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Planet topilmadi
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black w-full h-full flex flex-col items-center px-4 md:px-16">
      {/* Planetlarni tanlash tugmalari */}
      <PlanetButton active={active} onChange={setActive} />

      {/* Planet rasm */}
      <PlanetImage image={currentPlanet.Image} />

      {/* Planet info */}
      <PlanetInfo planet={currentPlanet} />
    </div>
  );
}
