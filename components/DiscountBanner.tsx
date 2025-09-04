import React from 'react';
import '../styles/DiscountBanner.css';

const DiscountBanner: React.FC = () => {
  return (
    <div className="discount-banner-wrapper">
      <div className="discount-banner-container">
        <div className="discount-banner-left">
          <h4 className="discount-heading">
            Claim Your
            <span className="discount-badge">
              <img src="/icons/Animated GIF white BG.gif" alt="Gift" />
              20% OFF
            </span>
          </h4>

          <p className="discount-subheading">
            <strong>Get 20% OFF:</strong> Follow us on Twitter(X)
          </p>

          <div className="discount-twitter">
            <img src="/icons/teiX1.svg" alt="X" className="twitter-icon" />
            <a
              href="https://twitter.com/lock_leaks"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-link"
            >
              @lock_leaks
            </a>
          </div>

          <p className="discount-center-note">
            and leave a review — get 20% discount on your next service.
          </p>
        </div>

        <div className="discount-banner-right">
          <small className="discount-proof-text">
            <em>Send proof via live chat to activate your discount.</em>
          </small>
          <button className="chat-button">
            Live Chat
            <img
              src="/icons/Frame 122 1.svg"
              className="chat-pointer"
              alt="Pointer Icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
