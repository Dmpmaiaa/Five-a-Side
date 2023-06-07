import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { MomentFormatSpecification } from "moment";

export default function GameCard({
    gameId,
    location,
    numPlayer,
    schedule,
    date,
    signToGame,
    fieldId,
}) {
    const [fieldInfo, setFieldInfo] = useState([]);

    const findCorrectField = (id) => {
        return fieldInfo.find((ele) => ele._id == id);
    };

    const fetchData = async () => {
        const fieldRes = await fetch("/api/campos");
        const fieldData = await fieldRes.json();
        setFieldInfo(await fieldData);
    };

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, []);

    return (
        <div className="text-white w-screen flex items-center justify-around border border-white">
            <div className="flex flex-col">
                {findCorrectField(fieldId)?.img && (
                    <Image
                        priority
                        src={findCorrectField(fieldId)?.img}
                        width={100}
                        height={100}
                        alt="Fotografia do campo"
                        className="rounded-[10px]"
                    />
                )}
            </div>

      <div className="flex flex-col pt-3 pe-3 pb-3 leading-9 text-contrastOffWhite w-2/3 ">
        <p className="text-m font-robotoBold">{findCorrectField(fieldId)?.name}</p>

        <p className="text-xs font-robotoRegular">{location}</p>
        <div className="flex gap-2 text-xs">
          <span className="font-robotoRegular">{moment(date).format("DD-MM-YYYY")}</span>
          <span className="font-robotoRegular ">{schedule}</span>
        </div>
      </div>
      {/* <button className="bg-white rounded" onClick={() => console.log()}>OKADOPAS</button>
       */}
      <div>
        <div
          className={`flex ${
            numPlayer < 8
              ? "bg-primaryBlue"
              : "bg-secondaryYellow text-primaryDarkestBlue"
          } w-14 rounded justify-center m-2 text-sm `}
          onClick={(uid, gid) => signToGame("6479ec3f1de2044d9892aaba", gameId)}
        >
          <span>{numPlayer}</span>
        </div>
        <div className="justify-start">
        <button className="bg-primaryBlue text-contrastOffWhite rounded-lg w-[85px] h-[">what</button>
      </div>
      </div>
      
    </div>
  );
}
