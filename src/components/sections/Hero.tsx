'use client';

import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Hero() {
    const handleWhatsAppClick = () => {
        const phoneNumber = '557193211234';
        const message = encodeURIComponent(
            'Olá! Vi a página do Papo de Vendas e gostaria de saber mais sobre como divulgar minha marca no podcast.'
        );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
                        <span className="text-xl hidden md:inline">📻</span>
                        {/* Mobile: Two lines */}
                        <div className="flex flex-col md:hidden opacity-90">
                            <span className="text-3xl font-bold leading-tight">Papo de</span>
                            <span className="text-base font-medium leading-tight">Venda</span>
                        </div>
                        {/* Desktop: One line */}
                        <span className="hidden md:inline opacity-90">Papo de Vendas</span>
                        <span className="opacity-50 hidden md:inline">|</span>
                        <span className="opacity-70 font-light hidden md:inline">Band Bahia</span>
                    </div>
                    {/* Mobile: Vertical list */}
                    <div className="flex flex-col gap-1 text-right md:hidden font-medium opacity-90">
                        <span className="font-semibold text-lg">Podcast</span>
                        <span className="font-light text-sm">com Silvana</span>
                    </div>
                    {/* Desktop: Horizontal layout */}
                    <div className="hidden md:flex items-center gap-2 font-medium opacity-90">
                        <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                        <span className="font-semibold">Apresentado por Silvana</span>
                        <span className="opacity-50">|</span>
                        <span className="font-light">Band Bahia</span>
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
                        Divulgue Sua Marca na Band Bahia — Alcance Centenas de Milhares de Espectadores na Band Bahia.
                    </h1>

                    <p className="text-base md:text-lg mb-10 text-white/70 max-w-xl font-light leading-relaxed mx-auto md:mx-0">
                        Um podcast dedicado a negócios, empreendedorismo e vendas. Participe e coloque sua empresa em destaque para milhares de pessoas que confiam na Band Bahia.
                    </p>

                    {/* Barra de Vagas */}
                    <div className="mb-8 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-white/90">Vagas para Participação</span>
                            <span className="text-sm font-semibold text-[#e59f14]">5 vagas disponíveis neste mês</span>
                        </div>
                        <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                            {/* Barra de progresso preenchida */}
                            <div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#e59f14] to-[#e59f14]/80 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: '60%' }}
                            >
                                {/* Brilho interno */}
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row md:items-center max-w-max mx-auto md:mx-0">
                        <button
                            onClick={handleWhatsAppClick}
                            className="bg-[#e59f14] border border-[#e59f14]/20 hover:bg-white hover:text-[#e59f14] transition-colors duration-300 text-white px-8 py-4 rounded font-medium text-lg flex items-center justify-center gap-3"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span>Quero Participar</span>
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
        </section>
    );
}
