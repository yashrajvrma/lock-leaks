'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/footer.css';
import logo from '../public/images/lockleaks.svg';
import xIcon from '../public/icons/twitter.svg';
import instagramIcon from '../public/icons/instagram.svg';
import tiktokIcon from '../public/icons/tiktok.svg';
import redditIcon from '../public/icons/reddit.svg';
import youtube from '../public/icons/youtube.svg';


export default function Footer() {
  // Icon and link pairs
  const socialLinks = [
    {
      icon: xIcon,
      alt: 'Twitter',
      url: 'https://x.com/lock_leaks',
    },
    {
      icon: tiktokIcon,
      alt: 'TikTok',
      url: 'https://www.tiktok.com/@lockleaks',
    },
    {
      icon: instagramIcon,
      alt: 'Instagram',
      url: 'https://www.instagram.com/lockleaks/',
    },
    {
      icon: redditIcon,
      alt: 'Threads', // Assuming it's for Threads
      url: 'https://www.threads.com/@lockleaks',
    },
    {
      icon: youtube,
      alt: 'Youtube', // Assuming it's for Threads
      url: 'https://www.youtube.com/@lockleaks',
    },
  ];

  return (
    <footer className="custom-footer text-white pt-5 pb-3">
      <div className="footer container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Logo and Social Icons */}
          <div className="text-center text-md-start mb-3 mb-md-0">
            <Link href="/">
              <Image src={logo} alt="Logo" width={185} height={50} />
            </Link>
            <div className="d-flex align-items-center mt-3">
              <div className="d-flex gap-2">
                {socialLinks.map(({ icon, alt, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white d-flex align-items-center justify-content-center"
                    style={{ width: '32px', height: '32px', borderRadius: '4px' }}
                  >
                    <Image src={icon} alt={alt} width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div className="text-center mb-3 mb-md-0">
            <ul className="list-unstyled d-flex gap-4 mb-0">
              <li><Link href="/services" className="text-white text-decoration-none nav-link-custom">Services</Link></li>
              <li><Link href="/pricing" className="text-white text-decoration-none nav-link-custom">Pricing</Link></li>
              <li><Link href="/agencies" className="text-white text-decoration-none nav-link-custom">Agencies</Link></li>
              <li><Link href="/blogs" className="text-white text-decoration-none nav-link-custom">Blog</Link></li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="text-center text-md-end">
            <Link href="/start" className="btn btn-start-free px-4">
              Start Free
            </Link>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
          <p className="mb-2 mb-md-0">Copyright: © 2025 Lock Leaks. All Right Reserved.</p>
          <div className="d-flex gap-3">
            <Link href="/terms" className="text-white text-decoration-none">Terms Of Service</Link>
            <Link href="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
