import React from 'react';
import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-950/50 border-t border-indigo-500/20 mt-32">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Rocket className="w-8 h-8 text-yellow-400 animate-bounce" />
          <div className="text-center">
            <p className="text-indigo-200">© 2024 Pixel Doge. To the moon! 🚀</p>
            <p className="text-indigo-400 text-sm mt-2">
              Contract: 4xPix...El69
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}