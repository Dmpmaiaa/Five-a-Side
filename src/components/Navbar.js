import Image from "next/image";
import pitch from "#/svg/pitch.svg";
import pitchCopy from "#/svg/pitchCopy.svg";
import player from "#/svg/player.svg";
import user from "#/svg/user.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({page}) {
    const [selected, setSelected] = useState("profile")
  const handleClick = () => {
    setSelected(prevState => page)
  };

  useEffect(() => {
    handleClick()
  }, [selected])

  return (
    <nav className="fixed bottom-0 z-50 w-screen">
      <div className="flex justify-around py-4 bottom-0 w-full bg-primaryDarkerBlue">
        <Link href="/fields">
          <div onClick={handleClick}>
            <Image
              src={selected === "fields" ? pitchCopy : pitch}
              width={32}
              height={32}
              className="rotate-90"
              alt="follow"
            />
          </div>
        </Link>

        <Link href="/games">
          <div onClick={handleClick}>
            <Image src={player} width={32} height={32} alt="follow" />
          </div>
        </Link>
        <Link href="/profile">
          <div onClick={handleClick}>
            <Image src={user} width={32} height={32} alt="follow" />
          </div>
        </Link>
      </div>
    </nav>
  );
}
