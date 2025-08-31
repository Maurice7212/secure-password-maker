// Calculate password entropy and strength
export const calculatePasswordStrength = (password) => {
  if (!password) {
    return { score: 0, label: 'Invalid', color: 'text-red-500', entropy: 0 };
  }

  // Calculate character space
  let charset = 0;
  if (/[a-z]/.test(password)) charset += 26;
  if (/[A-Z]/.test(password)) charset += 26;
  if (/[0-9]/.test(password)) charset += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charset += 32;

  // Calculate entropy
  const entropy = Math.log2(Math.pow(charset, password.length));

  // Score based on various criteria
  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  if (password.length >= 16) score += 1;

  const strengthMap = {
    0: { label: 'Very Weak', color: 'text-red-500' },
    1: { label: 'Weak', color: 'text-red-400' },
    2: { label: 'Fair', color: 'text-orange-500' },
    3: { label: 'Good', color: 'text-yellow-500' },
    4: { label: 'Strong', color: 'text-green-500' },
    5: { label: 'Very Strong', color: 'text-green-400' },
    6: { label: 'Excellent', color: 'text-emerald-400' }
  };

  return {
    ...strengthMap[score],
    score,
    entropy: Math.round(entropy)
  };
};

// Check for common password patterns
export const checkPasswordPatterns = (password) => {
  const patterns = {
    consecutive: /(.)\1{2,}/.test(password),
    sequential: /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i.test(password),
    keyboard: /(?:qwe|wer|ert|rty|tyu|yui|uio|iop|asd|sdf|dfg|fgh|ghj|hjk|jkl|zxc|xcv|cvb|vbn|bnm)/i.test(password),
    common: /(?:password|123456|qwerty|abc123|letmein|welcome|admin|login)/i.test(password)
  };

  return patterns;
};