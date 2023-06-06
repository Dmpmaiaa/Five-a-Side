export default function Tolerance(props) {
  return (
    <div className="pt-10">
      <div className=" flex-col justify-center items-center w-[248px] h-[116px]  rounded-lg bg-darkBlueBtn text-contrastOffWhite ">
        <div className="flex justify-center items-center pt-5">
          <span>Confirmar reserva?</span>
        </div>
        <div className="flex justify-center space-x-7 pt-6">
          <button className="bg-red-700 block rounded-full w-[66px] h-[22px] text-center text-sm">
            Não
          </button>
          <button className="bg-green-600 block rounded-full w-[66px] h-[22px] text-center text-sm">
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
