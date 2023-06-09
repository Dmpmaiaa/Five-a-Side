import Image from "next/image";
import pitch from "#/svg/pitch.svg";
import pitchChosen from "#/svg/pitchChosen.svg";
import player from "#/svg/player.svg";
import playerChosen from "#/svg/playerChosen.svg"
import user from "#/svg/user.svg";
import userChosen from "#/svg/userChosen.svg"
import Link from "next/link";
import { useEffect, useState } from "react";
import Games from "@/pages/games";

export default function Navbar({ page }) {
  const [selected, setSelected] = useState("profile");
  const handleClick = () => {
    setSelected((prevState) => page);
  };

  useEffect(() => {
    handleClick();
  }, [selected]);

  return (
    <nav className="fixed bottom-0 z-50 w-full">
      <div className="flex justify-around py-4 bottom-0 w-full bg-primaryDarkerBlue">
        <Link href="/fields">
          <div onClick={handleClick}>
            <Image
              src={selected === "fields" ? pitchChosen : pitch}
              width={32}
              height={32}
              className="rotate-90"
              alt="follow"
            />
          </div>
        </Link>

        <Link href="/games">
          <div onClick={handleClick}>
            <Image
              src={selected === "games" ? playerChosen : player}
              width={32}
              height={32}
              alt="follow"
            />
          </div>
        </Link>
        <Link href="/profile">
          <div onClick={handleClick}>
            <Image
              src={selected === "profile" ? userChosen : user}
              width={32}
              height={32}
              alt="follow"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
