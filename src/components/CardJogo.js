export default function CardJogo({ 
    image,
    price,
    name,
    workingHours,
    details,
  }) {
    return (
      <>
        <div className="absolute w-96 h-96 bg-[#020E16] rounded-lg border-solid  border-[0.7px] border-opacity-65 border-hex-153c58 left-14 top-84 flex flex-col justify-end p-4">
          <div>

            {/* <img src="../src/images/courts_2048_1593712349.jpg" alt="Minha Imagem" /> */}

          </div>
            <img />
          </div>
          <div> 
            <h2 className="text-[#F4F4F9] font-semibold">Ringue Matriz</h2>
            <p className="text-[#F4F4F9]">Povoa de Varzim</p>
            <span className="text-[#0C8CE9]">16:00</span>
            <span className="text-[#0C8CE9]">17/06/2023</span>
            
          </div>

      </>
    );
  }
  