import React from 'react';
import { Wallet, ArrowRight, Coins } from 'lucide-react';

export default function HowToBuy() {
  const steps = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Create Wallet",
      description: "Download Phantom wallet and add SOL"
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Send SOL",
      description: "Transfer SOL to your wallet"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Swap Tokens",
      description: "Use Raydium to swap SOL for $PIXEL"
    }
  ];

  return (
    <section className="text-center space-y-12">
      <h2 className="text-4xl font-bold text-yellow-400 animate-pulse">How to Buy</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-indigo-800/30 p-6 rounded-lg border-2 border-indigo-500/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-4 text-yellow-400">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-indigo-200">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}