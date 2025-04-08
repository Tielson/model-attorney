"use client";

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Scale } from "lucide-react"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">

                {/* Menu Mobile */}
                <div className="md:hidden order-1">
                    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <span className="sr-only">Menu</span>
                                {!menuOpen && (
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
                                )}
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className={`w-64 transition-all duration-300 ease-out ${
                                menuOpen ? 'animate-slide-in-left' : 'animate-slide-out-left'
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <Scale className="h-5 w-5 text-primary" />
                                <span className="text-lg font-bold">Advocacia Silva</span>
                            </div>
                            <nav className="flex flex-col gap-4 mt-8">
                                <a href="#" onClick={() => setMenuOpen(false)}>Início</a>
                                <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
                                <a href="#areas" onClick={() => setMenuOpen(false)}>Áreas de Atuação</a>
                                <a href="#equipe" onClick={() => setMenuOpen(false)}>Equipe</a>
                                <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
                                <a href="/agendamento" onClick={() => setMenuOpen(false)}>Agende uma Consulta</a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo */}
                <div
                    className={`flex items-center gap-2 order-2 md:order-none ml-auto md:ml-0 transition-all duration-300 ease-in-out ${
                        menuOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                    }`}
                >
                    <Scale className="h-6 w-6 text-primary transition-all duration-300" />
                    <span className="text-xl font-bold transition-all duration-300">Advocacia Silva</span>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#">Início</Link>
                    <Link href="#sobre">Sobre</Link>
                    <Link href="#areas">Áreas de Atuação</Link>
                    <Link href="#equipe">Equipe</Link>
                    <Link href="#contato">Contato</Link>
                    <Link href="/agendamento">
                        <Button className="hidden md:flex">Agende uma Consulta</Button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
