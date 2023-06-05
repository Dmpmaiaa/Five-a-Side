import Image from "next/image";

export default function GameCard({
    field,
    img,
    location,
    numPlayer,
    schedule,
    date,
}) {


    return (
        <div className=" w-[347px] h-[99px] text-white flex items-center w-screen rounded-lg border-primaryBlue border-solid border border-opacity-10 justify-items-end" >
            <div className="flex flex-col w-1/3">
                Imagem
                <Image src={img} width={0} height={0} />
            </div>

            <div className="flex flex-col w-1/3">
                
                <p className="text-contrastOffWhite font-semibold text-m">{field}Ringue da Matriz</p>

                <p>{location}Póvoa de Varzim</p>
                <div className="space-x-1 ">
                <span className="text-xs text-contrastOffWhite">{schedule}16:00</span>
                <span className="text-xs text-contrastOffWhite">{date}13/2/2023</span>
                </div>
            </div>

                <div className=" w-[71px]h-[21px] px-3 bg-primaryBlue rounded-md space-around">
                    <span>{numPlayer}6/10</span>
                </div>

        </div>
    );
}
