import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Games(props) {
    const [gamesScheduled, setGamesScheduled] = useState([]);

    const fetchData = async () => {
        const res = await fetch("/api/jogos/");
        const data = await res.json();
        setGamesScheduled(await data);
    };

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, []);

    return (
        <div className="flex flex-col items-center">
            {gamesScheduled?.map((ele) => (
                <GameCard 
                numPlayer={ele.playerNumbers}
                participants={ele.idPlayers}
                schedule={ele.schedule}
                date={ele.date}/>
            ))}

            <Navbar />
        </div>
    );
}
