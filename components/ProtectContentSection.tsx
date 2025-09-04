'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import scanface from '../public/images/Lock Leaks GIF Final.gif';
import avatarIcon from '../public/images/avatar-icon.svg';
import '../styles/ProtectContentSection.css';

export default function ProtectContentSection() {
  const [percentages, setPercentages] = useState([0, 0, 0]);
  const [animateScan, setAnimateScan] = useState(false);
  const targetPercentages = [78, 60, 68];
  const scanRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateScan(true);
      },
      { threshold: 0.5 }
    );

    if (scanRef.current) observer.observe(scanRef.current);

    return () => {
      if (scanRef.current) observer.unobserve(scanRef.current);
    };
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (animateScan) {
      interval = setInterval(() => {
        setPercentages((prev) =>
          prev.map((val, i) => (val < targetPercentages[i] ? val + 1 : val))
        );
      }, 30);
    }
    return () => clearInterval(interval);
  }, [animateScan]);

  return (
    <section className="protect-section">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-md-6 mb-4 mb-md-0">
            <p className="tech-label">
              <span></span> AI & OCR Technology
            </p>
            <h2 className="protect-title">
              Protect <span>Your Content</span>
            </h2>
            <p className="protect-desc">
              Leaked content, deepfakes, and unauthorized use of your work can be devastating.
              Using advanced OCR and AI, we scan the web to identify and quickly remove your stolen content.
              Our system ensures fast, secure protection, safeguarding your intellectual property and digital identity.
            </p>
            <button className="start-btn">Start Free</button>
          </div>

          {/* RIGHT */}
          <div className="col-md-6 position-relative">
            <div className="visual-section">
             <div className={`face-box text-center mb-3 ${animateScan ? 'slide-up' : ''}`}>
                <Image src={scanface} alt="Face Scan" width={300} className="img-fluid face-img" />
              </div>


              <div className="scan-panel" ref={scanRef}>
                {/* Static */}
                <p className="scanning-text">
                  Scanning<span className="dot-animation"><span>.</span><span>.</span><span>.</span><span>.</span></span>
                </p>
                <div className="scanning-bar">
                  <div className="scanning-fill" />
                </div>

                {/* Animated items */}
                <div className={`scan-avatars ${animateScan ? 'slide-in' : ''}`}>
                  {percentages.map((val, idx) => (
                    <div
                      className="scan-item animated-scan-item"
                      key={idx}
                      style={{ animationDelay: `${idx * 0.2}s` }}
                    >
                      <Image src={avatarIcon} alt="avatar" width={32} height={32} className="avatar" />
                      <div className="double-bars">
                        <div className="small-bar">
                          <div
                            style={{
                              width: `${val}%`,
                              background: 'linear-gradient(to right, #7A8CA7, #FFFFFF)',
                              marginRight: '2px',
                              clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0% 100%)',
                              height: '100%',
                              borderRadius: '4px',
                              transition: 'width 0.3s ease-in-out',
                            }}
                          />
                        </div>
                        <div className="small-bar">
                          <div
                            style={{
                              width: `${val - 10}%`,
                              background: 'linear-gradient(to right, #7A8CA7, #FFFFFF)',
                              marginRight: '2px',
                              clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0% 100%)',
                              height: '100%',
                              borderRadius: '4px',
                              transition: 'width 0.3s ease-in-out',
                            }}
                          />
                        </div>
                      </div>
                      <span className="percent">{val}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
