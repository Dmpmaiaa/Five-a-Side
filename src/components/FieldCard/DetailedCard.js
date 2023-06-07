import { Box, Slider } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Datepicker from "./Datepicker";
import { useState } from "react";
import moment from "moment";

{
    /* PROPS A VIAJAREM ATÉ NARNIA */
}

export default function DetailedCard({ description, postGame, handleInfo }) {
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

    const handleDateAndHours = (date) => {
        handleInfo("date", new Date(moment(date.$d).format("DD-MM-YYYY")));
        handleInfo("hours", new Date(moment(date.$d).format("HH:mm")));
    };

    return (
        <>
            <div className="flex justify-center">
                <Box sx={{ width: 300 }}>
                    <Slider
                        aria-label="Always visible"
                        defaultValue={1}
                        onChange={(e) =>
                            handleInfo("participants", e.target.value)
                        }
                        step={1}
                        marks={options}
                        valueLabelDisplay="off"
                        min={1}
                        max={10}
                    />
                </Box>
            </div>

            <div>
                <Datepicker
                    updateDate={(newValue) => handleDateAndHours(newValue)}
                />
            </div>

            <section className="text-contrastOffWhite font-robotoRegular px-3 py-6">
                {/* <h5 className="font-bold pb-3">Sobre</h5>  ACHO QUE NÃO HA NECESSIDADE DE DIZER "SOBRE". TIP DA MARIA SENSUAL */}
                <p>{description}</p>
            </section>

            <div className="flex justify-center items-end py-4">
                <button
                    onClick={postGame}
                    className="bg-primaryBlue rounded-3xl w-48 h-8 text-contrastOffWhite  font-robotoRegular"
                >
                    Marcar Jogo
                </button>
            </div>
        </>
    );
}
