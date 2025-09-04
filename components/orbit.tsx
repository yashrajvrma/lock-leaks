'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import orbit1tele from '../public/images/tele.svg';
import orbit1X from '../public/images/xx.svg';
import orbit2only from '../public/images/only.svg';
import orbit2e from '../public/images/e.svg';
import orbit3eye from '../public/images/dis.svg';
import orbitrobo from '../public/images/robo.svg';
import orbitgoogle from '../public/images/google.svg';
import centerkey from '../public/images/key.svg';
import starts from '../public/images/Vector.png';
// import bg from '../public/images/bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/orbits.css';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <section className="orbit-section position-relative">
        {/* <Image src={bg} alt="Background" className="orbit-bg-image" /> */}

        {/* Top Heading & Description */}
        <div className="orbit-top-banner text-center">
          <button className="piracy-btn">End Digital Piracy</button>
          <h2 className="piracy-heading">
            Action, Not Words. Protect What’s Yours.
          </h2>
          <p className="piracy-subtext">
            We take care of every website, even if it’s not compliant.
          </p>
        </div>

        {/* Stars - Left */}
        {/* <Image src={starts} className="star star-left-1" alt="star" />
        <Image src={starts} className="star star-left-2" alt="star" />
        <Image src={starts} className="star star-left-3" alt="star" /> */}

        {/* Stars - Right */}
        {/* <Image src={starts} className="star star-right-1" alt="star" />
        <Image src={starts} className="star star-right-2" alt="star" />
        <Image src={starts} className="star star-right-3" alt="star" /> */}

        {/* Orbit 1 */}
        <div className="orbit orbit-1">
          <div className="orbit-ring orbit-ring-1"></div>
          <Image src={orbit2only} className="planet orbit-1-p1" alt="icon1" />
          <Image src={orbit2e} className="planet orbit-1-p2" alt="icon2" />
        </div>

        {/* Orbit 2 */}
        <div className="orbit orbit-2">
          <div className="orbit-ring orbit-ring-2"></div>
          <Image src={orbit1tele} className="planet orbit-2-p1" alt="icon3" />
          <Image src={orbit1X} className="planet orbit-2-p2" alt="icon4" />
        </div>

        {/* Orbit 3 */}
        <div className="orbit orbit-3">
          <div className="orbit-ring orbit-ring-3"></div>
          <Image src={orbitrobo} className="planet orbit-3-p1" alt="icon5" />
          <Image src={orbit3eye} className="planet orbit-3-p2" alt="icon6" />
          <Image src={orbitgoogle} className="planet orbit-3-p3" alt="icon7" />
        </div>

        {/* Center Content */}
        <div className="orbit-center-content text-center">
          <Image src={centerkey} alt="Center Icon" className="center-icon" />
          <div className="center-buttons-orbit mt-3">
            <Link
              href="/dashboard"
              className="btn-start-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free
            </Link>
            <Link href="/agencies" className="btn-login-1">
              For Agencies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
