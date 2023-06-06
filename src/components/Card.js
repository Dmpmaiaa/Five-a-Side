import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { data } from "autoprefixer";

export default function Card({
    image,
    price,
    name,
    location,
    workingHours,
    details,
    cardId,
    description,
    handleData
}) {
    const [open, setOpen] = useState(false);
  
    


    return (
        <>
            <motion.div
                animate={{
                    height: open ? "130vh" : "338px",
                    translateY: open ? "0px" : "0px",
                }}
                className="w-[368px] bg-primaryDarkestBlue rounded-lg border-primaryBlue border-solid border border-opacity-10 flex flex-col items-center pt-[10px] px-[10px] mb-5"
            >
                {/* IMAGE */}
                <div className="relative w-full rounded-lg h-[208px]">
                    <Image
                        onClick={() => setOpen((prevState) => !prevState)}
                        priority
                        src={image} /* image */
                        width={364}
                        height={210}
                        alt="Fotografia do Ringue da Matriz"
                        className="rounded-lg block"
                    />

                    <div className="absolute w-[70.97px] h-[20px] bg-primaryBlue bottom-3 left-3 rounded-md">
                        <p className="text-center text-sm text-contrastOffWhite">
                            {price} €
                        </p>
                    </div>
                </div>

                <div className="flex w-full p-2 px-3 justify-between z-10 bg-primaryDarkestBlue border border-primaryDarkestBlue">
                    <div>
                        <h2 className="text-contrastOffWhite font-semibold text-m">
                            {name}
                        </h2>

                        <span className="text-primaryBlue text-xs">
                            {workingHours}
                        </span>

                        <span className="text-contrastOffWhite text-sm block">
                            {location}
                        </span>
                        <input
                            type="date"
                            onChange={(e) => handleData(e)}
                        ></input>
                    </div>
                    <div className="flex items-center ">
                        <ul className="flex flex-wrap">
                            <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
                                {details.ball && "Bola"}
                            </li>
                            <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
                                {details.type}
                            </li>
                            <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
                                {details.vest && "Coletes"}
                            </li>
                            <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
                                {details.lockerRoom && "Balneários"}
                            </li>
                        </ul>
                    </div>
                </div>
                <motion.div
                    animate={{
                        opacity: open ? "1" : "0",
                        transform: !open
                            ? "translateY(0px)"
                            : "translateY(0px)",
                    }}
                    className="text-contrastOffWhite relative"
                >
                    <section className="text-contrastOffWhite py-5 px-3">
                        <h5>Sobre</h5>

                        <p>{description}</p>
                    </section>

                    <div className="flexjustify-center items-end pb-5 bg-gradient-to-t from-black from-5% to-gradientAlpha ">
                        <button
                            onClick={() => postGame(dataTosend)}
                            className="rounded-3xl w-48 h-8 bg-primaryBlue text-contrastOffWhite "
                        >
                            Reserva
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
