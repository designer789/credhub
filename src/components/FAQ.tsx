'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen, index }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none"
      onClick={toggleOpen}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
    >
      <h3 className="font-general font-medium text-base md:text-lg lg:text-xl flex items-center">
        <span className="w-7 h-7 inline-flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3 text-sm">
          {index + 1}
        </span>
        {question}
      </h3>
      <svg
        className={`w-5 h-5 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      id={`faq-answer-${index}`}
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 px-6' : 'max-h-0'}`}
    >
      <p className="font-general text-gray-600 text-sm md:text-base pl-10">{answer}</p>
    </div>
  </div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "What is Cred.Hub?",
      answer: "Cred.Hub is a decentralized reputation protocol that generates privacy-preserving, modular reputation scores for Web3 and Web2 ecosystems."
    },
    {
      question: "Who can benefit from Cred.Hub?",
      answer: "DeFi users, NFT traders, DAO participants, freelancers, e-commerce sellers, and any individual or platform needing verifiable trust signals."
    },
    {
      question: "How does the reputation scoring system work?",
      answer: "It combines on-chain activities, peer reviews, and verified off-chain data, enhanced by AI analysis, to deliver multi-dimensional, adaptable scores."
    },
    {
      question: "What role does $CRED play in the ecosystem?",
      answer: "$CRED powers staking, governance, rewards, and access to premium reputation-based services within the Cred.Hub protocol."
    },
    {
      question: "How does Cred.Hub ensure data privacy?",
      answer: "Using zero-knowledge proofs (ZKPs), Cred.Hub allows users to prove trustworthiness without revealing sensitive personal or transactional details."
    },
    {
      question: "Is Cred.Hub cross-chain compatible?",
      answer: "Yes, Cred.Hub integrates with cross-chain protocols, enabling reputation scores to flow seamlessly across multiple blockchain networks."
    },
    {
      question: "How can I participate in governance?",
      answer: "By holding and staking $CRED, users can vote on proposals, disputes, upgrades, and key decisions shaping the protocol's evolution."
    },
    {
      question: "How do I get involved with Cred.Hub?",
      answer: "Acquire $CRED tokens, stake to back reputations, join the community, and contribute to building a fairer, more transparent decentralized trust ecosystem."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          
          <div className="mb-6">
            <span className='font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text'>
            FAQ
            </span>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md shadow-green-100/20 border border-green-500/40 divide-y divide-green-200 overflow-hidden">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 