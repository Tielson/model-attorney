"use client";

import Link from "next/link"
import { useState, useEffect} from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetOverlay } from "@/components/ui/sheet"
import { Scale } from "lucide-react"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 backdrop-blur-none md:backdrop-blur-md bg-transparent md:bg-white/70 transition-colors duration-300`}>
            <div className="container flex h-16 items-center justify-between">
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
                        <SheetOverlay className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
                        <SheetContent
                            side="left"
                            className={`w-64 transition-all duration-300 ease-out ${menuOpen ? 'animate-slide-in-left' : 'animate-slide-out-left'
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <Scale className="h-5 w-5 text-primary" />
                                <span className="text-lg font-bold">Advocacia Silva</span>
                            </div>
                            <nav className="flex flex-col gap-4 mt-8">
                                {[
                                    { label: "Início", href: "#" },
                                    { label: "Sobre", href: "#sobre" },
                                    { label: "Áreas de Atuação", href: "#areas" },
                                    { label: "Equipe", href: "#equipe" },
                                    { label: "Contato", href: "#contato" },
                                    { label: "Blog", href: "/blog" },
                                    { label: "Agende uma Consulta", href: "/agendamento" },
                                ].map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="transition-transform hover:scale-105"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                <div
                    className={`flex items-center gap-2 order-2 md:order-none ml-auto md:ml-0 transition-all duration-300 ease-in-out ${scrolled ? "opacity-0 pointer-events-none scale-95 md:opacity-100 md:pointer-events-auto md:scale-100" : "opacity-100 scale-100"
                        } ${menuOpen ? "opacity-0 pointer-events-none scale-95" : ""}`}
                >
                    <Scale className="h-6 w-6 text-primary transition-all duration-300" />
                    <span className="text-xl font-bold transition-all duration-300">
                        Advocacia Silva
                    </span>
                </div>

                <nav
                    className={`hidden md:flex items-center gap-6 transition-opacity duration-300 ease-in-out ${scrolled ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
                        }`}
                >
                    {[
                        { label: "Início", href: "#" },
                        { label: "Sobre", href: "#sobre" },
                        { label: "Áreas de Atuação", href: "#areas" },
                        { label: "Equipe", href: "#equipe" },
                        { label: "Contato", href: "#contato" },
                        { label: "Blog", href: "/blog" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="transition-transform duration-200 ease-out group-hover:scale-90 group-hover:blur-sm group-hover:opacity-70 hover:scale-110 hover:blur-none hover:opacity-100"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/agendamento">
                        <Button className="hidden md:flex transition-transform hover:scale-105">
                            Agende uma Consulta
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}