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
      <main className="w-full max-w-[1440px]">
        <section className="flex flex-col mb-9">
          {/* A div abaixo vai servir para Mobile */}
          <div className="flex flex-col lg:hidden">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Bem-Vindo à <span className="block">BemCodado!</span>
            </h1>
            <div className="relative w-64 h-64 self-center md:w-96 md:h-96">
              <Image src="/images/homem-codando.png" alt="homem codando" fill />
            </div>

            <p className="text-xl mb-8">
              Na BemCodado, estamos comprometidos em ajudar você a alcançar seus
              objetivos de aprendizado e desenvolvimento na área de programação.
            </p>
            <a
              href="#plans"
              className="bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300 w-60"
            >
              Conheça nossos planos!
            </a>
          </div>
          {/* A div abaixo vai servir para desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-16">
            <div className="max-w-[50%]">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Bem-Vindo à <span className="block">BemCodado!</span>
              </h1>
              <p className="text-xl mb-8">
                Na BemCodado, estamos comprometidos em ajudar você a alcançar
                seus objetivos de aprendizado e desenvolvimento na área de
                programação.
              </p>
              <a
                href="#plans"
                className="bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
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
        <section id="plans" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">
              Comece Sua Jornada de Aprendizado Conosco!
            </h2>
            <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
              Explore nossos serviços de mentoria hoje e dê o próximo passo em
              direção ao seu sucesso na programação. Junte-se à comunidade
              BemCodado e transforme suas aspirações em realidade.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Mentoria Individual",
                  features: [
                    "Sessões de 1 hora, individuais e personalizadas",
                    "Sessões disponíveis de segunda a sexta-feira",
                    "Acesso prioritário para agendamento de sessões",
                    "Revisão e feedback detalhados sobre projetos",
                    "Suporte por e-mail ou mensagem entre as sessões",
                    "Acesso vitalício ao curso de Fundamentos do Desenvolvimento Web",
                  ],
                  price: "R$ 75,00 Cartão, R$ 60,00 Pix",
                  link: "https://buy.stripe.com/eVabJvaRw37ffKwaEE",
                },
                {
                  title: "Mentoria Individual - 10 mentorias no preço de 8",
                  features: [
                    "Sessões de 1 hora, individuais e personalizadas",
                    "Sessões disponíveis de segunda a sexta-feira",
                    "Acesso prioritário para agendamento de sessões",
                    "Revisão e feedback detalhados sobre projetos",
                    "Suporte por e-mail ou mensagem entre as sessões",
                    "Acesso vitalício ao curso de Fundamentos do Desenvolvimento Web",
                  ],
                  price: "R$ 600,00 Cartão, R$ 480,00 Pix",
                  link: "https://buy.stripe.com/28o8xj8JobDL9m8145",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-xl p-8 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      {plan.title}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start text-black"
                        >
                          <svg
                            className="w-6 h-6 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-4 text-black">
                      {plan.price}
                    </p>
                    <a
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary-dark transition duration-300"
                    >
                      Inscrever-se
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr />
        <Cursos />
      </main>
      <footer className="text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BemCodado. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
