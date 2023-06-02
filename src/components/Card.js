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
            <div className="w-96 h-80 bg-primaryDarkestBlue rounded-lg border-solid border-[0.7px] border-opacity-65 flex flex-col items-center pt-[10px] px-[10px]">
                {/* IMAGE */}
                <div className="relative w-full h-[216px] bg-red-600 rounded-lg ">
                    <div className="absolute w-[70.97px] h-[20px] bg-primaryBlue bottom-3 left-3 rounded-md">
                        <p className="text-center text-sm text-contrastOffWhite">
                            25 €
                        </p>
                    </div>
                </div>

                <div className="flex w-full pt-2 ps-3 justify-between">
                    <div>
                        <h2 className="text-contrastOffWhite font-semibold text-m">
                            Ringue Matriz
                        </h2>
                        
                        <span className="text-primaryBlue text-xs">09:00 - 22:00</span>
                        <span className="text-contrastOffWhite text-sm block">
                            Povoa de Varzim
                        </span>
                    </div>
                    <div className="flex items-center ">
                        <ul className="flex flex-wrap">
                          <li className="text-contrastOffWhite text-xs opacity-50 w-1/2">Sintético</li>
                          <li className="text-contrastOffWhite text-xs opacity-50 w-1/2">Bola</li>
                          <li className="text-contrastOffWhite text-xs opacity-50 w-1/2">Coletes</li>
                          <li className="text-contrastOffWhite text-xs opacity-50 w-1/2">Balneário</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
}
