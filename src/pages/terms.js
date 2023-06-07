import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Router, useRouter } from "next/router";
export default function Termos() {

  const router = useRouter()
  return (
    <div>
      <div className="flex items-center p-10 justify-center">
        <Image width={130} height={130} src="/../public/images/logotemp.png" />
      </div>
      <div className="pr-10 pb-10 pl-10">
        <p className="text-contrastOffWhite text-sm  pb-10 text-center font-robotoRegular">
          TERMOS E CONDIÇÕES:
        </p>

        <ol className="text-contrastOffWhite text-xs text-justify font-robotoThin list-decimal leading-[20px] text- mb-2">
       
          {/** NAO SEI SE GOSTO DO TEXT JUSTIFY */}
          <li className="mb-1">
            <span className="font-robotoRegular">Respeito:</span> Todos os
            utilizadores devem tratar-se com respeito e cortesia. Não será
            tolerado qualquer tipo de comportamento abusivo, discriminatório ou
            ofensivo
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Autenticidade:</span> O momento do
            registo, os utilizadores devem fornecer informações verdadeiras e
            precisas, e atualizá-las periodicamente.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Privacidade:</span> Os
            utilizadores não devem partilhar ou publicar informações pessoais de
            outros utilizadores sem o seu consentimento explícito.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Comunicação </span>respeitosa: As
            comunicações devem permanecer respeitosas e profissionais. Palavras
            obscenas, ofensas ou ameaças não são permitidas.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Segurança:</span> Os utilizadores
            são responsáveis pela segurança das suas próprias contas e devem
            tomar medidas para garantir que as suas credenciais de login sejam
            mantidas em segurança.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Uso responsável:</span> Os
            utilizadores devem utilizar a aplicação de maneira responsável e não
            devem tentar interromper o serviço ou aceder a partes da aplicação
            para as quais não têm permissão.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Cumprimento das regras:</span> Os
            utilizadores devem concordar em cumprir todas as regras da aplicação
            e aceitar qualquer consequência que possa resultar da violação
            dessas regras.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Cooperação:</span> Os utilizadores
            devem estar dispostos a colaborar com os administradores da
            aplicação em qualquer investigação sobre possíveis violações das
            regras.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Conteúdo adequado:</span> Os
            utilizadores não devem publicar ou compartilhar qualquer conteúdo
            que seja ilegal, ofensivo, pornográfico, violento ou de alguma forma
            inadequado.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Responsabilidade de risco:</span>{" "}
            Ao participar em qualquer jogo organizado através da aplicação, os
            utilizadores assumem voluntariamente todos os riscos associados à
            mesma. Os riscos podem incluir, mas não estão limitados a, lesões
            físicas, danos à propriedade e perda de propriedade pessoal.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Responsabilidade pessoal:</span>{" "}
            Os utilizadores são pessoalmente responsáveis pela sua segurança e
            bem-estar durante os jogos. Eles devem garantir que estão
            fisicamente aptos para participar e que têm o equipamento adequado
            para fazê-lo com segurança.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Primeiros socorros:</span> Os
            utilizadores devem estar preparados para administrar primeiros
            socorros básicos a si mesmos ou a outros, caso seja necessário
            durante um jogo. A aplicação não fornece serviços médicos de
            emergência.
          </li>
          <li className="mb-1">
            <span className="font-robotoBold">Desobrigação:</span> A aplicação,
            seus proprietários, funcionários e agentes não são responsáveis por
            qualquer dano, lesão, perda, reclamação, ação, responsabilidade ou
            despesa de qualquer tipo resultante ou relacionada direta ou
            indiretamente com a participação do utilizador nos jogos.
          </li>
        </ol>
      </div>
      <div className="pb-24 flex items-center justify-center">
        <button className="h-8 w-20 rounded-full bg-darkBlueBtn text-contrastOffWhite font-robotoRegular" onClick={() => router.push('/profile')}>
          Voltar
        </button>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );

}