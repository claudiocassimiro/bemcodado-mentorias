import { Cursos } from "@/components/cursos";
import Image from "next/image";
import {
  FaSquareGithub,
  FaLinkedin,
  FaSquareYoutube,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaImagePortrait,
  FaNetworkWired,
  FaUsersViewfinder,
} from "react-icons/fa6";
import { SiHtmx } from "react-icons/si";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center py-5 px-3 mb-9 w-full max-w-[1440px]">
        <div className="relative w-60 h-12 lg:w-64 lg:h-12">
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
      <main className="w-full max-w-[1440px] px-3">
        <section className="flex flex-col mb-9">
          {/* A div abaixo vai servir para Mobile */}
          <div className="flex flex-col lg:hidden">
            <h1 className="text-2xl md:text-3xl mb-5">
              Bem-Vindo à <span className="block text-4xl">BemCodado!</span>
            </h1>
            <div className="relative w-64 h-64 self-center md:w-96 md:h-96">
              <Image src="/images/homem-codando.png" alt="homem codando" fill />
            </div>
            <p className="text-lg md:text-2xl mb-5 text-justify">
              Na BemCodado, estamos comprometidos em ajudar você a alcançar seus
              objetivos de aprendizado e desenvolvimento na área de programação.
              Nossos serviços de mentoria são projetados para fornecer suporte
              personalizado e orientação especializada para estudantes,
              profissionais e entusiastas de tecnologia.
            </p>
            <a
              href="#plans"
              className="border block rounded p-3 w-full text-center transition delay-180 hover:bg-sky-500 md:text-2xl"
            >
              Conheça nossos planos!
            </a>
          </div>
          {/* A div abaixo vai servir para desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-16">
            <div className="max-w-[50%]">
              <h1 className="text-6xl mb-5">
                Bem-Vindo à <span className="block text-4xl">BemCodado!</span>
              </h1>
              <p className="text-2xl mb-5 text-justify">
                Na BemCodado, estamos comprometidos em ajudar você a alcançar
                seus objetivos de aprendizado e desenvolvimento na área de
                programação. Nossos serviços de mentoria são projetados para
                fornecer suporte personalizado e orientação especializada para
                estudantes, profissionais e entusiastas de tecnologia.
              </p>
              <a
                href="#plans"
                className="border block rounded p-3 w-full text-center transition delay-180 hover:bg-sky-500"
              >
                Conheça nossos planos!
              </a>
            </div>
            <div className="relative self-center w-[650px] h-[600px]">
              <Image src="/images/homem-codando.png" alt="homem codando" fill />
            </div>
          </div>
        </section>
        <hr />
        <section className="flex flex-col mb-9">
          {/* A div abaixo vai servir para Mobile */}
          <div className="flex flex-col lg:hidden">
            <h2 className="text-2xl md:text-3xl my-5">Tecnologias</h2>
            <div className="relative w-72 h-72 self-center md:w-96 md:h-96">
              <Image
                src="/images/pessoas-em-colaboracao.png"
                alt="pessoas em colaboração"
                fill
              />
            </div>
            <ul className="flex flex-col gap-2 md:text-2xl">
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
          </div>
          {/* A div abaixo vai servir para Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            <div className="relative self-center w-[650px] h-[600px]">
              <Image
                src="/images/pessoas-em-colaboracao.png"
                alt="pessoas em colaboração"
                fill
              />
            </div>
            <div className="w-[60%]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5">
                Tecnologias
              </h2>
              <ul className="flex flex-col gap-2 lg:text-3xl">
                <li className="flex items-center gap-1">
                  <SiHtmx size="20" /> Fundamentos do Desenvolvimento de
                  Software
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
            </div>
          </div>
        </section>
        <hr />
        <section className="flex flex-col mb-9">
          {/* A div abaixo vai servir para Mobile */}
          <div className="flex flex-col lg:hidden">
            <h2 className="text-2xl md:text-3xl my-5">Carreira</h2>
            <div className="relative w-72 h-72 self-center md:w-96 md:h-96">
              <Image
                src="/images/homem-progredindo-na-carreira.png"
                alt="pessoas em colaboração"
                fill
              />
            </div>
            <ul className="flex flex-col gap-2 md:text-2xl">
              <li className="flex items-center gap-1">
                <FaNetworkWired size="20" /> Mentoria Profissional
              </li>
              <li className="flex items-center gap-1">
                <FaUsersViewfinder size="20" /> Preparação para Entrevistas
              </li>
              <li className="flex items-center gap-1">
                <FaLinkedin size="20" /> Revisão de Currículos e Perfis LinkedIn
              </li>
              <li className="flex items-center gap-1">
                <FaImagePortrait size="20" /> Apoio na Construção de Portfólio
              </li>
            </ul>
          </div>
          {/* A div abaixo vai servir para Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            <div className="w-[60%]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5">
                Carreira
              </h2>
              <ul className="flex flex-col gap-2 lg:text-3xl">
                <li className="flex items-center gap-1">
                  <FaNetworkWired size="20" /> Mentoria Profissional
                </li>
                <li className="flex items-center gap-1">
                  <FaUsersViewfinder size="20" /> Preparação para Entrevistas
                </li>
                <li className="flex items-center gap-1">
                  <FaLinkedin size="20" /> Revisão de Currículos e Perfis
                  LinkedIn
                </li>
                <li className="flex items-center gap-1">
                  <FaImagePortrait size="20" /> Apoio na Construção de Portfólio
                </li>
              </ul>
            </div>
            <div className="relative self-center w-[650px] h-[600px]">
              <Image
                src="/images/homem-progredindo-na-carreira.png"
                alt="pessoas em colaboração"
                fill
              />
            </div>
          </div>
        </section>
        <hr />
        <section className="flex my-9">
          {/* A div abaixo vai servir para Mobile */}
          <div className="flex flex-col lg:hidden">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5">
              Por que Escolher a BemCodado?
            </h2>
            <div className="relative w-72 h-72 self-center md:w-96 md:h-96">
              <Image
                src="/images/mulher-escolhendo.png"
                alt="pessoas fazendo uma escolha"
                fill
              />
            </div>
            <ul className="flex flex-col gap-3 md:text-xl">
              <li className="text-justify">
                <strong>Experiência Comprovada:</strong> Nossos mentores têm
                vasta experiência na indústria de tecnologia e estão
                comprometidos em ajudá-lo a ter sucesso em sua jornada de
                aprendizado.
              </li>
              <li className="text-justify">
                <strong>Abordagem Prática:</strong> Nossas sessões de mentoria
                são práticas e orientadas para resultados, focadas em ajudá-lo a
                aplicar seus conhecimentos em projetos reais.
              </li>
              <li className="text-justify">
                <strong>Flexibilidade:</strong> Oferecemos horários flexíveis
                para se adequar à sua agenda ocupada. Escolha entre sessões
                individuais ou em grupo, e trabalhe no seu próprio ritmo.
              </li>
              <li>
                <strong>Suporte Contínuo:</strong> Estamos aqui para apoiá-lo em
                cada etapa do seu caminho de aprendizado. Além das sessões de
                mentoria, oferecemos recursos adicionais, materiais de estudo e
                suporte por e-mail para garantir que você alcance seus
                objetivos.
              </li>
            </ul>
          </div>
          {/* A div abaixo vai servir para Desktop */}
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-10">
            <div className="relative self-center w-[650px] h-[600px]">
              <Image
                src="/images/mulher-escolhendo.png"
                alt="pessoas em fazendo uma escolha"
                fill
              />
            </div>
            <div className="w-[50%]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5">
                Por que Escolher a BemCodado?
              </h2>
              <ul className="flex flex-col gap-3 lg:text-xl">
                <li className="text-justify">
                  <strong>Experiência Comprovada:</strong> Nossos mentores têm
                  vasta experiência na indústria de tecnologia e estão
                  comprometidos em ajudá-lo a ter sucesso em sua jornada de
                  aprendizado.
                </li>
                <li className="text-justify">
                  <strong>Abordagem Prática:</strong> Nossas sessões de mentoria
                  são práticas e orientadas para resultados, focadas em ajudá-lo
                  a aplicar seus conhecimentos em projetos reais.
                </li>
                <li className="text-justify">
                  <strong>Flexibilidade:</strong> Oferecemos horários flexíveis
                  para se adequar à sua agenda ocupada. Escolha entre sessões
                  individuais ou em grupo, e trabalhe no seu próprio ritmo.
                </li>
                <li>
                  <strong>Suporte Contínuo:</strong> Estamos aqui para apoiá-lo
                  em cada etapa do seu caminho de aprendizado. Além das sessões
                  de mentoria, oferecemos recursos adicionais, materiais de
                  estudo e suporte por e-mail para garantir que você alcance
                  seus objetivos.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr />
        <section id="plans" className="flex flex-col my-9">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5">
            Comece Sua Jornada de Aprendizado Conosco!
          </h2>
          <p className="mb-5 text-justify lg:text-xl">
            Explore nossos serviços de mentoria hoje e dê o próximo passo em
            direção ao seu sucesso na programação. Junte-se à comunidade
            BemCodado e transforme suas aspirações em realidade.
          </p>
          <div className="lg:flex lg:flex-wrap lg:gap-4">
            <section className="mb-5 border border-slate-500 rounded p-2 lg:w-[49%] shadow-xl bg-white text-black flex flex-col justify-between">
              <h2 className="text-xl mb-1 font-bold">Mentoria Individual</h2>
              <p className="text-lg mb-1">Aqui você terá:</p>
              <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-2">
                <li className="text-justify">
                  - Sessões de 1 hora, individuais e personalizada com foco nos
                  objetivos e necessidades específicas de cada aluno.
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
              {/* <p className="text-lg mb-1">Valor Fixo Mensal: R$ 500,00</p> */}
              <p className="text-lg mb-2">
                Valor por Sessão Individual: R$ 75,00 Cartão,{" "}
                <a
                  className="text-blue-600 underline"
                  href="mailto:claudioletras2019@gmail.com?subject=Quero%20pagar%20a%20Mentoria%20Individual%20no%20Pix&body=Quero%20pagar%20a%20Mentoria%20Individual%20no%20Pix%0A%0AAqui%20você%20terá%3A%0A%0A- Sessões%20de%201%20hora%2C%20individuais%20e%20personalizadas%20com%20foco%20nos%20objetivos%20e%20necessidades%20específicas%20de%20cada%20aluno.%0A- Sessões%20disponíveis%20de%20segunda%20a%20sexta-feira.%0A- Acesso%20prioritário%20para%20agendamento%20de%20sessões.%0A- Revisão%20e%20feedback%20detalhados%20sobre%20projetos%2C%20portfólio%20ou%20trabalhos%20específicos.%0A- Suporte%20por%20e-mail%20ou%20mensagem%20para%20dúvidas%20adicionais%20entre%20as%20sessões.%0A%0AValor%20por%20Sessão%20Individual%20no%20pix%3A%20R%24%2060%2C00"
                >
                  R$ 60,00 Pix.
                </a>
              </p>
              <p className="text-lg mb-2">Aceitamos todos os Cartões.</p>
              <a
                target="_blank"
                href="https://buy.stripe.com/eVabJvaRw37ffKwaEE"
                className="border block rounded p-3 w-full text-center transition delay-180 text-white bg-sky-400 hover:bg-sky-500"
              >
                Inscrever-se
              </a>
            </section>
            <section className="mb-5 border border-slate-500 rounded p-2 lg:w-[49%] shadow-xl bg-white text-black flex flex-col justify-between">
              <h2 className="text-xl mb-1 font-bold">
                Mentoria Individual - 10 mentorias no preço de 8
              </h2>
              <p className="text-lg mb-1">Aqui você terá:</p>
              <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-2">
                <li className="text-justify">
                  - Sessões de 1 hora, individuais e personalizada com foco nos
                  objetivos e necessidades específicas de cada aluno.
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
              <p className="text-lg mb-1">
                Valor Fixo para 10 Sessões: R$ 600,00 Cartão,{" "}
                <a
                  className="text-blue-600 underline"
                  href="mailto:claudioletras2019@gmail.com?subject=Quero%20pagar%20a%20Mentoria%20Individual%20-%2010%20mentorias%20no%20pre%C3%A7o%20de%208%20no%20Pix&body=Quero%20pagar%20a%20Mentoria%20Individual%20-%2010%20mentorias%20no%20pre%C3%A7o%20de%208%20no%20Pix%0A%0AAqui%20você%20terá%3A%0A%0A- Sessões%20de%201%20hora%2C%20individuais%20personalizadas%20com%20foco%20nos%20objetivos%20e%20necessidades%20específicas%20de%20cada%20aluno.%0A- Sessões%20disponíveis%20de%20segunda%20a%20sexta-feira.%0A- Acesso%20prioritário%20para%20agendamento%20de%20sessões.%0A- Revisão%20e%20feedback%20detalhados%20sobre%20projetos%2C%20portfólio%20ou%20trabalhos%20específicos.%0A- Suporte%20por%20e-mail%20ou%20mensagem%20para%20dúvidas%20adicionais%20entre%20as%20sessões.%0A%0AValor%20Avulso%20por%20Sessão%20Individual%3A%20R%24%20480%2C00"
                >
                  R$ 480,00 Pix.
                </a>
              </p>
              <p className="text-lg mb-2">Aceitamos todos os Cartões.</p>
              <a
                target="_blank"
                href="https://buy.stripe.com/28o8xj8JobDL9m8145"
                className="border block rounded p-3 w-full text-center transition delay-180 text-white bg-sky-400 hover:bg-sky-500"
              >
                Inscrever-se
              </a>
            </section>
            {/* <section className="flex flex-col justify-between mb-5 border border-slate-500 rounded p-2 lg:lg:w-[49%] shadow-xl bg-white text-black">
              <div>
                <h2 className="text-2xl mb-1 font-bold">Mentoria em Grupo</h2>
                <p className="text-xl mb-1">Aqui você terá:</p>
                <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-2">
                  <li className="text-justify">
                    - Sessões diárias de mentoria em grupo no Discord, de
                    segunda a sexta-feira, com foco em tópicos específicos.
                  </li>
                  <li className="text-justify">
                    - Acesso a materiais de estudo, recursos e exercícios
                    práticos.
                  </li>
                  <li className="text-justify">
                    - Suporte por e-mail ou mensagem para dúvidas adicionais
                    entre as sessões.
                  </li>
                </ul>
                <p className="text-lg mb-2">Valor Fixo Mensal: R$ 250,00</p>
              </div>
              <a
                href="mailto:claudioletras2019@gmail.com?subject=Quero saber mais sobre a Mentoria em Grupo&body=Mentoria%20em%20Grupo%0A%0AAqui%20você%20terá%3A%0A%0A- Sessões%20diárias%20de%20mentoria%20em%20grupo%20no%20Discord%2C%20de%20segunda%20a%20sexta-feira%2C%20com%20foco%20em%20tópicos%20específicos.%0A- Acesso%20a%20materiais%20de%20estudo%2C%20recursos%20e%20exercícios%20práticos.%0A- Suporte%20por%20e-mail%20ou%20mensagem%20para%20dúvidas%20adicionais%20entre%20as%20sessões.%0A%0AValor%20Fixo%20Mensal%3A%20R%24%20250%2C00"
                className="border block rounded p-3 w-full text-center transition delay-180 text-white bg-sky-400 hover:bg-sky-500"
              >
                Inscrever-se
              </a>
            </section> */}
            {/* <section className="mb-5 border border-slate-500 rounded p-2 lg:w-[49%] shadow-xl bg-white text-black">
              <h2 className="text-xl mb-1 font-bold">Plano de 6 Meses</h2>
              <p className="text-lg mb-1">Mentoria em Grupo:</p>
              <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-2">
                <li className="text-justify">
                  Valor Mensal: de{" "}
                  <span className="line-through">R$250,00</span> por R$ 210,00
                </li>
                <li className="text-justify">
                  Valor Total (6 Meses): R$ 1.260,00 (desconto de R$ 240,00)
                </li>
              </ul>
              <p className="text-lg mb-1">Mentoria Individual:</p>
              <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-5">
                <li className="text-justify">
                  Valor Mensal: de{" "}
                  <span className="line-through">R$504,00</span> por R$ 416,00
                </li>
                <li className="text-justify">
                  Valor Total (6 Meses): R$ 2.496,00 (desconto de R$ 504,00)
                </li>
              </ul>
              <a
                href="mailto:claudioletras2019@gmail.com?subject=Quero%20assinar%20o%20plano%20de%206%20meses&body=Plano%20de%206%20Meses%0A%0AMentoria%20em%20Grupo%3A%0A%0A- Valor Mensal%3A%20de%20R%24%20250%2C00%20por%20R%24%20210%2C00%0A- Valor Total%20%286%20Meses%29%3A%20R%24%201.260%2C00%20%28desconto%20de%20R%24%20240%2C00%29%0A%0AMentoria%20Individual%3A%0A%0A- Valor Mensal%3A%20de%20R%24%20504%2C00%20por%20R%24%20416%2C00%0A- Valor Total%20%286%20Meses%29%3A%20R%24%202.496%2C00%20%28desconto%20de%20R%24%20504%2C00%29"
                className="border block rounded p-3 w-full text-center transition delay-180 text-white bg-sky-400 hover:bg-sky-500"
              >
                Inscrever-se
              </a>
            </section>
            <section className="mb-5 border border-slate-500 rounded p-2 lg:w-[49%] shadow-xl bg-white text-black">
              <h2 className="text-xl mb-1 font-bold">Plano de 1 Ano</h2>
              <p className="text-lg mb-1">Mentoria em Grupo:</p>
              <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-2">
                <li className="text-justify">
                  Valor Mensal: de{" "}
                  <span className="line-through">R$250,00</span> por R$ 208,00
                </li>
                <li className="text-justify">
                  Valor Total (1 Ano): R$ 2.496,00 (desconto de R$ 504,00)
                </li>
              </ul>
              <p className="text-lg mb-1">Mentoria Individual:</p>
              <ul className="flex flex-col gap-3 border rounded p-2 shadow-md mb-5">
                <li className="text-justify">
                  Valor Mensal: de{" "}
                  <span className="line-through">R$500,00</span> por R$ 416,00
                </li>
                <li className="text-justify">
                  Valor Total (1 Ano): R$ 4.992,00 (desconto de R$ 1.008,00)
                </li>
              </ul>
              <a
                href="mailto:claudioletras2019@gmail.com?subject=Quero%20assinar%20o%20plano%20de%201%20ano&body=Plano%20de%201%20Ano%0A%0AMentoria%20em%20Grupo%3A%0A%0A- Valor Mensal%3A%20de%20R%24%20250%2C00%20por%20R%24%20208%2C00%0A- Valor Total%20%281%20Ano%29%3A%20R%24%202.496%2C00%20%28desconto%20de%20R%24%20504%2C00%29%0A%0AMentoria%20Individual%3A%0A%0A- Valor Mensal%3A%20de%20R%24%20500%2C00%20por%20R%24%20416%2C00%0A- Valor Total%20%281%20Ano%29%3A%20R%24%204.992%2C00%20%28desconto%20de%20R%24%201.008%2C00%29"
                className="border block rounded p-3 w-full text-center transition delay-180 text-white bg-sky-400 hover:bg-sky-500"
              >
                Inscrever-se
              </a>
            </section> */}
          </div>
        </section>
        <hr />
        <Cursos />
      </main>
      <footer className="flex justify-center p-2">
        <p className="text-center lg:text-start">
          &copy; 2024 BemCodado. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
