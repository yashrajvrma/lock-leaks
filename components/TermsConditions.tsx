import Head from 'next/head';
import '../styles/termsConditions.css';

export default function Terms() {
  const lastUpdated = 'May 15, 2025';

return (
  <div className="terms-wrapper">
    <div className="terms-breadcrumbs">
      <h1>Terms & Conditions</h1>
    </div>

    <p className="terms-updated">Last update: {lastUpdated}</p>

    <div className="terms-content">
      <h2>Terms and Conditions for LockLeaks</h2>
      <p>
        Operated by AD BOOST S.R.L. ("LockLeaks", "we", "us", "our"). By accessing or using our website,
        platform, and subscription service (the "Service"), you agree to be legally bound by these Terms,
        as well as our Privacy Policy. If you do not agree to these terms, please do not use our Service.
      </p>

      <h3>1. Subscription Service</h3>
      <p>
        LockLeaks provides automated DMCA takedown services, online content protection, and verification services to safeguard your online presence. The Service is available only to individuals aged 18 or older who are legally able to enter into a binding contract.
      </p>
      <p>By subscribing to our Service, you agree to:</p>
      <ul>
        <li>Pay all applicable fees and taxes.</li>
        <li>Comply with these Terms and any other policies related to the Service.</li>
      </ul>

      <h3>2. Payment and Fees</h3>
      <ul>
        <li>Subscriptions are billed in advance and automatically renew unless canceled by the user.</li>
        <li>All subscription fees are non-refundable, except where explicitly stated in these Terms.</li>
        <li>To use the Service, you must be at least 18 years old.</li>
        <li>Payment for the Service is due at the time of purchase. Failure to pay may result in suspension or termination of your access to the Service.</li>
      </ul>

      <h3>3. Term and Termination</h3>
      <ul>
        <li>Your subscription will automatically renew on a monthly basis unless you cancel it through your account panel.</li>
        <li>We reserve the right to suspend or terminate your access to the Service, with or without notice, at our discretion.</li>
        <li>In the event of termination without cause, we will issue a pro-rata refund of any prepaid amounts.</li>
        <li>If you violate these Terms, we may suspend or terminate your account immediately.</li>
      </ul>

      <h3>4. Intellectual Property</h3>
      <ul>
        <li>All content on the LockLeaks website, including but not limited to text, graphics, images, logos, software, and other materials (collectively, "Content"), is the property of LockLeaks or its licensors and is protected by copyright and other intellectual property laws.</li>
        <li>You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, or create derivative works from any Content obtained from the LockLeaks website without prior written consent from LockLeaks.</li>
        <li>Use of the Service does not grant you any intellectual property rights to the Content on the platform.</li>
      </ul>

      <h3>5. DMCA Removals</h3>
      <ul>
        <li>LockLeaks facilitates the DMCA takedown process but cannot guarantee the absolute removal of all infringing content.</li>
        <li>It is your responsibility to monitor your own digital presence and inform LockLeaks of any detected infringement.</li>
        <li>LockLeaks is not liable for indirect, incidental, or consequential damages arising from the DMCA takedown process or failure to remove infringing content.</li>
      </ul>

      <h3>6. Identity Verification and Anti-Fraud Measures</h3>
      <ul>
        <li>To prevent fraud and ensure authenticity, LockLeaks collects and verifies user identifiers such as profile links and usernames during subscription.</li>
        <li>At the time of subscription, we may request official identification from you.</li>
        <li>All identification data will be securely stored on encrypted, offline SSD drives (air-gapped storage).</li>
        <li>LockLeaks will not expose, share, or sell your identification data beyond what is necessary for internal enforcement purposes.</li>
        <li>We comply with GDPR, CCPA, and other applicable data protection regulations to ensure your personal data is handled securely.</li>
      </ul>

      <h3>7. Confidentiality</h3>
      <p>
        All LockLeaks processes, methods, communications, and operations related to takedowns are confidential.
      </p>
      <p>
        You agree not to share, leak, or disclose any part of our systems or agreements. Unauthorized disclosure will result in immediate termination of the Service and may lead to civil and/or criminal legal action.
      </p>
      <p>
        Violation of confidentiality may also result in permanent revocation of services.
      </p>

      <h3>8. Disclaimer of Warranties</h3>
      <p>
        The Service is provided "as is" and without warranties of any kind, either express or implied. LockLeaks does not warrant that the Service will be uninterrupted, error-free, or free of harmful components such as viruses.
      </p>
      <p>
        We do not guarantee that defects will be corrected or that the Service will be fully secure from unauthorized access or other issues.
      </p>
      <p>
        LockLeaks disclaims all warranties, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
      </p>
      <p>
        You agree to indemnify, defend, and hold harmless LockLeaks, its employees, and agents from any claims arising from your use of the Service, including but not limited to violations of these Terms or applicable law.
      </p>

      <h3>9. Indemnification</h3>
      <p>
        You agree to indemnify and hold harmless LockLeaks, its officers, directors, employees, agents, licensors, and suppliers from any losses, damages, or legal expenses (including attorney fees) resulting from any violation of these Terms by you or anyone using your account.
      </p>
      <p>
        This includes any claims arising from negligence or wrongful conduct related to the use of the Service.
      </p>

      <h3>10. Consumer Rights and Complaints</h3>
      <p>
        As a consumer, you have the right to file a complaint with the relevant consumer protection authorities if you believe your rights have been violated. If you are a resident of the European Union, you also have the right to submit a complaint through the European Commission’s online dispute resolution platform. Below are the relevant details:
      </p>
      <p><strong>National Authority for Consumer Protection (ANPC) – Romania:</strong><br />
      Website: <a href="https://www.anpc.ro/" target="_blank">https://www.anpc.ro/</a></p>

      <p><strong>European Commission – Consumer Protection:</strong><br />
      Website: <a href="https://ec.europa.eu/info/policies/consumer-protection_en" target="_blank">https://ec.europa.eu/info/policies/consumer-protection_en</a></p>

      <p><strong>European Consumer Centre (ECC) – Europe:</strong><br />
      Website: <a href="https://www.eccnet.eu/" target="_blank">https://www.eccnet.eu/</a></p>

      <h3>11. Data Protection and Privacy</h3>
      <ul>
        <li><strong>Data Controller:</strong> The User acts as the Data Controller for the personal data they upload and provide to LockLeaks.</li>
        <li><strong>Data Processor:</strong> LockLeaks is the Data Processor, processing personal data solely in accordance with the User’s instructions.</li>
        <li><strong>Data Security:</strong> LockLeaks implements robust security measures to protect user data, including encryption, firewalls, and secure data storage.</li>
        <li><strong>User Rights:</strong> Users have the right to access, correct, or delete their personal data, as well as the right to restrict or object to certain types of data processing.</li>
        <li><strong>Data Retention:</strong> Personal data is retained only for as long as necessary to provide the Service, and will be deleted upon request, subject to legal obligations.</li>
      </ul>

      <h3>12. Termination of Data Processing Agreement</h3>
      <p>
        The Data Processing Agreement (DPA) will remain in effect as long as LockLeaks processes the User’s personal data.
      </p>
      <p>
        Upon termination, LockLeaks will return or securely delete all personal data as requested by the User, except where retention is required by law.
      </p>

      <h3>13. Changes to Terms and Conditions</h3>
      <p>
        LockLeaks reserves the right to modify these Terms at any time, especially to comply with changes in the law or updates to the Service.
      </p>
      <p>
        Users will be notified of any significant changes at least 30 days before they take effect. If you do not agree to the changes, you may terminate your subscription by notifying LockLeaks before the changes become effective.
      </p>
      <p>
        Continuing to use the Service after 30 days of notification constitutes acceptance of the updated Terms.
      </p>

      <h3>14. Governing Law</h3>
      <p>
        These Terms are governed by the laws of Romania and the European Union, and any disputes will be subject to the exclusive jurisdiction of Romanian courts.
      </p>
    </div>

    {/* Extra Circles */}
    <div className="circle-left"></div>
    <div className="circle-right"></div>
  </div>
);

}
