import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimateSharedLayout } from "framer-motion";

const buttons = [
    { label: "Dia", value: "day" },
    { label: "Semana", value: "week" },
    { label: "Mês", value: "month" },
];

export default function Games(props) {
    const [gamesScheduled, setGamesScheduled] = useState([]);
    const [fieldInfo, setFieldInfo] = useState([]);
    const [selected, setSelected] = useState("day");

    const fetchData = async () => {
        const res = await fetch("/api/jogos");
        const fieldRes = await fetch("/api/campos");
        const data = await res.json();
        const fieldData = await fieldRes.json();
        setGamesScheduled(await data);
        setFieldInfo(await fieldData);
        console.log(fieldData[1].img);
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
        fetchData();
    };

    const sortByWeek = async (time) => {
        const res = await fetch(`/api/jogos/?date=${time}`);
        const data = await res.json();
        setGamesScheduled(await data);
    };

    return (
        <div className="bg-primaryDarkestBlue h-screen ">
            <div className="flex justify-center p-8">
                <div
                    className="bg-primaryDarkerBlue w-[310px] h-[42
                    8px] rounded-full flex justify-center items-center text-contrastOffWhite py-2"
                >
                   
           

                    <motion.div className="flex  w-[290px] justify-center">
                            {buttons.map((el, i) => (
                                <MenuItem
                                    text={el.label}
                                    key={i}
                                    selected={selected === el.value}
                                    onClick={() => setSelected(el.value)}
                                />
                            ))}

                    </motion.div>
                   
                </div>
            </div>

            

            <div className="flex flex-col items-center w-full">
                {gamesScheduled?.map((ele) => (
                    //fetch do campo
                    <GameCard
                        key={ele._id}
                        gameId={ele._id}
                        img={findCorrectField(ele.idCampo)?.img}
                        field={findCorrectField(ele.idCampo)?.name}
                        location={findCorrectField(ele.idCampo)?.location}
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

const MenuItem = ({ text, selected, onClick }) => (
    <motion.div
        className="rounded-full w-[108px] h-[40px] flex justify-center items-center"
        layout
        onClick={onClick}
        animate={{ opacity: selected ? 1 : 0.3, backgroundColor: selected ? "#020E16" : "transparent" }}
    >
        {text}
        {selected && <motion.div className="underline" layoutId="underline" />}
    </motion.div>
);
