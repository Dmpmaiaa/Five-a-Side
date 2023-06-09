import Navbar from "@/components/Navbar";
import logo from "#/svg/logo.svg";
import Image from "next/image";

import GameCard from "@/components/GameCard";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function myGames(uid) {
  const router = useRouter()
    const [gamesScheduled, setGamesScheduled] = useState();

    const userId = "6479ec3f1de2044d9892aaba";

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
                <Image src={logo} width={70} height={40} alt="Logo" />{" "}
            </div>
            <div>
                <h1 className="text-contrastOffWhite font-rift text-xl">
                    Os meus jogos
                </h1>
            </div>
            <div className="pt-10 m-2">
                {gamesScheduled &&
                    gamesScheduled?.map((ele) => (
                        <GameCard
                            key={ele._id}
                            gameId={ele._id}
                            fieldId={ele.locationId}
                            numPlayer={ele.participants}
                            participants={ele.playersId}
                            schedule={ele.hours}
                            date={ele.date}
                            signToGame={() => console.log("OLÁ RAFAEL")}
                        />
                    ))}
            </div>
            <div className="pb-24 flex items-center justify-center">
                <button
                    className="h-8 w-20 rounded-full bg-darkBlueBtn text-contrastOffWhite font-robotoRegular"
                    onClick={() => router.push("/profile")}
                >
                    Voltar
                </button>
            </div>

            <Navbar />
        </div>
    );
}
