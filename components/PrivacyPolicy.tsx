import Head from 'next/head';
import '../styles/termsConditions.css';

export default function PrivacyPolicy() {
  const lastUpdated = 'May 15, 2025';

  return (
    <div className="terms-wrapper">
      <div className="terms-breadcrumbs">
        <h1>Privacy Policy</h1>
      </div>

      <p className="terms-updated">Last update: {lastUpdated}</p>

      <div className="terms-content">
        <h2>Privacy Policy for LockLeaks</h2>
        <p>
          Thank you for using LockLeaks. At LockLeaks, we respect your privacy and are committed to safeguarding your
          personal data. This Privacy Policy outlines how we collect, use, store, and disclose your information when you
          access and use our website, www.lockleaks.com (the "Site"), and the services we provide (the "Services").
        </p>

        <h3>1. Information We Collect</h3>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and payment information.</li>
          <li><strong>Account-Related Information:</strong> Information provided during account setup or use of specific Services.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, operating system, device info, pages visited.</li>
          <li><strong>Cookies & Tracking Technologies:</strong> Use of cookies, web beacons, etc. for improved experience.</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To provide, maintain, and improve our Services.</li>
          <li>To communicate with you regarding your account and related updates.</li>
          <li>To process payments securely.</li>
          <li>To comply with legal and regulatory obligations.</li>
          <li>To personalize your experience and send optional marketing content.</li>
        </ul>

        <h3>3. Disclosure of Information</h3>
        <ul>
          <li><strong>Service Providers:</strong> Shared with trusted third parties (e.g., payment processors).</li>
          <li><strong>Legal Requirements:</strong> Disclosed when required by law or to protect LockLeaks and others.</li>
        </ul>

        <h3>4. Your Choices</h3>
        <ul>
          <li>You may opt out of providing certain info, with possible feature limitations.</li>
          <li>You can opt-out of marketing emails via unsubscribe links or direct contact.</li>
          <li>You may request access, correction, or deletion of your data.</li>
        </ul>

        <h3>5. Security of Your Information</h3>
        <p>
          We use technical, physical, and administrative measures to protect your data. However, no system is entirely
          secure.
        </p>

        <h3>6. International Data Transfers</h3>
        <p>
          Your data may be transferred to and stored outside your country of residence, including EEA and other regions.
          All transfers comply with applicable data protection laws.
        </p>

        <h3>7. Changes to this Privacy Policy</h3>
        <p>
          We may update this Privacy Policy periodically. Updates will be posted on our site, and significant changes
          will be notified. Continued use indicates acceptance.
        </p>

        <h3>8. Contact Us</h3>
        <p>
          For questions or to exercise your privacy rights, contact us at:
          <br />
          <strong>Email:</strong> <a href="mailto:privacy@lockleaks.com">privacy@lockleaks.com</a>
        </p>

        <h2>Important Additional Sections to Consider</h2>

        <h3>1. Cookies & Tracking Technologies</h3>
        <p>
          We use various types of cookies to enhance your experience, including:
        </p>
        <ul>
          <li><strong>Essential Cookies:</strong> Necessary for website functionality and secure access.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the website.</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and marketing campaigns.</li>
        </ul>
        <p>
          You can manage or disable cookies via your browser settings. Disabling cookies may limit functionality.
        </p>

        <h3>2. Data Retention</h3>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes for which it was collected,
          including legal, accounting, or reporting obligations. You may request deletion of your data, which we will
          process unless retention is legally required.
        </p>

        <h3>3. User Rights</h3>
        <ul>
          <li><strong>Right to Access:</strong> Request access to the personal data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> Request corrections to inaccurate or incomplete data.</li>
          <li><strong>Right to Erasure (Right to be Forgotten):</strong> Request deletion of your personal data under certain circumstances.</li>
          <li><strong>Right to Restriction/Object:</strong> Restrict or object to data processing in certain situations.</li>
        </ul>

        <h3>4. Data Protection Officer (DPO)</h3>
        <p>
          If applicable, LockLeaks will designate a Data Protection Officer to oversee compliance with data protection laws.
          For privacy-related matters, you may contact our DPO directly by emailing <a href="mailto:privacy@lockleaks.com">privacy@lockleaks.com</a>.
        </p>
      </div>

      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
}
