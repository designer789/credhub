import React from 'react';
import Image from 'next/image';

interface TokenAllocationProps {
  name: string;
  percentage: number;
  color: string;
}

const TokenAllocation: React.FC<TokenAllocationProps> = ({ name, percentage, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-general font-medium text-sm md:text-base">{name}</span>
      <span className="font-general font-medium text-sm md:text-base">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default function Tokenomics() {
  const allocations = [
    { name: "Fair Launch", percentage: 60, color: "bg-primary" },
    { name: "Reputation Rewards", percentage: 15, color: "bg-blue-500" },
    { name: "Ecosystem Incentives & Community Growth", percentage: 15, color: "bg-purple-500" },
    { name: "Development & Partnerships", percentage: 5, color: "bg-indigo-500" },
    { name: "Team & Advisors", percentage: 5, color: "bg-pink-500" }
  ];

  const utilities = [
    {
      title: "Staking",
      description: "Back user reputations and earn dynamic rewards."
    },
    {
      title: "Governance",
      description: "Vote on proposals, disputes, and protocol upgrades."
    },
    {
      title: "Ecosystem Access",
      description: "Unlock advanced reputation services and features."
    },
    {
      title: "Rewards",
      description: "Earn incentives for participation, evaluation, and staking."
    },
    {
      title: "Network Alignment",
      description: "Strengthen and benefit from Cred.Hub's overall growth."
    }
  ];

  return (
    <section id="tokenomics" className="w-full py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg3.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-20"
          quality={90}
        />
      </div>
      
      
      
      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        <div className="mb-12 text-center">
          
          <div className="mb-6">
            <span className='font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text'>
              Tokenomics
            </span>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Token Info */}
          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-sm border border-green-200/40 shadow-green-100/20">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-general font-semibold text-xl md:text-2xl mb-1">Token Name</h3>
                  <p className="font-general text-gray-600">$CRED</p>
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-general font-bold text-xl">$</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-general font-semibold text-xl md:text-2xl mb-1">Total Supply</h3>
                <p className="font-general text-gray-600">1,000,000,000 $CRED</p>
              </div>
            </div>
            
            <h3 className="font-general font-semibold text-xl md:text-2xl mb-4">Token Allocation</h3>
            <div className="space-y-2">
              {allocations.map((allocation, index) => (
                <TokenAllocation
                  key={index}
                  name={allocation.name}
                  percentage={allocation.percentage}
                  color={allocation.color}
                />
              ))}
            </div>
          </div>

          {/* Utility */}
          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-sm border border-green-200/40 shadow-green-100/20">
            <h3 className="font-general font-semibold text-xl md:text-2xl mb-6">Utility</h3>
            
            <div className="space-y-6">
              {utilities.map((utility, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-general font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-general font-medium text-lg md:text-xl mb-1">{utility.title}</h4>
                    <p className="font-general text-gray-600 text-sm md:text-base">{utility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 