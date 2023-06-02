export default function Card({ image, price, name, workingHours, details }) {
  return (
    <>
      <div className="relative w-96 h-96 bg-[#020E16] rounded-lg border-solid  border-[0.7px] border-opacity-65 border-hex-153c58 p-4">
        <div>
          <div className=" w-16 h-6 bg-blue-400 rounded left-8 top-88 flex justify-center">
            {/* <img src="../src/images/courts_2048_1593712349.jpg" alt="Minha Imagem" /> */}
            <p className="text-[#F4F4F9] text-center font-semibold">25€</p>
          </div>
          <img />
        </div>
        <div>
          <h2 className="text-[#F4F4F9] font-semibold">Ringue Matriz</h2>
          <span className="text-[#0C8CE9]">9:00-22:00</span>
          <p className="text-[#F4F4F9]">Povoa de Varzim</p>
        </div>
      </div>
    </>
  );
}

/**
 * DIV MAIN ABSORVE AS DUAS SEGUINTES
 * 1 DIV RENDERIZA A IMG DO CAMPO + 1 DIV PARA PREÇO DO CAMPO
 * 2 DIV RENDERIZA TODA A INFO:
 *  -NOME DO CAMPO: H2/H3?,
 *  -HORARIO: SPAN?,
 *  -TIPO DE CAMPO: IMG FIXA E TEXTO CHANGEABLE,
 *  -BOLA: IMG FIXA, TEXTO CHANGEABLE,
 *  -COLETE: IMG FIXA, TEXTO CHANGEABLE,
 *  -LOCALIZAÇÃO: SPAN?
 */
