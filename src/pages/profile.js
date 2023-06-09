import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/Topbar";

export default function Profile(props) {
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden pt-3">
            <Topbar />
            <div className="flex flex-col items-center text-contrastOffWhite pt-8  ">
                <div className=" rounded-full w-[144px] h-[144px] border-b border-r border-primaryBlue flex intems-center justify-center  text-center">
                    <Image
                        width={142}
                        height={142}
                        src={"/../public/images/mendes.png"}
                        className="rounded-full"
                    />
                </div>

                <div className=" text-2xl pt-5">
                    <span className="block text-center font-robotoBold">
                        {" "}
                        Fernando{" "}
                    </span>
                    <span className="font-robotoBold ">Mendes, 60 🇵🇹 </span>
                </div>
                <div className="space-y-3 mt-10 flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-3 text-center pb-5">
                        <div className="text-contrastOffWhite w-72 h-12  rounded-full flex items-center justify-center bg-primaryDarkerBlue font-robotoRegular">
                            <span>Jogos Criados</span>
                        </div>
                        <div className="text-contrastOffWhite  w-72 h-12 flex items-center justify-center rounded-full bg-primaryDarkerBlue text-center font-robotoRegular ">
                            <span>Logout</span>
                        </div>
                    </div>
                    <div className="h-[1px]  w-48 border-t opacity-50 "></div>
                    <div className="space-y-4 pt-4 text-xs flex items-center justify-center ">
                        <div className="text-contrastOffWhite  flex flex-col items-center justify-center gap-2   ">
                            <Link href={"/aboutus"}>
                                <span className="opacity-50">Sobre Nós</span>
                            </Link>
                            <Link href={"/terms"}>
                                <span className="opacity-50">Termos e Condições</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar page={"profile"} />
        </div>
    );
}
