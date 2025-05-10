"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';

const mockPosts = [
    {
        id: 1,
        title: 'Planejamento Tributário: Estratégias para 2025',
        author: 'Dr. Roberto Santos',
        date: '12 de Abril de 2025',
        excerpt:
            'Dr. Roberto Santos compartilha as principais mudanças na legislação tributária e como sua empresa pode se preparar para o próximo ano.',
        href: '/blog/planejamento-tributario-2025'
    },
    {
        id: 2,
        title: 'Mediação Familiar: Boas Práticas e Casos de Sucesso',
        author: 'Dra. Ana Oliveira',
        date: '22 de Março de 2025',
        excerpt:
            'Entenda como a mediação pode reduzir conflitos e custos em processos de família, com insights e exemplos reais.',
        href: '/blog/mediacao-familiar'
    },
    {
        id: 3,
        title: 'Fusões e Aquisições em Tempos de Crise',
        author: 'Dr. Carlos Silva',
        date: '05 de Maio de 2025',
        excerpt:
            'Uma análise especializada sobre oportunidades e riscos em operações de fusão e aquisição durante períodos econômicos desafiadores.',
        href: '/blog/fusoes-aquisicoes-crise'
    }
];

export default function BlogPage() {
    return (
        <>
            <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
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
                <h1 className="text-3xl md:text-4xl font-bold text-center">Blog</h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">
                    Bem-vindo ao nosso blog! Acompanhe artigos, novidades e insights sobre Direito Empresarial, Direito Civil e Direito Tributário, elaborados por nossos especialistas.
                </p>
                <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {mockPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                            <div className="p-6 flex flex-col h-full">
                                <h2 className="text-xl font-semibold hover:text-primary transition-colors cursor-pointer">
                                    <Link href={post.href}>{post.title}</Link>
                                </h2>
                                <div className="mt-2 text-sm text-gray-500">
                                    <span>{post.date}</span> • <span>{post.author}</span>
                                </div>
                                <p className="mt-4 flex-1 text-gray-700 leading-relaxed">{post.excerpt}</p>
                                <div className="mt-4">
                                    <Link
                                        href={post.href}
                                        className="inline-block text-primary hover:underline font-medium"
                                    >
                                        Leia mais →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
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
        </>
    );
}
