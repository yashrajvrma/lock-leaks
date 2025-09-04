'use client';

import React from 'react';
import '../styles/FastLeakRemovalSection.css';
import Image from 'next/image';
import avatar from '../public/images/avatar112.svg';
import lockIcon from '../public/images/lock.svg';

const features = [
  {
    title: 'Smart Data Monitoring',
    label: 'AI-Powered Leak Detection',
    desc: 'Advanced AI scans the internet for leaks, blocking unauthorized content in real-time.',
    icon: '/images/Overlay+Shadow.svg',
  },
  {
    title: 'Real-Time Content Tracking',
    label: 'Search Engine Monitoring',
    desc: 'Track unauthorized content across major search engines and act swiftly.',
    icon: '/images/real-time.svg',
  },
  {
    title: 'Fast Leak Removal',
    label: 'Pirated Sites Takedown',
    desc: 'Detect and remove leaks from illegal websites, protecting your content fast.',
    icon: '/images/fast-leak.svg',
  },
  {
    title: 'Instant Social Protection',
    label: 'Social Media Takedown',
    desc: 'Monitor and remove unauthorized content from social media platforms quickly.',
    icon: '/images/social-protection.svg',
  },
  {
    title: 'Anonymous, Secure Reports',
    label: 'Private Leak Reports',
    desc: 'We send anonymous reports with sensitive information encrypted.',
    icon: '/images/anonymous.svg',
  },
  {
    title: 'Effortless Content Protection',
    label: 'Takedown Assistance',
    desc: 'Get expert help with takedown requests to protect your intellectual property.',
    icon: '/images/effortless.svg',
  },
];

export default function FastLeakRemovalSection() {
  const rows = [];
  for (let i = 0; i < features.length; i += 2) {
    rows.push(features.slice(i, i + 2));
  }

  return (
    <section className="leak-removal-section-outer">
      <div className="neon-glow-heading">All Plans Include</div>

      {rows.map((row, rowIndex) => (
        <div className="leak-removal-row" key={rowIndex}>
          {row.map((feature, index) => (
            <div className="leak-removal-section" key={index + rowIndex * 2}>
              <div className="chat-box">
                <div className="message user">
                  <Image src={avatar} alt="User" className="avatar" width={40} height={40} />
                  <span>
                    {feature.title === 'Smart Data Monitoring'
                      ? "Great! How does AI protect my content?"
                      : feature.title === 'Real-Time Content Tracking'
                      ? "Perfect! I want to make sure nothing appears."
                      : feature.title === 'Fast Leak Removal'
                      ? "Awesome! How does this process work?"
                      : feature.title === 'Instant Social Protection'
                      ? "Great. I need protection on social networks."
                      : feature.title === 'Anonymous, Secure Reports'
                      ? "Great. Does my real name appear anywhere?"
                      : "Perfect! I need help removing leaked content."}
                  </span>
                </div>
                <div className="message reply">
                  <span>
                    {feature.title === 'Smart Data Monitoring'
                      ? "AI constantly monitors to detect any leaks."
                      : feature.title === 'Real-Time Content Tracking'
                      ? "We monitor search engines and flag unauthorized content."
                      : feature.title === 'Fast Leak Removal'
                      ? "We quickly remove content from pirated websites."
                      : feature.title === 'Instant Social Protection'
                      ? "We check social media and remove illegal content."
                      : feature.title === 'Anonymous, Secure Reports'
                      ? "We send anonymous reports with sensitive data hidden."
                      : "We’ll help you with legal takedown requests."}
                  </span>
                  <Image src={lockIcon} alt="Secure" className="lock-icon" width={40} height={40} />
                </div>
              </div>

              <div className="leak-input-wrapper">
                <div className="leak-input-icon">
                  <img src={feature.icon} alt={`${feature.title} icon`} width={50} height={50} />
                </div>
                <input
                  type="text"
                  placeholder={feature.title}
                  className="leak-input"
                  disabled
                />
              </div>

              <div className="leak-info-text mt-4">
                <h3 className="info-title">{feature.label}</h3>
                <p className="info-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
