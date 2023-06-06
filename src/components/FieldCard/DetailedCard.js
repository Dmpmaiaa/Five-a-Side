import { Box, Slider } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Datepicker from "./Datepicker";
import { useState } from "react";

export default function DetailedCard({description, postGame}) {
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

  const [date, setDate] = useState()
  const [participants, setParticipants] = useState(second)
  const valuetext = (value) => {
    setParticipants(value);
  };

  return (
    <>
    <div>
      <Datepicker />
      
    </div>
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
          className="bg-primaryBlue rounded-3xl w-48 h-8 text-contrastOffWhite"
        >
          Marcar Jogo
        </button>
      </div>
    </>
  );
}
