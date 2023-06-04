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
        <div className="text-white flex items-center w-screen" >
            <div className="flex flex-col w-1/3">
                Imagem
                {/* <Image src={img} width={0} height={0} /> */}
            </div>

            <div className="flex flex-col w-1/3">
                
                <p>{field}Ringue da Matriz</p>

                <p>{location}Póvoa de Varzim</p>
                <span>{schedule}16:00</span>
                <span>{date}13/2/2023</span>
            </div>
            <div>
                <div className="flex w-1/3">
                    <span>{numPlayer}6/10</span>
                </div>
            </div>
        </div>
    );
}
