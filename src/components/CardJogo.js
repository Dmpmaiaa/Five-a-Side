export default function CardGame({
    image,
    name,
    location,
    time,
    date,
    score,
  }) {
    return (
      <div className="relative w-347 h-24 bg-[#1A1F23] border-[0.3px] border-[rgba(244,244,249,0.55)] rounded-xl box-border">
        {/* <img className="absolute w-22 h-22 left-7 top-0.5 rounded-xl object-cover" src={image} alt={name} /> */}
        <div className="absolute left-30 top-4">
          <p className="font-favoritHeavyC text-white text-lg">{name}</p>
          <p className="font-favoritC text-white text-base mt-2">{location}</p>
          <div className="absolute flex justify-between w-22 h-2.5 mt-7">
            <p className="font-favoritC text-white text-sm">{time}</p>
            <p className="font-favoritC text-white text-sm">{date}</p>
          </div>
        </div>
        <div className="absolute right-0 top-3 w-22 h-10 bg-[#0C8CE9] rounded-lg flex items-center justify-center">
          <p className="font-favoritC text-white text-sm">{score}</p>
        </div>
      </div>
    );
  }