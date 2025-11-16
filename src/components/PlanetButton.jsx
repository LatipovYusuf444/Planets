import { planets } from "../data/planets";

export default function PlanetButton({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 pt-8 md:pt-12 text-white">
      {planets.map((p) => (
        <button
          key={p.id}
          onClick={() => onChange(p.id)}
          className={`text-lg md:text-2xl font-semibold tracking-wide transition-all duration-300
            ${active === p.id ? "text-yellow-400 scale-110" : "text-gray-400 hover:text-white"}
          `}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}
