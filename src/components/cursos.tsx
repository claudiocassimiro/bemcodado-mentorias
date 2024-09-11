"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  BookOpenIcon,
  CodeIcon,
  PencilIcon,
} from "lucide-react";

const courses = [
  {
    title: "Fundamentos do Desenvolvimento Web",
    price: "R$ 60,00",
    access: "Acesso vitalício",
    modules: [
      {
        name: "Git e GitHub",
        topics: [
          "Introdução ao Controle de Versão e Git",
          "Conceitos Básicos do Git",
          "Ramificação e Fusão (Branching and Merging)",
          "Trabalhando com Remotos",
          "Uso Avançado do Git e Boas Práticas",
        ],
      },
      {
        name: "HTML5 e CSS3",
        topics: [
          "Introdução ao HTML5",
          "Elementos do HTML5",
          "Estilização com CSS3",
          "Avançando no CSS3",
          "Integração de HTML5 e CSS3",
          "Projeto Final: Desenvolvimento de um Site Responsivo",
        ],
      },
      {
        name: "Lógica de Programação com JavaScript",
        topics: [
          "Introdução ao JavaScript",
          "Fundamentos da Lógica de Programação",
          "Funções e Modularização",
          "Estruturas de Dados",
          "Manipulação de DOM",
          "Algoritmos e Resolução de Problemas",
          "Pensamento Computacional",
          "Revisão e Avançando para o Futuro",
        ],
      },
    ],
  },
];

export function Cursos() {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  return (
    <div className="text-gray-800 pt-8">
      <h1 className="text-4xl font-bold mb-5 text-white">Nossos Cursos</h1>
      <p className="mb-5 text-justify lg:text-xl text-white">
        Os cursos da BemCodado visam ajudar você a conquistar seus objetivos de
        carreira no seu tempo. Sem prazos e cobranças. Aprenda da sua forma e
        receba todo o apoio necessário via{" "}
        <a
          className="underline"
          href="https://discord.gg/fvDYw2R2tX"
          target="_blank"
        >
          Discord.
        </a>
      </p>
      {courses.map((course, index) => (
        <div
          key={index}
          className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden border border-black"
        >
          <div className="bg-white text-white p-6">
            <div className="flex flex-col justify-between gap-2 lg:flex-row">
              <h2 className="text-3xl font-semibold text-black">
                {course.title}
              </h2>
              <a
                target="_blank"
                href="https://buy.stripe.com/5kA4h38Jo5fnbug4gj"
                className="border rounded p-3 text-center transition delay-180 text-white bg-sky-400 hover:bg-sky-500"
              >
                Comprar agora
              </a>
            </div>
            <p className="text-xl mt-2 text-black">
              {course.price} - {course.access}
            </p>
          </div>
          <hr />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Módulos:</h3>
            {course.modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left text-lg font-medium hover:text-[#2563EB] transition-colors duration-200 mt-2 text-black"
                  onClick={() =>
                    setExpandedModule(
                      expandedModule === module.name ? null : module.name
                    )
                  }
                >
                  {module.name}
                  {expandedModule === module.name ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </button>
                {expandedModule === module.name && (
                  <div className="mt-2 ml-6">
                    <ul className="list-disc mb-4">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-600">
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#38BDF8] mb-2">
                        Cada módulo inclui:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <BookOpenIcon className="h-5 w-5 mr-2 text-[#38BDF8]" />
                          <span>Conteúdos teóricos abrangentes</span>
                        </li>
                        <li className="flex items-center">
                          <CodeIcon className="h-5 w-5 mr-2 text-[#38BDF8]" />
                          <span>Exemplos práticos detalhados</span>
                        </li>
                        <li className="flex items-center">
                          <PencilIcon className="h-5 w-5 mr-2 text-[#38BDF8]" />
                          <span>Exercícios para fixação do aprendizado</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
