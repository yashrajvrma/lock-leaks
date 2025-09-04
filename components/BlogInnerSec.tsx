// components/BlogInnerSec.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/BlogInner.css';
import '../styles/DiscountBanner.css';

interface BlogInnerSecProps {
  blogTitle: string;
}

const BlogInnerSec: React.FC<BlogInnerSecProps> = ({ blogTitle }) => {
  return (
    <>
      {/* Existing breadcrumb section */}
      <div className="container breadcrumb-section blog-inner">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/"><i className="fa-solid fa-house"></i></a>
            </li>
            <li className="breadcrumb-item">
              <a href="/blogs">Blogs</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {blogTitle}
            </li>
          </ol>
        </nav>
        <div className="post-header">
          <span className="post-badge">ONLYFANS</span>
          <h1 className="post-title">{blogTitle}</h1>
          <span className="post-date">14 July, 2025</span>
        </div>
      </div>

      {/* New section */}
      <section className="blog-inner-extra container my-5">
        <div className="row">
         {/* Left Side */}
<div className="col-md-8 blog-inner-extra-left">
  <h2 className="blog-inner-extra-heading stylish-heading">What to expect from this course </h2>

  <p className="blog-inner-extra-desc justified">
    The OnlyFans platform has evolved significantly by 2024, offering creators new and innovative ways to monetize their content. This method focuses on building authentic connections with your audience while leveraging the platform’s latest tools and features.
  </p>
  <hr className="white-divider" />

  <p className="blog-inner-extra-desc justified">
    To succeed in 2024, creators must prioritize content consistency and quality. Key points include:
    <ul className="custom-bullets">
      <li>Regular uploads aligned with subscriber interests.</li>
      <li>Understanding your niche deeply.</li>
      <li>Tailoring your offerings to your audience.</li>
    </ul>
  </p>
  <hr className="white-divider" />

  <p className="blog-inner-extra-desc justified">
    One of the key strategies involves using advanced promotional tactics outside OnlyFans, such as social media marketing, collaborations, and targeted advertising. These help grow your subscriber base and bring in new fans eager for exclusive content.
  </p>
  <hr className="white-divider" />

  <p className="blog-inner-extra-desc justified">
    Protecting your content is another vital aspect. Important measures include:
    <ul className="custom-bullets">
      <li>Watermarking your content.</li>
      <li>Understanding digital rights and legal protections.</li>
      <li>Using digital rights management tools.</li>
    </ul>
  </p>
  <hr className="white-divider" />

  <p className="blog-inner-extra-desc justified">
    Engaging with your community through live streams, polls, and personalized messages creates a loyal fanbase. The 2024 OnlyFans method encourages authentic interaction to foster trust and encourage higher earnings.
  </p>
  <hr className="white-divider" />

  <p className="blog-inner-extra-desc justified">
    Finally, creators should stay updated with platform changes and industry trends. Adaptability and ongoing learning are the secrets to thriving on OnlyFans in 2024.
  </p>
</div>


          {/* Right Side */}
          <div className="col-md-4 blog-inner-extra-right">
                    {/* Card 1 */}
          <div className="extra-card mb-4">
            <h5 className="extra-card-title">Check if your content is exposed</h5>

            <button className="extra-card-btn">
              <i className="fa-solid fa-magnifying-glass"></i> Get Start Free
            </button>

            <div className="extra-card-body">
              <div className="extra-card-profile">
                <img
                  src="/icons/alice.svg"
                  alt="Alice"
                  className="extra-card-person-img"
                />
                <div className="extra-card-info">
                  <strong className="extra-card-name">Alice</strong>
                  <span className="extra-card-role">Manager at Lock Leaks</span>
                </div>
              </div>

              <p className="extra-card-msg">
                Hey! Have you ever thought your private content might be leaked?  
                Don’t worry — we’ll help you check it for free.
              </p>
            </div>

            {/* Brand logo */}
            <img
              src="/images/lockleaks.svg"
              alt="Lock Leaks Logo"
              className="extra-card-brand-logo"
            />
          </div>



            {/* Card 2 */}
            <div className="extra-card">
              <h4 className="discount-heading">
            Claim Your </h4>
            <span className="discount-badge">
              <img src="/icons/Animated GIF white BG.gif" alt="Gift" />
              20% OFF
            </span>
         
              <p className="extra-card-follow">
                Follow us on Twitter(X) @lock_leaks and leave a review — get 20% discount on your next service.
              </p>
               <p className="extra-card-italic">
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
      </section>
    </>
  );
};

export default BlogInnerSec;
