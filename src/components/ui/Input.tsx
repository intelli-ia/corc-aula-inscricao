import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { formatPhoneNumber } from '@/lib/validation';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  mask?: 'phone';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, mask, className, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (mask === 'phone') {
        e.target.value = formatPhoneNumber(e.target.value);
      }
      onChange?.(e);
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-white mb-2"
          >
            {label}
            {props.required && (
              <span className="text-red-400 ml-1" aria-label="obrigatório">
                *
              </span>
            )}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded bg-[#1a1c1d]/50 border text-white placeholder:text-white/40',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-[#e59f14]/50',
            error
              ? 'border-red-500 focus:border-red-500'
              : 'border-white/20 focus:border-[#e59f14]',
            props.disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
          aria-required={props.required}
          onChange={handleChange}
          {...props}
        />
        {error && (
          <p
            id={`${props.id}-error`}
            className="text-red-400 text-sm mt-1"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
