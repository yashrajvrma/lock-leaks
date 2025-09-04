'use client';

import React, { useState } from 'react';
import '../styles/PricingFaqs.css';
const faqs = [
  {
    question: "What's included in all plans?",
    answer: 'All plans include AI-powered leak detection, search engine monitoring, pirated site takedowns, social media content removal, and anonymous leak reports.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade your plan at any time directly from your account with no service interruption.',
  },
  {
    question: 'Is there a free scan available before purchasing?',
    answer: 'Yes, we offer a free scan to show you where and how your content may be exposed online.',
  },
  {
    question: 'How fast will leaks be detected and removed?',
    answer: 'Detection and removal speed depends on your plan—higher-tier plans offer faster and more frequent scans and takedowns.',
  }
];

const PricingFaqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="pricing-faqs-container">
      <h2 className="faq-title">FAQs</h2>
      <p className="faq-subtitle">Some questions we get asked the most</p>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
          </div>
          <div className={`faq-answer-container ${activeIndex === index ? 'open' : ''}`}>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingFaqs;
