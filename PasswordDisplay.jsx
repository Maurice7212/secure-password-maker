import React from 'react';
import { Copy, Eye, EyeOff, Check, Zap } from 'lucide-react';

const PasswordDisplay = ({ password, showPassword, onToggleVisibility, onCopy, copied, strength, error }) => (
  <div className="mb-8">
    <label className="block text-sm font-semibold text-slate-300 mb-3">Generated Password</label>
    <div className="relative group">
      <div className="flex items-center bg-slate-800/50 rounded-xl border border-slate-600/50 overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          readOnly
          className={`flex-1 bg-transparent px-4 py-4 text-lg font-mono focus:outline-none selection:bg-emerald-500/30 ${
            error ? 'text-red-400' : 'text-white'
          }`}
          placeholder="Click generate to create password..."
        />
        <button
          onClick={onToggleVisibility}
          className="p-4 text-slate-400 hover:text-white transition-colors"
          title={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
        <button
          onClick={onCopy}
          disabled={!password || error}
          className="p-4 text-slate-400 hover:text-emerald-400 disabled:opacity-50 transition-colors border-l border-slate-600/50"
          title="Copy to clipboard"
        >
          {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
        </button>
      </div>
      
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
    </div>
    
    {!error && (
      <div className="flex items-center justify-between mt-3 text-sm">
        <div className="flex items-center space-x-4">
          <span className="text-slate-400">Strength: </span>
          <span className={`font-semibold ${strength.color}`}>{strength.label}</span>
          <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                strength.score <= 2 ? 'bg-gradient-to-r from-red-500 to-red-400' : 
                strength.score <= 4 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' : 
                'bg-gradient-to-r from-green-500 to-emerald-400'
              }`}
              style={{ width: `${(strength.score / 6) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-400">Entropy: <span className="text-emerald-400 font-mono">{strength.entropy}</span> bits</span>
        </div>
      </div>
    )}
  </div>
);

export default PasswordDisplay;