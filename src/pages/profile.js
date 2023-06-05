import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Profile(props) {
  return (
    <div className="flex flex-col items-center  pt-10">
        <div className="pr-52 pb-">
            <div className="">Icon</div>
            </div>
      <div className="flex flex-col items-center text-contrastOffWhite ">
  
        <div className=" rounded-full w-[144px] h-[144px] border-b border-r border-primaryBlue    text-center">
          
        </div>
        <div className=" text-2xl pt-7">Nome Idade e bandeira</div>
        <div className="space-y-4 mt-14">
          <div className="flex gap-4 text-center">
            <div className="text-contrastOffWhite w-36 h-16  rounded-lg flex items-center justify-center bg-primaryDarkerBlue ">
              Jogos Criados
            </div>
            <div className="text-contrastOffWhite w-32 h-16  rounded-lg  flex items-center justify-center bg-primaryDarkerBlue">
              Jogos Inscritos
            </div>
          </div>
          <div className="space-y-4">
           <div className="text-contrastOffWhite  w-72 h-16 flex items-center justify-center rounded-lg bg-primaryDarkerBlue  ">
              <span>Termos e Condições</span>
            </div>
            <div className="text-contrastOffWhite  w-72 h-16  rounded-lg bg-primaryDarkerBlue text-center py-4">
             <span>Logout</span> 
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
