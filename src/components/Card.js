import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Slider, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { DatePicker, DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Card({
    image,
    price,
    name,
    location,
    workingHours,
    details,
    cardId,
    description,
    handleData,
    postGame,
}) {
    const options = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" },
        { value: "10", label: "10" },
    ];

    const [signedToGame, setSignedToGame] = useState(false);
    const [open, setOpen] = useState(false);
    const [participants, setParticipants] = useState(0);
    const hostId = "6479ec3f1de2044d9892aaba";
    const [dates, setDates] = useState({})

    const valuetext = (value) => {
        setParticipants(value);
    };

    // let theme = createTheme({
    //     palette: {
    //         primary: {
    //             main: "#0C8CE9",
    //         },
    //         secondary: {
    //             main: "#f4f4f9",
    //         },
    //     },
    // });

    // theme = createTheme(theme, {
    //     palette: {
    //         info: {
    //             main: theme.palette.secondary.main,
    //         },
    //     },
    // });

    return (
        <>
            <motion.div
                animate={{
                    height: open ? "" : "348px",
                }}
                className="w-[368px] bg-primaryDarkerBlue rounded-lg border-primaryBlue border-solid border border-opacity-10 flex flex-col items-center pt-[10px] px-[10px] mt-4"
            >
                {/* IMAGE */}
                <div className="relative w-full rounded-lg h-[200px]">
                    <Image
                        onClick={() => setOpen((prevState) => !prevState)}
                        priority
                        src={image} /* image */
                        width={364}
                        height={210}
                        alt="Fotografia do Ringue da Matriz"
                        className="rounded-lg block"
                    />

                    <div
                        className={`absolute w-[70px] h-[20px] bg-primaryBlue bottom-2 left-3 rounded-md`}
                    >
                        <p className="text-center text-sm text-contrastOffWhite">
                            {price} €
                        </p>
                    </div>
                </div>

                <div className="flex w-full  px-3 justify-between z-10 bg-primaryDarkerBlue">
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

                {open && (
                    <motion.div
                        animate={{
                            opacity: open ? "1" : "0",
                        }}
                        className="text-contrastOffWhite relative"
                    >
                        <div className="flex justify-between">
                            {/* <input
                                className="bg-primaryDarkerBlue"
                                type="date"
                                onChange={(e) =>
                                    handleData(
                                        e,
                                        cardId,
                                        participants,
                                        hostId,
                                        schedule
                                    )
                                }
                            ></input> */}
                            <div className="bg-white my-6 p-">
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}

                                >
                                    <DateTimePicker
                                        label="Horário"
                                        value={"value"}
                                        
                                        onChange={(newValue) =>
                                            setDates(preValue => ({...preValue, newValue}))
                                        }
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        // * INPUTS *//
                        <div className="flex justify-center">
                            <Box sx={{ width: 300 }}>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={1}
                                    getAriaValueText={(e) => valuetext(e)}
                                    step={1}
                                    marks={options}
                                    valueLabelDisplay="off"
                                    min={1}
                                    max={10}
                                />
                            </Box>
                        </div>
                        <section className="text-contrastOffWhite px-3 py-6">
                            <h5 className="font-bold pb-3">Sobre</h5>
                            <p>{description}</p>
                        </section>
                        <div className="flex justify-center items-end py-4">
                            <button
                                onClick={postGame}
                                className={`${
                                    !signedToGame
                                        ? "bg-primaryBlue"
                                        : "bg-secondaryGreen"
                                } rounded-3xl w-48 h-8 text-contrastOffWhite`}
                            >
                                Marcar Jogo
                            </button>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </>
    );
}
