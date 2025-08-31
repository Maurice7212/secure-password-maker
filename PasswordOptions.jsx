import React from 'react';
import { Check } from 'lucide-react';

const PasswordOptions = ({ options, onOptionChange, length, onLengthChange }) => (
  <>
    <div className="mb-6">
      <label className="block text-sm font-semibold text-slate-300 mb-3">
        Password Length: <span className="text-emerald-400 text-lg">{length}</span>
      </label>
      <div className="relative">
        <input
          type="range"
          min="8"
          max="128"
          value={length}
          onChange={(e) => onLengthChange(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-2">
          <span>8 chars</span>
          <span>64 chars</span>
          <span>128 chars</span>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <label className="block text-sm font-semibold text-slate-300 mb-4">Character Types</label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { key: 'uppercase', label: 'Uppercase Letters', example: 'ABCD', icon: '🔤' },
          { key: 'lowercase', label: 'Lowercase Letters', example: 'abcd', icon: '🔡' },
          { key: 'numbers', label: 'Numbers', example: '1234', icon: '🔢' },
          { key: 'symbols', label: 'Special Symbols', example: '!@#$', icon: '🔣' }
        ].map(({ key, label, example, icon }) => (
          <label 
            key={key} 
            className={`flex items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
              options[key] 
                ? 'bg-emerald-500/10 border-emerald-500/50 hover:bg-emerald-500/20' 
                : 'bg-slate-800/30 border-slate-600/30 hover:bg-slate-800/50'
            }`}
          >
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => onOptionChange(key)}
              className="sr-only"
            />
            <div className="flex items-center space-x-3 flex-1">
              <span className="text-2xl">{icon}</span>
              <div>
                <div className="text-white text-sm font-medium">{label}</div>
                <div className="text-slate-400 text-xs font-mono">{example}</div>
              </div>
            </div>
            {options[key] && <Check className="w-5 h-5 text-emerald-400" />}
          </label>
        ))}
      </div>
    </div>

    <div className="mb-8">
      <label className="block text-sm font-semibold text-slate-300 mb-4">Advanced Options</label>
      <div className="space-y-3">
        <label className={`flex items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
          options.excludeSimilar 
            ? 'bg-blue-500/10 border-blue-500/50 hover:bg-blue-500/20' 
            : 'bg-slate-800/30 border-slate-600/30 hover:bg-slate-800/50'
        }`}>
          <input
            type="checkbox"
            checked={options.excludeSimilar}
            onChange={() => onOptionChange('excludeSimilar')}
            className="sr-only"
          />
          <div className="flex-1">
            <div className="text-white text-sm font-medium">Exclude Similar Characters</div>
            <div className="text-slate-400 text-xs">Avoids: i, l, 1, L, o, 0, O</div>
          </div>
          {options.excludeSimilar && <Check className="w-5 h-5 text-blue-400" />}
        </label>
        
        <label className={`flex items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
          options.excludeAmbiguous 
            ? 'bg-purple-500/10 border-purple-500/50 hover:bg-purple-500/20' 
            : 'bg-slate-800/30 border-slate-600/30 hover:bg-slate-800/50'
        }`}>
          <input
            type="checkbox"
            checked={options.excludeAmbiguous}
            onChange={() => onOptionChange('excludeAmbiguous')}
            className="sr-only"
          />
          <div className="flex-1">
            <div className="text-white text-sm font-medium">Exclude Ambiguous Characters</div>
            <div className="text-slate-400 text-xs">Avoids: {`{ } [ ] ( ) / \\ ' " \` ~`}</div>
          </div>
          {options.excludeAmbiguous && <Check className="w-5 h-5 text-purple-400" />}
        </label>
      </div>
    </div>
  </>
);

export default PasswordOptions;