import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimateSharedLayout } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const buttons = [
    { label: "Dia", value: "day" },
    { label: "Semana", value: "week" },
    { label: "Mês", value: "month" },
];

export default function Games(props) {
    const [gamesScheduled, setGamesScheduled] = useState([]);
    const [selected, setSelected] = useState("day");
    const [signed, setSigned] = useState(false);

    const fetchData = async () => {
        const res = await fetch(`/api/jogos/?date=${selected}`);
        const data = await res.json();
        setGamesScheduled(await data);
    };

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, [selected]);

    const signToGame = async (uid, gid) => {
        const res = await fetch(`/api/jogos/${gid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid, gid }),
        });

        const data = await res.json();
        console.log(res.status);
        if (res.status === 201) {
            toast.success("Boa! Inscreveste-te no jogo!", {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            


        } else if (res.status === 401) {
            toast.error("Já estás inscrito neste jogo!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setSigned((prevState) => !prevState);
        }

        fetchData(selected);
    };


    return (
        <div className="bg-primaryDarkestBlue h-screen w-screen">
            <div className="flex justify-center p-8">
                <div
                    className="bg-primaryDarkerBlue w-[310px] h-[42
                    8px] rounded-full flex justify-center items-center font-robotoRegular text-contrastOffWhite py-2"
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

            <div className="flex flex-col ">
                <div className="flex flex-col items-center mb-24">
                    {gamesScheduled &&
                        gamesScheduled?.map((ele) => (
                            <div>
                                <GameCard
                                    key={ele._id}
                                    gameId={ele._id}
                                    fieldId={ele.locationId}
                                    numPlayer={ele.participants}
                                    participants={ele.playersId}
                                    schedule={ele.hours}
                                    date={ele.date}
                                    signToGame={(uid, gid) =>
                                        signToGame(uid, gid)
                                    }
                                    signed={signed}
                                />
                            </div>
                        ))}
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
            <Navbar page={"games"}/>
        </div>
    );

}

const MenuItem = ({ text, selected, onClick }) => (
    <motion.div
        className="rounded-full w-[108px] h-[40px] flex justify-center items-center"
        layout
        onClick={onClick}
        animate={{
            opacity: selected ? 1 : 0.3,
            backgroundColor: selected ? "#020E16" : "transparent",
        }}
    >
        {text}
        {selected && <motion.div className="underline" layoutId="underline" />}
    </motion.div>
);
