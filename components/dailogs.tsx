"use client";
import React from "react";
import "../styles/Dailogs.css";
import "../styles/DiscountBanner.css";

const Dailogs = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="dailogs-login-slider-section d-flex flex-md-row flex-column">
        {/* Left: Login Form */}
        <div className="col-md-6 dailogs-login-box">
          <button className="dailogs-btn-back">Back</button>
          <h3 className="mb-4">Login</h3>
          <form className="w-100" style={{ maxWidth: 350 }}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="**********"
              />
            </div>
            <button
              type="submit"
              className="btn dailogs-btn-login mx-auto d-block"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right: Carousel */}
        <div className="col-md-6 dailogs-info-box p-0">
          <div
            id="dailogsCarousel"
            className="carousel slide h-100"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#dailogsCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#dailogsCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#dailogsCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner h-100 d-flex align-items-center">
              <div className="carousel-item active text-center px-4">
                <h4>Think You're Protected? Think Again.</h4>
                <p>Competitors remove surface leaks. We eliminate them deep.</p>
                <img
                  src="/images/card.png"
                  alt="Slide 1"
                  className="img-fluid"
                  style={{ maxWidth: "85%" }}
                />
              </div>

              <div className="carousel-item text-center px-4">
                <h4>Your Content Deserves the Best Protection.</h4>
                <p>
                  We’re not just a leak removal service. Lock Leaks is a
                  cybersecurity powerhouse, providing deep protection against
                  leaks with continuous monitoring, real-time action, and
                  proactive defense. We don’t stop at the surface — we secure
                  your content everywhere.
                </p>
                <img
                  src="/images/1card.png"
                  alt="Slide 2"
                  className="img-fluid"
                  style={{ maxWidth: "85%", marginBottom: "30px" }}
                />

                <button className="chat-button">
                  Buy Subscription
                  <img
                    src="/icons/Frame 122 1.svg"
                    className="chat-pointer"
                    alt="Pointer Icon"
                  />
                </button>
              </div>

              <div className="carousel-item text-center px-4">
                <h4>Claim Your</h4>
                <p>
                  Follow us on social media and get 20% OFF your first service.
                  <br />
                  Stay updated on takedowns, tools & insights.
                </p>

                <div
                  className="d-flex flex-column align-items-start justify-content-center mx-auto"
                  style={{ maxWidth: "220px" }}
                >
                  {/* First social icon + handle */}
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="icons/twittericons.svg"
                      alt="X Icon"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <a
                      href="https://x.com/lock_leaks"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "underline", color: "#000" }}
                    >
                      @lock_leaks
                    </a>
                  </div>

                  {/* Second social icon + handle */}
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="icons/instagramlogin.svg"
                      alt="Instagram Icon"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <a
                      href="https://instagram.com/lockleaks"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "underline", color: "#000" }}
                    >
                      @lockleaks
                    </a>
                  </div>

                  {/* Third social icon + handle */}
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="icons/tiktoklogin.svg"
                      alt="TikTok Icon"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <a
                      href="https://tiktok.com/@lockleaks"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "underline", color: "#000" }}
                    >
                      @lockleaks
                    </a>
                  </div>
                </div>
                <p className="mt-4">
                  Send proof via live chat to activate your discount.
                </p>
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
        </div>
      </div>
    </div>
  );
};

export default Dailogs;
