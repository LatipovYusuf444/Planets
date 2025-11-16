export default function PlanetImage({ image }) {
  return (
    <div className="mx-auto my-8 w-64 sm:w-80 md:w-[500px] lg:w-[550px] animate-spin-slow">
      <img
        src={`/images/${image}`}   // bu yerda public yozilmaydi!
        alt="Planet"
        className="w-full h-full rounded-full cursor-pointer"
        loading="lazy"
      />
    </div>
  );
}
