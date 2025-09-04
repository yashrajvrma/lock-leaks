import React from 'react';
import '../styles/AgenciesSection.css';
import Link from 'next/link';

const AgenciesSection = () => {
  return (
    <div className="Agencies-a2">
      <div className="Agencies-a2-container">
        {/* Badge */}
        <div className="Agencies-a2-badge">
          <span className="Agencies-a2-badge-new">New</span>
          <span className="Agencies-a2-badge-text">Recover Lost Traffic Fast — Turn Leak Views Into Paying Subscribers</span>
          <span className="Agencies-a2-arrow">→</span>
        </div>

        {/* Heading */}
        <h2 className="Agencies-a2-heading">
          Protect All Your Models in One Dashboard
        </h2>

        {/* Subheading */}
        <p className="Agencies-a2-subtext">
          Automate takedowns, monitor leaks
          <span className="Agencies-a2-highlight"> leaks in real time, and reclaim lost traffic </span>
          all from one<br/> powerful platform designed to scale your agency’s success.
        </p>

        {/* Subtitle */}
        <p className="Agencies-a2-subtitle">
          Built for <span className="Agencies-a2-gradient-word">Agencies</span>
        </p>

        {/* CTA Button */}
        <div className="Agencies-a2-cta">

          <Link href="/services">
            <button className="Agencies-a2-button">Talk to Us</button>
          </Link>
        </div>

        {/* Footer Text */}
        <p className="Agencies-a2-footer">Simplify takedowns and boost client earnings.</p>
      </div>
    </div>



  );
};

export default AgenciesSection;
