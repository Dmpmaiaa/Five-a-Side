import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Games(props) {
    const [gamesScheduled, setGamesScheduled] = useState([]);
    const [fieldInfo, setFieldInfo] = useState();

    const fetchData = async () => {
        const res = await fetch("/api/jogos/");
        const fieldRes = await fetch("/api/campos");
        const data = await res.json();
        const fieldData = await fieldRes.json()
        setGamesScheduled(await data);
        setFieldInfo(await fieldData)
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
                    key={ele._id}
                    img={fieldInfo.url}
                    field={fieldInfo.name}
                    location={fieldInfo.location}
                    numPlayer={ele.playerNumbers}
                    participants={ele.idPlayers}
                    schedule={ele.schedule}
                    date={ele.date}
                />
            ))}

            <Navbar />
        </div>
    );
}
