'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import face from '../public/images/Face.svg';
import phone from '../public/images/Mobile.png';
import hand from '../public/images/hand.png';
import icon from '../public/images/your-icon.png';
import Anonymity from '../public/images/AI & Anonymity.png';
import Detailed from '../public/images/Detailed Reports.png';
import checkIcon from '../public/images/check-icon.png';
import link from '../public/images/link.svg';
import data from '../public/images/DATA.svg';
import arch from '../public/images/archive.svg';
// import starts from '../public/images/Vector.png';

import '../styles/animated.css';
import '../styles/animatedthird.css';
import '../styles/protectWithVisual.css';

export default function FullFeaturesSection() {
  const [count, setCount] = useState(100000);
  const [hovering, setHovering] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false); // for animation pause + scale

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
      {/* Top Intro Section */}
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

      {/* Overlap Section Container */}
      <div className="overlap-wrapper">
        {/* Section 1 */}
        <section className="ai-anonymity-section overlap-section">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className="ai-text">
                  <h2 className="ai-heading d-flex align-items-start position-relative">
                    <span className="arrow-icon-img me-2 position-relative">
                      <Image src={icon} alt="Icon" width={50} height={50} />
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
                          <Image src={checkIcon} alt="Check" width={35} height={35} />
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 d-flex justify-content-center mt-4 mt-lg-0">
                <div
                  className={`right-image-stack position-relative image-stack ${isHovered ? 'pause-animations' : ''}`}
                  style={{ width: '400px', height: '400px' }}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setTimeout(() => setIsHovered(false), 1000);
                  }}
                >
                  <Image
                    src={hoveredIcon === 'g' ? '/images/hover-google.svg' : '/images/googleeee.svg'}
                    alt="G Icon"
                    className={`right-positioned-img animation-left ${isHovered ? 'hover-expand' : ''}`}
                    width={100}
                    height={100}
                    onMouseEnter={() => setHoveredIcon('g')}
                    onMouseLeave={() => setHoveredIcon(null)}
                  />
                  <Image
                    src={hoveredIcon === 'bh' ? '/images/hover-heart.svg' : '/images/heart.svg'}
                    alt="Broken Heart"
                    className={`right-positioned-img animation-center ${isHovered ? 'hover-expand' : ''}`}
                    width={80}
                    height={80}
                    onMouseEnter={() => setHoveredIcon('bh')}
                    onMouseLeave={() => setHoveredIcon(null)}
                  />
                  <Image
                    src={hoveredIcon === 'h' ? '/images/hover-brokenheart.svg' : '/images/brokenheart.svg'}
                    alt="Heart"
                    className={`right-positioned-img animation-right ${isHovered ? 'hover-expand' : ''}`}
                    width={100}
                    height={100}
                    onMouseEnter={() => setHoveredIcon('h')}
                    onMouseLeave={() => setHoveredIcon(null)}
                  />
                  <Image
                    src={hoveredIcon === 't' ? '/images/hover-alert.svg' : '/images/alert.svg'}
                    alt="Triangle"
                    className={`right-positioned-img animation-right2 ${isHovered ? 'hover-expand' : ''}`}
                    width={70}
                    height={70}
                    onMouseEnter={() => setHoveredIcon('t')}
                    onMouseLeave={() => setHoveredIcon(null)}
                  />
                  <Image
                    src={hoveredIcon === 'b' ? '/images/hover-b.svg' : '/images/Component 6.svg'}
                    alt="B Icon"
                    className={`right-positioned-img animation-right3 ${isHovered ? 'hover-expand' : ''}`}
                    width={90}
                    height={90}
                    onMouseEnter={() => setHoveredIcon('b')}
                    onMouseLeave={() => setHoveredIcon(null)}
                  />

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

        {/* Section 2 */}
        <section className="ai-anonymity-section overlap-section">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className="ai-text">
                  <h2 className="ai-heading d-flex align-items-start position-relative">
                    <span className="arrow-icon-img me-2 position-relative">
                      <Image src={Anonymity} alt="Icon" width={50} height={50} />
                    </span>
                    <span className="highlight-12">AI & Anonymity</span>
                  </h2>
                  <p className="subtitle ms-5">
                    Advanced AI tools detect violations while ensuring your personal information remains private and secure.
                  </p>
                  <ul className="ai-features list-unstyled">
                    <li><span className="check-icon-img"><Image src={checkIcon} alt="Check" width={35} height={35} /></span>Facial Recognition & OCR: AI identifies infringing content with precision, even in challenging scenarios.</li>
                    <li><span className="check-icon-img"><Image src={checkIcon} alt="Check" width={35} height={35} /></span>Anonymity Guaranteed: We use our company details for DMCA notices, keeping your real name private.</li>
                    <li><span className="check-icon-img"><Image src={checkIcon} alt="Check" width={35} height={35} /></span>Lumen Database Privacy: Avoid exposure in public databases, safeguarding your identity.</li>
                    <li><span className="check-icon-img"><Image src={checkIcon} alt="Check" width={35} height={35} /></span>Round-the-Clock Scanning: Our systems work 24/7 to detect and protect your content proactively.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 d-flex justify-content-center mt-4 mt-lg-0">
                <div className="image-stack position-relative" style={{ width: '250px', height: '400px' }}>
                  <Image src={face} alt="Face" className="positioned-img float1" width={180} />
                  <Image src={phone} alt="Phone" className="positioned-img float2" width={100} />
                  <Image src={hand} alt="Hand" className="positioned-img float3" width={200} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="ai-anonymity-section overlap-section">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className="ai-text">
                  <h2 className="ai-heading d-flex align-items-start position-relative">
                    <span className="arrow-icon-img me-2 position-relative">
                      <Image src={Detailed} alt="Icon" width={50} height={50} />
                    </span>
                    <span className="highlight-2">Detailed Reports</span>
                  </h2>
                  <p className="subtitle ms-5">
                    Your Privacy, Our Priority – Transparent & Regular Updates.
                  </p>
                  <ul className="ai-features list-unstyled">
                    <li><span className="check-icon-img"><Image src={checkIcon} alt="Check" width={35} height={35} /></span>In-Depth Analysis: Documented proof of content actions taken for your protection.</li>
                    <li><span className="check-icon-img"><Image src={checkIcon} alt="Check" width={35} height={35} /></span>Periodic Insights: Stay updated with continuous progress and activity tracking.</li>
                    <li><span className="check-icon-img"><Image src={checkIcon} alt="Check" width={35} height={35} /></span>Structured Summaries: Access concise reports for streamlined record-keeping.</li>
                    <li><span className="check-icon-img"><Image src={checkIcon} alt="Check" width={35} height={35} /></span>Impact Analysis: Review the effectiveness of ongoing protective measures.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 d-flex justify-content-center mt-4 mt-lg-0">
                <div className="image-stack position-relative" style={{ width: '250px', height: '400px' }}>
                  <Image src={arch} alt="Hand" className="positioned-img animation-left" width={120} />
                  <Image src={data} alt="Data" className="positioned-img animation-center" width={250} />
                  <Image src={link} alt="Link" className="positioned-img animation-right" width={100} />
                </div>
              </div>
            </div>
          </div>
          {/* <Image src={starts} className="star star-left-2" alt="star" />
          <Image src={starts} className="star star-right-1" alt="star" /> */}
        </section>

      </div>
    </>
  );
}
