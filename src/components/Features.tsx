'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => (
  <div className="flex flex-col p-6 bg-white rounded-lg shadow-md shadow-green-100/20 border border-green-500/40 hover:shadow-md transition-shadow h-full mx-2">
    {/* Image or Placeholder */}
    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-md mb-4 flex items-center justify-center overflow-hidden">
      {image ? (
        <Image 
          src={image} 
          alt={title}
          width={200}
          height={200}
          className="object-contain w-1/2 h-1/2"
        />
      ) : (
        <div className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm mt-2 font-medium">Feature Image</p>
        </div>
      )}
    </div>
    
    <h3 className="font-general font-medium text-lg md:text-2xl mb-3">{title}</h3>
    <p className="font-general text-gray-600 text-sm md:text-base">{description}</p>
  </div>
);

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      title: "Multi-Dimensional Reputation Scoring",
      description: "Cred.Hub aggregates on-chain actions, peer ratings, and off-chain verifications to create adaptable reputation scores for DeFi, NFTs, DAOs, and P2P interactions, enhanced by AI-driven anomaly detection.",
      image: "/score.png"
    },
    {
      title: "Dynamic Staking & Rewards",
      description: "Users stake $CRED tokens to vouch for others, earning dynamic yields while sharing in both risks and ecosystem rewards, supported by insurance mechanisms that mitigate slashing losses.",
      image: "/rewards.png"
    },
    {
      title: "Decentralized Dispute Resolution",
      description: "Combining smart contract enforcement, high-reputation arbitrators, and community voting, Cred.Hub ensures fair, transparent resolution of disputes and slashing cases.",
      image: "/blockchain.png"
    },
    {
      title: "Privacy & Cross-Chain Integration",
      description: "With zero-knowledge proofs and cross-chain bridges, Cred.Hub enables anonymous reputation verification and seamless score portability across multiple blockchain networks.",
      image: "/chain.png"
    },
    {
      title: "Social & Gamified Engagement",
      description: "Trust circles, missions, leaderboards, and NFT badges turn reputation-building into a collaborative and competitive experience, boosting user participation and network effects.",
      image: "/games.png"
    },
    {
      title: "Reputation & Lending Market",
      description: "Cred.Hub unlocks a new reputation-driven DeFi space where high-reputation users can access unsecured loans based on their scores. Additionally, users can lease out their reputation profiles to newcomers for a fee, enabling shared benefits and risk under smart contract governance.",
      image: "/loan.png"
    }
  ];
  
  const slidesToShow = {
    sm: 1,
    md: 2,
    lg: 3
  };
  
  useEffect(() => {
    // Set initial translateX based on activeIndex
    setTranslateX(-activeIndex * (100 / slidesToShow.lg));
  }, [activeIndex]);
  
  const handlePrevious = () => {
    setActiveIndex((prev) => 
      prev === 0 ? features.length - slidesToShow.lg : prev - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => 
      prev === features.length - slidesToShow.lg ? 0 : prev + 1
    );
  };
  
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    
    // Get the starting position
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setCurrentX(clientX);
  };
  
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    // Prevent default behavior to stop scrolling while dragging
    e.preventDefault();
    
    // Get the current position
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setCurrentX(clientX);
    
    // Calculate how far to slide
    const deltaX = (currentX - startX) / (carouselRef.current?.offsetWidth || 1);
    const newTranslateX = -activeIndex * (100 / slidesToShow.lg) + (deltaX * 100);
    
    // Limit the drag to the carousel bounds
    const minTranslate = -(features.length - slidesToShow.lg) * (100 / slidesToShow.lg);
    const maxTranslate = 0;
    
    if (newTranslateX < minTranslate || newTranslateX > maxTranslate) {
      setTranslateX(newTranslateX > maxTranslate ? maxTranslate : minTranslate);
    } else {
      setTranslateX(newTranslateX);
    }
  };
  
  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Calculate how far the drag moved
    const deltaX = currentX - startX;
    const threshold = (carouselRef.current?.offsetWidth || 0) * 0.2; // 20% threshold for next/prev
    
    if (Math.abs(deltaX) > threshold) {
      // If dragged far enough, move to next/prev slide
      if (deltaX > 0 && activeIndex > 0) {
        // Dragged right -> previous slide
        setActiveIndex(prev => prev - 1);
      } else if (deltaX < 0 && activeIndex < features.length - slidesToShow.lg) {
        // Dragged left -> next slide
        setActiveIndex(prev => prev + 1);
      } else {
        // Snap back to current slide
        setTranslateX(-activeIndex * (100 / slidesToShow.lg));
      }
    } else {
      // Not dragged far enough, snap back to current slide
      setTranslateX(-activeIndex * (100 / slidesToShow.lg));
    }
  };

  return (
    <section id="features" className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-general font-medium text-lg md:text-xl lg:text-2xl uppercase mb-2">
            Monetize Your
          </h2>
          <div className="mb-6">
            <span className='font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text'>
              On-Chain Reputation
            </span>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          {/* Navigation Arrows - Moved under the heading */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-50 focus:outline-none border border-gray-100"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-50 focus:outline-none border border-gray-100"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full-width carousel container */}
      <div className="w-full bg-white overflow-hidden">
        <div 
          ref={carouselRef}
          className="relative max-w-7xl mx-auto"
        >
          {/* Carousel Container */}
          <div
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            className="cursor-grab"
          >
            <div 
              className={`flex transition-transform ${isDragging ? 'transition-none' : 'duration-300 ease-in-out'}`}
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                  <FeatureCard 
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mt-8">
            {Array.from({ length: features.length - (slidesToShow.lg - 1) }, (_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 mx-1 rounded-full ${activeIndex === i ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 