import Link from "next/link";
import {
  CalendarDays,
  Users,
  Video,
  FileText,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { Cursos } from "@/components/cursos";

export default function BemCodadoConnect() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#37BBF7" }}
    >
      <header className="text-white py-6">
        <div className="container mx-auto px-4">
          <div className="relative w-60 h-12 lg:w-64 lg:h-12 mx-auto">
            <Image
              src="/images/logo-bemcodado-connect.png"
              alt="logo da bemcodado connect"
              fill
            />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              🎉 Eleve sua Jornada como Desenvolvedor(a)! 🚀
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Junte-se ao BemCodado Connect e transforme sua carreira na
              programação
            </p>
            <Link
              target="_blank"
              href="https://wa.me/5581993520671?text=Ol%C3%A1%2C%20fiquei%20interessado(a)%20em%20fazer%20parte%20da%20comunidade%20BemCodado%20Connect%2C%20quero%20efetuar%20o%20pagamento%20e%20fazer%20minha%20inscri%C3%A7%C3%A3o!"
              className="inline-block bg-white text-[#333333] px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-colors hover:bg-gray-200"
            >
              Comece Agora
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              👨‍🏫 O que é o BemCodado Connect?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white">
                <CheckCircle className="w-12 h-12 mb-4 mx-auto" />
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-center">
                  Projetos Incríveis
                </h4>
                <p className="text-center">
                  Desenvolva projetos do zero e aprimore suas habilidades
                  práticas.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white">
                <MessageCircle className="w-12 h-12 mb-4 mx-auto" />
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-center">
                  Tire Suas Dúvidas
                </h4>
                <p className="text-center">
                  Aprenda sobre as tecnologias mais recentes e esclareça todas
                  as suas dúvidas.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white">
                <Users className="w-12 h-12 mb-4 mx-auto" />
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-center">
                  Comunidade Ativa
                </h4>
                <p className="text-center">
                  Compartilhe conhecimento com outros desenvolvedores
                  apaixonados por tecnologia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white bg-opacity-10 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              💡 Benefícios Exclusivos
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Video className="text-white mr-4 flex-shrink-0 w-8 h-8" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Gravações das Sessões
                  </h4>
                  <p className="text-white">
                    Assista às sessões quando e onde quiser, no seu próprio
                    ritmo.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="text-white mr-4 flex-shrink-0 w-8 h-8" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Desafios Semanais
                  </h4>
                  <p className="text-white">
                    Coloque a mão na massa com desafios práticos e estimulantes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="text-white mr-4 flex-shrink-0 w-8 h-8" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Material Exclusivo
                  </h4>
                  <p className="text-white">
                    Acesse conteúdos aprofundados para impulsionar seus estudos.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="text-white mr-4 flex-shrink-0 w-8 h-8" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Grupo Fechado
                  </h4>
                  <p className="text-white">
                    Conecte-se com outros desenvolvedores em um ambiente
                    exclusivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              O Que Nossos Alunos Dizem
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <p className="mb-4">
                  &quot;O BemCodado Connect transformou minha carreira! As
                  sessões ao vivo e os projetos práticos me deram confiança para
                  conseguir meu primeiro emprego como desenvolvedor.&quot;
                </p>
                <p className="font-semibold">- João Silva</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <p className="mb-4">
                  &quot;A comunidade é incrível! Aprendi tanto com as sessões
                  quanto com as trocas de experiências com outros membros. Vale
                  cada centavo!&quot;
                </p>
                <p className="font-semibold">- Maria Santos</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <p className="mb-4">
                  &quot;Os desafios semanais e o material exclusivo me mantêm
                  sempre aprendendo e evoluindo. Minha produtividade aumentou
                  muito desde que me juntei ao Connect.&quot;
                </p>
                <p className="font-semibold">- Pedro Oliveira</p>
              </div>
            </div>
          </div>
        </section>

        <Cursos
          title="A BemCodado oferece conteúdos gratuitos"
          description="Temos um canal no YouTube com mais de 50 vídeos repletos de conteúdo e uma comunidade gratuita no Discord, onde você pode aprender e trocar experiências! Acesse nosso"
        />

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              📅 Quando Acontece?
            </h3>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 inline-block">
              <CalendarDays className="w-12 h-12 md:w-16 md:h-16 text-white mb-4 mx-auto" />
              <p className="text-lg md:text-xl text-white">
                Toda sexta-feira, das 19h às 20h30 (horário de Brasília)
              </p>
            </div>
          </div>
        </section>

        <section className="text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Invista no Seu Futuro
            </h3>
            <p className="text-xl md:text-2xl mb-8">
              Por apenas <span className="font-bold">R$ 50/mês</span> ou{" "}
              <span className="font-bold">R$ 500/ano</span>
            </p>
            <Link
              target="_blank"
              href="https://wa.me/5581993520671?text=Ol%C3%A1%2C%20fiquei%20interessado(a)%20em%20fazer%20parte%20da%20comunidade%20BemCodado%20Connect%2C%20quero%20efetuar%20o%20pagamento%20e%20fazer%20minha%20inscri%C3%A7%C3%A3o!"
              className="inline-block bg-white text-[#333333] px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-colors hover:bg-gray-200"
            >
              Inscreva-se Agora
            </Link>
            <p className="mt-6 text-base md:text-lg">
              📌 Vagas limitadas – Garanta a sua!
            </p>
          </div>
        </section>
      </main>

      <footer className="text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Vamos juntos nessa jornada? 🚀 #BemCodadoConnect
          </p>
          <p>&copy; 2024 BemCodado Connect. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
