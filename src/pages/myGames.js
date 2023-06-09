import Navbar from "@/components/Navbar";
import logo from "#/svg/logo.svg";
import Image from "next/image";


import GameCard from "@/components/GameCard";
export default function myGames() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-contrastOffWhite text-center text-8xl pt-16 pb-14">
      <Image src={logo} width={100} height={40} alt="Logo" />      </div>
      <div>
        <h1 className="text-contrastOffWhite font-rift text-xl">Os meus jogos</h1>
      </div>
      <div className="pt-10">
        <GameCard />
      </div>
      <Navbar />
    </div>
  );
}
