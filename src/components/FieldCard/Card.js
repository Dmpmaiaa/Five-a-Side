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
  handleInfo
}) {
  const [open, setOpen] = useState(false);
  const hostId = "6479ec3f1de2044d9892aaba";



  return (
    <>
      <motion.div
        animate={{
          height: open ? "fit-content" : "fit-content",
          
        }}
        transition={{duration: 1}}
        className="w-[368px] bg-primaryDarkerBlue rounded-lg border-primaryBlue border-solid border border-opacity-10 flex flex-col items-center py-[10px] px-[10px] mt-4"
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
            className={`absolute w-[70px] h-[20px] bg-primaryBlue bottom-4 left-3 rounded-md`}
          >
            <p className="text-center text-sm text-contrastOffWhite">
              {price} €
            </p>
          </div>
        </div>

        <div className="flex w-full p-3 justify-between z-10 bg-primaryDarkerBlue">
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
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.4 }}
            className="text-contrastOffWhite relative"
          >
            <DetailedCard
                 handleInfo={(date, id, participants, schedule, hostId) =>
                  
                  handleInfo(date, id, participants, schedule, hostId)}

              description={description}
              postGame={postGame}
            />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

