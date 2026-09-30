export type LogoVariant = 'dark' | 'light';

export interface LogoProps {
  size?: number;
  variant?: LogoVariant;
  className?: string;
  title?: string | null;
}

const PALETTE: Record<LogoVariant, { bubble: string; letter: string; arrow: string }> = {
  dark: { bubble: '#0B3B3F', letter: '#FFFFFF', arrow: '#15805E' },
  light: { bubble: '#FFFFFF', letter: '#0B3B3F', arrow: '#D9F0E4' },
};

const BUBBLE_PATH =
  'M9 8 H20.5 A7 7 0 0 1 27.5 15 V23 A7 7 0 0 1 20.5 30 H16 L9 36 V30 ' +
  'A7 7 0 0 1 2 23 V15 A7 7 0 0 1 9 8 Z';

const LETTER_PATH =
  'M9.6 12.7 H16.3 A3.6 3.6 0 0 1 16.3 19.9 H14.2 L19.6 25.3 H16.7 L12.2 20.8 V25.3 H9.6 Z ' +
  'M12.2 14.9 H16.3 A1.4 1.4 0 0 1 16.3 17.7 H12.2 Z';

export function Logo({ size = 32, variant = 'dark', className, title = 'Recebba' }: LogoProps) {
  const palette = PALETTE[variant];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title ?? undefined}
      style={{ flexShrink: 0 }}
    >
      {title ? <title>{title}</title> : null}
      <path d={BUBBLE_PATH} fill={palette.bubble} />
      <path d={LETTER_PATH} fill={palette.letter} fillRule="evenodd" clipRule="evenodd" />
      <path d="M30 19 H40" stroke={palette.arrow} strokeWidth={2.8} strokeLinecap="round" />
      <path
        d="M36.2 14.9 L40.4 19 L36.2 23.1"
        stroke={palette.arrow}
        strokeWidth={2.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
