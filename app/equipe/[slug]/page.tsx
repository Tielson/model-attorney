"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetOverlay } from "@/components/ui/sheet";
import { Scale, ArrowLeft } from "lucide-react";


const team = [
    {
        slug: 'carlos-silva',
        name: 'Dr. Carlos Silva',
        role: 'Sócio Fundador',
        specialty: 'Direito Empresarial',
        image: 'https://images.unsplash.com/photo-1662104935741-3feec65ddf3f?q=80&w=2070&auto=format&fit=crop',
        bio: 'Com mais de 20 anos de experiência em direito empresarial, Dr. Carlos Silva lidera casos de alta complexidade com estratégia e excelência.',
    },
    {
        slug: 'ana-oliveira',
        name: 'Dra. Ana Oliveira',
        role: 'Sócia',
        specialty: 'Direito Civil',
        image: 'https://images.unsplash.com/photo-1662104935541-aa5b6e02886d?q=80&w=2070&auto=format&fit=crop',
        bio: 'Especialista em direito de família e sucessões, Dra. Ana Oliveira oferece um atendimento humanizado e focado em resultados.',
    },
    {
        slug: 'roberto-santos',
        name: 'Dr. Roberto Santos',
        role: 'Advogado Sênior',
        specialty: 'Direito Tributário',
        image: 'https://images.unsplash.com/photo-1662104935762-707db0439ecd?q=80&w=2070&auto=format&fit=crop',
        bio: 'Dr. Roberto Santos atua em planejamento tributário e defesa fiscal com profundidade técnica e visão estratégica.',
    },
];

export default function TeamPage() {
    const [selected, setSelected] = useState(team[0].slug);
    const member = team.find((m) => m.slug === selected) || team[0];

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="flex flex-col md:flex-row md:space-x-8">
                <nav className="md:w-1/4 mb-6 md:mb-0">
                    <ul className="space-y-2">
                        {team.map((m) => (
                            <li key={m.slug}>
                                <button
                                    onClick={() => setSelected(m.slug)}
                                    className={
                                        `w-full text-left px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary ` +
                                        (selected === m.slug
                                            ? 'bg-primary text-white'
                                            : 'hover:bg-gray-100')
                                    }
                                >
                                    {m.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="md:w-3/4">
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <div className="w-40 h-40 relative mb-4 md:mb-0 md:mr-6">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                                <p className="text-sm font-medium text-gray-700 mb-4">{member.specialty}</p>
                                <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
