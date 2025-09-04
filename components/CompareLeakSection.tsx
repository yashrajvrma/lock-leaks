'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CompareLeakSection.css';

export default function CompareLeakSection() {
  return (
    <section className="compare-leak-section py-5">
      <div className="container">
        <div className="text-center mb-3">
          <div className="row gy-4 align-items-center justify-content-center">
            {/* LEFT SIDE */}
            <div className="col-md-5">
              <div className="circle-card">
                <div className="text-pinkss">Manual Leak Removal</div>
                <div className="text-center text-light mb-4">Manual Mess, Missed Content </div>

                <div className="text-center text-pink fw-bold mb-2">YOU</div>
                <div className="tab-sub text-center ">You Chase Leaks.</div>
                <div className="text-center">
                  <img src="/images/manual.png" alt="Wasting time" className="pill-image" />
                </div>
              </div>
            </div>

            {/* MIDDLE VS LINE IMAGE */}
            <div className="col-md-1 d-none d-md-flex justify-content-center">
              <img src="/images/vs-divider.svg" alt="VS Divider" className="vs-line-img" />
            </div>

            {/* RIGHT SIDE */}
            <div className="col-md-5">
              <div className="tab-card dark">
                <div className="text-center mb-2">
                  <img src="/images/lockcompany.svg" alt="Lock Leaks Logo" className="lock-leaks-logo" />
                </div>
                <div className="tab-header text-center text-white mb-4">AI Finds & Removes Instantly</div>
                <div className="text-center text-pink fw-bold mb-2">LOCK LEAKS</div>
                <div className="tab-sub text-center">We Delete Them.</div>
                <div className="tab-body">
                  <div className="pill highlight d-flex align-items-center justify-content-start">
                    <img src="/images/5vector.svg" alt="icon" className="pill-icon me-2" />
                    <span className="gradient-text">Instant AI takedowns, fast real-time alerts.</span>
                  </div>
                  <div className="pill highlight d-flex align-items-center justify-content-start">
                    <img src="/images/5vector.svg" alt="icon" className="pill-icon me-2" />
                    <span className="gradient-text">Track every move, always in full control.</span>
                  </div>
                  <div className="pill highlight d-flex align-items-center justify-content-start">
                    <img src="/images/5vector.svg" alt="icon" className="pill-icon me-2" />
                    <span className="gradient-text">We fight leaks hard — so you don’t have to.</span>
                  </div>
                  <div className="pill highlight d-flex align-items-center justify-content-start">
                    <img src="/images/5vector.svg" alt="icon" className="pill-icon me-2" />
                    <span className="gradient-text">Protect your content and secure your income.</span>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div> 
        <div className="compare-button-wrapper">
          <button className="compare-button">Try Lock Leaks Now</button>
        </div>

      </div> 
    </section>
  );
}
