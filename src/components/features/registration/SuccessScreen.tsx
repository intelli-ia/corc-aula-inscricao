'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface SuccessScreenProps {
  onAddToCalendar: () => void;
}

export function SuccessScreen({ onAddToCalendar }: SuccessScreenProps) {
  return (
    <div className="p-6 space-y-6 text-center">
      {/* Ícone de sucesso animado */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 200,
          delay: 0.1,
        }}
        className="w-16 h-16 mx-auto bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center"
      >
        <CheckCircle className="w-10 h-10 text-green-400" />
      </motion.div>

      <div>
        <h2
          className={cn(
            'text-3xl text-white mb-2',
            playfair.className
          )}
        >
          Inscrição Confirmada!
        </h2>
        <p className="text-white/70">
          Sua presença está garantida na aula.
        </p>
      </div>

      {/* Detalhes do evento */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/5 border border-white/10 rounded-lg p-4 text-left space-y-3"
      >
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-[#e59f14] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-white font-medium">21 de Março, 2026</p>
            <p className="text-white/60 text-sm">08h às 17h</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#e59f14] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-white font-medium">Auditório da UNIDOM</p>
            <p className="text-white/60 text-sm">
              Av. Estados Unidos, 20 - Comércio, Salvador - BA, 40010-020
            </p>
          </div>
        </div>
      </motion.div>

      {/* Botão Salvar na Agenda */}
      <Button
        onClick={onAddToCalendar}
        variant="outline"
        className="w-full border-[#e59f14] text-[#e59f14] hover:bg-[#e59f14]/10"
      >
        <Calendar className="w-5 h-5" />
        <span>Salvar na Agenda</span>
      </Button>

      <div role="status" aria-live="polite" className="sr-only">
        Inscrição realizada com sucesso
      </div>
    </div>
  );
}
