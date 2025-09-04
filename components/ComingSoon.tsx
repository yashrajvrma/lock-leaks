// components/ComingSoon.js
import '../styles/comingsoon.css';

export default function ComingSoon() {
  return (
    <div className="cs-landing">
      {/* Sprinkle elements */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="cs-sprinkle"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${4 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

       {/* Heading */}
      <div className="cs-heading">
        <span className="cs-heading-coming">Coming</span>
        <span className="cs-heading-soon">Soon</span>
        <span className="cs-dots">...</span>
      </div>

      {/* Subtext */}
      <p className="cs-subtext">
        We're making something <span style={{ color: '#e38bd0' }}>special for you.</span> Check back soon for updates!
      </p>
    </div>
  );
}
