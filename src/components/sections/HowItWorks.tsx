'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { FadeInView } from '@/components/animations/FadeInView';
import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import { Play, Radio } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Section variant="spotlight" id="como-funciona">
      <div className="max-w-5xl mx-auto">
        <FadeInView direction="up">
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl text-center mb-6 font-display",
            playfair.className
          )}>
            Como Funciona
          </h1>
        </FadeInView>

        <FadeInView direction="up" delay={0.1}>
          <h2 className={cn(
            "text-2xl md:text-3xl lg:text-4xl text-center mb-4 font-display text-white/90",
            playfair.className
          )}>
            Sua Empresa no Papo de Vendas
          </h2>
        </FadeInView>

        <FadeInView direction="up" delay={0.2}>
          <div className="flex items-center justify-center gap-2 mb-12 text-white/70">
            <Radio className="w-5 h-5 hidden md:inline-block" />
            <p className="text-lg text-center max-w-2xl">
              Descubra como sua marca pode alcançar milhares de pessoas através do podcast mais influente da Band Bahia
            </p>
          </div>
        </FadeInView>

        <FadeInView direction="up" delay={0.3}>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 border border-white/10 bg-black/20">
            {/* Placeholder para vídeo - substituir pela URL real do vídeo */}
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_AQUI"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              title="Como participar do Papo de Vendas - Band Bahia"
            />

            {/* Overlay de play (opcional - remover quando tiver vídeo real) */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e59f14]/20 to-transparent backdrop-blur-sm cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#e59f14] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Steps de participação */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#e59f14] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Entre em Contato</h3>
              <p className="text-white/70">
                Preencha o formulário e nossa equipe entrará em contato
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#e59f14] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Planejamento</h3>
              <p className="text-white/70">
                Definimos juntos a melhor estratégia para sua marca
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#e59f14] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Divulgação</h3>
              <p className="text-white/70">
                Sua empresa alcança milhares de potenciais clientes
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="#contato"
              className="bg-[#e59f14] border border-[#e59f14]/20 hover:bg-white hover:text-[#e59f14] transition-colors duration-300 text-white px-8 py-4 rounded font-medium text-lg flex items-center justify-center gap-3 w-full md:w-auto"
            >
              <Radio className="w-5 h-5" />
              <span>Quero Participar</span>
            </a>
          </div>
        </FadeInView>
      </div>
    </Section>
  );
}
