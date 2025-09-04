'use client';

import React from 'react';
import '../styles/PlatformSection.css';

const platforms = [
  { name: 'TikTok', description: 'Complete leak protection', src: '/icons/TikTokblog.svg' },
  { name: 'Instagram', description: '24/7 content security', src: '/icons/instagramblog.svg' },
  { name: 'Fansly', description: 'Monetized content protection', src: '/icons/Fansly.svg' },
  { name: 'Twitter', description: 'Stop unauthorized reposts', src: '/icons/Twitterlog.svg' },
  { name: 'Snapchat', description: 'AI stolen content detection', src: '/icons/snapchatblog.svg' },
  { name: 'Reddit', description: 'Leak and misuse prevention', src: '/icons/Redditblog.svg' },
  { name: 'Telegram', description: 'Story and snap protection', src: '/icons/Telegramblog.svg' },
  { name: 'OnlyFans', description: 'Priority DMCA takedown', src: '/images/only.svg' },
  { name: 'Facebook', description: 'Comprehensive content protection', src: '/icons/Redditblog2.svg' } 
];


const PlatformSection: React.FC = () => {
  return (
    <section className="platform-section text-center">
      <div className="container">
        <h2 className="platform-heading">Our Platform Solutions</h2>
        <p className="platform-subtext">
          Protect your content across the platforms that matter most.
        </p>

        {/* First Row */}
        <div className="platform-row">
          {platforms.slice(0, 3).map((platform, index) => (
            <div className="platform-grid-item" key={index}>
              <div className="platform-card">
                <div className="platform-top">
                  <div className="platform-icon">
                    <img src={platform.src} alt={platform.name} className="platform-icon-img" />
                  </div>
                  <h5 className="platform-title">{platform.name}</h5>
                </div>
                <p className="platform-description">{platform.description}</p>
                <a href="#" className="platform-btn">Protect My Account →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="platform-row">
          {platforms.slice(3, 6).map((platform, index) => (
            <div className="platform-grid-item" key={index + 3}>
              <div className="platform-card">
                <div className="platform-top">
                  <div className="platform-icon">
                    <img src={platform.src} alt={platform.name} className="platform-icon-img" />
                  </div>
                  <h5 className="platform-title">{platform.name}</h5>
                </div>
                <p className="platform-description">{platform.description}</p>
                <a href="#" className="platform-btn">Protect My Account →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div className="platform-row">
          {platforms.slice(6, 9).map((platform, index) => (
            <div className="platform-grid-item" key={index + 6}>
              <div className="platform-card">
                <div className="platform-top">
                  <div className="platform-icon">
                    <img src={platform.src} alt={platform.name} className="platform-icon-img" />
                  </div>
                  <h5 className="platform-title">{platform.name}</h5>
                </div>
                <p className="platform-description">{platform.description}</p>
                <a href="#" className="platform-btn">Protect My Account →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
