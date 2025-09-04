'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/lockleaks.svg';
import icon from '../public/images/megaphone-icon.svg'; // Replace with your bell icon path

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="top-bar-custom">
        <div className="top-bar-content">
          <Image
            src={icon}
            alt="bell icon"
            width={20}
            height={20}
            className="top-bar-icon bell-animate"
          />
          <div className="top-bar-text-wrap">
            <strong>Game-Changer:</strong>{' '}
            <span className="top-bar-underline">
              Boost Your Traffic – Recover Lost Subscribers from Pirated Sites!
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header-custom">
       this is header ad
      </header>
    </>
  );
}
