import Image from "next/image";

export default function CardJogo({
  image,
  price,
  name,
  workingHours,
  details,
}) {
  return (
    <>
      {/* WRAPPER */}
      <div className="w-[368px] h-[304px] bg-primaryDarkestBlue rounded-lg border-primaryBlue border-solid border border-opacity-10 flex flex-col items-center pt-[10px] px-[10px] mb-5">
        {/* IMAGE */}
        <div className="relative w-full h-[208px] rounded-lg ">
          <Image
            src="/../public/images/ringMatriz.jpg" /* image */
            width={364}
            height={210}
            alt="Fotografia do Ringue da Matriz"
            className="rounded-lg block"
          />

          <div className="absolute w-[70.97px] h-[20px] bg-primaryBlue bottom-3 left-3 rounded-md">
            <p className="text-center text-sm text-contrastOffWhite">
              25 € {/* price */}
            </p>
          </div>
        </div>

        <div className="flex w-full pt-2 px-3 justify-between z-10 bg-primaryDarkestBlue border border-primaryDarkestBlue">
          <div>
            <h2 className="text-contrastOffWhite font-semibold text-m">
              Ringue Matriz {/* name */}
            </h2>

            <span className="text-primaryBlue text-xs">09:00 - 22:00 {/* workingHours */}</span>

            <span className="text-contrastOffWhite text-sm block">
              Povoa de Varzim {/* location */}
            </span>
          </div>
          <div className="flex items-center ">
            <ul className="flex flex-wrap">
              {" "}
              {/* details */}
              <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
                Bola
              </li>
              <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
                Sintético
              </li>
              <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
                Coletes
              </li>
              <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
                Balneário
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
