import React from 'react';
import { Lock, AlertTriangle } from 'lucide-react';

const SecurityNotice = () => (
  <div className="space-y-4 mt-6">
    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
      <div className="flex items-start space-x-3">
        <Lock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-100">
          <div className="font-semibold mb-1">🔒 Security Features</div>
          <ul className="space-y-1 text-xs">
            <li>• Uses Web Crypto API for cryptographically secure randomness</li>
            <li>• Generated locally in your browser - never sent over network</li>
            <li>• Fisher-Yates shuffle algorithm for uniform distribution</li>
            <li>• Real-time entropy calculation for strength assessment</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-amber-100">
          <div className="font-semibold mb-1">💡 Password Best Practices</div>
          <ul className="space-y-1 text-xs">
            <li>• Use unique passwords for every account</li>
            <li>• Store passwords in a reputable password manager</li>
            <li>• Enable two-factor authentication when available</li>
            <li>• Passwords with 80+ bits of entropy are recommended</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default SecurityNotice;