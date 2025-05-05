"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Schema de validação com Zod
const formSchema = z.object({
    name: z.string().min(3, "Informe seu nome completo"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(10, "Telefone inválido"),
    subject: z.string().nonempty("Selecione um assunto"),
    message: z.string().min(20, "Escreva uma mensagem mais detalhada"),
});

type FormData = z.infer<typeof formSchema>;

export default function AgendamentoPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        setValue,
        watch,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    });

    const phoneValue = watch("phone");

    async function onSubmit(data: FormData) {
        // Simula envio
        console.log("Enviando dados:", data);
        await new Promise((r) => setTimeout(r, 2000));
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-xl">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-transform transform hover:-translate-x-1 active:scale-95 mb-4"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Voltar para o site
                </Link>

                <div className="mt-8 bg-white rounded-2xl shadow-lg divide-y divide-gray-200">
                    <div className="px-8 py-6">
                        <h1 className="text-4xl font-semibold text-gray-800 mb-2 text-center">
                            Agende sua consulta
                        </h1>
                        <p className="text-center text-gray-500">
                            Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                                    Nome completo
                                </label>
                                <input
                                    id="name"
                                    {...register("name")}
                                    type="text"
                                    placeholder="Seu nome"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm mt-1 animate-pulse">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    {...register("email")}
                                    type="email"
                                    placeholder="exemplo@dominio.com"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm mt-1 animate-pulse">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
                                Telefone
                            </label>
                            <PhoneInput
                                id="phone"
                                defaultCountry="BR"
                                {...register("phone")}
                                value={phoneValue}
                                onChange={(val) => setValue("phone", val || "", { shouldValidate: true })}
                                international
                                limitMaxLength
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.phone && (
                                <span className="text-red-500 text-sm mt-1 animate-pulse">
                                    {errors.phone.message}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1">
                                Assunto
                            </label>
                            <select
                                id="subject"
                                {...register("subject")}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none ${errors.subject ? 'border-red-500' : 'border-gray-200'}`}
                            >
                                <option value="" disabled>
                                    Selecione uma área
                                </option>
                                <option value="civil">Direito Civil</option>
                                <option value="empresarial">Direito Empresarial</option>
                                <option value="trabalhista">Direito Trabalhista</option>
                                <option value="tributario">Direito Tributário</option>
                                <option value="imobiliario">Direito Imobiliário</option>
                                <option value="consumidor">Direito do Consumidor</option>
                            </select>
                            {errors.subject && (
                                <span className="text-red-500 text-sm mt-1 animate-pulse">
                                    {errors.subject.message}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                {...register("message")}
                                rows={4}
                                placeholder="Descreva brevemente sua necessidade"
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.message && (
                                <span className="text-red-500 text-sm mt-1 animate-pulse">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="w-full py-3 rounded-lg font-medium flex justify-center items-center disabled:opacity-50"
                                disabled={isSubmitting || isSubmitSuccessful}
                            >
                                {isSubmitting ? (
                                    <span className="animate-spin" role="status" aria-label="loading">
                                        ⏳
                                    </span>
                                ) : isSubmitSuccessful ? (
                                    "Enviado!"
                                ) : (
                                    "Enviar Mensagem"
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
}
