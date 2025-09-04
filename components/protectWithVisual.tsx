'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/animated.css';
import '../styles/protectWithVisual.css';

export default function ProtectionSection() {
  const [count, setCount] = useState(100000);
  const [hovering, setHovering] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // Animated count increase
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (hovering && count < 135000) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 135000) return prev + 1000;
          clearInterval(interval);
          return prev;
        });
      }, 80);
    }

    return () => clearInterval(interval);
  }, [hovering, count]);

  return (
    <>
      {/* Top Section */}
      <section className="protection-top-intro text-center py-4">
        <div className="container">
          <div className="top-badge">Features</div>
          <h2 className="top-title">
            Why <span className="gradient-text">choose Us</span>
          </h2>
           <p className="top-description">
              We are the only service that offers advanced content protection, guaranteed anonymity, and
              detailed reports on every takedown action performed.
          </p>

        </div>
      </section>

      {/* Main Protection Section */}
      <section className="ai-anonymity-section py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Left Content */}
            <div className="col-lg-7">
              <div className="ai-text">
                <h2 className="ai-heading d-flex align-items-start position-relative">
                  <span className="arrow-icon-img me-2 position-relative">
                    <Image src="/images/your-icon.png" alt="Icon" width={50} height={50} />
                  </span>
                  <span className="highlight">Protection & Takedown</span>
                </h2>
                <p className="subtitle ms-5">
                  Automated daily scans and manual support ensure your content stays secure and protected.
                </p>
                <ul className="ai-features list-unstyled">
                  {[
                    'Daily Automation: Our system performs automated scans every 24 hours to detect and remove infringing content.',
                    'Proactive Takedowns: We issue takedown requests promptly, keeping your digital assets safe at all times.',
                    'Tailored Solutions: For unique cases, our dedicated agents handle manual takedowns with precision and care.',
                    'Seamless Integration: Our approach is designed to adapt to your specific content protection needs.',
                  ].map((text, i) => (
                    <li key={i}>
                      <span className="check-icon-img">
                        <Image src="/images/check-icon.png" alt="Check" width={35} height={35} />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Visual */}
            <div className="col-lg-5 d-flex justify-content-center mt-4 mt-lg-0">
              <div
                className="right-image-stack position-relative image-stack"
                style={{ width: '400px', height: '400px' }}
              >
                <Image
                  src={hoveredIcon === 'g' ? '/images/hover-google.svg' : '/images/googleeee.svg'}
                  alt="G Icon"
                  className="right-positioned-img animation-left"
                  width={100}
                  height={100}
                  onMouseEnter={() => setHoveredIcon('g')}
                  onMouseLeave={() => setHoveredIcon(null)}
                />

                <Image
                  src={hoveredIcon === 'bh' ? '/images/hover-brokenheart.svg' : '/images/brokenheart.svg'}
                  alt="Broken Heart"
                  className="right-positioned-img animation-center"
                  width={80}
                  height={80}
                  onMouseEnter={() => setHoveredIcon('bh')}
                  onMouseLeave={() => setHoveredIcon(null)}
                />

                <Image
                  src={hoveredIcon === 'h' ? '/images/hover-heart.svg' : '/images/heart.svg'}
                  alt="Heart"
                  className="right-positioned-img animation-right"
                  width={100}
                  height={100}
                  onMouseEnter={() => setHoveredIcon('h')}
                  onMouseLeave={() => setHoveredIcon(null)}
                />

                <Image
                  src={hoveredIcon === 't' ? '/images/hover-alert.svg' : '/images/alert.svg'}
                  alt="Triangle"
                  className="right-positioned-img animation-right2"
                  width={70}
                  height={70}
                  onMouseEnter={() => setHoveredIcon('t')}
                  onMouseLeave={() => setHoveredIcon(null)}
                />

                <Image
                  src={hoveredIcon === 'b' ? '/images/hover-b.svg' : '/images/Component 6.svg'}
                  alt="B Icon"
                  className="right-positioned-img animation-right3"
                  width={90}
                  height={90}
                  onMouseEnter={() => setHoveredIcon('b')}
                  onMouseLeave={() => setHoveredIcon(null)}
                />

                {/* Leak Counter */}
                <div
                  className="detected-leaks-count"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => {
                    setHovering(false);
                    setCount(100000);
                  }}
                >
                  <span className="detected-leaks-text">Detected Leaks</span>
                  <br />
                  <span className="count">{Math.floor(count / 1000)}K</span>
                  <span className="percentage">+3.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
