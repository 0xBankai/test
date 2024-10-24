import React from 'react';
import { Rocket, Twitter, MessageCircle, BarChart3 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-indigo-950/50 backdrop-blur-sm border-b border-indigo-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-yellow-400 animate-bounce" />
            <span className="text-2xl font-bold tracking-tight">PIXEL DOGE</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>Telegram</span>
            </a>
            <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
              <BarChart3 className="w-5 h-5" />
              <span>Chart</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}