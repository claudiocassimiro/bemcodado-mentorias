"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  CheckCircle,
  User,
} from "lucide-react";

export default function Component() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc] rounded-lg">
      <header className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between items-center py-6 px-4">
        <div className="relative w-60 h-12 lg:w-64 lg:h-12">
          <Image
            src="/images/logo-bemcodado.png"
            alt="Logo da BemCodado"
            fill
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white text-center">
            Mentoria de Programação BemCodado
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Transforme sua carreira com nossa Mentoria de Programação
          </h2>
          <p className="text-xl mb-8">
            Aprenda, cresça e alcance seus objetivos na programação com
            orientação personalizada de especialistas.
          </p>
          <Link
            href="/agendar-mentoria"
            className="bg-[#0ea5e9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0b8bcc] transition-colors"
          >
            Agendar Mentoria
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">O que você aprenderá</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="text-[#0ea5e9] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Fundamentos sólidos
                </h3>
                <p>
                  Domine os conceitos essenciais de programação para construir
                  uma base forte.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-[#0ea5e9] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Tecnologias modernas
                </h3>
                <p>
                  Aprenda as ferramentas e frameworks mais recentes e relevantes
                  do mercado.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-[#0ea5e9] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Desenvolvimento de projetos
                </h3>
                <p>
                  Aplique seus conhecimentos em projetos práticos e construa um
                  portfólio impressionante.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-[#0ea5e9] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Preparação para o mercado
                </h3>
                <p>
                  Receba orientações sobre carreira, entrevistas e como se
                  destacar profissionalmente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Eficácia comprovada</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1e293b] p-6 rounded-lg">
              <p className="mb-4">
                &quot;A mentoria da BemCodado foi um divisor de águas na minha
                carreira. Em poucos meses, consegui meu primeiro emprego como
                desenvolvedor.&quot;
              </p>
              <p className="font-semibold">- João Silva</p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-lg">
              <p className="mb-4">
                &quot;O conhecimento e a experiência compartilhados pelo mentor
                foram fundamentais para o meu crescimento profissional.
                Recomendo fortemente!&quot;
              </p>
              <p className="font-semibold">- Maria Santos</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Conheça seu mentor</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full bg-[#0ea5e9] flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Claudio Cassimiro</h3>
              <p className="text-lg mb-4">
                Com mais de 10 anos de experiência em desenvolvimento de
                software, Claudio é apaixonado por compartilhar conhecimento e
                ajudar novos programadores a alcançarem seu potencial máximo.
              </p>
              <p className="text-lg">
                Especializado em JavaScript, React, e Node.js, Claudio já
                mentorou dezenas de alunos que hoje atuam em empresas de
                tecnologia renomadas.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                question: "Quanto tempo dura a mentoria?",
                answer:
                  "A duração da mentoria é flexível e adaptada às suas necessidades. Geralmente, recomendamos um período mínimo de 3 meses para ver resultados significativos.",
              },
              {
                question: "Preciso ter experiência prévia em programação?",
                answer:
                  "Não é necessário ter experiência prévia. Nosso programa é adaptado para iniciantes e também para programadores que desejam aprimorar suas habilidades.",
              },
              {
                question: "Como são realizadas as sessões de mentoria?",
                answer:
                  "As sessões são realizadas online, através de videoconferência. Você terá acesso a um ambiente de aprendizado interativo e personalizado.",
              },
              {
                question: "Qual é o investimento para a mentoria?",
                answer:
                  "O valor do investimento varia de acordo com o plano escolhido. Entre em contato conosco para discutir as opções e encontrar o melhor plano para você.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-[#2d3748] pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-xl font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-[#0ea5e9]" />
                  ) : (
                    <ChevronDown className="text-[#0ea5e9]" />
                  )}
                </button>
                {openFaq === index && <p className="mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Pronto para dar o próximo passo?
          </h2>
          <Link
            href="/agendar-mentoria"
            className="inline-flex items-center bg-[#0ea5e9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0b8bcc] transition-colors"
          >
            <Calendar className="mr-2" />
            Agendar Mentoria Gratuita
          </Link>
        </section>
      </main>

      <footer className="bg-[#1e293b] py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 BemCodado Mentorias. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
