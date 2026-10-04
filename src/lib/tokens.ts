/**
 * Design tokens — single source of truth for colors, spacing, typography, shadows, and radii.
 * Uses the exact original brand palette (#9857d3 violet to #6EBFF4 blue/cyan gradient).
 */

export const colors = {
  // Base backgrounds
  background: '#11071F',
  backgroundAlt: '#13082A',
  surface: '#1A0B2E',
  surfaceAlt: '#1E0E37',

  // Borders
  border: 'rgba(124, 58, 237, 0.2)',
  borderHover: 'rgba(152, 87, 211, 0.5)',
  borderSubtle: 'rgba(255, 255, 255, 0.08)',

  // Text
  foreground: '#FFFFFF',
  muted: '#9CA3AF',
  mutedAlt: '#6B7280',
  subtle: '#4B5563',

  // Primary — violet #9857d3
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9857d3',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    DEFAULT: '#9857d3',
  },

  // Secondary — #6EBFF4
  secondary: {
    300: '#93c5fd',
    400: '#6EBFF4',
    500: '#3b82f6',
    DEFAULT: '#6EBFF4',
  },

  // Accent
  accent: {
    violet: '#9857d3',
    blue: '#6EBFF4',
    DEFAULT: '#9857d3',
  },
} as const;

export const radii = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
  md: '0 4px 12px -2px rgba(0, 0, 0, 0.5)',
  lg: '0 10px 30px -5px rgba(0, 0, 0, 0.6)',
  glow: '0 0 20px rgba(152, 87, 211, 0.3)',
  glowStrong: '0 0 30px rgba(147, 51, 234, 0.6)',
  card: '0 4px 24px -4px rgba(0, 0, 0, 0.5)',
  cardHover: '0 25px 50px -12px rgba(147, 51, 234, 0.25)',
} as const;

export const gradients = {
  primary: 'linear-gradient(135deg, #9857d3, #6EBFF4)',
  primaryButton: 'linear-gradient(135deg, #9857d3, #6EBFF4)',
  surface: 'linear-gradient(135deg, #1A0B2E, #13082A)',
  card: 'linear-gradient(135deg, rgba(26, 11, 46, 0.8), rgba(30, 14, 55, 0.6))',
} as const;

export const typography = {
  fontSans: '"Preahvihear", system-ui, -apple-system, sans-serif',
  fontMono: '"JetBrains Mono", "Fira Code", "Courier New", monospace',
} as const;
