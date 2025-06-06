"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Scale } from "lucide-react";

const team = [
    {
        slug: 'carlos-silva',
        name: 'Dr. Carlos Silva',
        role: 'Sócio Fundador',
        specialty: 'Direito Empresarial',
        image: 'https://images.unsplash.com/photo-1662104935741-3feec65ddf3f?q=80&w=2070&auto=format&fit=crop',
        history: [
            'Formado em Direito pela Universidade de São Paulo (USP) em 1998, Carlos Silva iniciou sua trajetória ainda na graduação, atuando como estagiário no departamento jurídico de uma grande consultoria empresarial. Ao obter sua inscrição na OAB/SP sob o nº 12.345 em março de 1999, consolidou-se como jovem advogado voltado para o Direito Empresarial. Em 2001, concluiu seu MBA em Direito Empresarial na Fundação Getúlio Vargas (FGV) e, motivado pelo desejo de prestar um atendimento mais personalizado, fundou em 2002 o escritório Advocacia Silva, onde atuou desde então como sócio-fundador e diretor-presidente. Durante sua carreira, liderou casos complexos de fusões e aquisições, recuperação judicial e estruturação societária para grandes grupos nacionais. Além disso, é membro efetivo do Instituto Brasileiro de Direito Empresarial (IBRADEMP) e preside desde 2018 a Comissão de Relações Institucionais, ocupando espaço de destaque em conferências sobre governança corporativa e compliance.',
        ],
    },
    {
        slug: 'ana-oliveira',
        name: 'Dra. Ana Oliveira',
        role: 'Sócia',
        specialty: 'Direito Civil',
        image: 'https://images.unsplash.com/photo-1662104935541-aa5b6e02886d?q=80&w=2070&auto=format&fit=crop',
        history: [
            'Graduada em Direito pela Pontifícia Universidade Católica de São Paulo (PUC-SP) em dezembro de 2004, Ana Oliveira conquistou sua carteira da OAB/SP (nº 23.456) em julho de 2005. Ingressou no Advocacia Silva como associada júnior no início de 2006, desbravando casos de Direito de Família, Sucessões e Contratos Civis. Seu olhar atento e empático a aproximou de clientes em processos de inventário e divórcio litigioso, o que a levou a coordenar, em 2012, a área de Direito Civil do escritório como sócia. Ao longo dos anos, Dra. Ana foi convidada a integrar a Comissão de Direito de Família da OAB-SP e a ministrar workshops sobre mediação de conflitos em instituições como o Centro de Arbitragem e Mediação da Câmara de Comércio Brasil-Canadá. Reconhecida pela didática e pela postura conciliadora, tem publicado artigos em revistas especializadas e participado de painéis sobre adoção internacional e planejamento sucessório.',
        ],
    },
    {
        slug: 'roberto-santos',
        name: 'Dr. Roberto Santos',
        role: 'Advogado Sênior',
        specialty: 'Direito Tributário',
        image: 'https://images.unsplash.com/photo-1662104935762-707db0439ecd?q=80&w=2070&auto=format&fit=crop',
        history: [
            'Natural do Rio de Janeiro, Roberto Santos graduou-se em Direito pela Universidade Federal do Rio de Janeiro (UFRJ) em 2009 e logo em seguida obteve registro na OAB/RJ nº 34.567 (2010), complementando sua formação com pós-graduação em Direito Tributário pela FGV-SP em 2011. Ainda estudante, foi estagiário no setor fiscal de uma grande firma de auditoria contábil, onde desvendeu a complexidade dos tributos incidentes em operações nacionais e internacionais. Em 2011, ingressou como advogado associado no Advocacia Silva para estruturar defesas tributárias de médias e grandes empresas; em 2015, foi promovido a advogado sênior. Apaixonado pela pesquisa, Dr. Roberto já publicou diversos artigos em periódicos jurídicos sobre planejamento tributário e revisão fiscal, além de atuar como docente convidado em cursos de extensão da FGV e do Instituto Brasileiro de Planejamento e Tributação (IBPT). Na OAB/SP, inscreveu-se sob o nº 45.678 em 2012 e desde então mantém assento ativo em comissões de Direito Tributário, sendo referência em consultorias preventivas e contencioso fiscal.',
        ],
    },
];

export default function TeamPage({ params }: { params: { slug: string } }) {
    const [selected, setSelected] = useState(params.slug || team[0].slug);
    const member = team.find((m) => m.slug === selected) || team[0];

    return (
        <>
            <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
                <div className="container mx-auto flex items-center justify-between h-16 px-4">
                    <Link href="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-primary">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Voltar para o site
                    </Link>
                    <div className="flex items-center gap-2">
                        <Scale className="w-6 h-6 text-primary" />
                        <span className="text-lg font-semibold">Advocacia Silva</span>
                    </div>
                </div>
            </header>
            <div className="h-16" />

            <main className="container mx-auto py-12 px-4 space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <nav className="md:w-1/4">
                        <ul className="space-y-2">
                            {team.map((m) => (
                                <li key={m.slug}>
                                    <button
                                        onClick={() => setSelected(m.slug)}
                                        className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${selected === m.slug ? 'bg-primary text-white' : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        {m.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <section className="md:w-3/4 bg-white shadow rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row-reverse items-start gap-6">
                            <div className="p-6 flex-1 flex flex-col justify-center space-y-4">
                                <h2 className="text-2xl font-semibold">{member.name}</h2>
                                <p className="text-sm text-gray-500">{member.role}</p>
                                <p className="text-base text-gray-700 font-medium">{member.specialty}</p>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    {member.history.map((item, idx) => (
                                        <p key={idx}>{item}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-none w-full md:w-1/3 p-4">
                                <div className="relative w-full pb-[125%] overflow-hidden rounded-lg">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
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
        </>
    );
}
