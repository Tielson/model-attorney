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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100">
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
                  <Button variant="outline">
                    Conheça Nossos Serviços
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=700"
                alt="Equipe de advogados"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
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
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 10-4 4-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Excelência</h3>
                <p className="text-sm text-gray-500 text-center">
                  Buscamos a excelência em cada caso, com atendimento personalizado e soluções eficazes.
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
                    className="h-6 w-6"
                  >
                    <path d="M2 12h20" />
                    <path d="M12 2v20" />
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Especialidades</div>
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Contato</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos à disposição para atender suas necessidades jurídicas. Entre em contato para agendar uma
                  consulta.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Av. Paulista, 1000, São Paulo - SP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(11) 3000-0000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>contato@advocaciasilva.com.br</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Agende uma Consulta</h3>
                  <p className="text-gray-500">Preencha o formulário abaixo e entraremos em contato em até 24 horas.</p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Telefone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Assunto
                    </label>
                    <select
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione uma área</option>
                      <option value="civil">Direito Civil</option>
                      <option value="empresarial">Direito Empresarial</option>
                      <option value="trabalhista">Direito Trabalhista</option>
                      <option value="tributario">Direito Tributário</option>
                      <option value="imobiliario">Direito Imobiliário</option>
                      <option value="consumidor">Direito do Consumidor</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Descreva brevemente sua necessidade"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
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

