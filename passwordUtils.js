// Character sets for password generation
export const CHARACTER_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  similar: 'il1Lo0O',
  ambiguous: '{}[]()/\\\'"`~,;.<>'
};

// Generate cryptographically secure random password
export const generateSecurePassword = (length, options) => {
  let charset = '';
  let minChars = [];

  // Build character set based on options
  if (options.uppercase) {
    charset += CHARACTER_SETS.uppercase;
    minChars.push(getSecureRandomChar(CHARACTER_SETS.uppercase));
  }
  if (options.lowercase) {
    charset += CHARACTER_SETS.lowercase;
    minChars.push(getSecureRandomChar(CHARACTER_SETS.lowercase));
  }
  if (options.numbers) {
    charset += CHARACTER_SETS.numbers;
    minChars.push(getSecureRandomChar(CHARACTER_SETS.numbers));
  }
  if (options.symbols) {
    charset += CHARACTER_SETS.symbols;
    minChars.push(getSecureRandomChar(CHARACTER_SETS.symbols));
  }

  // Remove unwanted characters
  if (options.excludeSimilar) {
    charset = charset.split('').filter(char => !CHARACTER_SETS.similar.includes(char)).join('');
  }
  if (options.excludeAmbiguous) {
    charset = charset.split('').filter(char => !CHARACTER_SETS.ambiguous.includes(char)).join('');
  }

  if (charset.length === 0) {
    throw new Error('No character types selected');
  }

  // Generate remaining characters
  const remainingLength = length - minChars.length;
  const randomChars = Array.from({ length: remainingLength }, () => 
    getSecureRandomChar(charset)
  );

  // Combine and shuffle
  const password = [...minChars, ...randomChars];
  return secureShuffleArray(password).join('');
};

// Get cryptographically secure random character from charset
const getSecureRandomChar = (charset) => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return charset[array[0] % charset.length];
};

// Fisher-Yates shuffle using crypto.getRandomValues
const secureShuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomBytes = new Uint32Array(1);
    crypto.getRandomValues(randomBytes);
    const j = randomBytes[0] % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};