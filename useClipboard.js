import { useState, useCallback } from 'react';

export const useClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
      return true;
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return false;
    }
  }, [timeout]);

  return { copied, copyToClipboard };
};