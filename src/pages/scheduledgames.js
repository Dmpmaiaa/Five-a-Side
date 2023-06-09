import Navbar from "@/components/Navbar";
import logo from "#/svg/logo.svg";
import Image from "next/image";

import GameCard from "@/components/GameCard";
import { useEffect, useState } from "react";
export default function myGames() {

  const [gamesScheduled, setGamesScheduled] = useState([]);

    const fetchGames = async () => {
        const res = await fetch("/api/jogos/?date=month");
        const data = await res.json();
        setGamesScheduled(await data);
    };

    useEffect(() => {
        fetchGames();
    }, []);


    return (
        <div className="flex flex-col items-center">
            <div className="text-contrastOffWhite text-center text-8xl pt-16 pb-14">
                <Image src={logo} width={100} height={40} alt="Logo" />{" "}
            </div>
            <div>
                <h1 className="text-contrastOffWhite font-rift text-xl">
                    Os meus jogos
                </h1>
            </div>
            <div className="pt-10">
            
                <GameCard  
                        key={ele._id}
                        gameId={ele._id}
                        fieldId={ele.locationId}
                        numPlayer={ele.participants}
                        participants={ele.playersId}
                        schedule={ele.hours}
                        date={ele.date}
                />
            </div>
            <Navbar />
        </div>
    );
}
