"use client";

import { Cursos } from "@/components/cursos";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  FaQuoteLeft,
} from "react-icons/fa6";
import { SiHtmx } from "react-icons/si";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "João Silva",
      role: "Desenvolvedor Front-end",
      content:
        "A mentoria da BemCodado foi fundamental para minha transição de carreira. Aprendi muito e consegui meu primeiro emprego como desenvolvedor!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Maria Santos",
      role: "Estudante de Engenharia",
      content:
        "As aulas são incríveis! Os mentores são muito pacientes e explicam tudo de forma clara. Estou adorando minha jornada na programação.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Pedro Oliveira",
      role: "Desenvolvedor Full Stack",
      content:
        "Graças à BemCodado, consegui aprimorar minhas habilidades e me tornar um desenvolvedor full stack. A mentoria individual foi essencial para meu crescimento.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#37BBF7" }}>
      <header className="bg-[#37BBF7] relative">
        <div className="container mx-auto flex justify-between items-center py-5 px-3">
          <div className="relative w-60 h-12 lg:w-64 lg:h-12">
            <Image
              src="/images/logo-bemcodado.png"
              alt="Logo da BemCodado"
              fill
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-4">
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white cursor-pointer font-bold underline"
            >
              Blog
            </a>
            <a
              href="/bemcodado-connect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white cursor-pointer font-bold underline"
            >
              BemCodado Connect
            </a>
            <a
              href="https://github.com/claudiocassimiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub
                size="30"
                className="text-white hover:text-primary transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/claudiocassimiro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size="30"
                className="text-white hover:text-primary transition-colors"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCzF6Vl73Gs_-rYw1r37By9Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareYoutube
                size="30"
                className="text-white hover:text-primary transition-colors"
              />
            </a>
          </nav>
          <nav className="lg:hidden flex items-center">
            <button
              className="text-white hover:text-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div
                className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300`}
              >
                <span
                  className={`bg-current h-0.5 w-6 rounded-sm transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`bg-current h-0.5 w-6 rounded-sm transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-current h-0.5 w-6 rounded-sm transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </nav>
        </div>
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col justify-center items-center gap-4">
              <li>
                <a
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 cursor-pointer font-bold underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/bemcodado-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 cursor-pointer font-bold underline"
                >
                  BemCodado Connect
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/claudiocassimiro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareGithub
                    size="30"
                    className="text-gray-700 hover:text-primary transition-colors"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/claudiocassimiro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size="30"
                    className="text-gray-700 hover:text-primary transition-colors"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCzF6Vl73Gs_-rYw1r37By9Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareYoutube
                    size="30"
                    className="text-gray-700 hover:text-primary transition-colors"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4">
        <section className="py-12 md:py-20 bg-[#37BBF7]">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                Bem-Vindo à <span className="text-white">BemCodado!</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8">
                Na BemCodado, estamos comprometidos em ajudar você a alcançar
                seus objetivos de aprendizado e desenvolvimento na área de
                programação.
              </p>
              <a
                href="#plans"
                className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300 inline-block"
              >
                Conheça nossos planos!
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px]">
                <Image
                  src="/images/homem-codando.png"
                  alt="homem codando"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#37BBF7]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-white">
            Tecnologias
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 order-1 lg:order-1">
              <div className="relative w-full h-[300px] lg:h-[500px]">
                <Image
                  src="/images/pessoas-em-colaboracao.png"
                  alt="pessoas em colaboração"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-2 lg:order-2">
              <ul className="space-y-4 text-lg lg:text-xl bg-white rounded-lg shadow-lg p-6">
                <li className="flex items-center gap-4 bg-gray-100 p-3 rounded-md">
                  <SiHtmx size="30" className="text-primary flex-shrink-0" />
                  <span className="text-black">
                    Fundamentos do Desenvolvimento de Software
                  </span>
                </li>
                <li className="flex items-center gap-4 bg-gray-100 p-3 rounded-md">
                  <FaReact size="30" className="text-primary flex-shrink-0" />
                  <span className="text-black">Front-End</span>
                </li>
                <li className="flex items-center gap-4 bg-gray-100 p-3 rounded-md">
                  <FaNodeJs size="30" className="text-primary flex-shrink-0" />
                  <span className="text-black">Back-end</span>
                </li>
                <li className="flex items-center gap-4 bg-gray-100 p-3 rounded-md">
                  <FaDatabase
                    size="30"
                    className="text-primary flex-shrink-0"
                  />
                  <span className="text-black">
                    Banco de Dados (SQL & NoSQL)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#37BBF7]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-white">
            Carreira
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1 px-4">
              <ul className="space-y-6 text-lg lg:text-xl">
                <li className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
                  <FaNetworkWired
                    size="24"
                    className="text-black flex-shrink-0"
                  />
                  <div>
                    <span className="font-semibold text-black">
                      Mentoria Profissional:
                    </span>
                    <p className="text-sm mt-1 text-black">
                      Orientação personalizada para impulsionar sua carreira na
                      área de tecnologia.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
                  <FaUsersViewfinder
                    size="24"
                    className="text-black flex-shrink-0"
                  />
                  <div>
                    <span className="font-semibold text-black">
                      Preparação para Entrevistas:
                    </span>
                    <p className="text-sm mt-1 text-black">
                      Treinamento prático para se destacar em processos
                      seletivos de tecnologia.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
                  <FaLinkedin size="24" className="text-black flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-black">
                      Revisão de Currículos e Perfis LinkedIn:
                    </span>
                    <p className="text-sm mt-1 text-black">
                      Otimização da sua presença profissional online e offline.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
                  <FaImagePortrait
                    size="24"
                    className="text-black flex-shrink-0"
                  />
                  <div>
                    <span className="font-semibold text-black">
                      Apoio na Construção de Portfólio:
                    </span>
                    <p className="text-sm mt-1 text-black">
                      Orientação para criar um portfólio impressionante que
                      destaque suas habilidades.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
                <Image
                  src="/images/homem-progredindo-na-carreira.png"
                  alt="homem progredindo na carreira"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#37BBF7]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-white">
            Por que Escolher a BemCodado?
          </h2>
          <div className="flex flex-col items-center justify-between">
            <div className="w-full mb-10">
              <div className="relative w-full h-[300px] lg:h-[400px]">
                <Image
                  src="/images/mulher-escolhendo.png"
                  alt="mulher escolhendo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-full lg:w-3/4">
              <ul className="space-y-6">
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg">
                  <svg
                    className="w-6 h-6 text-black mt-1 flex-shrink-0"
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
                  <div>
                    <strong className="text-lg block mb-2 text-black">
                      Experiência Comprovada:
                    </strong>
                    <p className="text-sm lg:text-base text-black">
                      Nossos mentores têm vasta experiência na indústria de
                      tecnologia e estão comprometidos em ajudá-lo a ter sucesso
                      em sua jornada de aprendizado.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg">
                  <svg
                    className="w-6 h-6 text-black mt-1 flex-shrink-0"
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
                  <div>
                    <strong className="text-lg block mb-2 text-black">
                      Abordagem Prática:
                    </strong>
                    <p className="text-sm lg:text-base text-black">
                      Nossas sessões de mentoria são práticas e orientadas para
                      resultados, focadas em ajudá-lo a aplicar seus
                      conhecimentos em projetos reais.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg">
                  <svg
                    className="w-6 h-6 text-black mt-1 flex-shrink-0"
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
                  <div>
                    <strong className="text-lg block mb-2 text-black">
                      Flexibilidade:
                    </strong>
                    <p className="text-sm lg:text-base text-black">
                      Oferecemos horários flexíveis para se adequar à sua agenda
                      ocupada. Escolha entre sessões individuais ou em grupo, e
                      trabalhe no seu próprio ritmo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg">
                  <svg
                    className="w-6 h-6 text-black mt-1 flex-shrink-0"
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
                  <div>
                    <strong className="text-lg block mb-2 text-black">
                      Suporte Contínuo:
                    </strong>
                    <p className="text-sm lg:text-base text-black">
                      Estamos aqui para apoiá-lo em cada etapa do seu caminho de
                      aprendizado. Além das sessões de mentoria, oferecemos
                      recursos adicionais, materiais de estudo e suporte por
                      e-mail para garantir que você alcance seus objetivos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#37BBF7]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">
            Feedback dos Alunos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6">
                <div className="flex items-center mb-4">
                  {/* <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  /> */}
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <FaQuoteLeft className="text-primary mb-2" size={24} />
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="plans" className="py-20 bg-[#37BBF7]">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">
              Comece Sua Jornada de Aprendizado Conosco!
            </h2>
            <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
              Explore nossos serviços de mentoria hoje e dê o próximo passo em
              direção ao seu sucesso na programação. Junte-se à comunidade
              BemCodado e transforme suas aspirações em realidade.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
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
                  price: "R$ 89,90 Cartão, R$ 74,90 Pix",
                  link: "https://buy.stripe.com/eVabJvaRw37ffKwaEE",
                  pixTextLink:
                    "https://wa.me/5581993520671?text=Ol%C3%A1%20Cl%C3%A1udio!%20Quero%20pagar%20a%20mentoria%20de%201%20hora%20no%20pix.",
                },
                {
                  title: "Mentoria Individual - 10 mentorias no preço de 8",
                  features: [
                    "Sessões de 1 hora, individuais e personalizadas",
                    "Sessões disponíveis de segunda a sexta-feira",
                    "Acesso prioritário para agendamento de sessões",
                    "Revisão e feedback detalhados sobre  projetos",
                    "Suporte por e-mail ou mensagem entre as sessões",
                    "Acesso vitalício ao curso de Fundamentos do Desenvolvimento Web",
                  ],
                  price: "R$ 624,90 Cartão, R$ 599,90 Pix",
                  link: "https://buy.stripe.com/28o8xj8JobDL9m8145",
                  pixTextLink:
                    "https://wa.me/5581993520671?text=Ol%C3%A1%20Cl%C3%A1udio!%20Quero%20pagar%20o%20Plano%20de%2010%20mentorias%20no%20pre%C3%A7o%20de%208%20no%20pix.",
                },
                {
                  title: "Mentoria Individual 30 minutos",
                  features: [
                    "Sessões rápidas, diretas e objetivas com duração de 30 minutos",
                    "Disponível para agendamento de segunda a sexta-feira",
                    "Ajuda personalizada para resolver dúvidas pontuais",
                    "Orientação técnica sobre problemas específicos em projetos",
                    "Feedback prático e direcionado durante a sessão",
                    "Sem necessidade de compromisso contínuo: agende conforme sua necessidade",
                  ],
                  price: "R$ 60,00 Cartão, R$ 45,00 Pix",
                  link: "https://buy.stripe.com/5kA4h38Jo5fnbug4gj",
                  pixTextLink:
                    "https://wa.me/5581993520671?text=Ol%C3%A1%20Cl%C3%A1udio!%20Quero%20pagar%20a%20mentoria%20de%2030%20minutos%20com%20pix.",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg shadow-xl p-8 flex flex-col justify-between"
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
                            className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
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
                  <div className="flex flex-col items-center">
                    <p className="text-xl font-bold mb-4 text-black self-start">
                      {plan.price}
                    </p>
                    <a
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
                    >
                      Pagar com Cartão
                    </a>
                    <Link
                      target="_blank"
                      href={plan.pixTextLink}
                      className="inline-block text-gray-500 px-8 py-4 text-lg font-semibold transition-colors hover:text-gray-600"
                    >
                      Quero pagar com Pix
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Cursos />
      </main>
      <footer className="bg-[#37BBF7] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 BemCodado. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
