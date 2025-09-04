import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-heading">
        <p className="subheading">SIMPLE PROCESS</p>
        <h2>How It Works</h2>
        <p className="description">Set up once. Protect every model automatically.</p>
      </div>

      <div className="steps-container">
        <div className="step-box">
          <div className="step-label-with-icon">
            <img src="/icons/step1-icon.svg" alt="Step 1 Icon" className="step-icon" />
            <span className="step-label">Step 1</span>
          </div>
          <h3>Connect Your Account</h3>
          <p>Start by linking your platforms (OnlyFans, Fansly, etc.) to your LockLeaks dashboard. Setup takes less than 2 minutes.</p>
        </div>
        <div className="step-box">
          <div className="step-label-with-icon">
            <img src="/icons/step2-icon.svg" alt="Step 2 Icon" className="step-icon" />
            <span className="step-label">Step 2</span>
          </div>
          <h3>We Scan, You Relax</h3>
          <p>Our system automatically identifies leaked content, impersonators, and fraud pages stealing your traffic and revenue.</p>
        </div>
        <div className="step-box">
          <div className="step-label-with-icon">
            <img src="/icons/step3-icon.svg" alt="Step 3 Icon" className="step-icon" />
            <span className="step-label">Step 3</span>
          </div>
          <h3>We Remove & Redirect</h3>
          <p>We file takedowns, block fake sources, and redirect their traffic to your verified profile – turning problems into passive growth.</p>
        </div>
      </div>

      <div className="offer-box">
          <div className="blob-center"></div>

        <div className="offer-left">
            <span className="offer-timer">
              <img src="/icons/timer1.svg" alt="Timer Icon" className="timer-icon" />
              Limited slots for agency onboarding this month</span>
          <h3 className="highlight">Protect Your Creators, <br/>Boost Agency Profits</h3>
          <p>Join top agencies already protecting their talent with Lock Leaks. Automate leak detection, 
            streamline takedowns, and turn lost traffic into profit - all from a single dashboard.</p>
          <div className="buttons">
            <button>Talk to Us</button>
            {/* <button>Talk to Us</button> */}
          </div>
        </div>
       <div className="offer-benefits">
          <h4>Key Benefits</h4>
          <ul>
            <li>
              <img src="/icons/algorithm.svg" alt="Boost Icon" className="benefit-icon" />
              <div>
                <strong>Recover Lost Revenue Instantly</strong><br />
                Stop content theft before it damages your clients' brand or income stream.
              </div>
            </li>
            <li>
              <img src="/icons/time.svg" alt="Time Icon" className="benefit-icon" />
              <div>
                <strong>Automate Protection at Scale</strong><br />
                No more manual takedowns. Monitor and protect hundreds of models effortlessly.
              </div>
            </li>
            <li>
              <img src="/icons/chart.svg" alt="Chart Icon" className="benefit-icon" />
              <div>
                <strong>Built for High-Performing Agencies</strong><br />
                Every tool is optimized to secure your roster and streamline operations.
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
