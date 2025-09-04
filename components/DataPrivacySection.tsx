'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import avatar1 from '../public/images/avatar1.svg';
import avatar2 from '../public/images/avatar2.svg';
import avatar3 from '../public/images/avatar3.svg';
import detect from '../public/images/detect.svg';
import ai from '../public/images/ai.svg';
import instant from '../public/images/instant.svg';
import takedown from '../public/images/takedown.svg';
import curve1 from '../public/images/topcurved.svg';
import curve2 from '../public/images/botomcurved.svg';
import heart from '../public/images/bottom.svg';
import question1 from '../public/images/question.svg';
import question2 from '../public/images/question2.svg';
import question3 from '../public/images/question3.svg';


import '../styles/DataPrivacySection.css';

export default function LockLeaksSection() {
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && infoRef.current) {
          infoRef.current.classList.add('reveal');
        }
      },
      { threshold: 0.3 }
    );

    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <section className="lockleaks-section py-5 position-relative">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left Content */}
          <div className="col-lg-6 left-content text-white position-relative">
            <h2 className="gradient-heading">
              <span className="text-your">Your</span>{' '}
              <span className="text-data">data</span><span className="text-your">,</span>{' '}
              <span className="text-your">your</span>{' '}
              <span className="text-data">privacy</span><span className="text-your">.</span>
            </h2>
            <p className="description">
              Your digital identity is at risk every day. Lock Leaks scans, detects, and removes threats before they harm you.
            </p>
            <button className="start-btn">Start Free</button>

            <div className="chat-bubbles">
              <div className="bubble bubble1">
                <Image src={avatar1} alt="User" width={80} height={80} />
                <p>Hello Lock Leaks, can you protect my content? <Image src={question1} alt="Heart" width={25} height={25} /></p>
              </div>

              <div className="arrow arrow1">
                <Image src={curve1} alt="Arrow Curve 1" width={100} height={100} />
              </div>

              <div className="bubble bubble2">
                <Image src={avatar2} alt="User" width={80} height={80} />
                <p>Yes, we provide content protection and enforcement. <Image src={question2} alt="Heart" width={25} height={25} /></p>
              </div>

              <div className="arrow arrow2">
                <Image src={curve2} alt="Arrow Curve 2" width={120} height={120} />
              </div>

              <div className="bubble bubble3">
                <Image src={avatar3} alt="User" width={80} height={80} />
                <p>Thank you so much for your help! <Image src={question3} alt="Heart" width={25} height={25} /></p>
              </div>

      {/* Top-left hover image */}
      <div className="hover-image-wrapper">
        <Image
          src={heart}
          alt="Hover Icon"
          width={20}
          height={20}
          className="hover-image"
        />
      </div>
    </div>

          </div>

          {/* Right Boxes */}
          <div className="col-lg-5">
            <div className="info-boxes" ref={infoRef}>
              <div className="info-box">
                <Image src={detect} alt="Leak Detection" width={40} height={40} />
                <div>
                  <h5>LEAK DETECTION</h5>
                  <p>We monitor leak sites, social media, and underground forums to detect unauthorized use of your images and videos.</p>
                </div>
              </div>
              <div className="info-box">
                <Image src={ai} alt="AI Protection" width={40} height={40} />
                <div>
                  <h5>AI PROTECTION</h5>
                  <p>Advanced AI prevents piracy, manipulation, and unauthorized distribution of your content.</p>
                </div>
              </div>
              <div className="info-box">
                <Image src={instant} alt="Alerts" width={40} height={40} />
                <div>
                  <h5>INSTANT ALERTS</h5>
                  <p>Receive real-time notifications if your content appears in leaks, deepfakes, or fake profiles.</p>
                </div>
              </div>
              <div className="info-box">
                <Image src={takedown} alt="Takedown" width={40} height={40} />
                <div>
                  <h5>FAST TAKEDOWN</h5>
                  <p>We swiftly remove stolen content, deepfakes, and impersonation attempts from the web.</p>
                </div>
              </div>
            </div>
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>
  );
}
