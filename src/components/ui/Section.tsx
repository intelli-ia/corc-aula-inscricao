import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'gradient' | 'spotlight';
    id?: string;
}

export function Section({
    children,
    className,
    variant = 'default',
    id
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative w-full py-8 md:py-12",
                variant === 'gradient' && "bg-gradient-to-b from-primary-dark/20 via-background to-background",
                variant === 'spotlight' && "overflow-hidden",
                className
            )}
        >
            {variant === 'spotlight' && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full mix-blend-color-dodge opacity-20 blur-[120px]"
                        style={{ background: 'radial-gradient(circle, #e59f14 0%, transparent 70%)' }}
                    />
                </div>
            )}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                {children}
            </div>
        </section>
    );
}
