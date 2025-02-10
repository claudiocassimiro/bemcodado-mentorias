"use client";
import { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Users,
  Video,
  FileText,
  MessageCircle,
  CheckCircle,
  Globe,
  Code,
  Zap,
  Star,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { Cursos } from "@/components/cursos";

export default function BemCodadoConnect() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-white py-6 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="relative w-48 h-12">
              <Image
                src="/images/logo-bemcodado-connect.png"
                alt="logo da bemcodado connect"
                fill
                className="object-contain"
              />
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <a href="#about" className="hover:underline">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:underline">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#english" className="hover:underline">
                    Inglês Técnico
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:underline">
                    Preços
                  </a>
                </li>
              </ul>
            </nav>
            <button
              className="md:hidden text-white"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} color="black" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-10 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <a
              href="#about"
              className="text-sky-400 text-xl py-2"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a
              href="#benefits"
              className="text-sky-400 text-xl py-2"
              onClick={toggleMenu}
            >
              Benefícios
            </a>
            <a
              href="#english"
              className="text-sky-400 text-xl py-2"
              onClick={toggleMenu}
            >
              Inglês Técnico
            </a>
            <a
              href="#pricing"
              className="text-sky-400 text-xl py-2"
              onClick={toggleMenu}
            >
              Preços
            </a>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <section className="text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Eleve sua Carreira de Desenvolvedor(a) 🚀
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
              Junte-se ao BemCodado Connect e transforme sua jornada na
              programação com projetos práticos, mentoria especializada e uma
              comunidade ativa.
            </p>
            <Link
              href="#pricing"
              className="inline-block bg-white text-sky-400 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-colors hover:bg-blue-100"
            >
              Comece Sua Jornada
            </Link>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              O que é o BemCodado Connect?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <Code className="w-12 h-12 mb-4 mx-auto text-sky-400" />
                <h3 className="text-xl font-semibold mb-2 text-center text-sky-400">
                  Projetos Práticos
                </h3>
                <p className="text-center text-gray-700">
                  Desenvolva projetos do zero e aprimore suas habilidades com
                  desafios reais.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <Users className="w-12 h-12 mb-4 mx-auto text-sky-400" />
                <h3 className="text-xl font-semibold mb-2 text-center text-sky-400">
                  Comunidade Ativa
                </h3>
                <p className="text-center text-gray-700">
                  Conecte-se com outros desenvolvedores e cresça juntos em um
                  ambiente colaborativo.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <Zap className="w-12 h-12 mb-4 mx-auto text-sky-400" />
                <h3 className="text-xl font-semibold mb-2 text-center text-sky-400">
                  Mentoria Especializada
                </h3>
                <p className="text-center text-gray-700">
                  Receba orientação de profissionais experientes para acelerar
                  seu aprendizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold  mb-12 text-center">
              Benefícios Exclusivos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
                <Video className="text-sky-400 mr-4 flex-shrink-0 w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold text-sky-400 mb-2">
                    Gravações das Sessões
                  </h3>
                  <p className="text-gray-700">
                    Revise o conteúdo quando quiser, no seu próprio ritmo.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
                <FileText className="text-sky-400 mr-4 flex-shrink-0 w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold text-sky-400 mb-2">
                    Material Exclusivo
                  </h3>
                  <p className="text-gray-700">
                    Acesse conteúdos aprofundados para impulsionar seus estudos.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
                <CheckCircle className="text-sky-400 mr-4 flex-shrink-0 w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold text-sky-400 mb-2">
                    Desafios Semanais
                  </h3>
                  <p className="text-gray-700">
                    Pratique com desafios estimulantes e melhore suas
                    habilidades.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
                <MessageCircle className="text-sky-400 mr-4 flex-shrink-0 w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold text-sky-400 mb-2">
                    Suporte Personalizado
                  </h3>
                  <p className="text-gray-700">
                    Tire suas dúvidas e receba feedback direto dos instrutores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              O Que Nossos Alunos Dizem
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="mb-4 text-gray-700">
                  &quot;O BemCodado Connect transformou minha carreira! As
                  sessões ao vivo e os projetos práticos me deram confiança para
                  conseguir meu primeiro emprego como desenvolvedor.&quot;
                </p>
                <p className="font-semibold text-sky-400">- João Silva</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="mb-4 text-gray-700">
                  &quot;A comunidade é incrível! Aprendi tanto com as sessões
                  quanto com as trocas de experiências com outros membros. Vale
                  cada centavo!&quot;
                </p>
                <p className="font-semibold text-sky-400">- Maria Santos</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="mb-4 text-gray-700">
                  &quot;Os desafios semanais e o material exclusivo me mantêm
                  sempre aprendendo e evoluindo. Minha produtividade aumentou
                  muito desde que me juntei ao Connect.&quot;
                </p>
                <p className="font-semibold text-sky-400">- Pedro Oliveira</p>
              </div>
            </div>
          </div>
        </section>

        <section id="english" className="py-16 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Domine o Inglês Técnico e Abra as Portas do Mercado Global
            </h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              No mercado de tecnologia, falar inglês não é mais um diferencial —
              é uma necessidade. Aprenda inglês técnico e destaque-se
              globalmente.
            </p>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Globe className="w-8 h-8 mr-3 text text-sky-400" />
                  Por que o inglês técnico é essencial?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-green-400" />
                    <span>
                      <strong>Entenda a Documentação Técnica:</strong> Acesse
                      recursos e documentações originais em inglês.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-green-400" />
                    <span>
                      <strong>Comunique-se com Times Internacionais:</strong>{" "}
                      Colabore efetivamente em projetos globais.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1  text-green-400" />
                    <span>
                      <strong>Destaque-se em Entrevistas:</strong> Prepare-se
                      para processos seletivos internacionais.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-3 text-sky-400" />O que
                  oferecemos?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-green-400" />
                    <span>
                      <strong>Aulas práticas e dinâmicas:</strong> Focadas em
                      cenários reais do dia a dia de um desenvolvedor.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-green-400" />
                    <span>
                      <strong>Vocabulário essencial para devs:</strong> Aprenda
                      termos técnicos e expressões do mercado.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-green-400" />
                    <span>
                      <strong>Simulações de entrevistas:</strong> Prepare-se
                      para processos seletivos internacionais.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-green-400" />
                    <span>
                      <strong>Integração com o conteúdo do bootcamp:</strong>{" "}
                      Aplique o inglês diretamente nos projetos práticos.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="https://wa.me/5581993520671?text=Ol%C3%A1%2C%20fiquei%20interessado(a)%20no%20BemCodado%20Connect.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
                className="inline-block bg-white text-sky-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors hover:bg-blue-100"
              >
                Saiba Mais Sobre o Inglês Técnico
              </Link>
            </div>
          </div>
        </section>

        <Cursos
          title="A BemCodado oferece conteúdos gratuitos"
          description="Temos um canal no YouTube com mais de 50 vídeos repletos de conteúdo e uma comunidade gratuita no Discord, onde você pode aprender e trocar experiências! Acesse nosso"
        />

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              📅 Quando Acontece?
            </h2>
            <div className="bg-white rounded-lg p-8 inline-block shadow-lg">
              <CalendarDays className="w-12 h-12 md:w-16 md:h-16 text-sky-400 mb-4 mx-auto" />
              <p className="text-lg md:text-xl text-gray-700">
                Segunda e Quarta, das 18h00 às 20h00 (horário de Brasília)
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Invista no Seu Futuro
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Por apenas <span className="font-bold">R$ 149,90/mês</span> ou{" "}
              <span className="font-bold">R$ 1399,90/ano</span>
            </p>
            <Link
              target="_blank"
              href="https://wa.me/5581993520671?text=Ol%C3%A1%2C%20fiquei%20interessado(a)%20no%20BemCodado%20Connect.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
              className="inline-block bg-white text-sky-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors hover:bg-blue-100"
            >
              Inscreva-se Agora
            </Link>
            <p className="mt-6 text-lg">📌 Vagas limitadas – Garanta a sua!</p>
          </div>
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
