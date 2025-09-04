import React from 'react';
import '../styles/SimpleComparison.css';

const SimpleComparison = () => {
  return (
    <section className="comparison-section">
      <h5 className="comparison-subtitle">Simple Comparison</h5>
      <h2 className="comparison-title">
        Expensive “solutions” leave you exposed.
      </h2>
      <p className="comparison-desc">
        Protect your content and reclaim every lost click — guaranteed.
      </p>

      <div className="comparison-cards d-flex flex-wrap justify-content-center">
        {/* Companies Card */}
        <div className="comparison-card card-left mb-4">
          <div className="card-header">
            <img src="/icons/company-icon.svg" alt="Left Icon" className="icon-left" />
            <h3>Companies</h3>
            <img src="/icons/alert-icon1.svg" alt="Right Icon" className="icon-right" />
          </div>
          <p>
            Overpriced and inefficient — slow responses and no clear updates. You're just another number to them.
          </p>
          <ul>
            <li><strong>Transparency:</strong> We’ll tell you later</li>
            <li><strong>Process:</strong> Good luck waiting…</li>
            <li><strong>Trust:</strong> You’re just a number</li>
          </ul>
        </div>

        {/* DIY Card */}
        <div className="comparison-card card-mid mb-4">
          <div className="card-header">
            <img src="/icons/diy-icon.svg" alt="Left Icon" className="icon-left" />
            <h3>Doing it yourself</h3>
            <img src="/icons/alert-icon1.svg" alt="Right Icon" className="icon-right" />
          </div>
          <p>
            Manual, time-consuming, and prone to errors. You spend hours chasing leaks instead of creating.
          </p>
          <ul>
            <li><strong>Transparency:</strong> Unclear steps</li>
            <li><strong>Process:</strong> Click & pray</li>
            <li><strong>Trust:</strong> On your own</li>
          </ul>
        </div>

        {/* Lock Leaks Card */}
        <div className="comparison-card card-right mb-4">
          <div className="card-header">
            <img src="/icons/lightning-icon.svg" alt="Left Icon" className="icon-left" />
            <h3>Lock Leaks</h3>
            <img src="/icons/rightlightning-icon.svg" alt="Right Icon" className="icon-right" />
          </div>
          <p>
            Fast, automated, AI-powered protection designed for creators. Full control, real-time updates, instant action.
          </p>
          <ul>
            <li><strong>Transparency:</strong> Real-time</li>
            <li><strong>Process:</strong> Automated</li>
            <li><strong>Trust:</strong> Proven</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SimpleComparison;
