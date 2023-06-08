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
  const [selected, setSelected] = useState("day");

  const fetchData = async (endpoint) => {
    const res = await fetch(`/api/jogos?date=${endpoint}`);
    if (res.status === 200) {
      const data = await res.json();
      setGamesScheduled(await data);
    }
  };

  useEffect(() => {
    fetchData(selected);
  }, [selected]);

  const signToGame = async (uid, gid) => {
    const res = await fetch(`/api/jogos/${gid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uid),
    });
    const data = await res.json();
    console.log(data)
    fetchData();
  };

  return (
    <div className="bg-primaryDarkestBlue h-screen ">
      <div className="flex justify-center p-8">
        <div
          className="bg-primaryDarkerBlue w-[312px] h-[42x] rounded-full flex justify-center items-center font-robotoRegular text-contrastOffWhite py-2"
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

      <div className="flex flex-col">
        <div className="mb-24">
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
                  signToGame={(uid, gid) => signToGame(uid, gid)}
                />
              </div>
            ))}
        </div>

      </div>x
      <Navbar />
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
