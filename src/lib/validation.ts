export const validators = {
  nome: {
    required: (value: string) => !value.trim() ? 'Nome é obrigatório' : null,
    minLength: (value: string, min: number = 3) =>
      value.trim().length < min ? `Nome deve ter no mínimo ${min} caracteres` : null,
    pattern: (value: string) =>
      !/^[a-záàâãéèêíïóôõöúçñA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]+$/.test(value)
        ? 'Nome deve conter apenas letras'
        : null,
  },

  whatsapp: {
    required: (value: string) => !value.trim() ? 'WhatsApp é obrigatório' : null,
    length: (value: string) => {
      const numbers = value.replace(/\D/g, '');
      return numbers.length !== 11 ? 'WhatsApp deve ter 11 dígitos' : null;
    },
    format: (value: string) => {
      const numbers = value.replace(/\D/g, '');
      if (numbers.length !== 11) return null; // Já validado em length

      // DDD válido (11-99, exceto 00)
      const ddd = parseInt(numbers.substring(0, 2));
      if (ddd < 11 || ddd > 99) return 'DDD inválido';

      // Celular deve começar com 9
      if (numbers[2] !== '9') return 'Número de celular inválido';

      return null;
    },
  },
};

export function validateField(fieldName: 'nome' | 'whatsapp', value: string): string | null {
  const fieldValidators = validators[fieldName];
  for (const validator of Object.values(fieldValidators)) {
    const error = validator(value);
    if (error) return error;
  }
  return null;
}

export function formatPhoneNumber(value: string): string {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  }
  return value;
}
