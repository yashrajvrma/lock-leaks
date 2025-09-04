// pages/contact.js
import Link from 'next/link';

export default function Contact() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Page</h1>
      <p>This is the Contact Page.</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <br />
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
