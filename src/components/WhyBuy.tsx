import React from 'react';
import { Zap, Trophy, DollarSign } from 'lucide-react';

export default function WhyBuy() {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Cheap",
      description: "Lightning-fast transactions on Solana with minimal fees"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Community Driven",
      description: "Strong community focus with regular events and rewards"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Moon Potential",
      description: "Early entry into the next big meme coin phenomenon"
    }
  ];

  return (
    <section className="text-center space-y-12">
      <h2 className="text-4xl font-bold text-yellow-400 animate-pulse">Why $PIXEL?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} 
               className="bg-indigo-800/30 p-6 rounded-lg border-2 border-indigo-500/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            <div className="flex justify-center mb-4 text-yellow-400">{reason.icon}</div>
            <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
            <p className="text-indigo-200">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}