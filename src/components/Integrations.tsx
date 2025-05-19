'use client';

import React from 'react';
import Image from 'next/image';

interface IntegrationItemProps {
  icon: React.ReactNode;
  name: string;
  category: 'account' | 'blockchain';
}

const IntegrationItem: React.FC<IntegrationItemProps> = ({ icon, name, category }) => (
  <div className="flex items-center gap-3 p-4 bg-black/5 backdrop-blur-sm rounded-lg border border-green-200/20 hover:border-green-400/30 transition-all hover:shadow-md shadow-green-100/10 ">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <span className="font-general font-medium text-gray-800">{name}</span>
  </div>
);

export default function Integrations() {
  const accountIntegrations = [
    {
      name: "Telegram Accounts",
      icon: (
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.18-.04-.26-.02-.11.02-1.93 1.23-5.44 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.28-.48.77-.74 3.02-1.31 5.03-2.18 6.04-2.59 2.88-1.18 3.48-1.39 3.87-1.39.09 0 .28.02.41.09.11.06.17.14.19.24.02.16.03.7-.08 1.16z"/>
          </svg>
        </div>
      )
    },
    {
      name: "Twitter Accounts",
      icon: (
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      )
    },
    {
      name: "Kakaotalk Accounts",
      icon: (
        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
          <Image src="/icons/kkt.png" alt="Kakaotalk" width={32} height={32} />
        </div>
      )
    },
    {
      name: "Line Accounts",
      icon: (
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <Image src="/icons/line.png" alt="line" width={32} height={32} />
        </div>
      )
    },
    {
      name: "Address Accounts",
      icon: (
        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
          </svg>
        </div>
      )
    },
    {
      name: "Other social Accounts...",
      icon: (
        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>
      )
    }
  ];

  const blockchainIntegrations = [
    {
      name: "ETH",
      icon: (
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
          </svg>
        </div>
      )
    },
    {
      name: "MANTLE",
      icon: (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <Image src="/icons/mantle.png" alt="Mantle" width={32} height={32} />
        </div>
      )
    },
    {
      name: "TON",
      icon: (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <Image src="/icons/ton.png" alt="TON" width={32} height={32} />
        </div>
      )
    },
    {
      name: "BTC",
      icon: (
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.638 14.904c-1.602 6.425-8.113 10.342-14.542 8.736C2.67 22.046-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.17-1.064-.25l.53-2.12-1.32-.33-.54 2.153c-.285-.065-.565-.13-.84-.2l-1.815-.45-.35 1.407s.975.225.955.238c.535.136.63.486.615.766l-1.477 5.92c-.075.18-.24.45-.614.35.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.54 2.154 1.32.33.54-2.18c2.24.427 3.93.255 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.22 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z"/>
          </svg>
        </div>
      )
    },
    {
      name: "Arbitrum",
      icon: (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <Image src="/icons/arb.png" alt="Arbitrum" width={32} height={32} />
        </div>
      )
    },
    {
      name: "KAIA",
      icon: (
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
          <Image src="/icons/kaia.png" alt="KAIA" width={32} height={32} />
        </div>
      )
    },
    {
      name: "Solona",
      icon: (
        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
          <Image src="/icons/sol.png" alt="Solona" width={32} height={32} />
        </div>
      )
    },
    {
      name: "BSC",
      icon: (
        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
          <Image src="/icons/bsc.png" alt="BSC" width={32} height={32} />
        </div>
      )
    },
    {
      name: "Other blockchain",
      icon: null
    }
  ];

  return (
    <section id="integrations" className="w-full py-16 md:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/60 via-blue-50/50 to-green-50/40 z-0"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="mb-12 text-center">
          
          <div className="mb-6">
            <span className='font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text'>
              Integrations
            </span>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
          {/* Social Accounts Card */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-green-200/40 shadow-green-100/20">
            <div className="flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary/20 to-green-200/30 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-general font-semibold text-xl md:text-2xl">One Account</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {accountIntegrations.map((integration, index) => (
                <IntegrationItem
                  key={index}
                  name={integration.name}
                  icon={integration.icon}
                  category="account"
                />
              ))}
            </div>
          </div>
          
          {/* Blockchain Networks Card */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-green-200/40 shadow-green-100/20">
            <div className="flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-200/30 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-general font-semibold text-xl md:text-2xl">One Gas</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {blockchainIntegrations.map((integration, index) => (
                <IntegrationItem
                  key={index}
                  name={integration.name}
                  icon={integration.icon}
                  category="blockchain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 