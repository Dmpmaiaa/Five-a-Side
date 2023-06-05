import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Games(props) {
    useEffect(() => {
        async function authorize() {
          if (localStorage.getItem("token")) {
            const res = await fetch("/api/posts", {
              method: "GET",
              headers: {
                "authorization": localStorage.getItem("token")
              }
            })
    
            if (res.status === 200) {
              console.log("NICE")
            } else {
              console.log("NOT NICE")
            }
          }
        }
        authorize()
      }, [])
      
    const [gamesScheduled, setGamesScheduled] = useState([]);
    const [fieldInfo, setFieldInfo] = useState();

 
    const fetchData = async () => {
        const res = await fetch("/api/jogos");
        const fieldRes = await fetch("/api/campos");
        const data = await res.json();
        const fieldData = await fieldRes.json();
        setGamesScheduled(await data);
        setFieldInfo(await fieldData);
    };

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, []);

    const findCorrectField = (id) => {
        return fieldInfo.find((ele) => ele._id === id);
    };

    const signToGame = async (uid, gid) => {
        const res = await fetch(`/api/jogos/${gid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(uid),
        });
        const data = await res.json();
        fetchData()
    };



    return (
        <div className="bg-primaryDarkestBlue h-screen ">
            <div className="flex justify-center p-8">
                <div
                    className="bg-primaryDarkerBlue w-[290px] h-[42
                    8px]  rounded-full flex justify-between items-center text-contrastOffWhite p-1.5"
                >
                    <button className="rounded-full h-[34px] bg-primaryDarkestBlue w-[119px]">
                        Hoje
                    </button>
                    <button className="rounded-full h-[34px]  w-[119px]">
                        Semana
                    </button>
                    <button className="rounded-full h-[34px] w-[119px]">
                        Dia
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                {gamesScheduled?.map((ele) => (
                    //fetch do campo
                    <GameCard
                        key={ele._id}
                        gameId={ele._id}
                        img={findCorrectField(ele.idCampo).img}
                        field={findCorrectField(ele.idCampo).name}
                        location={findCorrectField(ele.idCampo).location}
                        numPlayer={ele.playerNumbers}
                        participants={ele.idPlayers}
                        schedule={ele.schedule}
                        date={ele.date}
                        signToGame={(uid, gid) => signToGame(uid, gid)}
                    />
                ))}

                <Navbar />
            </div>
        </div>
    );
}
