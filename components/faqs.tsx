'use client';
import { useState } from 'react';
import Image from 'next/image';
import plusIcon from '../public/images/plus.png';
import minusIcon from '../public/images/minus.png';
import '../styles/faqs.css';

type FAQ = {
  question: string;
  answer: string;
};

interface FaqSectionProps {
  faqs: FAQ[];
  heading?: string; // Optional heading
}

export default function FaqSection({ faqs, heading = "Frequently Asked Questions" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="faq-heading">{heading}</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className="faq-item"
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                {item.question}
                <span className="faq-icon">
                  <Image
                    src={openIndex === index ? minusIcon : plusIcon}
                    alt="Toggle Icon"
                    width={30}
                    height={30}
                  />
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
