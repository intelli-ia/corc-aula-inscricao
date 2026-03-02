'use client';

import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { validateField } from '@/lib/validation';
import { sendRegistration } from '@/lib/api';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface RegistrationFormProps {
  onSuccess: (data: { nome: string; whatsapp: string }) => void;
}

interface FormData {
  nome: string;
  whatsapp: string;
}

interface FormErrors {
  nome?: string;
  whatsapp?: string;
}

type FormStatus = 'idle' | 'submitting' | 'error';

export function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({ nome: '', whatsapp: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [apiError, setApiError] = useState<string | null>(null);

  const handleBlur = (field: 'nome' | 'whatsapp') => {
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({
      ...prev,
      [field]: error || undefined,
    }));
  };

  const validate = (): boolean => {
    const nomeError = validateField('nome', formData.nome);
    const whatsappError = validateField('whatsapp', formData.whatsapp);

    setErrors({
      nome: nomeError || undefined,
      whatsapp: whatsappError || undefined,
    });

    return !nomeError && !whatsappError;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validar
    if (!validate()) {
      return;
    }

    // Limpar erros e setar loading
    setErrors({});
    setApiError(null);
    setStatus('submitting');

    try {
      // Enviar para webhook
      await sendRegistration({
        nome: formData.nome.trim(),
        whatsapp: formData.whatsapp.replace(/\D/g, ''),
      });

      // Sucesso
      onSuccess(formData);
    } catch (error) {
      // Erro
      setStatus('error');
      setApiError(
        error instanceof Error
          ? error.message
          : 'Erro ao processar inscrição. Tente novamente.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div>
        <h2
          id="modal-title"
          className={cn(
            'text-3xl text-white mb-2',
            playfair.className
          )}
        >
          Falta pouco!
        </h2>
        <p id="modal-description" className="text-white/60">
          Preencha os dados abaixo para confirmar sua presença.
        </p>
      </div>

      <Input
        id="nome"
        name="nome"
        label="Nome"
        value={formData.nome}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, nome: e.target.value }))
        }
        onBlur={() => handleBlur('nome')}
        error={errors.nome}
        disabled={status === 'submitting'}
        required
        autoFocus
      />

      <Input
        id="whatsapp"
        name="whatsapp"
        type="tel"
        label="WhatsApp"
        mask="phone"
        value={formData.whatsapp}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))
        }
        onBlur={() => handleBlur('whatsapp')}
        error={errors.whatsapp}
        placeholder="(00) 00000-0000"
        disabled={status === 'submitting'}
        required
      />

      {apiError && (
        <div
          className="bg-red-500/10 border border-red-500/20 rounded p-3 text-red-400 text-sm"
          role="alert"
          aria-live="assertive"
        >
          {apiError}
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-[#e59f14] hover:bg-[#b87f0f] border-[#e59f14]/20"
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <span className="sr-only">Processando inscrição</span>
            <span aria-hidden="true">Processando...</span>
          </>
        ) : (
          'Confirmar Inscrição'
        )}
      </Button>
    </form>
  );
}
