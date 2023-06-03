import Image from "next/image";
import pitch from "#/svg/pitch.svg";
import player from "#/svg/player.svg"
import user from "#/svg/user.svg"

export default function Navbar(props) {
  return (
    <nav className="fixed bottom-0 z-50 w-screen">
      <ul className="flex justify-around py-4 bottom-0 w-full bg-primaryDarkerBlue">
        <li>
          <Image
            src={pitch}
            width={32}
            height={32}
            className="rotate-90"
            alt="follow"
          />
        </li>

        <li>
          <Image
            src={player}
            width={32}
            height={32}
            alt="follow"
          />
        </li>
        <li>

        <Image
            src={user}
            width={32}
            height={32}
            alt="follow"
          />
        </li>
      </ul>
    </nav>
  );
}
