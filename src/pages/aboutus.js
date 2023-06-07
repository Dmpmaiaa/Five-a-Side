import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function AboutUs() {
  return (
    <div>
      <div className="flex items-center p-10 justify-center">
        <Image width={130} height={130} src="/../public/images/logotemp.png" />
      </div>
      <div className="pr-10 pb-10 pl-10 text-contrastOffWhite text-xs text-justify font-riftRegular leading-5">
        <p>Bem-vindo ao Five a Side!</p>
        <br />
        <p>
          O Five a Side é um projeto criado por quatro estudantes do programa{" "}
          <span className="text-primaryBlue font-riftItalic">Bytes4Future</span>
          : Bárbara Oliveira, Diogo Maia, Júlio Macedo e Solange Dias.
        </p>

        <p>
          Este projeto é o resultado final do nosso curso e representa o nosso
          esforço e dedicação para criar uma aplicação de futebol única.
        </p>
        <p>
          
          O objetivo do Five a Side é reunir pessoas apaixonadas por futebol e
          proporcionar-lhes uma plataforma para se conectarem, organizarem jogos
          e desfrutarem do desporto em equipa. Acreditamos que o futebol é uma
          forma incrível de promover o companheirismo, a diversão e um estilo de
          vida saudável. Com o Five a Side, pode criar uma conta e juntar-se à
          nossa comunidade de jogadores entusiastas.
        </p>

        <p>
        Poderá marcar jogos em
          diferentes campos disponíveis, escolhendo a data que melhor se adequam
          à sua agenda.
          A inscrição em jogos está disponível, desde que haja vagas
          disponíveis.
        </p>

        <p>
          Valorizamos a privacidade e a segurança dos nossos utilizadores. Por
          isso, garantimos que as informações fornecidas durante o processo de
          criação de conta são protegidas e utilizadas apenas para melhorar a
          experiência na plataforma. Esforçamo-nos por criar um ambiente
          amigável e respeitoso, onde todos possam desfrutar do futebol de forma
          positiva.
        </p>

        <p>
          O Five a Side é o resultado da nossa paixão pelo futebol e pela
          tecnologia. Esperamos que esta aplicação seja uma ferramenta útil para
          todos os jogadores e que ajude a fortalecer as conexões entre os
          amantes do futebol em todo o lado.
        </p>
        <p>
          Agradecemos por fazer parte da nossa comunidade e esperamos que
          aproveite ao máximo a sua experiência no Five a Side!
        </p>

        <p>Equipa Five a Side</p>
      </div>
      <div className="pb-24 flex items-center justify-center">
        <button className="h-8 w-20 rounded-full bg-darkBlueBtn text-contrastOffWhite font-robotoRegular">
          Voltar
        </button>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
