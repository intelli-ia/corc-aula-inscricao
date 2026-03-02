'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import { Marquee } from '@/components/ui/Marquee';
import { RegistrationModal } from '@/components/features/registration/RegistrationModal';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCalendar = () => {
        // Criar evento no formato iCalendar
        const event = {
            title: 'CORC Ao Vivo - UNIDOM',
            description: 'Aprenda Raciocínio Clínico com o Dr. Carlos Gusmão - Aula gratuita e presencial. Local: Auditório da UNIDOM',
            location: 'Av. Estados Unidos, 20 - Comércio, Salvador - BA, 40010-020',
            startDate: '2026-03-21T08:00:00',
            endDate: '2026-03-21T11:00:00'
        };

        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CORC Ao Vivo//PT
BEGIN:VEVENT
UID:${Date.now()}@corc-aula.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:20260321T080000
DTEND:20260321T110000
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'corc-aula-unidom.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="relative min-h-screen w-full bg-background flex flex-col overflow-hidden text-foreground pb-20">

            {/* Background with modernist image treatment */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Base image with low opacity - extended left on mobile, starts at 1/3 on desktop */}
                <div
                    className="absolute top-[-15%] md:top-0 bottom-0 right-0 left-[-60%] md:left-[33.33%] bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: 'url(https://ogvyzqockhudvcmwnunb.supabase.co/storage/v1/object/public/files/corc-ao-vivo-aula.png)',
                        backgroundPosition: 'center left',
                        maskImage: 'linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskComposite: 'source-in'
                    }}
                />

                {/* Luminosity overlay for modernist effect - extended left on mobile, starts at 1/3 on desktop */}
                <div
                    className="absolute top-[-15%] md:top-0 bottom-0 right-0 left-[-60%] md:left-[33.33%] bg-cover bg-center mix-blend-luminosity opacity-15"
                    style={{
                        backgroundImage: 'url(https://ogvyzqockhudvcmwnunb.supabase.co/storage/v1/object/public/files/corc-ao-vivo-aula.png)',
                        backgroundPosition: 'center left',
                        maskImage: 'linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskComposite: 'source-in'
                    }}
                />

                {/* Color overlay for tint - extended left on mobile, starts at 1/3 on desktop */}
                <div className="absolute inset-y-0 right-0 left-[-20%] md:left-[33.33%] bg-gradient-to-br from-[#e59f14]/10 via-transparent to-transparent mix-blend-overlay" />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />

                {/* Accent glow - positioned on the right */}
                <div
                    className="absolute top-1/2 right-[30%] -translate-y-1/2 w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] rounded-full mix-blend-soft-light opacity-40 blur-[120px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #e59f14 0%, transparent 70%)' }}
                />
            </div>

            {/* Header Embedded */}
            <header className="relative z-10 w-full py-8">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-start md:items-center text-sm md:text-base">
                    <div className="flex items-center gap-2 md:gap-4 font-semibold tracking-wide">
                        <span className="text-xl hidden md:inline">✱</span>
                        {/* Mobile: Two lines */}
                        <div className="flex flex-col md:hidden opacity-90">
                            <span className="text-3xl font-bold leading-tight">CORC</span>
                            <span className="text-base font-medium leading-tight">Ao Vivo</span>
                        </div>
                        {/* Desktop: One line */}
                        <span className="hidden md:inline opacity-90">CORC Ao Vivo</span>
                        <span className="opacity-50 hidden md:inline">|</span>
                        <span className="opacity-70 font-light hidden md:inline">2ª Edição</span>
                    </div>
                    {/* Mobile: Vertical list */}
                    <div className="flex flex-col gap-1 text-right md:hidden font-medium opacity-90">
                        <span className="font-semibold text-lg">21 de Março às 08h</span>
                        <span className="font-light text-sm">Auditório da UNIDOM</span>
                    </div>
                    {/* Desktop: Horizontal layout */}
                    <div className="hidden md:flex items-center gap-2 font-medium opacity-90">
                        <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="font-semibold">21 de Março</span>
                        <span className="opacity-50">|</span>
                        <span className="font-light">08h</span>
                        <span className="opacity-50">|</span>
                        <span className="font-light">Auditório da UNIDOM</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 w-full max-w-7xl mx-auto pt-32 pb-12 md:py-12">
                <div className="max-w-2xl w-full md:w-auto text-center md:text-left mx-auto md:mx-0">
                    <h1 className={cn(
                        "text-3xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.2] tracking-tight mb-8 font-display",
                        playfair.className
                    )}>
                        Aprenda Raciocínio Clínico com o Dr. Carlos Gusmão — Ao Vivo, Gratuito e Presencial.
                    </h1>

                    <p className="text-base md:text-lg mb-10 text-white/70 max-w-xl font-light leading-relaxed mx-auto md:mx-0">
                        Uma oportunidade única de participar ao vivo de uma das aulas do CORC e absorver o método que está formando a nova geração de médicos excepcionais.
                    </p>

                    <div className="flex flex-col gap-6 md:flex-row md:items-center max-w-max mx-auto md:mx-0">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#e59f14] border border-[#e59f14]/20 hover:bg-white hover:text-[#e59f14] transition-colors duration-300 text-white px-8 py-4 rounded font-medium text-lg flex items-center justify-center gap-3"
                        >
                            <span>Garantir Inscrição</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right side pagination decorative elements */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3 opacity-30">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <div key={i} className={cn(
                        "h-px bg-white transition-all duration-300",
                        i === 5 ? "w-8 opacity-100" : "w-4 hover:w-6"
                    )} />
                ))}
            </div>

            {/* Marquee at bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <Marquee />
            </div>

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddToCalendar={handleAddToCalendar}
            />
        </section>
    );
}
