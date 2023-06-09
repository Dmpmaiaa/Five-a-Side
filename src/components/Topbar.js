import logo from "#/svg/logo.svg";
import Image from "next/image";

export default function Topbar(props) {
    return (
        <div className="mt-4">
            <Image src={logo} width={40} height={40} alt="Logo" />
        </div>
    );
}
