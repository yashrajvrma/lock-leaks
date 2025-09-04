'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CompareSection.css';

export default function CompareSection() {
  return (
    <section className="py-5 compare-section">
      <div className="compare-container text-center mx-auto">
        {/* Headings */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h2 className="other-title">
              Other Companies
            </h2>
            <p className="text-muted">
              They Watch.
              <br />
              <small>Leakers Hide. They Miss.</small>
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="lock-leaks"><img src="/images/lockcompany.svg" /></h2>
            <p className="text-muted-2">
              We Act.
              <br />
              <small>We Track. We Delete.</small>
            </p>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="row g-0">
          <div className="col-md-6 left-box">
            <ul className="list-unstyled m-0">
              {[
                'They charge premium fees for copy-paste emails and outdated tactics.',
                'You wait days for a reply — and weeks for a maybe.',
                'No updates. No evidence. Just “trust us” and silence.',
                'No urgency, no care — you’re ticket #347 in a bloated CRM.'
              ].map((text, i) => (
                <li key={i} className="bullet-item">
                  <div className="bullet-content d-flex align-items-start">
                    <img src="/icons/flash.svg" alt="Cross Icon" className="icon me-2" />
                    <p>{text}</p>
                  </div>
                  <div className="divider left-divider" />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 right-box">
            <ul className="list-unstyled m-0">
              {[
                'Every takedown tracked. Every action logged. Nothing hidden.',
                'Smart detection meets real experts — we don’t miss.',
                'No waiting, no chasing. You’re in control. Always.',
                'You’re not a number. You’re the mission.'
              ].map((text, i) => (
                <li key={i} className="bullet-item">
                  <div className="bullet-content d-flex align-items-start">
                    <img src="/icons/cross.svg" alt="Flash Icon" className="icon me-2" />
                    <p>{text}</p>
                  </div>
                  <div className="divider right-divider" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5">
          <button className="btn px-4 py-2 start-btn">
            Start Free
          </button>
        </div>
      </div>
    </section>
  );
}
