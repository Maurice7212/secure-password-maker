export const CHARACTER_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  similar: 'il1Lo0O',
  ambiguous: '{}[]()/\\\'"`~,;.<>'
};

export const DEFAULT_OPTIONS = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  excludeSimilar: false,
  excludeAmbiguous: false
};

export const PASSWORD_LENGTH = {
  MIN: 8,
  MAX: 128,
  DEFAULT: 16,
  RECOMMENDED: 20
};

export const ENTROPY_LEVELS = {
  VERY_WEAK: 25,
  WEAK: 35,
  FAIR: 50,
  GOOD: 65,
  STRONG: 80,
  EXCELLENT: 100
};

export const CLIPBOARD_TIMEOUT = 2000;