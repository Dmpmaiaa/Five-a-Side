export default function CardJogo({
  image,
  price,
  name,
  workingHours,
  details,
}) {
  return (
    <>
      {/* WRAPPER */}
      <div className="w-96 h-80 bg-primaryDarkestBlue rounded-lg border-solid border-[0.7px] border-opacity-65  flex flex-col items-center pt-[10px] px-[10px]">

        {/* IMAGE */}
        <div className="relative w-full h-[216px] bg-red-600 rounded-lg ">
          <div className="absolute w-16 h-4 bg-primaryBlue bottom-4 left-3 rounded-md">
            <p className="text-center text-xs">25 €</p>
          </div>
        </div>

        
      <div className="flex flex-col w-full pt-2">
        <div>
            <h2 className="text-[#F4F4F9] font-semibold">Ringue Matriz</h2>
            <span className="text-[#0C8CE9]">09:00 - 22:00</span>
            <p className="text-[#F4F4F9]">Povoa de Varzim</p>
        </div>
        
      </div>
       
      </div>
    </>
  );
}
