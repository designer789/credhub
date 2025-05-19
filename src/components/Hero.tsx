'use client';

import Image from 'next/image';
import { scrollToElement } from '@/utils/scrollUtils';

export default function Hero() {
  return (
    <section className="w-full pt-24 pb-10 md:pt-28 md:pb-16 lg:pt-48 lg:pb-32 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg1.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-20"
          quality={90}
        />
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <div className="flex-1 flex flex-col text-left md:pr-4 lg:pr-8 order-2 md:order-1">
            <div className='flex flex-col mb-6 md:mb-8'>
                <p className="font-general font-medium text-sm md:text-lg lg:text-2xl uppercase text-foreground">
                The
                </p>
                <div className="my-2">
                  <span className='font-general text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold uppercase bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text leading-tight'>Trust Passport</span>
                </div>
                <p className="font-general text-sm md:text-lg lg:text-2xl font-medium uppercase">
                for Web3 and Beyond
                </p>
            </div>
              
            <p className="font-general text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-full md:max-w-lg lg:max-w-xl">
             Welcome to Cred.Hub, the next-generation decentralized reputation protocol. In a world plagued by scams, asymmetry, and trust gaps, Cred.Hub offers a modular, cross-scenario, privacy-preserving reputation system. We aim to lower the trust barrier for both crypto natives and Web2 users, becoming the backbone of fair, transparent, and incentive-driven Web3 ecosystems.
            </p>
            
            <div className="flex flex-row gap-3 md:gap-4 mt-6 md:mt-10">
              <a href="https://docs.credhub.xyz" target="_blank" rel="noopener noreferrer">
              <button className="font-general bg-primary text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-primary/90 transition-colors text-sm md:text-base lg:text-lg hover:cursor-pointer">
                Documentation
              </button>
              </a>
              <button 
                onClick={() => scrollToElement('#features', 0)}
                className="font-general border border-gray-300 text-gray-700 px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-gray-50 transition-colors text-sm md:text-base lg:text-lg hover:cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
          
          {/* Image - Right Side */}
          <div className="flex-1 flex justify-center items-center mb-8 md:mb-0 md:mt-0 order-1 md:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Image
                src="/hero.png"
                alt="Cred.Hub Hero"
                width={500}
                height={500}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 