export type LogoVariant = 'dark' | 'light';

export interface LogoProps {
  size?: number;
  variant?: LogoVariant;
  className?: string;
  title?: string | null;
}

const PALETTE: Record<LogoVariant, { mark: string; accent: string }> = {
  dark: { mark: '#0E5548', accent: '#22BF7A' },
  light: { mark: '#FFFFFF', accent: '#4FD99A' },
};

// Balão de conversa aberto: arco esquerdo + rabinho + base
const BUBBLE_PATH =
  'M12.4 12.9 A21 21 0 0 0 8.5 34.9 L5.5 44 L15 43.5 A21 21 0 0 0 35.2 46.7';

// Arco superior que "gira" até a seta
const ORBIT_PATH = 'M16.3 9.6 A21 21 0 0 1 48.8 24.1';

const LETTER_PATH = 'M18.5 35.5 V15.5 H27.5 A6.75 6.75 0 0 1 27.5 29 H18.5 M28 29 L40.5 42';

export function Logo({ size = 32, variant = 'dark', className, title = 'Recebba' }: LogoProps) {
  const palette = PALETTE[variant];
  return (
    <svg
      width={size}
      height={size}
      viewBox="2 1 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title ?? undefined}
      style={{ flexShrink: 0 }}
    >
      {title ? <title>{title}</title> : null}
      <path
        d={BUBBLE_PATH}
        stroke={palette.mark}
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={ORBIT_PATH} stroke={palette.accent} strokeWidth={3.2} strokeLinecap="round" />
      <path
        d={LETTER_PATH}
        stroke={palette.mark}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M41.5 32 H45" stroke={palette.accent} strokeWidth={3.4} strokeLinecap="round" />
      <path d="M44.2 28.2 L50.2 32 L44.2 35.8 Z" fill={palette.accent} stroke={palette.accent} strokeWidth={1.2} strokeLinejoin="round" />
      <circle cx={23.2} cy={40.3} r={0.85} fill={palette.accent} />
      <circle cx={26.5} cy={40.3} r={0.85} fill={palette.accent} />
      <circle cx={29.8} cy={40.3} r={0.85} fill={palette.accent} />
    </svg>
  );
}
