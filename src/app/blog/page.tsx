"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaSquareGithub, FaSquareYoutube } from "react-icons/fa6";

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
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
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white cursor-pointer font-bold underline"
            >
              BemCodado Mentorias
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
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 cursor-pointer font-bold underline"
                >
                  BemCodado mentorias
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

      <main className="flex-grow">
        <section className="text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Artigos que vão te ajudar a se tornar um programador melhor
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
              Os artigos abaixo foram escritos pelos nossos especialistas de
              programação e visam te ajudar a se desenvolver como pessoa
              programadora.
            </p>
          </div>
        </section>

        <section className="flex gap-4 justify-center flex-wrap text-white">
          <Link
            href="https://medium.com/@claudiocassimiro/ol%C3%A1-esse-%C3%A9-meu-primeiro-artigo-e-ser%C3%A1-sobre-uma-ferramenta-chamada-docker-8502045b280d"
            target="_blank"
          >
            <div className="container mx-auto p-4 text-center max-w-lg min-h-[622.95px] border rounded text-black bg-white">
              <Image
                src="/images/docker.webp"
                alt="Logo do Docker"
                width={500}
                height={500}
                className="mb-4"
              />
              <h2 className="text-3xl font-semibold mb-6">
                O que é Docker, como ele pode te ajudar e para que serve?
              </h2>
              <p>
                Você já deve ter escutado, ou dito, o famoso “Na minha máquina
                roda” típica frase de pessoas desenvolvedoras não é mesmo? Caso
                contrário, não se preocupe, está mais perto de acontecer do que
                você imagina.
              </p>
            </div>
          </Link>
          <Link
            href="https://medium.com/@claudiocassimiro/desvendando-o-poder-do-grid-layout-diga-adeus-ao-excesso-de-flexbox-7210e24d9944"
            target="_blank"
          >
            <div className="container mx-auto p-4 text-center max-w-lg min-h-[622.95px] border rounded text-black bg-white">
              <Image
                src="/images/css-grid.png"
                alt="Imagem css grid"
                width={500}
                height={500}
                className="mb-4"
              />
              <h2 className="text-3xl font-semibold mb-6">
                Desvendando o Poder do Grid Layout — Diga Adeus ao Excesso de
                Flexbox!
              </h2>
              <p>
                Se você é como eu, provavelmente se viu muitas vezes recorrendo
                ao confiável Flexbox para criar layouts front-end. Mas, e se eu
                te dissesse que há uma ferramenta ainda mais poderosa, pronta
                para simplificar sua vida de desenvolvedor?
              </p>
            </div>
          </Link>
          <Link
            href="https://medium.com/@claudiocassimiro/coisas-que-eu-queria-que-me-contassem-no-meu-in%C3%ADcio-de-carreira-como-desenvolvedor-de-software-28540d1aac39"
            target="_blank"
          >
            <div className="container mx-auto p-4 text-center max-w-lg min-h-[622.95px] border rounded text-black bg-white">
              <Image
                src="/images/code.webp"
                alt="Imagem de homem codando em diversas linguagens"
                width={500}
                height={500}
                className="mb-4"
              />
              <h2 className="text-3xl font-semibold mb-6">
                Coisas que eu queria que me contassem no meu início de carreira
                como desenvolvedor de software.
              </h2>
              <p>
                Olá, pessoal! Meu nome é Claudio Cassimiro, sou desenvolvedor de
                software e instrutor de desenvolvimento web, entusiasta de
                inteligência artificial e apaixonado por tecnologia...
              </p>
            </div>
          </Link>
          <Link
            href="https://medium.com/@claudiocassimiro/qual-%C3%A9-a-conex%C3%A3o-entre-l%C3%B3gica-proposicional-e-engenharia-de-software-8eb90f06fb0d"
            target="_blank"
          >
            <div className="container mx-auto p-4 text-center max-w-lg min-h-[622.95px] border rounded text-black bg-white">
              <Image
                src="/images/neural-network.webp"
                alt="Imagem de rede neural"
                width={500}
                height={500}
                className="mb-4"
              />
              <h2 className="text-3xl font-semibold mb-6">
                Qual é a conexão entre lógica proposicional e engenharia de
                software?
              </h2>
              <p>
                A lógica proposicional lida com as relações entre declarações.
                Trata-se de representar e raciocinar sobre a verdade ou
                falsidade dessas declarações...
              </p>
            </div>
          </Link>
        </section>
      </main>

      <footer className="text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-lg">
            Vamos juntos nessa jornada? 🚀 #BemCodadoConnect
          </p>
          <p>&copy; 2025 BemCodado Connect. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
