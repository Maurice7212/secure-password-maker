import { useState, useCallback } from 'react';
import { generateSecurePassword, calculatePasswordStrength } from '../utils/passwordUtils';

export const usePasswordGenerator = (length, options) => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState({ score: 0, label: '', color: '', entropy: 0 });
  const [error, setError] = useState(null);

  const generatePassword = useCallback(() => {
    try {
      const newPassword = generateSecurePassword(length, options);
      setPassword(newPassword);
      setStrength(calculatePasswordStrength(newPassword));
      setError(null);
      return newPassword;
    } catch (err) {
      setError(err.message);
      setPassword('');
      setStrength({ score: 0, label: 'Error', color: 'text-red-500', entropy: 0 });
      return null;
    }
  }, [length, options]);

  return { password, strength, generatePassword, error };
};