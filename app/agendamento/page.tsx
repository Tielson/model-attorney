import Link from "next/link"
import { ChevronRight, Mail, MapPin, Phone, Scale } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AgendamentoPage() {
    return (

<div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 px-4 py-10">
    <div className="space-y-4 mb-8">
        <h3 className="text-3xl font-bold text-center mb-8">Agende uma Consulta</h3>
        <p className="text-gray-500">Preencha o formulário abaixo e entraremos em contato em até 24 horas.</p>
    </div>
    <form className="w-full max-w-2xl space-y-4 rounded-lg border bg-white p-6 shadow-md">
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
    );
}
