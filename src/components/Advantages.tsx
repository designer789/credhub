import React from 'react';

interface AdvantageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Advantage: React.FC<AdvantageProps> = ({ title, description, icon }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-general font-medium text-lg md:text-xl mb-1">{title}</h3>
      <p className="font-general text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  </div>
);

export default function Advantages() {
  const advantages = [
    {
      title: "Cross-Scenario Adaptability",
      description: "Works seamlessly across DeFi, NFTs, DAOs, and off-chain markets like freelancing and P2P commerce.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Economic Incentives",
      description: "Clear, dynamic rewards for active participants — staking, evaluating, governing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Private Reputation Proof",
      description: "Prove your reputation scores with ZKPs—no data exposure, full privacy preserved.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Reputation as Yield",
      description: "Earn from your credibility by staking, lending, or leasing reputation scores.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Broader Coverage",
      description: "Integrates off-chain bridges to pull in verified Web2 data, expanding user base potential.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="advantages" className="w-full py-16 md:py-20 bg-gray-50">

     
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-general font-medium text-lg md:text-xl lg:text-2xl uppercase mb-2">
            Our
          </h2>
          <div className="mb-6">
            <span className='font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text'>
              Advantages
            </span>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {advantages.slice(0, 3).map((advantage, index) => (
            <Advantage
              key={index}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8 max-w-4xl mx-auto">
          {advantages.slice(3).map((advantage, index) => (
            <Advantage
              key={index}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 