import Image from "next/image";
import {
  FaSquareGithub,
  FaLinkedin,
  FaSquareYoutube,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa6";
import { SiHtmx } from "react-icons/si";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center py-5 px-3 mb-9">
        <div className="relative w-64 h-12">
          <Image
            src="/images/logo-bemcodado.png"
            alt="Logo da BemCodado"
            fill
          />
        </div>
        <nav>
          <ul className="flex justify-between gap-1">
            <li>
              <a href="https://github.com/claudiocassimiro" target="_blank">
                <FaSquareGithub size="30" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/claudiocassimiro/"
                target="_blank"
              >
                <FaLinkedin size="30" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCzF6Vl73Gs_-rYw1r37By9Q"
                target="_blank"
              >
                <FaSquareYoutube size="30" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="px-3">
        <section className="mb-9">
          <h1 className="text-2xl mb-5">
            Bem-Vindo à <span className="block text-3xl">BemCodado!</span>
          </h1>
          <p className="text-lg mb-5 text-justify">
            Na BemCodado, estamos comprometidos em ajudar você a alcançar seus
            objetivos de aprendizado e desenvolvimento na área de programação.
            Nossos serviços de mentoria são projetados para fornecer suporte
            personalizado e orientação especializada para estudantes,
            profissionais e entusiastas de tecnologia.
          </p>
          <a
            href="#plans"
            className="border block rounded p-3 w-full text-center transition delay-180 hover:bg-slate-600"
          >
            Conheça nossos planos!
          </a>
        </section>
        <section className="mb-9">
          <h2 className="text-2xl mb-5">Tecnologias</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <SiHtmx size="20" /> Fundamentos do Desenvolvimento de Software
            </li>
            <li className="flex items-center gap-1">
              <FaReact size="20" /> Front-End
            </li>
            <li className="flex items-center gap-1">
              <FaNodeJs size="20" /> Back-end
            </li>
            <li className="flex items-center gap-1">
              <FaDatabase size="20" /> Banco de Dados (SQL & NoSQL)
            </li>
          </ul>
        </section>
        <section className="mb-9">
          <h2 className="text-2xl mb-5">Por que Escolher a BemCodado?</h2>
          <ul className="flex flex-col gap-3 border rounded p-3 shadow-xl">
            <li className="text-lg text-justify">
              <strong>Experiência Comprovada:</strong> Nossos mentores têm vasta
              experiência na indústria de tecnologia e estão comprometidos em
              ajudá-lo a ter sucesso em sua jornada de aprendizado.
            </li>
            <li className="text-lg text-justify">
              <strong>Abordagem Prática:</strong> Nossas sessões de mentoria são
              práticas e orientadas para resultados, focadas em ajudá-lo a
              aplicar seus conhecimentos em projetos reais.
            </li>
            <li className="text-lg text-justify">
              <strong>Flexibilidade:</strong> Oferecemos horários flexíveis para
              se adequar à sua agenda ocupada. Escolha entre sessões individuais
              ou em grupo, e trabalhe no seu próprio ritmo.
            </li>
            <li>
              <strong>Suporte Contínuo:</strong> Estamos aqui para apoiá-lo em
              cada etapa do seu caminho de aprendizado. Além das sessões de
              mentoria, oferecemos recursos adicionais, materiais de estudo e
              suporte por e-mail para garantir que você alcance seus objetivos.
            </li>
          </ul>
        </section>
        <section id="plans" className="mb-9">
          <h2 className="text-2xl mb-5">
            Comece Sua Jornada de Aprendizado Conosco!
          </h2>
          <p className="text-lg mb-5 text-justify">
            Explore nossos serviços de mentoria hoje e dê o próximo passo em
            direção ao seu sucesso na programação. Junte-se à comunidade
            BemCodado e transforme suas aspirações em realidade.
          </p>
          <section className="mb-5 border rounded p-2 shadow-xl">
            <h2 className="text-xl mb-1">Mentoria em Grupo</h2>
            <p className="text-lg mb-1">Aqui você terá:</p>
            <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-2">
              <li className="text-justify">
                - Sessões diárias de mentoria em grupo no Discord, de segunda a
                sexta-feira, com foco em tópicos específicos.
              </li>
              <li className="text-justify">
                - Acesso a materiais de estudo, recursos e exercícios práticos.
              </li>
              <li className="text-justify">
                - Suporte por e-mail ou mensagem para dúvidas adicionais entre
                as sessões.
              </li>
            </ul>
            <p className="text-lg mb-2">Valor Fixo Mensal: R$ 250,00</p>
            <button className="border block rounded p-3 w-full text-center transition delay-180 hover:bg-slate-600">
              Inscrever-se
            </button>
          </section>
          <section className="mb-5 border rounded p-2 shadow-xl">
            <h2 className="text-xl mb-1">Mentoria Individual</h2>
            <p className="text-lg mb-1">Aqui você terá:</p>
            <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-2">
              <li className="text-justify">
                - Sessões individuais personalizadas com foco nos objetivos e
                necessidades específicas de cada aluno.
              </li>
              <li className="text-justify">
                - Sessões disponíveis de segunda a sexta-feira.
              </li>
              <li className="text-justify">
                - Acesso prioritário para agendamento de sessões.
              </li>
              <li className="text-justify">
                - Revisão e feedback detalhados sobre projetos, portfólio ou
                trabalhos específicos.
              </li>
              <li className="text-justify">
                - Suporte por e-mail ou mensagem para dúvidas adicionais entre
                as sessões.
              </li>
            </ul>
            <p className="text-lg mb-1">Valor Fixo Mensal: R$ 500,00</p>
            <p className="text-lg mb-2">
              Valor Avulso por Sessão Individual: R$ 75,00
            </p>
            <button className="border block rounded p-3 w-full text-center transition delay-180 hover:bg-slate-600">
              Inscrever-se
            </button>
          </section>
          <section className="mb-5 border rounded p-2 shadow-xl">
            <h2 className="text-xl mb-1">Plano de 6 Meses</h2>
            <p className="text-lg mb-1">Mentoria em Grupo:</p>
            <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-2">
              <li className="text-justify">
                Valor Mensal: de <span className="line-through">R$250,00</span>{" "}
                por R$ 210,00
              </li>
              <li className="text-justify">
                Valor Total (6 Meses): R$ 1260,00 (desconto de R$ 240,00)
              </li>
            </ul>
            <p className="text-lg mb-1">Mentoria Individual:</p>
            <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-5">
              <li className="text-justify">
                Valor Mensal: de <span className="line-through">R$504,00</span>{" "}
                por R$ 416,00
              </li>
              <li className="text-justify">
                Valor Total (6 Meses): R$ 2496,00 (desconto de R$ 504,00)
              </li>
            </ul>
            <button className="border block rounded p-3 w-full text-center transition delay-180 hover:bg-slate-600">
              Inscrever-se
            </button>
          </section>
          <section className="mb-5 border rounded p-2 shadow-xl">
            <h2 className="text-xl mb-1">Plano de 1 Ano</h2>
            <p className="text-lg mb-1">Mentoria em Grupo:</p>
            <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-2">
              <li className="text-justify">
                Valor Mensal: de <span className="line-through">R$250,00</span>{" "}
                por R$ 208,00
              </li>
              <li className="text-justify">
                Valor Total (1 Ano): R$ 2496,00 (desconto de R$ 504,00)
              </li>
            </ul>
            <p className="text-lg mb-1">Mentoria Individual:</p>
            <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-5">
              <li className="text-justify">
                Valor Mensal: de <span className="line-through">R$500,00</span>{" "}
                por R$ 416,00
              </li>
              <li className="text-justify">
                Valor Total (1 Ano): R$ 4992,00 (desconto de R$ 1008,00)
              </li>
            </ul>
            <button className="border block rounded p-3 w-full text-center transition delay-180 hover:bg-slate-600">
              Inscrever-se
            </button>
          </section>
        </section>
      </main>
      <footer className="flex justify-center p-2">
        <p>&copy; 2024 BemCodado. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
