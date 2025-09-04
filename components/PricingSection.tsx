'use client';

import React, { useState } from 'react';
import '../styles/PricingSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

type Feature = {
  text: string;
  icon: string;
};

type Plan = {
  title: string;
  description: string;
  extraNote?: string;
  price: string;
  badge?: string;
  features: Feature[];
  button: string;
};

type PricingSectionProps = {
  hideStartFree?: boolean; // 👈 yeh prop add ki
};

const monthlyPlans: Plan[] = [
  {
    title: 'Free Scan',
    description: 'Discover how your content is exposed online.',
    price: 'FREE',
    features: [
      { text: 'Scan Leak Sites', icon: '/icons/Scan Leak Sites.svg' },
      { text: 'AI-Powered Detection', icon: '/icons/ai power.svg' },
      { text: 'Search Engine Scans', icon: '/icons/ses.svg' },
      { text: 'Full detailed report', icon: '/icons/report.svg' },
      { text: 'Premium support', icon: '/icons/prim report.svg' },
    ],
    button: 'Start Free Scan',
  },
  {
    title: 'Starter',
    description: 'Essential protection for new and small creators.',
    price: '$100 /month',
    features: [
      { text: 'Weekly scans & removals', icon: '/icons/weekly.svg' },
      { text: 'Leak-Site Removals', icon: '/icons/removal.svg' },
      { text: 'Search Engine Removals', icon: '/icons/search.svg' },
      { text: 'Social Media Protection', icon: '/icons/social.svg' },
      { text: '24/7 Support Access', icon: '/icons/support.svg' },
    ],
    button: 'Activate Starter',
  },
  {
    title: 'Pro',
    description: 'Ultimate protection for established creators.',
    extraNote: 'Includes everything from Starter Plan',
    price: '$200 /month',
    features: [
      { text: 'Daily scans & removals', icon: '/icons/weekly.svg' },
      { text: 'AI Facial Recognition', icon: '/icons/removal.svg' },
      { text: 'AI-Powered Leak Detection', icon: '/icons/search.svg' },
      { text: 'Priority Location Removals', icon: '/icons/social.svg' },
      { text: 'Dedicated Agent Support', icon: '/icons/support.svg' },
    ],
    button: 'Activate Pro',
  },
  {
    title: 'Star',
    description: 'Exclusive protection for elite creators.',
    extraNote: 'Includes everything from Starter Plan',
    price: '$300 /month',
    features: [
      { text: 'Hourly scans & removals', icon: '/icons/weekly.svg' },
      { text: 'Content Leak Prevention', icon: '/icons/removal.svg' },
      { text: 'Takedown Strategies', icon: '/icons/search.svg' },
      { text: 'Dedicated Security', icon: '/icons/social.svg' },
      { text: 'Legal Teams', icon: '/icons/support.svg' },
    ],
    button: 'Activate Star',
  },
];

const yearlyPlans: Plan[] = [
  {
    title: 'Free Scan',
    description: 'Discover how your content is exposed online.',
    price: 'FREE',
    features: [
      { text: 'Scan Leak Sites', icon: '/icons/Scan Leak Sites.svg' },
      { text: 'AI-Powered Detection', icon: '/icons/ai power.svg' },
      { text: 'Search Engine Scans', icon: '/icons/ses.svg' },
      { text: 'Full detailed report', icon: '/icons/report.svg' },
      { text: 'Premium support', icon: '/icons/prim report.svg' },
    ],
    button: 'Start Free Scan',
  },
  {
    title: 'Starter',
    description: 'Essential protection for new and small creators.',
    price: '$1000 /yearly',
    badge: '2 Months Free',
    features: [
      { text: 'Weekly scans & removals', icon: '/icons/weekly.svg' },
      { text: 'Leak-Site Removals', icon: '/icons/removal.svg' },
      { text: 'Search Engine Removals', icon: '/icons/search.svg' },
      { text: 'Social Media Protection', icon: '/icons/social.svg' },
      { text: '24/7 Support Access', icon: '/icons/support.svg' },
    ],
    button: 'Subscribe Starter',
  },
  {
    title: 'Pro',
    description: 'Ultimate protection for established creators.',
    price: '$2000 /yearly',
    badge: '2 Months Free',
    features: [
      { text: 'Daily scans & removals', icon: '/icons/weekly.svg' },
      { text: 'AI Facial Recognition', icon: '/icons/removal.svg' },
      { text: 'AI-Powered Leak Detection', icon: '/icons/search.svg' },
      { text: 'Priority Location Removals', icon: '/icons/social.svg' },
      { text: 'Dedicated Agent Support', icon: '/icons/support.svg' },
    ],
    button: 'Subscribe Pro',
  },
  {
    title: 'Star',
    description: 'Exclusive protection for elite creators.',
    price: '$3000 /yearly',
    badge: '2 Months Free',
    features: [
      { text: 'Hourly scans & removals', icon: '/icons/weekly.svg' },
      { text: 'Content Leak Prevention', icon: '/icons/removal.svg' },
      { text: 'Takedown Strategies', icon: '/icons/search.svg' },
      { text: 'Dedicated Security', icon: '/icons/social.svg' },
      { text: 'Legal Teams', icon: '/icons/support.svg' },
    ],
    button: 'Subscribe Star',
  },
];

export default function PricingSection({ hideStartFree = false }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false);
  const plansToShow = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <section className="pricing-section">
      <div className="container text-center">
        <h2 className="section-title">Pricing</h2>

        {/* Subtitle */}
        <p className="section-subtitle">
          {!hideStartFree && <>Start free.<br /></>}
          Upgrade for full protection whenever you're ready.
        </p>


        {/* Toggle Button */}
        <div className="custom-toggle-switch mb-5 d-flex justify-content-center align-items-center gap-3">
          <span className={!isYearly ? 'active-toggle' : ''}>Billed Monthly</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className="slider round"></span>
          </label>
          <span className={isYearly ? 'active-toggle' : ''}>Billed Yearly</span>
        </div>

        {/* Plans Grid */}
        <div className="row justify-content-center">
          {plansToShow.map((plan, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex">
              <div className="card plan-card text-start w-100 d-flex flex-column">
                <div className="card-body d-flex flex-column justify-content-between text-white">
                  <div className="card-content-top">
                    <h5 className="card-title">{plan.title}</h5>
                    <p className="card-description">{plan.description}</p>
                    {plan.extraNote && (
                      <p className="extra-note fst-italic mb-2">{plan.extraNote}</p>
                    )}
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="card-price">{plan.price}</h6>
                    {plan.badge && (
                      <span className="plan-badge">{plan.badge}</span>
                    )}
                  </div>

                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <img src={feature.icon} alt="icon" className="check-icon" />{' '}
                        {feature.text}
                      </li>
                    ))}
                  </ul>

                  {/* Button with /start link */}
                  <a href="/start" className="custom-btn mt-3 w-100 text-center d-inline-block">
                    {plan.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
