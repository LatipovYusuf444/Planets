export default function PlanetInfo({ planet }) {
  return (
    <div className="text-center text-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-6 md:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{planet.name}</h1>
      <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed pb-8 sm:pb-12">
        {planet.description}
      </p>
    </div>
  );
}
