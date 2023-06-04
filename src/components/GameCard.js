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
        <div className="text-white flex items-center w-screen">
            <div className="flex flex-col w-1/3">
                Imagem
                <Image src={img} width={0} height={0} />
            </div>

            <div className="flex flex-col w-1/3">
                <p>{field}</p>

                <p>{location}</p>
                <span>{schedule}</span>
                <span>{date}</span>
            </div>
            <div>
                <div className="flex w-1/3">
                    <span>{numPlayer}</span>
                </div>
            </div>
        </div>
    );
}
