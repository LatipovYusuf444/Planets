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
    <div
      className="min-h-screen w-full h-full flex flex-col items-center px-4 md:px-16 bg-cover bg-black bg-center"
      style={{ backgroundImage: "url('/images/galaxy.jpg')" }}
    >
      <PlanetButton active={active} onChange={setActive} />
      <PlanetImage image={currentPlanet.image} name={currentPlanet.name} />
      <PlanetInfo planet={currentPlanet} />
    </div>
  );
}
