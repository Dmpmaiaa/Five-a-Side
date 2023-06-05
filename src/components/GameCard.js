import Image from "next/image";
import { useState } from "react";

export default function GameCard({
    gameId,
    field,
    img,
    location,
    numPlayer,
    schedule,
    date,
    participants,
    signToGame
}) {
   

    return (
        <div className="text-white w-screen flex items-center justify-around">
            <div className="flex flex-col">
                <Image
                    src={img}
                    width={100}
                    height={100}
                    alt="Fotografia do campo"
                    className="rounded-[10px]"
                />
            </div>

            <div className="flex flex-col pt-3 pe-3 pb-3 leading-9">
                <p className="text-m">{field}</p>

                <p className="text-xs">{location}</p>
                <div className="flex gap-2 text-xs">
                    <span>{`${date[0] + date[1]}/${
                        date[2] + date[3]
                    }/${date.slice(4)}`}</span>
                    <span>{schedule}</span>
                </div>
            </div>
            <div>
                <div className={`flex ${numPlayer < 8 ? 'bg-primaryBlue' : 'bg-secondaryYellow text-primaryDarkestBlue'} w-14 rounded justify-center m-2 text-sm `}
                onClick={(uid, gid) => signToGame('6479ec3f1de2044d9892aaba', gameId)}>
                    <span>{numPlayer}</span>
                </div>
            </div>
        </div>
    );
}
