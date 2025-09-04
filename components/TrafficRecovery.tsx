'use client';
import React from 'react';
import '../styles/TrafficRecoverySection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TrafficRecoverySection() {
  const sites = [
    { name: 'leakzone.com', status: 'Traffic Recovered : +50 Visits', reason: 'New Subscribers : +3', y: '85%' },
    { name: 'VerifiedProfile.com', y: '80%' },
    { name: 'freeleaks.com', y: '55%', status: '+20 Subscribers Gained', reason: '$300 in Recovered Income' },
    { name: 'PremiumProfile.com', y: '50%' },
    { name: 'imposterpage.com', status: '+5 New Subscribers Gained', reason: '$120 in Lost Revenue Recovered', y: '30%' },
    { name: 'YourRealBrand.com', y: '25%' },
    { name: 'stolencontent.net', status: '+10 New Followers', reason: '+10 New Followers', y: '45%' },
    { name: 'YourOnlyFans.com', y: '40%' },
    { name: 'copycatpage.com', status: 'Traffic Redirected: +35 Views', reason: '+8 New Fans', y: '65%' },
    { name: 'AuthenticBrand.com', y: '60%' }
  ];

  return (
    <section className="traffic-recovery-section">
      <div className="text-center mb-5">
        <h2 className="traffic-title">Traffic Recovery</h2>
        <p className="traffic-subtitle">Recover Lost Traffic – Boost Your Earnings</p>
        <p className="traffic-desc">Turn leaked views into paying subscribers.</p>
      </div>

      <div className="grid-background position-relative mx-auto">
        <div className="circle-3k circle-1"></div>
        <div className="circle-3k circle-2"></div>
        <div className="circle-3k circle-3"></div>

        <div className="scrolling-sites">
          {[...sites, ...sites].map((site, idx) => (
            <div
              key={idx}
              className={`site-box ${site.status ? 'highlighted' : ''} ${site.name === 'reddit.com' ? 'blurred-box' : ''}`}
              style={{ top: site.y }}
            >
              <strong className="site-title">{site.name}</strong>
              {site.status && (
                <>
                  <div className="status-label">
                    {/* <span>Status</span> */}
                    <span className="text-pink">{site.status}</span>
                  </div>
                  <div className="status-reason">
                    {/* <span>Condition</span> */}
                    <span>{site.reason}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-5">
        <button className="btn custom-traffic-button px-4 py-2">Get Started Now</button>
      </div>
    </section>
  );
}
