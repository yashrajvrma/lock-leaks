import Link from 'next/link';
import { useState } from 'react';
import '../styles/CallToAction.css';
import Image from 'next/image';
import lockIcon from '../public/images/lock-icon.svg';

const CallToAction = () => {
  const [hoveredButton, setHoveredButton] = useState<'start' | 'agency' | null>(null);

  // Swap colors if either button is hovered
  const isHovered = hoveredButton !== null;

  return (
    <div className="ctaContainer">
      <div className="ctaContent">
        <Image src={lockIcon} alt="Lock Icon" className="lockIcon" />
        <h2>
          Secure Your Content with a Global Leader in{' '}
          <span className="highlight-1">Leak Protection</span>
        </h2>
        <p>Try our free scan and see the difference Lock Leaks can make!</p>
        <div
          className="ctaButtons"
          style={{ maxWidth: '90%', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '20px' }}
        >
          <Link
            href="/start"
            className={`ctaButton ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredButton('start')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Start Free
          </Link>
          <Link
            href="/agencies"
            className={`ctaButton agencyButton ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredButton('agency')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            For Agencies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
