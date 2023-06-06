import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import DetailedCard from "./DetailedCard";
import FieldDetails from "./FieldDetails";

export default function Card({
  image,
  price,
  name,
  location,
  workingHours,
  details,
  cardId,
  description,
  postGame,
}) {
  const [signedToGame, setSignedToGame] = useState(false);
  const [open, setOpen] = useState(false);
  const [participants, setParticipants] = useState(0);
  const hostId = "6479ec3f1de2044d9892aaba";

  const valuetext = (value) => {
    setParticipants(value);
  };

  return (
    <>
      <motion.div
        animate={{
          height: open ? "" : "348px",
        }}
        className="w-[368px] bg-primaryDarkerBlue rounded-lg border-primaryBlue border-solid border border-opacity-10 flex flex-col items-center pt-[10px] px-[10px] mt-4"
      >
      
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

            <span className="text-primaryBlue text-xs">{workingHours}</span>

            <span className="text-contrastOffWhite text-sm block">
              {location}
            </span>
          </div>

          <div className="flex items-center ">
            <FieldDetails
              ball={details.ball}
              type={details.type}
              vest={details.vest}
              lockerRoom={details.lockerRoom}
            />
          </div>
        </div>

        {open && (
          <motion.div
            animate={{
              opacity: open ? "1" : "0",
            }}
            className="text-contrastOffWhite relative"
          >
            <DetailedCard
              valuetext={(e) => valuetext(e)}
              description={description}
              postGame={postGame}
            />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}





















{/* <div className="flex justify-center">
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
</div> */}