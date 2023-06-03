import Image from "next/image";
import pitch from "#/svg/pitch.svg";
import player from "#/svg/player.svg";
import user from "#/svg/user.svg";
import Link from "next/link";

export default function Navbar(props) {
    return (
        <nav className="fixed bottom-0 z-50 w-screen">
            <div className="flex justify-around py-4 bottom-0 w-full bg-primaryDarkerBlue">
                <Link href="/fields">
                    <div>
                        <Image
                            src={pitch}
                            width={32}
                            height={32}
                            className="rotate-90"
                            alt="follow"
                        />
                    </div>
                </Link>

                <Link href="/games">
                    <div>
                        <Image
                            src={player}
                            width={32}
                            height={32}
                            alt="follow"
                        />
                    </div>
                </Link>
                <Link href="/profile">
                    <div>
                        <Image src={user} width={32} height={32} alt="follow" />
                    </div>
                </Link>
            </div>
        </nav>
    );
}
