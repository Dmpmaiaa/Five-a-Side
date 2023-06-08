import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { MomentFormatSpecification } from "moment";

export default function GameCard({
  gameId,
  location,
  numPlayer,
  schedule,
  participants,
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
  console.log(participants)
  return (
    <div className="text-white pl-1 h-[90px] flex items-center justify-around border rounded-[10px] border-white">
      <div className="flex flex-col mx-1 w-[89px] h-[89px]">
        {findCorrectField(fieldId)?.img && (
          <Image
            priority
            src={findCorrectField(fieldId)?.img}
            width={100}
            height={100}
            alt="Fotografia do campo"
            className=" w-[90px] h-[90px] rounded-[10px]"
          />
        )}
      </div>

      <div className="flex flex-col pt-5 pb-5 pl-2  text-contrastOffWhite w-1/3 ">
        <p className="text-sm pb-3 font-robotoBold">
          {findCorrectField(fieldId)?.name}
        </p>

        <p className="text-xs font-robotoRegular">{location}</p>
        <div className="flex gap-2 text-xs pt-3">
          <span className="font-robotoRegular">
            {moment(date).format("DD-MM-YYYY")}
          </span>
          <span className="font-robotoRegular ">{schedule}</span>
        </div>
      </div>
      {/* <button className="bg-white rounded" onClick={() => console.log()}>OKADOPAS</button>
       */}
      <div>
        <div
          className={`flex flex-col ${
            numPlayer < 8
              ? "bg-primaryBlue"
              : "bg-secondaryYellow text-primaryDarkestBlue"
          } w-14 rounded justify-center m-2 text-sm `}
          onClick={(uid, gid) => signToGame("6479ec3f1de2044d9892aaba", gameId)}
        >
          <span>{numPlayer}/10</span>
          {participants.some(el => el === "6479ec3f1de2044d9892asaba") && <button className="bg-green-500 rounded-lg w-[80px] h-[28px] ">
            Inscrito
          </button>}
        </div>
        
      </div>
      {/* <div className="flex flex-col mr-3 space-y-1  ">
          <button className=" bg-primaryBlue text-contrastOffWhite rounded-lg w-[80px] h-[28px] p">
            0/10 +
            {/** NUMERO DE JOGADORES INSCRITOS. MUDAR A COR CONSOANTE N DE INSCRITOS
          </button>
          
        </div> */}
    </div>
  );
}
