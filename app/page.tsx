import Link from "next/link"
import { ChevronRight, Mail, MapPin, Phone, Scale } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Advocacia Silva</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Início
            </Link>
            <Link href="#sobre" className="text-sm font-medium transition-colors hover:text-primary">
              Sobre
            </Link>
            <Link href="#areas" className="text-sm font-medium transition-colors hover:text-primary">
              Áreas de Atuação
            </Link>
            <Link href="#equipe" className="text-sm font-medium transition-colors hover:text-primary">
              Equipe
            </Link>
            <Link href="#contato" className="text-sm font-medium transition-colors hover:text-primary">
              Contato
            </Link>
          </nav>
          <Button className="hidden md:flex">Agende uma Consulta</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Advocacia de Excelência para Seus Direitos
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nosso escritório oferece soluções jurídicas personalizadas com profissionalismo, ética e dedicação.
                  Conte com nossa experiência para defender seus interesses.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Agende uma Consulta</Button>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1572894234976-d961418c709d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="São Paulo vista de cima"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last grayscale opcacity-50 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:grayscale-0"
                width={550}
                height={310}
              />
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Sobre Nós</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tradição e Inovação</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Com mais de 15 anos de experiência, o escritório Advocacia Silva se destaca pela excelência no
                  atendimento e pelo compromisso com os resultados. Nossa equipe multidisciplinar está preparada para
                  oferecer as melhores soluções jurídicas para pessoas físicas e empresas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="rounded-full border p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Proteção Legal</h3>
                <p className="text-sm text-gray-500 text-center">
                  Defendemos seus direitos com determinação e conhecimento jurídico sólido.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="rounded-full border p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-award-icon lucide-award"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Excelência</h3>
                <p className="text-sm text-gray-500 text-center">
                  Buscamos a excelência em cada caso, com atendimento personalizado e soluções eficazes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="rounded-full border p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  className="lucide lucide-scale-icon lucide-scale"
                  >
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Inovação</h3>
                <p className="text-sm text-gray-500 text-center">
                  Combinamos tradição jurídica com abordagens inovadoras para os desafios legais atuais.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="areas" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Especialidades</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Áreas de Atuação</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos serviços jurídicos especializados em diversas áreas do direito, sempre com foco na
                  qualidade e resultados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Direito Civil",
                  description: "Contratos, responsabilidade civil, direito de família e sucessões.",
                },
                {
                  title: "Direito Empresarial",
                  description: "Constituição de empresas, contratos empresariais e recuperação judicial.",
                },
                {
                  title: "Direito Trabalhista",
                  description: "Assessoria para empresas e defesa de direitos dos trabalhadores.",
                },
                {
                  title: "Direito Tributário",
                  description: "Planejamento tributário, defesa em processos administrativos e judiciais.",
                },
                {
                  title: "Direito Imobiliário",
                  description: "Compra e venda de imóveis, locações e regularização imobiliária.",
                },
                {
                  title: "Direito do Consumidor",
                  description: "Defesa dos direitos do consumidor e assessoria para empresas.",
                },
              ].map((area, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardHeader>
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{area.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="equipe" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Nossa Equipe</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Advogados Especialistas</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os profissionais que fazem parte do nosso time, todos comprometidos com a excelência e
                  dedicação aos clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Carlos Silva",
                  role: "Sócio Fundador",
                  specialty: "Direito Empresarial",
                  image: "/placeholder.svg?height=400&width=300",
                },
                {
                  name: "Dra. Ana Oliveira",
                  role: "Sócia",
                  specialty: "Direito Civil",
                  image: "/placeholder.svg?height=400&width=300",
                },
                {
                  name: "Dr. Roberto Santos",
                  role: "Advogado Sênior",
                  specialty: "Direito Tributário",
                  image: "/placeholder.svg?height=400&width=300",
                },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="aspect-square w-40 rounded-full object-cover object-center"
                    width={160}
                    height={160}
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                    <p className="text-sm font-medium">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contato</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos à disposição para atender suas necessidades jurídicas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <a href="https://www.google.com/maps?q=Av.+Paulista,+1000,+São+Paulo+-+SP" target="_blank">Av. Paulista, 1000, São Paulo - SP</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+551130000000">(11) 3000-0000</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:contato@advocaciasilva.com.br">contato@advocaciasilva.com.br</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Advocacia Silva. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

