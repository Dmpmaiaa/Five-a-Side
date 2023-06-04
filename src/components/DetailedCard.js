import Image from "next/image";
import map from "#/images/mapa.PNG";

export default function DetailedCard({
  image,
  price,
  name,
  location,
  workingHours,
  details,
  cardId,
  description,
  moreOptions,
}) {
  return (
    <>
      {/* CARD INFO */}
      <div className="w-full bg-primaryDarkestBlue rounded-lg border-primaryBlue border-solid border border-opacity-10 flex flex-col items-center pt-[10px] px-[10px] pb-20">
        {/* IMAGE */}
        <div className="relative w-full h-[300] rounded-lg ">
          <Image
            onClick={() => moreOptions()}
            src={image} /* image */
            width={window.screen.width}
            height={300}
            alt="Fotografia do Ringue da Matriz"
            className="rounded-t-lg block"
          />

          <div className="absolute w-[105px] h-[20px] bg-primaryBlue bottom-3 left-3 rounded-md">
            <p className="text-center text-sm text-contrastOffWhite">
              <a href="tel:917085707">☏</a>
            </p>
          </div>
        </div>

        <div className="flex w-full p-2 px-3 rounded-b-lg justify-between z-10 bg-primaryDarkestBlue border border-primaryDarkestBlue">
          <div>
            <h2 className="text-contrastOffWhite font-semibold text-m">
              {name}{" "}
              <span className="text-contrastOffWhite text-xs font-thin">
                {details.type}
              </span>
            </h2>

            <span className="text-primaryBlue text-xs">{workingHours}</span>

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
                {details.vest && "Coletes"}
              </li>
              <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
                {details.lockerRoom && "Balneários"}
              </li>
            </ul>
          </div>
        </div>

        <section className="text-contrastOffWhite py-5 px-3">
          <h5>Sobre</h5>

          <p>{description}</p>
        </section>
        <div>
          <Image
            src={map} /* image */
            width={300}
            height={300}
            alt="Fotografia do Ringue da Matriz"
            className="rounded-lg block shadow-md"
          />
        </div>
        <div>
            <input type="date"></input>
        </div>
        <div className="fixed h-20 bottom-0 w-screen flex justify-center items-end p-3 pb-5 bg-gradient-to-t from-black from-5% to-primaryDarkestBlue ">
          <button className="rounded-3xl w-48 h-8 bg-primaryBlue text-contrastOffWhite">
            Reserva
          </button>
        </div>
      </div>
    </>
  );
}
