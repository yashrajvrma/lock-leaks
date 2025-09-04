import React, { useState } from 'react';
import '../styles/Daschboard.css';
import PricingSection from './PricingSection'; // Make sure this path is correct
import Link from 'next/link';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="lockdash-body">
      <div className="container-fluid">
        <div className="row">

          {/* Sidebar */}
          <div className="col-md-4 col-lg-2 lockdash-sidebar">
          <div className="lockdash-logo">
            <Link href="/">
              <img src="/images/lockleaks.svg" alt="Lock Leaks Logo" />
            </Link>
          </div>

            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === 'Dashboard' ? 'lockdash-active' : ''}`}
              onClick={() => handleTabClick('Dashboard')}
            >
              <i className="fab fa-google"></i> Dashboard
            </a>
            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === 'My Profile' ? 'lockdash-active' : ''}`}
              onClick={() => handleTabClick('My Profile')}
            >
              <i className="fa fa-user"></i> My Profile
            </a>
            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === 'Support' ? 'lockdash-active' : ''}`}
              onClick={() => handleTabClick('Support')}
            >
              <i className="fa fa-comment-dots"></i> Support
            </a>
            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === 'Subscriptions' ? 'lockdash-active' : ''}`}
              onClick={() => handleTabClick('Subscriptions')}
            >
              <i className="fa fa-star"></i> Subscriptions
            </a>
            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === 'Settings' ? 'lockdash-active' : ''}`}
              onClick={() => handleTabClick('Settings')}
            >
              <i className="fa fa-cog"></i> Settings
            </a>

            <h6 className="mt-4 lockdash-text-gradient">Link</h6>
            <button className="lockdash-upgrade-btn">
              <i className="fa fa-star"></i> Upgrade
            </button>
          </div>

          {/* Main Content */}
          <div className="col-md-8 col-lg-10 p-4">

            {/* Top Bar */}
            <div className="lockdash-top-bar">
              <div className="lockdash-user-info">
                <img src="icons/X_AE_A-13b.svg" alt="Avatar" />
                <span className="lockdash-text-gradient">X_AE_A-13b</span>
              </div>
              <i className="fa fa-sign-out-alt lockdash-logout-icon"></i>
            </div>

            {/* Conditional Rendering for Tabs */}
            {activeTab === 'My Profile' && (
              <>
                {/* Stats Row */}
                <div className="row mb-4">
                  <div className="col-md-4 mb-2">
                    <div className="lockdash-stat-box d-flex justify-content-between align-items-center">
                      <span className="lockdash-text-gradient">Usernames:</span>
                      <span className="lockdash-text-gradient">982</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="lockdash-stat-box d-flex justify-content-between align-items-center">
                      <span className="lockdash-text-gradient">Stage Names:</span>
                      <span className="lockdash-text-gradient">982</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="lockdash-stat-box d-flex justify-content-between align-items-center">
                      <span className="lockdash-text-gradient">Whitelist:</span>
                      <span className="lockdash-text-gradient">982</span>
                    </div>
                  </div>
                </div>

                {/* Data List Row */}
                <div className="row mb-4 justify-content-center text-center">
                  <div className="col-md-4 mb-2 lockdash-list">
                    <div>
                      <strong>Usernames:</strong>
                      <ul className="mb-0 list-unstyled">
                        <li>
                          <a
                            href="https://onlyfans.com/@username"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://onlyfans.com/@username
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2 lockdash-list">
                    <div>
                      <strong>Stage Names:</strong>
                      <ul className="mb-0 list-unstyled">
                        <li>Alexandra Nice</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2 lockdash-list">
                    <div>
                      <strong>Whitelist:</strong>
                      <ul className="mb-0 list-unstyled">
                        <li>
                          <a
                            href="https://www.strip.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            www.strip.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Dashboard' && <h4>Dashboard Content Here</h4>}

            {activeTab === 'Support' && <h4>Support Content Here</h4>}

            {activeTab === 'Subscriptions' && (
              <>
                <h4>Subscriptions</h4>
                <PricingSection hideStartFree={true} />
              </>
            )}

            {activeTab === 'Settings' && <h4>Settings Content Here</h4>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
