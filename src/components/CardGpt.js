export default function CardGpt({ name, location, time, type, price, image }) {
  //     return (
  //       <div className="relative w-[364px] h-[398px] bg-[#1A1F23] border-[0.3px] border-[rgba(244,244,249,0.55)] rounded-xl box-border">
  //         <div className="absolute w-86 h-72 left-1 top-1 bg-center bg-cover rounded-xl" style={{ backgroundImage: `url(${image})` }} />
  //         <div className="absolute left-1 bottom-3 flex items-center bg-[#0C8CE9] rounded-xl w-18 h-4">
  //           <p className="font-favoritHeavyC text-[#F4F4F9] text-xs mx-auto">{price}</p>
  //         </div>
  //         <p className="absolute left-1 bottom-11 font-favoritHeavyC text-white text-lg">{name}</p>
  //         <p className="absolute left-1 bottom-1 font-favoritC text-white text-xs">{location}</p>
  //         <p className="absolute left-1 bottom-7 font-favoritC text-[#0C8CE9] text-xs">{time}</p>
  //         <div className="absolute left-1 bottom-5 flex items-center">
  //           {/* <img src={FieldIcon} className="h-2 w-2 mr-1 transform rotate-90" alt="field type"/> */}
  //           <p className="font-rift text-xs text-[rgba(244,244,249,0.75)]">{type}</p>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <div className="relative w-[364px] h-[306px] bg-[#1A1F23] border-[0.3px] border-[rgba(244,244,249,0.55)] rounded-xl box-border flex ">
      <div className="absolute w-[346px] h-[218px] left-1 top-1 bg-center bg-cover rounded-xl bg-[#F4F4F9]">
        <div className="absolute left-1 bottom-3 flex items-center bg-[#0C8CE9] rounded-md w- h-4">
          <p className="font-favoritHeavyC text-[#F4F4F9] text-xs mx-auto">
            {price}
          </p>
        </div>
      </div>
      <p className="absolute left-1 bottom-11 font-favoritHeavyC text-white text-lg">
        {name}
      </p>
      <p className="absolute left-1 bottom-1 font-favoritC text-white text-xs">
        {location}
      </p>
      <p className="absolute left-1 bottom-7 font-favoritC text-[#0C8CE9] text-xs">
        {time}
      </p>
      <div className="absolute left-1 bottom-5 flex items-center">
        {/* <img src={FieldIcon} className="h-2 w-2 mr-1 transform rotate-90" alt="field type"/> */}
        <p className="font-rift text-xs text-[rgba(244,244,249,0.75)]">
          {type}
        </p>
      </div>
    </div>
  );
}
