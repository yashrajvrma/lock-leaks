import React, { useState } from 'react';
import '../styles/TcSection.css';

const features = [
  {
    title: 'Content Removal',
    description: 'We detect and remove unauthorized videos and images from piracy-based platforms through advanced AI and legal takedowns.',
    icon: '/images/removal-icon.svg',
  },
  {
    title: 'Traffic Recovery',
    description: 'We intercept traffic from leak sites and redirect it to verified profiles, transforming piracy exposure into organic growth.',
    icon: '/images/traffic-icon.svg',
  },
  {
    title: 'Leak Monitoring',
    description: '24/7 surveillance of high-risk platforms ensures rapid detection of new leaks and immediate enforcement action.',
    icon: '/images/monitoring-icon.svg',
  },
];

export default function TcSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // ⬅️ Dropdown toggle

  const handlePlay = () => {
    setShowVideo(true);
  };

  return (
    <section className="tc-section terms-wrapper">
      <div className="service-circle-left" />
      <div className="service-circle-right" />

      <h2>Protect Your Online Persona</h2>
      <p className="subtitle">Protect Your Content, Stop Copycats, Stay in Control with Lock Leaks</p>
      <p className="desc">Stop leaks, shut down impersonators, and secure your earnings.</p>
      <button className="start-btn">Start Free</button>

      <div className="video-box">
        <div className="top-bar-inside">
          <div className="top-bar-left">
            <img src="/images/apple.svg" alt="Apple" className="top-icon" />
            <span>Finder</span>
            <span>Edit</span>
            <span>View</span>
            <span>Go</span>
            <span>Window</span>
            <span>Help</span>
          </div>
          <div className="top-bar-right">
            <img
              src="/images/locck.svg"
              alt="Dropdown Trigger"
              className="top-icon"

            />
            <img src="/images/wifi.svg" alt="Wi-Fi" className="top-icon" />
            <img src="/images/battery.svg" alt="Battery" className="top-icon" />
            <img src="/images/settings.svg" alt="Settings" className="top-icon" />
            <span>Fri 2:55 PM</span>
          </div>
        </div>

    

        {showVideo ? (
          <video
            src="/videos/lock.mp4"
            controls
            autoPlay
            style={{ width: '100%', borderRadius: '0 0 16px 16px' }}
          />
        ) : (
          <img
            src="/images/Component 1.svg"
            alt="Play"
            onClick={handlePlay}
            className="custom-play-icon"
          />
        )}
      </div>

      <div className="features">
        {features.map((item, idx) => (
          <div key={idx} className="feature-box">
            <div className="icon-title">
              <img src={item.icon} alt="Icon" className="feature-icon" />
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
