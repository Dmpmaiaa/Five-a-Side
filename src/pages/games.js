import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Games(props) {
    const [gamesScheduled, setGamesScheduled] = useState([]);

    const fetchData = async () => {
        const res = fetch("/api/jogos");
        const data = (await res).json();
        setGamesScheduled(await data);
        console.log(await data)
    };

    useEffect(() => {
        (async () => {
            await fetchData();
        })()
    }, []);

    return (
        <div className="flex flex-col items-center">

            <GameCard />
            <Navbar />
        </div>
    );
}
